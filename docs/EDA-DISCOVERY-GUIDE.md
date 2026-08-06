# EDA Discovery Call Guide

**For:** Forsyth · Ware · Houston · Jackson
**Purpose:** Learn what these four counties would actually use, *before* we build. One hour each, ideally within the next two weeks.
**Why now:** These are the only four people who can tell us whether this product is useful or merely impressive. Their answers should change the build. After Phase 0 starts, changes get expensive.

---

## The one rule

**Do not demo a mockup and ask if they like it.** They will be polite, they will say it looks great, and you will learn nothing.

Ask what they *do today* instead. Every question below is designed to surface current behavior, because current behavior predicts adoption and opinions about hypothetical products do not.

---

## 1. What they do today (the most important section)

1. When a site selector or prospect asks *"can we staff this here?"* — what do you send them right now? Can I see it?
2. Walk me through the last time you answered a workforce question for a prospect. What did you have to go dig up, and from where?
3. When an existing local employer says *"I can't find welders / nurses / techs"* — what do you actually do?
4. What do you hand to your school system partners today, if anything?
5. Is there a workforce section on your current EDA site? What's on it, and when was it last updated?

> **Listening for:** the artifact they already produce by hand. If all four describe assembling the same thing manually, that artifact is our product — and the county page should be shaped like it, not like our idea of a directory.

## 2. Target industries

6. What are your official target industries, and where are they documented? (Target industry study? Strategic plan? Regional commission work?) Can I get the document?
7. How current is that list? Would you change it if you could?
8. Do our five clusters — Advanced Manufacturing, Healthcare, Bio & Life Sciences, Professional Services & HQ, Technology & IT — map cleanly onto how you think about your economy? What's missing or wrong?

> **Listening for:** whether our five clusters are the right abstraction, and whether counties think in sub-sectors instead ("we don't say advanced manufacturing, we say automotive suppliers"). If so, sub-sectors need more prominence than clusters in the UI.

## 3. The college relationship

9. Who is your contact at [Lanier Tech / Coastal Pines / Central Georgia Tech]? How often do you talk?
10. Do you know what programs they offer that serve your targets? How did you find out?
11. Has a program ever been created *because* of a project you landed? *(Jackson: ask directly about SK Battery, Quick Start, and the Lanier Tech satellite campus — get the full story and the names.)*
12. What's frustrating about that relationship, if anything?

> **Listening for:** whether the college connection is already strong (making us a publishing layer) or weak (making us the connective tissue). It will differ by county, and that difference is worth designing for.

## 4. The K-12 partner reality

13. Who specifically do you talk to in the school system — superintendent, CTAE director, counselors?
14. What do they ask you for?
15. If you had a link showing "these local pathways lead to these local programs lead to these local jobs" — who would you send it to, and would they open it?

> **Listening for:** whether the K-12 audience is real or aspirational. This determines how much we invest in the `/k12` view — and whether deferring CTAE pathways (D6) was right.

## 5. Adoption — the honest questions

16. Realistically, who in your office would keep a page like this current? Do they have time?
17. What would make you *stop* using it after three months?
18. Have you tried a tool like this before? What happened to it?
19. Would you put your county's logo on this and send it to your board?
20. Would you rather this live at our URL, or be embedded in your own site?

> **Listening for:** the honest maintenance answer. Our whole sustainability argument rests on counties self-maintaining. If all four say "nobody has time," the completeness score and nudge emails become the most important features in the product — or we shift toward us maintaining it centrally.

## 6. Content logistics

21. Do you have photography we can use? Who owns it? Any release restrictions?
22. Can we use your local employers' logos, or does each employer need to approve?
23. Do you have employer lists by industry already? In what format?
24. Any video? *(We can trim and crop it — they don't need to.)*

> **Listening for:** whether the media pipeline has a rights problem. Better to learn now than after we've built the upload flow.

## 7. Close

25. If this existed and worked exactly as you'd want — what's the one thing it does for you?
26. Who else in Georgia should I be talking to?
27. Would you be willing to be a named launch partner?

---

## After the calls

Write up each conversation the same day. Then compare the four:

- **Where all four agreed** → that's the core product; build it first.
- **Where they diverged** → that's either a configuration option or something to cut. Resist building for the union of all four.
- **What nobody mentioned** → scrutinize hard. If no EDA brings it up unprompted, it may be a feature we want rather than one they need.

Then update `PROJECT-PLAN.md` §5 (site structure) and §2.1 before Phase 0 begins.

---

## Also worth asking, if the relationship is warm

- Would they write a **letter of support**? Collect these now while the conversation is fresh — they cost the EDA ten minutes and are difficult to gather retroactively under a grant deadline.
- Would they introduce you to their **technical college contact**? A single TCSG relationship would meaningfully shorten program curation (see `PROJECT-PLAN.md` §7).
