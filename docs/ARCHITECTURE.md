# GEG 1.0 — Architecture overview (for reviewers)

Live site: https://geg1.org · Code: https://github.com/Erionxh/gegh-di-explorer (public)
Status: beta, built by one founder (non-linguist, "kujdestar") with an AI coding assistant, November 2026.

This document describes what is *under the hood*: principles, data, flows and known weak points.
It is written so that a reviewer (human or AI) can critique the architecture, not the wording.

---

## 1. Purpose and principles

GEG is an open archive of spoken Albanian. Module 1 is the Gheg dialect of Mirdita; later modules
cover the rest of northern Gheg, Kosova / Dardania, Central Gheg, then Tosk and the diaspora
(roadmap on the home page). Contributions from any region are accepted now and stored with their place.

Core rules (see `docs/constitution.md` and `lib/pillars.js`, "Kushtetuta", draft v0.1):

- **Describe, do not prescribe.** Oral forms are first-class evidence and are captured before normalisation.
  Standard Albanian and Tosk are comparison controls, not the baseline.
- **GEGH-INV-22 — Dialectal primacy without historical prejudgment.** Starting from Mirdita does not mean
  Mirdita is older or "purer". Any claim of antiquity must be argued from evidence.
- **GOLD-INV-03 — No source, no validation.** A claim cannot be marked validated without an inspected source.
- **Everything is visible.** Hypotheses keep their status (open / leaning / closed) and their objections.
- **Votes do not decide truth.** Community votes ("convincing / not convincing") are signals; status changes
  only through reviewers ("Pleqnia") with stated reasons.

Conceptual frame:
- **8 pillars** (`lib/pillars.js`): Constitution, Architecture, Taxonomy, Corpus, Evidence, Governance,
  Research, Interface.
- **6 lenses** for every word: linguistic, historical, geographic, genetic, archaeological, anthropological.
- **9 board seats** (`lib/board.js`): historical linguistics, Gheg dialectology, archaeology, population
  genetics, anthropology/ethnomusicology, statistics, IT architecture, diaspora representative, founder
  (guardian of the constitution). Seats are currently empty.

## 2. Stack and hosting

- Next.js 14 (App Router), React 18, client components with a bilingual (sq/en) text layer
  (`lib/ui.js`, `lib/ui2.js`, `useLang()`).
- Hosting: Vercel, auto-deploy from `main`. Domains: geg1.org (primary), gegnisht.org (redirect).
- Database, auth and file storage: Supabase (Postgres + Auth + Storage).
- Maps: Leaflet. No other runtime dependencies.

## 3. Two kinds of data

### 3a. Curated data — in the repository (version-controlled, reviewed by pull request)
| File | Content |
|---|---|
| `lib/words.js`, `lib/lexicon.js`, `lib/data.js` | ~108 word entries with forms, meanings, lenses, attestations |
| `corpus/hypotheses.json` | Etymological hypotheses per word, each with sources, test and status |
| `corpus/mirdita/*.json` | Batches of Mirdita attestations |
| `lib/geg500.js`, `lib/wantedWords.js` | 500 core words we are looking for (pages at `/kerkojme/[slug]`) |
| `lib/sources.js` | Bibliography: old texts (1462 Formula, Buzuku 1555…), German, Italian, Albanian, international |
| `lib/layers.js` | Loanword layers: Latin, Greek, Turkish (with in / out / open lists) |
| `lib/map.js` | Map layers: DNA studies, archaeological sites, petroglyphs |
| `lib/rrahje.js` | "Rrahje mendimesh": big open questions with positions, objections, replies, test, status |
| `lib/trivia.js` | "A e dini?": facts with source and label (proven / debated / myth / open question) |
| `public/meyer.json` | Gustav Meyer's 1891 etymological dictionary, digitised (headword, page, scan link) |

### 3b. Contributed data — in Supabase (from the public)
| Table / bucket | Written by | Notes |
|---|---|---|
| `contributions` | `/api/kujtesa` (no sign-in) | word, meaning, village, region, speaker, era, age band, gender, birthplace, consent, `status` pending/approved/rejected |
| storage `recordings` | `/api/kujtesa`, `/api/kuveni` | audio files; served only through short-lived signed URLs |
| `kv_profiles`, `kv_posts`, `kv_votes`, `kv_reports` | `/api/kuveni/*` (sign-in required) | forum: posts, replies, votes, reports; posts `live` / `held` / `removed` |

Schemas: `docs/supabase.sql`, `docs/kuveni.sql`.

## 4. Security model

- All database access goes through Next.js API routes using the Supabase service key (server-side only,
  stored in Vercel env, never in the repo). Row-level security is **enabled with no policies**, so the
  browser cannot read or write tables directly.
- Forum sign-in: Supabase Auth (email magic link; Google planned). The API verifies the user's JWT on each call.
- Moderators: e-mails listed in the `MOD_EMAILS` env variable; moderation page `/kuveni/moderimi`.
- Profanity: server-side word/stem list (`lib/server/profanity.js`). Matches are **held for review**, never
  silently deleted. Three user reports also hold a post.
- Rate limit: forum, 30 posts per user per day. **Kujtesa (anonymous recordings) has no rate limit yet.**

## 5. Main flows

1. **Recording ("Zëri yt", `/zani-yt`)** — no sign-in. Consent (covers the person recorded) → who speaks
   (parent / grandparent / other elder / me) → place, age, dialect guess → 25 words, one per screen →
   audio saved to `contributions` with `status = pending`.
2. **Word pages** (`/fjala/[id]`) — forms, six lenses, Meyer entry, sources, hypotheses.
3. **Kuveni (forum)** — discussions with one level of replies, sorted by "most convincing";
   per-word version threads (form + place + audio); per-question argument threads (Rrahje).
4. **Review** — intended: reviewers listen to pending recordings, approve/reject, and update hypothesis
   status with reasons. **Not built yet as a workflow** (see §6).

## 6. Known weak points and open decisions (please critique)

1. **Curated data lives in code.** Easy to version, hard for non-programmer reviewers to edit.
   Should it move to the database with an editorial UI and an audit trail?
2. **No review workflow for contributions yet.** Recordings arrive as `pending`; there is no reviewer UI.
3. **Consensus rule not implemented.** Planned: a form is accepted for a place when ≥3 independent speakers
   from that area agree. How to define "independent" and "same area"?
4. **Transcription standard.** No agreed way to write Gheg forms (standard orthography? IPA? both?).
5. **Place model.** Free-text village names; no gazetteer with coordinates and dialect branch yet.
6. **Word batching.** The 25-word list is fixed; planned: choose words with the fewest recordings for the
   speaker's region.
7. **Personal data.** Age band, gender, birthplace and voice are stored. GDPR / Albanian law, retention,
   withdrawal of consent, and recordings of elders by relatives need a policy.
8. **Backups and storage.** Supabase free tier (~1 GB audio). No automated backup yet.
9. **Licensing.** Code is public; licence for recordings and curated data is undecided (CC BY? CC BY-NC?).
10. **Versioning of claims.** Hypothesis status changes are not yet logged with date, reviewer and reason.
11. **Abuse.** Anonymous recording endpoint could be flooded; no CAPTCHA, no rate limit.
12. **Funding transparency.** Planned public ledger (`/arka`, mock-up) once an association and board exist.

## 7. What we want from a reviewer

Not comments on wording. Comments on structure:
- Is the separation between curated data (repo) and contributed data (database) right?
- Is the data model adequate for dialectology (speaker, place, generation, form, audio, consent)?
- What is missing to make the archive citable and trustworthy for scholars?
- Which of the weak points in §6 is most urgent, and how would you solve it?
- Does the governance model (constitution, board, votes ≠ truth) hold up? Where could it be gamed?
- Any security or privacy risk we have not listed?
