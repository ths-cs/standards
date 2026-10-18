/* Personal settings for the Core Standards dashboard.
   Edit this file only. Updating standards-dashboard.html will not overwrite it. */
window.DASHBOARD_CONFIG = {

  // Published Google Sheet CSV link (File > Share > Publish to web > CSV).
  // Leave blank to load core-standards.csv from the same folder as the page.
  csvUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSrZNdVL7fkYpz01LTWllFm2J2qOMtlDhMgTULE-ilEDaTWbofSSOoAT4tQlmjjv9N6mqY8sgTDOMAM/pub?gid=1518493198&single=true&output=csv",

  // Heading shown in the masthead and the browser tab.
  title: "Core Standards & Rubrics",

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
      note: "Built on three questions: Who am I? What can I become? How do I become that? Reporting may use a simpler scale, but the standards stay the same." },
    { code: "FrS", name: "Freshman Success",    period: "4th", schedule: "Semester, 75 min daily",
      note: "FrS1\u2013FrS4 follow the School-Connect modules. FrS5 covers Ed Club keyboarding." },
    { code: "DA1", name: "Digital Art 1",       period: "5th", schedule: "Semester, 75 min daily",
      note: "Aligned to the National Core Arts Standards for Visual Arts." },
    { code: "21C", name: "CTE 21st Century Leadership Skills", short: "Leadership Skills", schedule: "All courses, gradebook slot 6",
      note: [
        "One standard, identical in every course, scored from six strands. Source: OSPI Washington CTE Leadership Skills.",
        "How the single 21C score is calculated: score each strand 4-3-2-1 using the rubrics below, based on roughly the last two weeks. Average the strands that were observed, and leave out a strand that was not visible rather than entering IE. Enter the average as the 21C score. A student self-evaluation is a reflection only. The teacher score is the one entered.",
        "Boundaries: deadlines, punctuality, rule-following, and day-to-day safety compliance are scored in 21C, not in academic standards. Skill and knowledge of safety is scored in GA2.1. Ethical use and citation of sources is a skill in GA2.2 and DA1.2, and a habit in the Information & Technology Use strand."
      ] }
  ],

  // Shown at the bottom of every course page, linking to the shared 21C tab.
  shared: {
    code: "21C",
    title: "Gradebook slot 6: 21C",
    text: "Every course also includes one 21st Century Leadership Skills standard. It uses the same six strands in all five courses.",
    button: "See the six strands"
  },

  // Scoring language, from the THS Standards-Based Grading Implementation Handbook, 2026-2027.
  // Shown in "How scoring works" and used for the level names on every rubric.
  scale: [
    { level: 4, label: "Exceeds Standard",     text: "The student demonstrates mastery beyond the standard by applying learning to new contexts, analyzing complex situations, or making interdisciplinary connections." },
    { level: 3, label: "Meets Standard",       text: "The student independently demonstrates proficiency on the standard. This is the instructional goal for every student." },
    { level: 2, label: "Approaching Standard", text: "The student demonstrates partial proficiency and requires additional support or practice." },
    { level: 1, label: "Below Standard",       text: "The student demonstrates limited understanding and requires significant support." },
    { level: "IE", label: "Insufficient Evidence", text: "Insufficient evidence exists to determine a proficiency score." }
  ],

  scoringNotes: [
    { title: "Five standards plus 21C",
      text: "Each course has five academic standards and one 21st Century standard (21C) in gradebook slot 6. Deadlines, punctuality, and day-to-day rule-following are scored in 21C, not in the academic standards." },
    { title: "What counts",
      text: "Grades reflect learning. Attendance, behavior, participation, extra credit, compliance, and late penalties do not change an academic score. Habits of Success are reported separately." },
    { title: "How the final score is decided",
      text: "Final proficiency comes from multiple data points, professional judgment, and recent, consistent evidence. Summative work is the primary source, and formative work can also count. A simple average is avoided when it does not show current proficiency." },
    { title: "Opportunities for a 4",
      text: "Each unit includes at least one opportunity to show advanced proficiency. It is tied to the standard, open to every student, and based on application, analysis, evaluation, or creation. It is never extra credit or extra work." },
    { title: "IE or 1",
      text: "IE is temporary. It means there is not yet enough evidence to score, such as a missing assessment or excessive absences, and it is replaced once evidence is collected. A 1 is for completed work that shows limited understanding." },
    { title: "Reassessment",
      text: "After corrective learning, students may reassess, ideally within two weeks of feedback. In yearlong courses, newer evidence can replace earlier evidence on the same standard. In semester courses, reassess before the unit ends when possible." }
  ],

  scoringSource: "Source: Toppenish High School Standards-Based Grading Implementation Handbook, 2026\u20132027."
};
