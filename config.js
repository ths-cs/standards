/* Personal settings for the Core Standards dashboard.
   Edit this file only. Updating standards-dashboard.html will not overwrite it. */
window.DASHBOARD_CONFIG = {

  // Published Google Sheet CSV link (File > Share > Publish to web > CSV).
  // Leave blank to load core-standards.csv from the same folder as the page.
  csvUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSrZNdVL7fkYpz01LTWllFm2J2qOMtlDhMgTULE-ilEDaTWbofSSOoAT4tQlmjjv9N6mqY8sgTDOMAM/pub?gid=1518493198&single=true&output=csv",

  schoolYear: "2026\u20132027",
  school: "Toppenish High School",
  instructor: "Shawn Hayden",

  // School T-mark logo (full SVG markup, wrapped in backticks).
  logoSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 590 567.57"><defs><style>.cls-1{fill:#822336;}.cls-2{fill:#fff;}.cls-3{fill:#d1d3d4;}</style></defs><polygon class="cls-2" points="590 292.25 590 0 0 0 0 292.25 162.97 292.25 162.97 331.22 111.89 331.22 111.89 567.57 478.11 567.57 478.11 331.22 427.03 331.22 427.03 292.25 590 292.25"></polygon><polygon points="565 267.25 565 25 25 25 25 267.25 187.97 267.25 187.97 356.22 136.89 356.22 136.89 542.57 453.11 542.57 453.11 356.22 402.03 356.22 402.03 267.25 565 267.25"></polygon><polygon class="cls-3" points="535.81 239.29 535.81 52.95 54.19 52.95 54.19 239.29 190.41 239.29 190.41 183.39 217.16 183.39 217.16 384.18 166.08 384.18 166.08 514.61 423.92 514.61 423.92 384.18 372.84 384.18 372.84 183.39 399.6 183.39 399.6 239.29 535.81 239.29"></polygon><polygon class="cls-1" points="343.65 155.44 428.78 155.44 428.78 211.34 506.62 211.34 506.62 80.9 83.38 80.9 83.38 211.34 161.22 211.34 161.22 155.44 246.35 155.44 246.35 412.13 195.27 412.13 195.27 486.66 394.73 486.66 394.73 412.13 343.65 412.13 343.65 155.44"></polygon></svg>`,

  // Brand color. Change this one value to retheme the page.
  brandColor: "#822336",

  // Tabs appear in this order (period order). "code" must match the Course column in the CSV.
  courses: [
    { code: "GA2", name: "Graphic Art 2",       period: "1st", schedule: "Yearlong, 44 min daily",
      note: "Safety standard plus ACPro domains woven into production. Equipment: Canon imagePRESS C710, Canon Arizona 360 GT, Roland TrueVIS SG2-540, Summa D70, Duplo DC-618." },
    { code: "GA1", name: "Graphic Art 1",       period: "2nd", schedule: "Yearlong, 44 min daily",
      note: "The five ACPro domains shared by the Photoshop and Illustrator exams." },
    { code: "HSB", name: "High School & Beyond", period: "3rd", schedule: "Advisory, 22 min daily, class of 2027",
      note: "Built on three questions: Who am I? What can I become? How do I become that? Reporting may use a simpler scale, but the six standards stay the same." },
    { code: "FrS", name: "Freshman Success",    period: "4th", schedule: "Semester, 75 min daily",
      note: "FrS1\u2013FrS5 follow the School-Connect modules. FrS6 covers Ed Club keyboarding." },
    { code: "DA1", name: "Digital Art 1",       period: "5th", schedule: "Semester, 75 min daily",
      note: "Aligned to the National Core Arts Standards for Visual Arts." }
  ],

  // The universal scale shown in "How scoring works".
  scale: [
    { level: 4, label: "Exceeds",     text: "Level 3 plus independent transfer to a new or more complex situation, or a professional-quality result." },
    { level: 3, label: "Meets",       text: "The standard as written, done independently and accurately." },
    { level: 2, label: "Approaching", text: "Partly there, with errors, gaps, or occasional help needed." },
    { level: 1, label: "Below",       text: "Minimal evidence, or constant guidance needed." }
  ],

  scoringNote: "Academic scores reflect standard mastery only. Attendance, behavior, compliance, extra credit, and late penalties are not scored here. Habits of Success are reported separately."
};
