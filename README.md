# 📄 Smart CV Reviewer & ATS Optimizer
### *Featuring Dynamic **Rang (Color Theme)** & **Lang (Multilingual)** Customization*

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Vercel Live](https://img.shields.io/badge/Vercel_Live-cv--reviewer--rang--lang.vercel.app-black?logo=vercel)](https://cv-reviewer-rang-lang.vercel.app/)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Live-success)](https://hemantdhayal7.github.io/cv-reviewer-rang-lang/)
[![Python 3.8+](https://img.shields.io/badge/python-3.8+-blue.svg)](https://www.python.org/downloads/)

An intelligent, lightweight, and modern **CV / Resume Reviewer and ATS Scoring Engine** built with interactive **Rang (Color Theme / Dark-Light Mode)** and **Lang (Multi-Language Localization)** support.

---

## 🌟 Key Highlights

### 🎨 1. Rang (Dynamic Color & Theme Engine)
- **Palette Switcher**: Switch between 6 vibrant accent colors:
  - 🔵 **Indigo** (Sapphire Blue)
  - 🟢 **Emerald** (Forest Green)
  - 🔴 **Crimson** (Rose Red)
  - 🟠 **Amber** (Sunset Orange)
  - 🟣 **Violet** (Royal Purple)
  - 🌐 **Cyan** (Teal / Cyberpunk)
- **Dark / Light Mode**: Smooth transition between high-contrast dark theme and crisp modern light theme.
- **Persistent Preferences**: Saves selected color palette and theme mode across sessions in `localStorage`.

### 🌐 2. Lang (Multi-Language Support)
Instant dynamic translation for UI, metrics, section checklists, and feedback across:
- 🇺🇸 **English (EN)**
- 🇮🇳 **हिंदी / Hindi (HI)**
- 🇪🇸 **Español / Spanish (ES)**
- 🇫🇷 **Français / French (FR)**
- 🇩🇪 **Deutsch / German (DE)**
- 🇯🇵 **日本語 / Japanese (JA)**

### 🔍 3. Comprehensive CV Review Engine
- **ATS Overall Strength Score (0-100)**: Visual animated gauge measuring formatting, clarity, and keyword density.
- **Section Health Check**: Validates critical sections (Contact info, Summary, Experience, Education, Skills, Projects).
- **Quantifiable Metrics & Impact**: Evaluates concrete achievements ($ revenue, % improvements, scale, time savings).
- **Action Verbs & Leadership**: Analyzes verb strength (*Architected, Spearheaded, Engineered, Automated* vs weak passive phrases).
- **Job Description (JD) Keyword Matcher**: Paste a job description to get real-time match percentage and missing technical skills.
- **Bullet Point Transformer**: Practical examples turning weak statements into high-impact, quantified achievement bullets.
- **One-Click PDF / Print Export**: Clean, printable format ready for saving as PDF.

---

## 🏗️ Deep Dive: How the Rang & Lang Controls Were Built

### 🎨 The "Rang" (Color & Theme) Engine Architecture

The color and theme system is engineered using a **zero-dependency, CSS custom property (variables) architecture** that decouples styling from component layout:

```
                  ┌───────────────────────────────┐
                  │   User Clicks Color Dot /     │
                  │   Dark-Light Mode Toggle      │
                  └───────────────┬───────────────┘
                                  │
                                  ▼
                  ┌───────────────────────────────┐
                  │     app.js State Handler      │
                  │  • Updates <html> attributes  │
                  │  • Saves to localStorage      │
                  └───────────────┬───────────────┘
                                  │
                                  ▼
                  ┌───────────────────────────────┐
                  │           CSS Layer           │
                  │ [data-color="..."]            │
                  │ [data-theme="dark|light"]     │
                  │  ↳ --primary, --primary-glow  │
                  │  ↳ --bg-app, --text-primary   │
                  └───────────────────────────────┘
```

#### 1. Data-Attribute Driven CSS Variables (`styles.css`)
Rather than rewriting classes on individual DOM elements, the root `<html>` element is tagged with `data-color` and `data-theme` attributes. The CSS defines custom property mappings:

```css
/* Dynamic Color Palette Definition */
[data-color="indigo"]  { --primary: #6366f1; --primary-glow: rgba(99, 102, 241, 0.35); }
[data-color="emerald"] { --primary: #10b981; --primary-glow: rgba(16, 185, 129, 0.35); }
[data-color="crimson"] { --primary: #f43f5e; --primary-glow: rgba(244, 63, 94, 0.35); }
[data-color="amber"]   { --primary: #f59e0b; --primary-glow: rgba(245, 158, 11, 0.35); }
[data-color="violet"]  { --primary: #8b5cf6; --primary-glow: rgba(139, 92, 246, 0.35); }
[data-color="cyan"]    { --primary: #06b6d4; --primary-glow: rgba(6, 182, 212, 0.35); }

/* Theme Mode Definition */
[data-theme="dark"] {
  --bg-app: #0b0f19;
  --bg-surface: #111827;
  --bg-input: #0f172a;
  --text-primary: #f8fafc;
}
[data-theme="light"] {
  --bg-app: #f1f5f9;
  --bg-surface: #ffffff;
  --bg-input: #ffffff;
  --text-primary: #0f172a;
}
```

#### 2. Reactive JavaScript Controller (`app.js`)
When a user clicks a palette dot or toggles dark/light mode:
1. The DOM attribute on `document.documentElement` is updated immediately.
2. The user's selection is stored in `localStorage` (`cv_color`, `cv_theme`).
3. On page load, `initThemeAndColor()` restores saved preferences automatically.

---

### 🌐 The "Lang" (Multilingual Localization) Engine Architecture

The internationalization (i18n) engine provides instantaneous, client-side translation across 6 languages without requiring page reloads:

```
       ┌──────────────────────┐        ┌──────────────────────┐
       │ Language Selector    │ ────►  │ app.js onChange      │
       │ (en, hi, es, fr...)  │        │ Listener             │
       └──────────────────────┘        └──────────┬───────────┘
                                                  │
                                                  ▼
                        ┌──────────────────────────────────────────┐
                        │   TRANSLATIONS Dictionary Lookup         │
                        │   • Traverses DOM [data-i18n]            │
                        │   • Updates input placeholders           │
                        │   • Re-evaluates CV suggestions in Lang  │
                        │   • Persists selection in localStorage   │
                        └──────────────────────────────────────────┘
```

#### 1. Declarative DOM Binding (`index.html`)
DOM elements that contain translatable text declare a `data-i18n` attribute pointing to a translation key:
```html
<h1 class="brand-title" data-i18n="app_title">CV Reviewer Pro</h1>
<span data-i18n="analyze_btn">Analyze Resume Now</span>
```

#### 2. Translation Dictionaries (`app.js`)
A comprehensive structured dictionary defines localized strings for UI labels, status badges, placeholders, and contextual tips:
```javascript
const TRANSLATIONS = {
  en: { app_title: "CV Reviewer Pro", analyze_btn: "Analyze Resume Now", ... },
  hi: { app_title: "सीवी समीक्षक प्रो (CV Reviewer Pro)", analyze_btn: "सीवी का विश्लेषण करें", ... },
  es: { app_title: "CV Reviewer Pro", analyze_btn: "Analizar CV Ahora", ... },
  // fr, de, ja...
};
```

#### 3. Dynamic Re-Rendering
When the language is switched, the engine:
- Traverses all `[data-i18n]` elements and assigns localized values.
- Updates textarea `placeholder` attributes.
- If an analysis report is currently rendered, it dynamically regenerates the feedback recommendations and sample bullet point transformations in the chosen language.

---

## 📊 CV Reviewer & ATS Scoring Algorithm

The review engine evaluates input resumes using weighted heuristic analysis across 5 dimensions:

$$\text{Overall Score} = 0.35 \times \text{Structure} + 0.35 \times \text{Metrics} + 0.20 \times \text{Action Verbs} + 0.10 \times \text{Skills} - \text{Length Penalty}$$

| Metric | Target / Benchmark | How It Is Evaluated |
| :--- | :--- | :--- |
| **Section Health** | 6 Critical Sections | Regex scan for Contact Info, Summary, Experience, Education, Skills, and Projects |
| **Quantified Impact** | 5+ Measurable Results | Pattern matching for percentages (`%`), financial impact (`$`), user growth (`100k+ users`), latency improvements (`40% faster`) |
| **Action Verbs** | 5+ Power Verbs | Lexicon check for words like *Architected, Spearheaded, Engineered, Automated, Deployed* |
| **Cliché Filter** | 0 Weak Phrases | Flags vague passive terms (*hardworking, team player, assisted with, worked on*) |
| **Length & Density** | 350 – 900 Words | Checks word count and bullet point density to ensure optimal 1-2 page formatting |
| **Job Description Match** | Custom ATS % | Extracts technical keywords from both CV and target JD to calculate intersection match % |

---

## 🛠️ Step-by-Step Development Approach & Methodology

```
┌────────────────────────────────────────────────────────────────────────┐
│                        DEVELOPMENT ROADMAP                             │
├─────────────────┬──────────────────────────────────────────────────────┤
│ 1. Requirements │ Define feature requirements: multi-language (Lang),  │
│    Analysis     │ multi-palette (Rang), ATS scoring & review engine.   │
├─────────────────┼──────────────────────────────────────────────────────┤
│ 2. Frontend UI  │ Build responsive HTML5 layout with glassmorphism,    │
│    & CSS System │ Plus Jakarta Sans font, and SVG circular gauges.     │
├─────────────────┼──────────────────────────────────────────────────────┤
│ 3. Core Engine  │ Implement client-side parsing, scoring heuristics,   │
│    & i18n Logic │ and localized dictionaries in app.js.                │
├─────────────────┼──────────────────────────────────────────────────────┤
│ 4. Python CLI   │ Write cv_reviewer.py with ANSI terminal color themes │
│    & Unit Tests │ and comprehensive unit tests (test_cv_reviewer.py).  │
├─────────────────┼──────────────────────────────────────────────────────┤
│ 5. CI/CD &      │ Setup GitHub Actions Pages workflow (.github/deploy) │
│    Deployments  │ and configure Vercel 1-click deployment support.     │
└─────────────────┴──────────────────────────────────────────────────────┘
```

1. **Architecture First**: We separated the UI styling layer (CSS variables) from the logic layer (JS parsing engine) to ensure color palette changes and language switching happen with zero latency and zero external dependencies.
2. **Dual-Mode Capability**: Built both an interactive **Web UI** (HTML5 + CSS + JS) and a **Terminal CLI** (`cv_reviewer.py`) with colored ANSI output so users can review resumes in browsers or automated scripts.
3. **Rigorous Testing**: Created unit test suite `test_cv_reviewer.py` validating section detection, score boundaries, metric parsing, and theme dictionary integrity.
4. **Cloud-Ready Deployment**: Configured both **GitHub Pages** (via GitHub Actions) and **Vercel** (`vercel.json`) with an instant 1-click deploy button.

---

## 📜 Git Commit History & Update Approach

We utilized an **atomic, semantic commit strategy** to maintain clean version history:

| Commit Hash | Commit Message | Scope / Impact |
| :--- | :--- | :--- |
| `ab4fb86` | `Initial commit: Smart CV Reviewer with dynamic Rang (Theme/Colors) and Lang (Multilingual) features` | Created all core files (`index.html`, `styles.css`, `app.js`, `cv_reviewer.py`, `test_cv_reviewer.py`, `server.py`, `sample_cv.txt`, `.github/workflows/deploy.yml`, `LICENSE`, `README.md`). |
| `93b9df6` | `Add Vercel deployment configuration and 1-click deploy button` | Added `vercel.json` routing rules and `package.json` manifest for Vercel deployment. |
| `dc82731` | `Add official Deploy with Vercel button badge` | Embedded official Vercel deploy badge in README header. |
| `[latest]` | `docs: Expand README with in-depth Rang & Lang architecture, scoring algorithms, and development approach` | Added detailed system architecture diagrams, methodology, and technical explanations. |

---

## 🚀 Quick Start & Usage

### 🌐 Option A: Run Web App in Browser
You can open `index.html` directly in any web browser, or run the included Python server:

```bash
# Clone the repository
git clone https://github.com/hemantdhayal7/cv-reviewer-rang-lang.git
cd cv-reviewer-rang-lang

# Launch local server
python3 server.py
# Open http://localhost:8080 in your browser
```

---

### 💻 Option B: Python CLI Reviewer
A standalone Python CLI is included with colored terminal formatting and multilingual reporting.

```bash
# Run with sample CV in English with Indigo theme
python3 cv_reviewer.py sample_cv.txt --lang en --rang indigo

# Run in Hindi with Emerald (Green) theme
python3 cv_reviewer.py sample_cv.txt --lang hi --rang emerald

# Run in Spanish with Crimson (Red) theme
python3 cv_reviewer.py sample_cv.txt --lang es --rang crimson
```

#### Run CLI Unit Tests:
```bash
python3 test_cv_reviewer.py
```

---

### ☁️ Option C: Deploy to Vercel (1-Click)
Deploy the project to your own Vercel account instantly:

👉 **[Click Here to Deploy on Vercel](https://vercel.com/new/clone?repository-url=https://github.com/hemantdhayal7/cv-reviewer-rang-lang)**

---

## 📁 Project Structure

```text
cv-reviewer-rang-lang/
├── index.html            # Main web application with Rang & Lang controls
├── styles.css            # Dynamic CSS variables, responsive design, dark/light themes
├── app.js                # CV evaluation engine, ATS algorithms, and i18n dictionaries
├── cv_reviewer.py        # Python CLI reviewer with ANSI terminal color themes
├── test_cv_reviewer.py   # Unit test suite for parser and score calculations
├── server.py             # Simple zero-dependency HTTP server
├── sample_cv.txt         # Pre-configured sample resume for testing
├── vercel.json           # Vercel deployment and routing configuration
├── package.json          # Project metadata and npm scripts
├── .github/
│   └── workflows/
│       └── deploy.yml    # Automated GitHub Pages CI/CD workflow
├── .gitignore
├── LICENSE
└── README.md
```

---

## 📄 License
This project is open source and available under the [MIT License](LICENSE).
