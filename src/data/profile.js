/**
 * Profile Configuration
 * =====================
 * Edit this file to update all personal information, contact links, and branding.
 * All components read from this single source of truth.
 */

const profile = {
  // Personal Information
  firstName: "Joseph",
  lastName: "Dev",
  fullName: "Joseph Dev",
  title: "Software Engineer | Web & Mobile Developer",
  bio: "Passionate about technology and innovation. I build modern web and mobile applications and love turning ideas into real digital solutions.",
  profileImage: "/profile.jpg",

  // Skill Tags
  skills: ["Web Dev", "Mobile Dev", "Problem Solver", "Lifelong Learner"],

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
      id: "facebook",
      platform: "Facebook",
      subtitle: "Connect with me",
      url: "https://www.facebook.com/share/19cHD4bssj/",
      accent: "#1877F2",
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
