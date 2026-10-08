# 📄 Smart CV Reviewer & ATS Optimizer
### *Featuring Dynamic **Rang (Color Theme)** & **Lang (Multilingual)** Customization*

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/hemantdhayal7/cv-reviewer-rang-lang)
[![GitHub Pages](https://img.shields.io/badge/Live_Demo-GitHub_Pages-success)](https://hemantdhayal7.github.io/cv-reviewer-rang-lang/)
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
