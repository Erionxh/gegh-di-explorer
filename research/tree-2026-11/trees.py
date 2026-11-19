import json, statistics
from Bio.Phylo.TreeConstruction import DistanceMatrix, DistanceTreeConstructor
from Bio import Phylo
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt

OUT = '/home/claude/tree/out'
d = json.load(open(f'{OUT}/distances.json'))
MIRDITA = 'Gheg: Mirdita (GEG)'

def build(key, names, outgroup=None, title='', fname=''):
    M = d[key]
    names = [n for n in names if all(M.get(f'{min(n,m)}|{max(n,m)}') is not None for m in names if m != n)]
    mat = []
    for i, a in enumerate(names):
        row = []
        for b in names[:i]:
            row.append(M[f'{min(a,b)}|{max(a,b)}'])
        row.append(0)
        mat.append(row)
    tree = DistanceTreeConstructor().nj(DistanceMatrix(names, mat))
    if outgroup and outgroup in names:
        tree.root_with_outgroup(outgroup)
    else:
        tree.root_at_midpoint()
    tree.ladderize()
    for c in tree.find_clades():
        if not c.is_terminal():
            c.name = None
    h = max(8, len(names) * 0.28)
    fig = plt.figure(figsize=(11, h))
    ax = fig.add_subplot(1, 1, 1)
    def col(c):
        n = c or ''
        if 'Albanian' in n or 'Gheg' in n: return '#b42318'
        if '(' in n: return '#8a8f99'
        return '#1b2a47'
    Phylo.draw(tree, axes=ax, do_show=False, label_colors=col, label_func=lambda c: c.name if c.is_terminal() else None)
    ax.set_title(title, fontsize=13)
    ax.set_xlabel('distance (1 − share of core-vocabulary cognates)')
    ax.set_ylabel('')
    ax.set_yticks([])
    for s in ('top', 'right', 'left'):
        ax.spines[s].set_visible(False)
    plt.tight_layout()
    plt.savefig(f'{OUT}/{fname}', dpi=130)
    plt.close()
    Phylo.write(tree, f'{OUT}/{fname[:-4]}.nwk', 'newick')
    return tree

docs = d['docs']
ie = [n for n in docs if '(' not in n]
auto_tree = build('auto', docs, outgroup='Basque (isolate)', title='GEG clean slate: automatic cognates, 57 languages (red = Albanian)', fname='tree_auto.png')
exp_tree = build('expert', [n for n in ie if n != MIRDITA], outgroup='Hittite', title='Same languages, IE-CoR expert cognates (red = Albanian)', fname='tree_expert.png')

# --- "How much of the trunk is visible": share of cognates with the ancient languages
ANCIENT = ['Hittite','Tocharian B','Vedic: Early','Avestan: Younger','Greek: Ancient','Latin','Gothic','Old Irish','Old Church Slavonic','Armenian: Classical']
MODERN = ['Albanian: Standard','Albanian: Gheg','Greek: Modern Std','Italian','Spanish','French','Romanian','English','German','Swedish','Icelandic',
          'Lithuanian','Latvian','Russian','Polish','Serbo-Croat','Gaelic: Irish','Welsh: North','Armenian: Eastern','Persian: Tehran','Hindi','Pashto']
def sim(key, a, b):
    v = d[key].get(f'{min(a,b)}|{max(a,b)}')
    return None if v is None else 1 - v
res = []
for m in MODERN:
    vals = [sim('expert', m, a) for a in ANCIENT if a != m]
    vals = [v for v in vals if v is not None]
    own = {'Greek: Modern Std': 'Greek: Ancient', 'Italian': 'Latin', 'Spanish': 'Latin', 'French': 'Latin', 'Romanian': 'Latin',
           'English': 'Gothic', 'German': 'Gothic', 'Swedish': 'Gothic', 'Icelandic': 'Gothic', 'Russian': 'Old Church Slavonic',
           'Polish': 'Old Church Slavonic', 'Serbo-Croat': 'Old Church Slavonic', 'Gaelic: Irish': 'Old Irish', 'Welsh: North': 'Old Irish',
           'Armenian: Eastern': 'Armenian: Classical', 'Persian: Tehran': 'Avestan: Younger', 'Hindi': 'Vedic: Early', 'Pashto': 'Avestan: Younger'}.get(m)
    vals2 = [sim('expert', m, a) for a in ANCIENT if a != own and sim('expert', m, a) is not None]
    res.append((m, round(statistics.mean(vals2), 3), own or '—'))
res.sort(key=lambda r: -r[1])
json.dump(res, open(f'{OUT}/trunk.json', 'w'), ensure_ascii=False, indent=1)
print('Trunk visibility (mean expert cognate share with ancient languages, excluding each language\'s own ancestor):')
for r in res:
    print(f'  {r[1]:.3f}  {r[0]}   (excluded own ancestor: {r[2]})')

# where Albanian attaches
for name, t in (('AUTO', auto_tree), ('EXPERT', exp_tree)):
    alb = [c for c in t.get_terminals() if c.name.startswith('Albanian')]
    ca = t.common_ancestor(alb)
    parent = t.get_path(ca)[-2] if len(t.get_path(ca)) > 1 else t.root
    sisters = [c.name for c in parent.get_terminals() if c not in ca.get_terminals()]
    print(f'\n{name}: Albanian clade sister group ({len(sisters)} languages): {sisters[:12]}{" …" if len(sisters) > 12 else ""}')
