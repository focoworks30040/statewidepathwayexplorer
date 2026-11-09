// "Meet a recent grad" videos.
//
// Add one entry per video. Recent graduates (roughly the last 1–5 years) talking
// about their first job work best: short, vertical, 60–120 seconds.
// See docs/video-guide.md for what to ask and how to record.
//
// Fields
//   career     id from window.CAREERS (e.g. "surgtech")
//   name       first name (and last initial, if they prefer)
//   gradYear   year they finished their program
//   school     where they trained (e.g. "Lanier Technical College")
//   program    what they studied (e.g. "Surgical Technology, AAS")
//   employer   where they work now
//   county     Georgia county where they work ("Forsyth" shows them in Schools & employers)
//   hometown   optional: where they went to high school
//   quote      one sentence, in their own words
//   duration   "1:12"
//   example    optional: true labels the video "Example" on the page
//   video      one of:
//                { type: "youtube", id: "VIDEO_ID" }
//                { type: "vimeo",   id: "VIDEO_ID" }
//                { type: "file",    src: "videos/name.mp4", poster: "videos/name.jpg" }
//
// Set SHOW_SAMPLE_VIDEOS to false once real videos are added. Sample entries are
// clearly labeled on the page and never appear when it is false.

window.SHOW_SAMPLE_VIDEOS = true;

window.VIDEOS = [
  {
    example: true, // shown with an "Example" label; remove once a real grad's video replaces it
    career: "pa", name: "Priya", gradYear: 2024,
    school: "Augusta University", program: "Physician Assistant Studies",
    quote: "Why did you choose PA school instead of med school?",
    duration: "0:10",
    video: { type: "file", src: "videos/pa-why-pa-school.mp4", poster: "videos/pa-why-pa-school.jpg" }
  },
  // Real entries go here, for example:
  // {
  //   career: "radtech", name: "Jordan M.", gradYear: 2023,
  //   school: "Lanier Technical College", program: "Radiologic Technology / CT",
  //   employer: "Northside Hospital-Forsyth", county: "Forsyth", hometown: "South Forsyth High School",
  //   quote: "I run the CT scanner at a hospital ten minutes from my high school.",
  //   duration: "1:30", video: { type: "youtube", id: "VIDEO_ID" }
  // },
];

// Placeholder slots that show families what the finished section will look like.
window.SAMPLE_VIDEOS = [
  { sample: true, career: "surgtech", school: "A technical college", program: "Surgical Technology", quote: "What surprised you most about your first year in the OR?" },
  { sample: true, career: "mechatronics", school: "Lanier Technical College", program: "Mechatronics Technology", quote: "What does a normal shift look like on the plant floor?" },
  { sample: true, career: "pa", school: "A USG university", program: "Physician Assistant Studies", quote: "Why did you choose PA school instead of med school?" },
  { sample: true, career: "cyberanalyst", school: "Lanier Technical College", program: "Cybersecurity (A.A.S.)", quote: "How did you land your first security job?" },
  { sample: true, career: "biologist", school: "University of North Georgia", program: "Biology (B.S.)", quote: "What do you actually do in a lab all day?" },
  { sample: true, career: "marketing", school: "University of North Georgia", program: "Marketing (B.B.A.)", quote: "How did you land your first marketing job in Forsyth County?" }
];
