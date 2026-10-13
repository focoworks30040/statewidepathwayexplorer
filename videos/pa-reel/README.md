# PA interview reel (Seedance 2.0)

A 15-second vertical (9:16) street-interview clip of a fictional 23-year-old
Indian American woman explaining why she chose PA school over med school in Georgia.

- `prompt.txt` holds the scene and the spoken line (about 36 words, which fits 15 seconds).
- `generate.py` submits the prompt to Seedance 2.0, polls until it finishes, and downloads the MP4.

```bash
export HF_KEY="KEY_ID:KEY_SECRET"
python3 generate.py --resolution 720p   # draft, about $4.54
python3 generate.py                     # final 1080p, about $10.21
```

Before posting:
- Add burned-in captions in CapCut or Instagram (the model is unreliable at rendering text).
- Turn on Instagram's "AI info" label. The person is AI-generated, not a real student.
- The facts are a summary: PA programs in Georgia (Emory, Mercer, Augusta) run about
  24–28 months after a bachelor's degree. MD training is 4 years of med school plus 3+ years of residency.
