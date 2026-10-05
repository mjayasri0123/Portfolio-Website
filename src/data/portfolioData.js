/**
 * =====================================================================
 * PORTFOLIO DATA CONFIGURATION — JAYA SRI M
 * =====================================================================
 * This file is the single source of truth for all portfolio content.
 * 
 * TO UPDATE CONTENT:
 * 1. Profile / Contact info: Edit the 'personalInfo' object below.
 * 2. Education history: Update the 'education' array.
 * 3. Skills: Update the 'skillCategories' array.
 * 4. Additional Courses: Update the 'additionalCourses' array.
 * 5. Achievements & Certifications: Update the 'certificationsAndAchievements' array.
 * 6. Hero photo: Place your image in '/public/profile.jpg' or update 'heroImage' path.
 * =====================================================================
 */

export const portfolioData = {
  personalInfo: {
    name: "Jaya Sri M",
    roleTitle: "B.Com Graduate & MBA Aspirant",
    tagline: "Responsible and orderly commerce graduate looking forward to a meaningful first work experience.",
    location: "Chennai, Tamil Nadu",
    aboutSummary:
      "A dedicated and orderly Commerce graduate from Chellammal Women’s College, currently advancing skills with an MBA in Human Resources at G K M Engineering College. Equipped with solid computer proficiency in Microsoft Office, disciplined data entry skills, and strong interpersonal capabilities. Seeking a foundational entry-level role where meticulous organization, time management, and proactive communication can create tangible value.",
    heroImage: "/profile.jpg", // Located in /public/profile.jpg. Replace with your own image anytime.
    imageAlt: "Portrait of Jaya Sri M",
    languages: [
      { name: "Tamil", fluency: "Native / Full Professional" },
      { name: "English", fluency: "Professional Working Proficiency" }
    ],
    interests: [
      { name: "Travelling", description: "Exploring new cultures, geographical places, and broadening life perspectives." },
      { name: "Sports", description: "Fostering physical discipline, competitive spirit, active energy, and teamwork." }
    ]
  },

  // Rotating hero captions highlighting resume-supported strengths (no exaggerated claims)
  heroCaptions: [
    "Commerce Student & B.Com Graduate",
    "Pursuing MBA in Human Resources",
    "Microsoft Office: Word, Excel & PowerPoint",
    "Typing & Accurate Data Entry",
    "Strong Problem Solving & Communication",
    "Organized, Responsible & Team-Oriented"
  ],

  // Verified Education History from Resume
  education: [
    {
      id: "mba-hr",
      degree: "MBA (Human Resources)",
      institution: "G K M Engineering College",
      location: "Chennai, Tamil Nadu",
      period: "2026 – 2028",
      status: "Currently Pursuing / Enrolled",
      badgeType: "ongoing",
      highlights: [
        "Focusing on Human Resource Management, organizational dynamics, and talent management.",
        "Developing leadership, employee relations, and strategic business fundamentals."
      ]
    },
    {
      id: "bcom",
      degree: "B.Com (General) — Bachelor of Commerce",
      institution: "Chellammal Women’s College",
      location: "Chennai, Tamil Nadu",
      period: "2023 – 2026",
      status: "Expected Completion: 2026",
      badgeType: "current",
      highlights: [
        "Rigorous foundation in financial accounting, corporate governance, auditing, and commercial law.",
        "Maintained high academic discipline, punctuality, and consistent coursework submission."
      ]
    },
    {
      id: "hsc-12th",
      degree: "Higher Secondary Certificate (12th Standard HSC)",
      institution: "State Board Examination",
      location: "Tamil Nadu",
      period: "Completed",
      score: "55%",
      status: "Completed",
      badgeType: "completed",
      highlights: [
        "Commerce and business curriculum stream with focus on foundational trade & accounts.",
        "Scored 55% in the final State Board Examinations."
      ]
    },
    {
      id: "sslc-10th",
      degree: "Secondary School Leaving Certificate (10th Standard SSLC)",
      institution: "State Board Examination",
      location: "Tamil Nadu",
      period: "Completed",
      score: "Pass",
      status: "Completed",
      badgeType: "completed",
      highlights: [
        "Successful completion of general high school secondary education.",
        "Developed early interest in commercial studies, mathematics, and administrative disciplines."
      ]
    }
  ],

  // Skills accurately grouped from Resume
  skillCategories: [
    {
      id: "productivity-tech",
      categoryTitle: "Digital Productivity & Software",
      description: "Proficiency in essential workplace applications and digital tools.",
      skills: [
        {
          name: "Microsoft Word",
          detail: "Document formatting, reports, formal business correspondence, and templates."
        },
        {
          name: "Microsoft Excel",
          detail: "Data organization, spreadsheets, foundational formulas, tables, and records."
        },
        {
          name: "Microsoft PowerPoint",
          detail: "Slide creation, visual presentations, layout structure, and design clarity."
        },
        {
          name: "Typing & Accurate Data Entry",
          detail: "High-accuracy keyboarding, numerical data input, verification, and proofreading."
        },
        {
          name: "General Computer Proficiency",
          detail: "File directory management, web navigation, digital workflows, and OS utilities."
        }
      ]
    },
    {
      id: "professional-interpersonal",
      categoryTitle: "Professional & Interpersonal Strengths",
      description: "Core behavioral and workplace competencies driving reliable team execution.",
      skills: [
        {
          name: "Time Management & Organization",
          detail: "Prioritizing tasks, meeting deadlines, and maintaining orderly workspaces."
        },
        {
          name: "Problem-Solving & Communication",
          detail: "Listening actively, articulating solutions clearly, and resolving ambiguities."
        },
        {
          name: "Leadership & Teamwork",
          detail: "Collaborating with peers, supporting group objectives, and motivating teammates."
        },
        {
          name: "Orderly & Responsible Work Ethic",
          detail: "Disciplined approach to routine operations, compliance, and procedural standards."
        }
      ]
    }
  ],

  // Additional Courses & Accreditations (from Resume)
  additionalCourses: [
    {
      id: "magic-bus",
      title: "Personality Development & Soft Skills",
      organization: "Magic Bus India Foundation",
      credentialType: "Completed Program",
      summary:
        "Comprehensive training in professional workplace communication, self-awareness, active listening, grooming, interview readiness, and interpersonal relationship building.",
      tags: ["Soft Skills", "Personality Development", "Workplace Readiness", "Magic Bus India"]
    },
    {
      id: "niit-active-it",
      title: "Active Basic IT Certification Course",
      organization: "NIIT Foundation Accreditation Program",
      credentialType: "Accredited Certification Course",
      summary:
        "Structured instruction in foundational information technology, workplace digital literacy, internet utilities, cybersecurity hygiene, and standard office computing.",
      tags: ["Basic IT", "Digital Literacy", "NIIT Foundation", "Information Technology"]
    },
    {
      id: "safal-sales",
      title: "Sales Associate Training Certification",
      organization: "Safal Sales Pro Academy, Chennai",
      credentialType: "Certification of Successful Completion",
      summary:
        "Specialized training covering customer engagement, consultative sales basics, professional pitch etiquette, client relationship management, and commercial service standards.",
      tags: ["Sales Associate", "Customer Engagement", "Safal Sales Pro Academy", "Chennai"]
    }
  ],

  /**
   * EDITABLE ACHIEVEMENTS & CERTIFICATIONS
   * =====================================================================
   * Per requirements: Initial state begins empty (or with no fabricated entries).
   * To add your achievements or new certifications, simply add an object here:
   * 
   * Example:
   * {
   *   id: "cert-1",
   *   title: "Certified HR Associate",
   *   issuer: "Institute Name",
   *   year: "2026",
   *   description: "Credential description here...",
   *   link: "https://credential-link.com"
   * }
   */
  certificationsAndAchievements: [
    // Leave array empty by default so it renders the designed empty state.
    // Entries added here will automatically populate the section!
  ],

  // Contact & Social Links
  contact: {
    email: "mjayasri0123@gmail.com",
    phone: "7418191969",
    phoneFormatted: "+91 74181 91969",
    whatsappLink: "https://wa.me/917418191969",
    telLink: "tel:+917418191969",
    linkedin: "https://www.linkedin.com/in/jayasri-m-706279441",
    github: "https://github.com/mjayasri0123",
    location: "Chennai, Tamil Nadu"
  },

  // Reaction choices for the message area
  reactionOptions: [
    { emoji: "👋", label: "Say Hello", text: "Hi Jaya Sri! Wanted to reach out and say hello." },
    { emoji: "💼", label: "Job Opportunity", text: "Hello Jaya Sri, we have an entry-level opportunity that fits your profile." },
    { emoji: "🤝", label: "Networking", text: "Hi Jaya Sri, I’d love to connect professionally and share insights." },
    { emoji: "🌟", label: "Encouragement", text: "Best wishes on your B.Com and MBA studies! Keep up the great work." },
    { emoji: "☕", label: "Quick Chat", text: "Hi Jaya Sri, let's schedule a brief conversation regarding potential openings." }
  ]
};
