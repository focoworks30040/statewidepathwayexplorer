# Recording "Meet a recent grad" videos

These short videos show students someone only a few years older than them doing a Georgia high-demand career. Aim for grads who finished their program within the last 1–5 years.

## Format

- **Vertical (9:16), 60–120 seconds.** A phone is fine. Film in landscape only if you're uploading to YouTube as a regular video.
- Record somewhere quiet. If you can, show the workplace: the OR hallway, the plant floor, the bucket truck.
- Add captions. Many students watch with the sound off.
- **Get a signed release from every person on camera, and permission from the employer to film on site.**

## Questions to ask (pick 4–5)

1. What's your name, what do you do, and where do you work?
2. Where did you go to high school, and where did you train after?
3. How long did your program take, and how did you pay for it? (HOPE, dual enrollment, employer-paid?)
4. What does a normal day look like?
5. What surprised you most about the job?
6. What would you tell a 10th grader who's curious about this career?
7. What's next for you? (Many credentials stack, for example surgical tech → RN, or tech → engineer.)

Pull one sentence from the answers for the `quote` field.

## Adding a video to the site

1. Upload it to YouTube (unlisted works) or Vimeo, or put the `.mp4` file and a poster image (`.jpg`) in the `videos/` folder.
2. Add an entry to `js/data-videos.js`. The comments at the top of that file list every field.
3. Once you have a few real videos, set `SHOW_SAMPLE_VIDEOS = false` in the same file.

Videos show up in three places:
- the "Meet recent grads" section
- the page for that career
- the county view, for anyone looking at a county in the same region as the grad's workplace
