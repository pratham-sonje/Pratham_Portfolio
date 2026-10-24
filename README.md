# Pratham Mukund Sonje — Developer Portfolio

A modern, high-performance, fully responsive developer portfolio built with **Angular 22**, **TypeScript**, and **Modern CSS**. Engineered with standalone component architecture, Angular Signals, responsive design principles, and accessibility in mind.

---

## 🌟 Highlights & Features

- **Angular 22 Standalone Architecture:** Built with modern standalone components, Angular Signals, and clean separation of concerns.
- **Data-Driven & Extensible:** All profile, experience, project, education, and skill data is centralized in `src/app/core/data/portfolio.data.ts`.
- **Dual Theme Support:** Polished Dark (Obsidian & Electric Indigo) and Light themes with smooth transitions, persistent `localStorage` preference, and system `prefers-color-scheme` detection.
- **Fully Responsive & Touch-Friendly:** Mobile-first layout with responsive navigation drawer, flexible grid systems, and touch-optimized controls.
- **Zero-Dependency SVG Icon Engine:** Lightweight, accessible, Lucide-compatible vector icons with zero bundle bloat and zero version mismatch issues.
- **Interactive Technical Sections:**
  - **Hero:** Availability status badge, dynamic code snippet card, tech badges, quick action CTAs, and direct contact pills.
  - **About:** Career summary, engineering pillars, and core specializations.
  - **Experience:** Interactive career timeline with achievements, company metadata, and technology tags.
  - **Projects:** Filterable showcase (All / Enterprise / Mobile) with technical contributions and metrics.
  - **Skills:** Categorized skill matrix (Frontend, Backend, Databases, Tools) with proficiency tags.
  - **Education:** Academic qualifications with percentage distinction badges.
  - **Contact:** One-click email and phone copying with toast feedback, and a validated reactive contact form.
- **Accessibility & SEO Optimized:** Semantic HTML5 landmarks, skip-to-content links, `prefers-reduced-motion` compliance, Open Graph metadata, and keyboard navigation support.
- **GitHub Pages Ready:** Built-in SPA support (`404.html` redirection) and automated GitHub Actions workflow.

---

## 🛠️ Technology Stack

| Layer             | Technologies                                                           |
| ----------------- | ---------------------------------------------------------------------- |
| **Framework**     | Angular 22 (Standalone Components, Signals, Control Flow `@if`/`@for`) |
| **Language**      | TypeScript (Strict type checking)                                      |
| **Styling**       | Modern CSS3 (CSS Custom Properties, Flexbox, CSS Grid, Glassmorphism)  |
| **State & Logic** | Angular Signals, Reactive Forms, RxJS                                  |
| **Tooling**       | Angular CLI, npm, Prettier                                             |
| **Deployment**    | GitHub Pages & GitHub Actions                                          |

---

## 🚀 Quick Start & Local Development

### Prerequisites

- **Node.js**: v20 or higher (v24.x tested and recommended)
- **npm**: v10 or higher
- **Angular CLI**: v22.x (`npm install -g @angular/cli`)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/<your-username>/<your-repo-name>.git
   cd Portfolio
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the local development server:**

   ```bash
   npm start
   # or
   ng serve
   ```

4. **Open your browser:**
   Navigate to [http://localhost:4200](http://localhost:4200) to view the live portfolio.

---

## 🏗️ Project Structure

```
Portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml              # Automated GitHub Pages CI/CD workflow
├── public/
│   ├── assets/
│   │   └── resume/
│   │       └── Pratham_Mukund_Sonje_Resume.pdf  # Downloadable PDF resume
│   └── favicon.ico                 # Favicon
├── scripts/
│   └── prepare-gh-pages.js         # Build helper with base-href and 404.html generator
├── src/
│   ├── app/
│   │   ├── components/             # Standalone UI components
│   │   │   ├── navbar/             # Sticky header, theme toggle, mobile drawer
│   │   │   ├── hero/               # Hero banner, avatar, code card, stats
│   │   │   ├── about/              # Professional summary & engineering pillars
│   │   │   ├── experience/         # Career timeline & achievements
│   │   │   ├── projects/           # Categorized project cards & highlights
│   │   │   ├── skills/             # Categorized skill tags & proficiency
│   │   │   ├── education/          # College degrees & distinction scores
│   │   │   ├── contact/            # Direct contact cards & reactive form
│   │   │   └── footer/             # Footer, quick links, back-to-top
│   │   ├── core/
│   │   │   ├── data/
│   │   │   │   └── portfolio.data.ts # Single source of truth for all content
│   │   │   ├── models/
│   │   │   │   └── portfolio.model.ts# TypeScript interfaces
│   │   │   └── services/
│   │   │       ├── portfolio.service.ts # Portfolio data provider
│   │   │       └── theme.service.ts     # Dark/Light theme manager
│   │   ├── shared/
│   │   │   └── components/
│   │   │       └── icon/           # Lightweight SVG icon component
│   │   ├── app.component.ts        # Root standalone component
│   │   ├── app.component.html      # Root template with semantic landmarks
│   │   ├── app.config.ts           # Application providers
│   │   └── app.routes.ts           # Routing configuration
│   ├── index.html                  # HTML entry point with SEO/OG meta tags
│   ├── main.ts                     # Application bootstrap
│   └── styles.css                  # Global design system & theme variables
├── angular.json                    # Angular workspace configuration
├── package.json                    # Dependencies and build scripts
└── tsconfig.json                   # TypeScript configuration
```

---

## ✏️ Customizing Portfolio Content

All personal data, skills, projects, and work experience are centralized in one file:
👉 **[`src/app/core/data/portfolio.data.ts`](src/app/core/data/portfolio.data.ts)**

### 1. Update Contact & Social Media

```typescript
export const PORTFOLIO_DATA: PortfolioData = {
  name: 'Pratham Mukund Sonje',
  title: 'Full-Stack Web Developer',
  email: 'sonjeprathamsp1802@gmail.com',
  phone: '+919373516016',
  phoneDisplay: '+91 9373516016',
  linkedin: 'https://linkedin.com/in/pratham-sonje',
  github: 'https://github.com/pratham-sonje', // <-- Replace with your GitHub URL
  // ...
};
```

### 2. Adding a New Project

In `PORTFOLIO_DATA.projects`, add a new object to the array:

```typescript
{
  id: 'my-new-project',
  title: 'Project Name',
  subtitle: 'Short one-line subtitle',
  company: 'Company / Personal',
  description: 'Overview of the project and problem solved.',
  highlights: [
    'Built feature X using Angular and RxJS.',
    'Integrated REST APIs with state caching.',
  ],
  technologies: ['Angular', 'TypeScript', 'Node.js', 'PostgreSQL'],
  category: 'Enterprise', // or 'Mobile' or 'Full-Stack'
  featured: true,
  metrics: 'Sub-second load times & 99.9% uptime',
  githubUrl: 'https://github.com/username/project',
  liveUrl: 'https://project-demo.com',
}
```

### 3. Adding or Updating Skills

Modify `PORTFOLIO_DATA.skillCategories` to add categories or individual skill chips with proficiency levels (`'Advanced'`, `'Proficient'`, `'Intermediate'`).

---

## 📦 Building and Deploying to GitHub Pages

### Option 1: Automated Deployment via GitHub Actions (Recommended)

1. **Create a new repository on GitHub:**
   - Go to [github.com/new](https://github.com/new).
   - Enter your chosen repository name (for example, `portfolio` or `pratham-portfolio`).
   - Leave it **Public**. Do not initialize with a README.

2. **Commit and push your code:**

   ```bash
   git add .
   git commit -m "feat: complete modern Angular portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - In your GitHub repository, go to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, choose **GitHub Actions**.
   - The included workflow `.github/workflows/deploy.yml` will automatically build and publish your website whenever you push changes to `main`!

### Option 2: Manual Build & Deployment

If you prefer building locally and deploying manually:

1. **Build with your repository name:**

   ```bash
   npm run build:gh-pages <your-repo-name>
   # Example: npm run build:gh-pages portfolio
   ```

   _If using a custom domain or root `<username>.github.io`, run without arguments: `npm run build:gh-pages`._

2. **Deploy using `angular-cli-ghpages` or git:**
   ```bash
   npx angular-cli-ghpages --dir=dist/portfolio/browser
   ```

---

## ✅ Production Verification Checklist

- [x] **Zero Build Errors:** Verified with strict TypeScript checks (`npm run build`).
- [x] **Light & Dark Themes:** Working toggle, persistent preference, accessible contrast.
- [x] **Mobile Responsiveness:** Tested navigation drawer, touch targets, and grid wrapping.
- [x] **Resume PDF:** Verified and available at `assets/resume/Pratham_Mukund_Sonje_Resume.pdf`.
- [x] **One-Click Copy:** Verified clipboard copying for email and phone numbers.
- [x] **SPA Deep Links:** `404.html` and `.nojekyll` generated for GitHub Pages stability.
- [x] **Accessible:** Semantic elements, aria labels, and `:focus-visible` indicators.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
