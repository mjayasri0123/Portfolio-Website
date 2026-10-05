# Jaya Sri M — Modern Glassmorphism Portfolio

A personal portfolio website for **Jaya Sri M**, B.Com Graduate & MBA in Human Resources student based in **Chennai, Tamil Nadu**.

Built with **React 19**, **Vite**, and **Vanilla CSS** featuring an advanced **glassmorphism interface**: layered translucent panels, dynamic ambient lighting with warm peach, muted teal, and cream tones, soft blur backdrops, subtle specular borders, and high-contrast accessible typography.

---

## 🌟 Key Features

1. **Atmospheric Background & Glassmorphism Design System**:
   - Floating organic ambient lighting orbs (warm peach, muted teal, cream).
   - High-contrast Dark Obsidian Glass (default) and Luminous Opal Glass (light mode) with persistent theme switcher.
   - Respects user accessibility and `@media (prefers-reduced-motion: reduce)`.

2. **Custom Animated Cursor**:
   - Active on fine-pointer devices (desktop/mouse/trackpad).
   - Fluid lerp physics with ring and dot.
   - Contextual adaptations: expands over interactive links/buttons and softens to translucent over body text.
   - Disabled on touch screens and when reduced-motion is requested.

3. **Hero & Dynamic Caption Rotator**:
   - Introduces Jaya Sri M as a B.Com Graduate and MBA in HR student seeking a first work experience.
   - Rotating caption bar highlighting resume-supported strengths: *“Commerce student”*, *“Microsoft Office”*, *“Data entry”*, *“Communication”*, and *“Problem solving”*.
   - Includes full playback controls (Pause / Play, caption dot navigation, pause-on-hover) with `aria-live` accessibility.
   - Dedicated glassmorphic portrait frame with the uploaded photo, interactive toggle to switch between portrait and monogram avatar, and instant asset location guidance.

4. **100% Accurate Resume Sections**:
   - **About / Profile**: Responsible and orderly work philosophy, bilingual proficiency (Tamil & English), and personal interests (Travelling & Sports).
   - **Education Timeline**: MBA in HR at G K M Engineering College (2026–2028, Currently Pursuing), B.Com at Chellammal Women’s College (2023–2026), 12th HSC (55%), and 10th SSLC (Pass).
   - **Skills**: Cleanly grouped into *Digital Productivity & Software* (Word, Excel, PowerPoint, Typing & Accurate Data Entry, General Computer Proficiency) and *Professional & Interpersonal Strengths* (Time Management, Problem-Solving, Leadership & Teamwork, Orderly Work Ethic). No fabricated percentage bars!
   - **Additional Courses**: Verified completed training at **Magic Bus India Foundation** (Personality Development & Soft Skills), **NIIT Foundation** (Active Basic IT Certification), and **Safal Sales Pro Academy, Chennai** (Sales Associate Training).
   - **Editable Certifications & Achievements**: Begins with a clean, dignified empty state awaiting upcoming career recognitions. Features an interactive *“+ Add New Entry”* tester and clear code guidelines.
   - **Contact & Interactive Reaction Drafter**:
     - Direct clickable links: Email (`mjayasri0123@gmail.com`), Phone/WhatsApp (`+91 74181 91969`), LinkedIn, and GitHub.
     - 1-click clipboard copy buttons for email, phone, and draft messages.
     - Interactive *“Send a Message or Reaction”* box with quick reaction badges (👋 Say Hello, 💼 Job Opportunity, 🤝 Networking, 🌟 Encouragement, ☕ Quick Chat).
     - Privacy-respecting: drafts are launched directly via your local email client or WhatsApp without storing private data on third-party servers.

---

## 📁 Project Structure

```text
├── public/
│   └── profile.jpg                 # Hero portrait image asset
├── src/
│   ├── assets/
│   │   └── profile.jpg             # Asset copy
│   ├── components/
│   │   ├── AboutSection.jsx        # About profile, languages & interests
│   │   ├── AboutSection.css
│   │   ├── AchievementsSection.jsx # Editable achievements & empty state
│   │   ├── AchievementsSection.css
│   │   ├── AdditionalCoursesSection.jsx # Magic Bus, NIIT, Safal Sales Pro
│   │   ├── AdditionalCoursesSection.css
│   │   ├── AtmosphericBackground.jsx # Soft ambient peach/teal backdrop
│   │   ├── AtmosphericBackground.css
│   │   ├── ContactSection.jsx      # Direct channels & message drafter
│   │   ├── ContactSection.css
│   │   ├── CustomCursor.jsx        # Smooth lerp cursor for fine pointers
│   │   ├── EducationSection.jsx    # Education timeline (MBA, B.Com, HSC, SSLC)
│   │   ├── EducationSection.css
│   │   ├── Footer.jsx              # Semantic glass footer & navigation
│   │   ├── Footer.css
│   │   ├── HeroSection.jsx         # Hero, caption slider & portrait card
│   │   ├── HeroSection.css
│   │   ├── Navbar.jsx              # Floating glass header & mobile drawer
│   │   └── Navbar.css
│   ├── data/
│   │   └── portfolioData.js        # SINGLE SOURCE OF TRUTH FOR ALL RESUME DATA
│   ├── App.jsx                     # Component layout & theme controller
│   ├── index.css                   # Glassmorphism tokens & design system
│   └── main.jsx
├── index.html                      # Semantic HTML5, Google Fonts & SEO
├── package.json
└── vite.config.js
```

---

## 🖼️ How to Replace the Hero Photo

The hero photo is located at:
```text
public/profile.jpg
```
1. Place any new portrait photo in the `public/` directory with the name `profile.jpg`.
2. Vite will immediately serve the updated image with zero code changes.
3. If you want to use a different file name, open `src/data/portfolioData.js` and edit:
   ```javascript
   personalInfo: {
     // ...
     heroImage: "/your-new-image-name.jpg",
   }
   ```

---

## ✏️ How to Add / Edit Certifications & Achievements

Open `src/data/portfolioData.js` and locate the `certificationsAndAchievements` array.

Add an object with your credential:
```javascript
certificationsAndAchievements: [
  {
    id: "cert-hr-analytics",
    title: "HR Analytics Foundations",
    issuer: "SHRM / Coursera",
    year: "2026",
    description: "Hands-on data-driven human resource metrics and workforce planning.",
    link: "https://example.com/certificate" // Optional
  }
]
```
The portfolio will immediately render the new entry inside the section!

---

## 🚀 Running Locally

### Prerequisites
Node.js (v18 or v20+) and npm.

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Vite Development Server
```bash
npm run dev
```
Open your browser and navigate to:
```text
http://127.0.0.1:5173/
```

### 3. Production Build
```bash
npm run build
```
Creates an optimized static bundle in the `dist/` directory, ready to deploy to GitHub Pages, Vercel, or Netlify.

---

## 🔒 Privacy & Form Submission

The interactive message area in the Contact section creates pre-filled `mailto:` links and `https://wa.me/91...` WhatsApp links. No backend server or third-party database is required, and no user messages are saved on the website.

If you wish to configure automated email forwarding in the future, connect an external service like Formspree or EmailJS and store API keys securely in an environment variable (`.env`).
