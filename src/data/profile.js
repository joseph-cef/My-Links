/**
 * Profile Configuration
 * =====================
 * Edit this file to update all personal information, contact links, and branding.
 * All components read from this single source of truth.
 */

const profile = {
  // Personal Information
  firstName: "BRAHIM",
  lastName: "Youcef",
  fullName: "BRAHIM Youcef",
  title: "CS Student (L3) | Web & Software Developer",
  bio: "I'm BRAHIM Youcef, a third-year Computer Science student (L3) passionate about turning ideas into practical, real-world applications.\n\nI focus on Web Development, enjoy building meaningful projects, exploring new technologies, and continuously strengthening my problem-solving and software engineering skills.",
  profileImage: "/profile.jpg",

  // Skill Tags
  skills: ["CS Student (L3)", "Web Development", "Software Engineering", "Problem Solver", "Continuous Learner"],

  // Code Snippet (CS student mode)
  codeSnippet: {
    filename: "student_mode.js",
    comment: "// CS student mode:",
    code: `// CS student mode:\nwhile (true) {\n    learn();\n    build();\n    secure();\n    innovate();\n}`,
  },

  // Club Branding
  club: {
    name: "CYBER NEXUS",
    subtitle: "CLUB",
    tagline: "MORE THAN A CLUB — A COMMUNITY",
    logoPath: "/cyber-nexus-logo.png",
  },

  // Contact Links
  // Set any URL to null or empty string to hide that contact card
  contacts: [
    {
      id: "email",
      platform: "Email",
      subtitle: "Send me a message",
      url: "mailto:josephdev1962@gmail.com",
      accent: "#E84057",
      accentGradient: null,
    },
    {
      id: "instagram",
      platform: "Instagram",
      subtitle: "Follow my journey",
      url: "https://instagram.com/brx.dev",
      accent: "#E1306C",
      accentGradient: "linear-gradient(45deg, #F58529, #DD2A7B, #8134AF, #515BD4)",
    },
    {
      id: "telegram",
      platform: "Telegram",
      subtitle: "Let's talk",
      url: "https://t.me/youceef0715",
      accent: "#26A5E4",
      accentGradient: null,
    },
    {
      id: "whatsapp",
      platform: "WhatsApp",
      subtitle: "Chat with me directly",
      url: "https://wa.me/+213654953372",
      accent: "#25D366",
      accentGradient: null,
    },
  ],
};

export default profile;
