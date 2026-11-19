"""GEG · first clean-slate language tree.
Data: IE-CoR (Heggarty et al. 2023) + NorthEuraLex controls + Mirdita Gheg (GEG corpus).
Clean slate: cognates are found automatically by sound patterns (LingPy SCA),
ignoring IE-CoR's expert cognate judgments. The expert tree is built separately for comparison.
"""
import csv, json, logging, re, sys, collections
logging.disable(logging.CRITICAL)
from lingpy import Wordlist, LexStat, ipa2tokens
from lingpy.settings import rc
rc(schema='ipa')

D = '/home/claude/tree/data'
OUT = '/home/claude/tree/out'

SAMPLE = [
 # ancient / historical
 'Hittite','Luvian','Tocharian A','Tocharian B','Vedic: Early','Avestan: Younger','Old Persian',
 'Greek: Mycenaean','Greek: Ancient','Latin','Oscan','Umbrian','Gaulish','Old Irish','Gothic',
 'Old English','Old Icelandic','Old Church Slavonic','Old Prussian','Armenian: Classical',
 # Albanian
 'Albanian: Gheg','Albanian: Standard','Albanian: Arbëresh',
 # living
 'Greek: Modern Std','Italian','Spanish','French','Romanian','Portuguese','Sardinian: Logudoro',
 'English','German','Dutch','Swedish','Icelandic','Lithuanian','Latvian','Russian','Polish',
 'Serbo-Croat','Bulgarian','Czech','Gaelic: Irish','Welsh: North','Breton: Treger',
 'Armenian: Eastern','Persian: Tehran','Hindi','Pashto','Ossetic: Iron','Kurdish N.: Bahdini',
]
CONTROLS = {'fin': 'Finnish (Uralic)', 'hun': 'Hungarian (Uralic)', 'tur': 'Turkish (Turkic)',
            'eus': 'Basque (isolate)', 'kat': 'Georgian (Kartvelian)'}
MIRDITA = 'Gheg: Mirdita (GEG)'

def tok(s):
    s = (s or '').strip()
    if not s:
        return None
    s = re.split(r'[,/;~]', s)[0].strip()
    s = re.sub(r'[\(\)\[\]\-=\.ˈˌ ]', '', s)
    if not s:
        return None
    try:
        t = ipa2tokens(s, merge_vowels=False, semi_diacritics='')
        return t or None
    except Exception:
        return None

# ---- IE-CoR
langs = {l['ID']: l for l in csv.DictReader(open(f'{D}/iecor/cldf/languages.csv'))}
params = {p['ID']: p for p in csv.DictReader(open(f'{D}/iecor/cldf/parameters.csv'))}
cog = {c['Form_ID']: c['Cognateset_ID'] for c in csv.DictReader(open(f'{D}/iecor/cldf/cognates.csv'))}
keep = {lid for lid, l in langs.items() if l['Name'] in SAMPLE}
assert len(keep) == len(SAMPLE), set(SAMPLE) - {langs[i]['Name'] for i in keep}
concept_by_cid = {p['Concepticon_ID']: p['Name'] for p in params.values() if p['Concepticon_ID']}

rows = []  # (doculect, concept, form, tokens, expert_cogid or None)
for f in csv.DictReader(open(f'{D}/iecor/cldf/forms.csv')):
    if f['Language_ID'] not in keep:
        continue
    segs = f['Phonemic_Segments'] or f['Segments']
    t = segs.split() if segs else tok(f['Phonemic'] or f['Form'])
    if not t:
        continue
    rows.append((langs[f['Language_ID']]['Name'], params[f['Parameter_ID']]['Name'], f['Form'], t, cog.get(f['ID'])))

# ---- NorthEuraLex controls (matched by Concepticon ID)
nparams = {p['ID']: p for p in csv.DictReader(open(f'{D}/northeuralex/cldf/parameters.csv'))}
seen = set()
for f in csv.DictReader(open(f'{D}/northeuralex/cldf/forms.csv')):
    if f['Language_ID'] not in CONTROLS:
        continue
    cid = nparams[f['Parameter_ID']].get('Concepticon_ID')
    if cid not in concept_by_cid:
        continue
    key = (f['Language_ID'], cid)
    if key in seen:
        continue
    t = f['Segments'].split() if f['Segments'] else tok(f['Form'])
    if not t:
        continue
    seen.add(key)
    rows.append((CONTROLS[f['Language_ID']], concept_by_cid[cid], f['Form'], t, None))

# ---- Mirdita Gheg from the GEG corpus (orthography -> IPA, simple rules)
ORTH = [('xh','dʒ'),('zh','ʒ'),('sh','ʃ'),('gj','ɟ'),('nj','ɲ'),('ll','ɫ'),('rr','r'),('dh','ð'),('th','θ'),
        ('ç','tʃ'),('q','c'),('x','dz'),('c','ts'),('ë','ə'),('â','ɑ̃'),('ê','ɛ̃'),('î','ĩ'),('ô','ɔ̃'),('û','ũ'),('y','y'),('r','ɾ')]
def alb2ipa(w):
    w = w.lower().strip()
    out = ''
    i = 0
    while i < len(w):
        for a, b in ORTH:
            if w.startswith(a, i):
                out += b; i += len(a); break
        else:
            out += w[i]; i += 1
    return out
GLOSS_FIX = {'MAN/PERSON': 'person', 'SUN/LIGHT': 'sun', 'MAKE/DO': 'do', 'SLEEP (VERB)': 'sleep', 'I': 'I', 'YOU': 'you (singular)', 'WE': 'we'}
pname = {p['Name'].lower(): p['Name'] for p in params.values()}
pcid = {p['Concepticon_Gloss']: p['Name'] for p in params.values() if p['Concepticon_Gloss']}
mapped, unmapped = 0, []
for b in ('mirdita_chest_batch1', 'mirdita_chest_batch2'):
    for e in json.load(open(f'/home/claude/gegh-di-explorer/corpus/mirdita/{b}.json'))['entries']:
        c = GLOSS_FIX.get(e['concept'], e['concept'])
        name = pname.get(c.lower()) or pcid.get(e['concept'])
        if not name:
            unmapped.append(e['concept']); continue
        form = e['form'].split(' / ')[0].replace('me ', '').strip()
        t = tok(alb2ipa(form))
        if t and not any(r[0] == MIRDITA and r[1] == name for r in rows):
            rows.append((MIRDITA, name, form, t, None)); mapped += 1

docs = sorted({r[0] for r in rows})
print(f'languages: {len(docs)}  words: {len(rows)}  concepts: {len({r[1] for r in rows})}  Mirdita mapped: {mapped}')

# ---- automatic cognate detection (clean slate)
D_ = {0: ['doculect', 'concept', 'form', 'tokens', 'expert']}
for i, r in enumerate(rows, 1):
    D_[i] = [r[0], r[1], r[2], r[3], r[4] or '']
lex = LexStat(D_, check=False)
lex.cluster(method='sca', threshold=0.45, ref='autocog')
auto = {}
for k in lex:
    auto[k] = lex[k, 'autocog']

def distances(get_cog, langs_):
    # proportion of concepts (both attested) where the two languages share at least one cognate class
    by = collections.defaultdict(lambda: collections.defaultdict(set))
    for k in lex:
        cl = get_cog(k)
        if cl in (None, '', 0):
            continue
        by[lex[k, 'doculect']][lex[k, 'concept']].add(cl)
    M = {}
    for a in langs_:
        for b in langs_:
            if a >= b:
                continue
            common = set(by[a]) & set(by[b])
            if len(common) < 30:
                M[(a, b)] = None; continue
            shared = sum(1 for c in common if by[a][c] & by[b][c])
            M[(a, b)] = 1 - shared / len(common)
    return M, by

auto_M, auto_by = distances(lambda k: auto[k], docs)
ie_docs = [d for d in docs if d in SAMPLE]
exp_M, _ = distances(lambda k: lex[k, 'expert'] or None, ie_docs)

json.dump({'docs': docs, 'auto': {f'{a}|{b}': v for (a, b), v in auto_M.items()},
           'expert': {f'{a}|{b}': v for (a, b), v in exp_M.items()}, 'unmapped': unmapped},
          open(f'{OUT}/distances.json', 'w'), ensure_ascii=False)

def nearest(M, who, n=8):
    out = []
    for (a, b), v in M.items():
        if v is None: continue
        if who in (a, b):
            out.append((round(1 - v, 3), b if a == who else a))
    return sorted(out, reverse=True)[:n]

for who in ['Albanian: Standard', 'Albanian: Gheg', MIRDITA]:
    print('\nAUTO nearest to', who, nearest(auto_M, who))
for who in ['Albanian: Standard']:
    print('\nEXPERT nearest to', who, nearest(exp_M, who))
for ctl in CONTROLS.values():
    print('control', ctl, nearest(auto_M, ctl, 3))
