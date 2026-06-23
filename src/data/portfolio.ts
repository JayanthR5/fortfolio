export const portfolioData = {
  personal: {
    name: "Jayanth R",
    role: "AI & ML Engineer",
    location: "Mysuru, Karnataka",
    cgpa: "8.22",
    email: "jayanthram2528@gmail.com",
    github: "https://github.com/JayanthR5",
    linkedin:
      "https://www.linkedin.com/in/jayanth-r-%E0%B2%97%E0%B3%8C%E0%B2%A1-914765298?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    image: "/profile_img.jpeg",
    resume: "/resume.pdf",
  },
  about: {
    description:
      "Pre-final year Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning. Experienced with Java, SQL, Python, and web application development, with a focus on practical problem solving, teamwork, and delivery.",
  },
  skills: {
    languages: ["Python", "Java", "SQL"],
    webTechnologies: ["HTML5", "CSS3", "JavaScript", "React.js", "Express.js", "Node.js"],
    database: ["MongoDB", "MySQL"],
    ai: ["TensorFlow", "Scikit-Learn", "OpenCV"],
    tools: ["Git", "GitHub", "VS Code", "Postman"],
  },
  experience: [
    {
      company: "IBM SkillsBuild",
      role: "AI Strategy & Business Intelligence Intern",
      duration: "1 month",
      description:
        "Worked on AI-driven business intelligence solutions and web application development.",
    },
  ],
  projects: [
    {
      title: "AgriQCert",
      tech: ["React", "Node.js", "MongoDB"],
      description: "Digital agricultural quality certification platform.",
      github: "#",
      demo: "#",
    },
    {
      title: "Face Expression Detection",
      tech: ["Python", "OpenCV", "TensorFlow"],
      description: "Real-time facial emotion detection system.",
      github: "#",
      demo: "#",
    },
  ],
  certifications: [
    "IBM SkillsBuild AI & BI Internship",
    "NPTEL Smart Cities",
    "Alibaba Cloud Computing",
  ],
  leadership: [
    "Vice President, IEEE Computational Intelligence Society",
    "Organized a data-thon event",
    "1st Runner-up, PathCraft Gen AI Webpage Architect Challenge",
  ],
  achievements: [
    "NPTEL Smart Cities | Elite + Gold | 91%",
    "1st Runner -up of pathcraft-the gen ai webpage architect challenge ",
  ],
} as const;
