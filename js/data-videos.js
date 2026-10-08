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
//   county     Georgia county where they work (used for the county view)
//   hometown   optional: where they went to high school
//   quote      one sentence, in their own words
//   duration   "1:12"
//   video      one of:
//                { type: "youtube", id: "VIDEO_ID" }
//                { type: "vimeo",   id: "VIDEO_ID" }
//                { type: "file",    src: "videos/name.mp4", poster: "videos/name.jpg" }
//
// Set SHOW_SAMPLE_VIDEOS to false once real videos are added. Sample entries are
// clearly labeled on the page and never appear when it is false.

window.SHOW_SAMPLE_VIDEOS = true;

window.VIDEOS = [
  // Real entries go here, for example:
  // {
  //   career: "surgtech", name: "Jordan M.", gradYear: 2023,
  //   school: "Lanier Technical College", program: "Surgical Technology, AAS",
  //   employer: "Northeast Georgia Medical Center", county: "Hall", hometown: "Gainesville",
  //   quote: "I'm in the OR every day, and I started working at 20.",
  //   duration: "1:30", video: { type: "youtube", id: "VIDEO_ID" }
  // },
];

// Placeholder slots that show families what the finished section will look like.
window.SAMPLE_VIDEOS = [
  { sample: true, career: "surgtech", school: "A TCSG college", program: "Surgical Technology", employer: "A local hospital", quote: "What surprised you most about your first year in the OR?" },
  { sample: true, career: "maintenancetech", school: "A TCSG college", program: "Industrial Systems Technology", employer: "A Georgia manufacturer", quote: "What does a normal shift look like on the plant floor?" },
  { sample: true, career: "pa", school: "A USG university", program: "Physician Assistant Studies", employer: "A Georgia clinic", quote: "Why did you choose PA school instead of med school?" },
  { sample: true, career: "cyberanalyst", school: "A USG university", program: "Cybersecurity", employer: "A Georgia employer", quote: "How did you land your first security job?" },
  { sample: true, career: "lineworker", school: "A TCSG college", program: "Electrical Lineworker", employer: "A Georgia utility", quote: "What's it like restoring power after a storm?" },
  { sample: true, career: "teacher", school: "A USG university", program: "Education", employer: "A Georgia school district", quote: "What made you want to teach in your hometown?" }
];
