// terminal-cv/config.js
// Put ALL your personal data here. No logic.

window.CV_CONFIG = {
    profile: {
      name: "Giorgos Tsilivis",
      title: "Devops Engineer",
      location: "Athens, Greece",
      email: "tsilivisgeo@gmail.com",
      website: "https://example.com",
      github: "https://github.com/yourhandle",
      linkedin: "https://www.linkedin.com/in/yourhandle",
      resumePdf: "resume.pdf" // set to null if you don't have one yet
    },
    skills: {
      languages: ["JavaScript", "TypeScript", "Python", "Go"],
      frameworks: ["React", "Node.js", "Express", "FastAPI"],
      tools: ["Docker", "Kubernetes", "GitHub Actions", "PostgreSQL"]
    },
    experience: [
      {
        company: "Qualco",
        role: "Devops Engineer",
        period: "Oct 2023–Present",
        bullets: [
          "Led migration to microservices, reducing deploy time by 70%",
          "Built internal platform used by 10+ teams",
          "Mentored 4 engineers"
        ]
      },
      {
        company: "RocketX",
        role: "Cloud/Devops Engineer",
        period: "Oct 2022–Oct 2023",
        bullets: [
          "Shipped React + Node SaaS used by 30k users",
          "Introduced automated testing raising coverage to 85%"
        ]
      },
      {
        company: "Intracom Telecom",
        role: "Software Engineer",
        period: "Mar 2022–Oct 2022",
        bullets: [
          "Shipped React + Node SaaS used by 30k users",
          "Introduced automated testing raising coverage to 85%"
        ]
      },
      {
        company: "Deepsea Technologies",
        role: "Integration Engineer",
        period: "May 2020–Mar 2022",
        bullets: [
          "Shipped React + Node SaaS used by 30k users",
          "Introduced automated testing raising coverage to 85%"
        ]
      }
    ],
    projects: [
      { name: "TermCV", link: "https://example.com/termcv", desc: "This terminal CV template." },
      { name: "ImageTool", link: "https://example.com/imagetool", desc: "CLI to batch‑process images." }
    ]
  };
  