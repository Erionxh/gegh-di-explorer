# Pema e parë e gjuhëve / First language tree (19.11.2026)

Data: IE-CoR (Heggarty et al. 2023, CC BY 4.0, github.com/lexibank/iecor), NorthEuraLex (CC BY 4.0,
github.com/lexibank/northeuralex) and the GEG Mirdita corpus.

- `run.py`: builds the word list (57 languages × 170 meanings), finds cognates automatically with
  LingPy SCA (threshold 0.45, ignoring expert judgments) and computes distances = 1 − share of
  meanings with a shared cognate. Also computes the same distances from IE-CoR's expert cognates.
- `trees.py`: neighbour-joining trees (Biopython), rooted on Basque (auto) and Hittite (expert),
  and the "trunk visibility" score: mean expert cognate share of each modern language with ten
  ancient languages, excluding its own direct ancestor.
- Outputs: `distances.json`, `trunk.json`, `tree_auto.nwk`, `tree_expert.nwk`.

Run: `pip install lingpy biopython matplotlib`, clone both datasets into `data/`, then
`python run.py && python trees.py`.
