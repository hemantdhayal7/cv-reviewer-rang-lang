/**
 * ============================================================================
 * SMART CV REVIEWER & ATS ANALYZER
 * Multi-Language (Lang) & Dynamic Theme / Color Palette (Rang) Engine
 * ============================================================================
 */

// ----------------------------------------------------------------------------
// 1. MULTI-LANGUAGE (LANG) LOCALIZATION DICTIONARIES
// ----------------------------------------------------------------------------
const TRANSLATIONS = {
  en: {
    app_title: "CV Reviewer Pro",
    app_subtitle: "AI-Powered Resume Optimizer & ATS Scanner",
    color_label: "Rang (Color):",
    lang_label: "Lang:",
    cv_input_heading: "Your Resume / CV Content",
    load_sample_btn: "Load Sample CV",
    upload_hint: "or drag & drop text/markdown file",
    jd_heading: "Target Job Description (Optional for ATS Match)",
    analyze_btn: "Analyze Resume Now",
    report_heading: "Review Analysis & Suggestions",
    print_btn: "Print / PDF",
    empty_title: "Ready to Review Your CV",
    empty_desc: "Enter your resume text on the left or click 'Load Sample CV', then click 'Analyze Resume Now' to get instant actionable feedback.",
    overall_score_title: "Overall Strength",
    metrics_score_title: "Impact & Metrics",
    structure_score_title: "Sections & Structure",
    action_score_title: "Action Verbs",
    ats_match_title: "Job Match",
    word_count: "Words:",
    bullet_count: "Bullets:",
    quant_count: "Metrics Found:",
    skills_count: "Skills Found:",
    sections_detected_title: "Section Health Check",
    skills_detected_title: "Extracted Skills & Keywords",
    suggestions_title: "Actionable Improvement Tips",
    enhancer_title: "Bullet Point AI Transformer",
    enhancer_desc: "See how to turn weak bullet points into high-impact, quantified achievement statements:",
    footer_text: "Designed for job seekers worldwide • Features dynamic Rang (Color) & Lang (Language) customization.",
    status_excellent: "Excellent Profile",
    status_good: "Good - Few Enhancements",
    status_average: "Needs Improvement",
    status_poor: "Critical Fixes Needed",
    placeholder_cv: "Paste your CV / Resume text here... (Experience, Skills, Education, Projects, Metrics)",
    placeholder_jd: "Paste target Job Description to compare keywords and calculate ATS match %..."
  },
  hi: {
    app_title: "सीवी समीक्षक प्रो (CV Reviewer Pro)",
    app_subtitle: "स्मार्ट बायोडाटा विश्लेषक एवं एटीएस स्कैनर",
    color_label: "रंग (Color):",
    lang_label: "भाषा (Lang):",
    cv_input_heading: "आपका सीवी / बायोडाटा विवरण",
    load_sample_btn: "नमूना सीवी लोड करें",
    upload_hint: "या टेक्स्ट/मार्कडाउन फ़ाइल यहाँ खींचें",
    jd_heading: "नौकरी का विवरण (जॉब मैच के लिए वैकल्पिक)",
    analyze_btn: "सीवी का विश्लेषण करें",
    report_heading: "समीक्षा रिपोर्ट एवं सुझाव",
    print_btn: "प्रिंट / पीडीएफ",
    empty_title: "सीवी समीक्षा के लिए तैयार",
    empty_desc: "बाईं ओर अपना बायोडाटा पेस्ट करें या 'नमूना सीवी' चुनें, फिर तुरंत सुझाव पाने के लिए 'सीवी का विश्लेषण करें' पर क्लिक करें।",
    overall_score_title: "कुल स्कोर",
    metrics_score_title: "प्रभाव एवं आंकड़े",
    structure_score_title: "खंड और संरचना",
    action_score_title: "क्रिया शब्द (Action Verbs)",
    ats_match_title: "जॉब विवरण मैच",
    word_count: "कुल शब्द:",
    bullet_count: "बुलेट पॉइंट्स:",
    quant_count: "संख्यात्मक आंकड़े:",
    skills_count: "पहचाने गए कौशल:",
    sections_detected_title: "प्रमुख अनुभाग जाँच",
    skills_detected_title: "निकाले गए तकनीकी कौशल एवं कीवर्ड्स",
    suggestions_title: "सुधार के लिए महत्वपूर्ण सुझाव",
    enhancer_title: "बुलेट पॉइंट सुधारक उदाहरण",
    enhancer_desc: "कमजोर वाक्यों को प्रभावशाली और मापनीय उपलब्धियों में बदलें:",
    footer_text: "वैश्विक नौकरी चाहने वालों के लिए निर्मित • गतिशील रंग (Color) एवं भाषा (Lang) विकल्प के साथ।",
    status_excellent: "उत्कृष्ट प्रोफाइल",
    status_good: "अच्छा - कुछ सुधार संभव",
    status_average: "सुधार की आवश्यकता",
    status_poor: "गंभीर सुधार आवश्यक",
    placeholder_cv: "अपना सीवी यहाँ पेस्ट करें... (अनुभव, कौशल, शिक्षा, प्रोजेक्ट, परिणाम)",
    placeholder_jd: "नौकरी का विवरण (Job Description) यहाँ पेस्ट करें..."
  },
  es: {
    app_title: "CV Reviewer Pro",
    app_subtitle: "Optimizador de CV y Escáner ATS",
    color_label: "Color (Rang):",
    lang_label: "Idioma:",
    cv_input_heading: "Contenido de tu CV / Currículum",
    load_sample_btn: "Cargar CV de Muestra",
    upload_hint: "o arrastra y suelta un archivo de texto",
    jd_heading: "Descripción del Puesto (Opcional)",
    analyze_btn: "Analizar CV Ahora",
    report_heading: "Informe de Análisis y Consejos",
    print_btn: "Imprimir / PDF",
    empty_title: "Listo para Revisar tu CV",
    empty_desc: "Pega tu currículum a la izquierda y presiona 'Analizar CV Ahora' para obtener retroalimentación instantánea.",
    overall_score_title: "Fuerza General",
    metrics_score_title: "Impacto y Métricas",
    structure_score_title: "Secciones y Estructura",
    action_score_title: "Verbos de Acción",
    ats_match_title: "Coincidencia con el Puesto",
    word_count: "Palabras:",
    bullet_count: "Viñetas:",
    quant_count: "Métricas:",
    skills_count: "Habilidades:",
    sections_detected_title: "Verificación de Secciones",
    skills_detected_title: "Habilidades y Palabras Clave",
    suggestions_title: "Consejos de Mejora",
    enhancer_title: "Transformador de Puntos Clave",
    enhancer_desc: "Aprende a transformar viñetas débiles en declaraciones de impacto cuantificadas:",
    footer_text: "Diseñado para profesionales • Personalización dinámica de Color (Rang) e Idioma (Lang).",
    status_excellent: "Perfil Excelente",
    status_good: "Bueno - Pequeñas Mejoras",
    status_average: "Requiere Mejoras",
    status_poor: "Arreglos Críticos Requeridos",
    placeholder_cv: "Pega el texto de tu currículum aquí...",
    placeholder_jd: "Pega la descripción del puesto aquí..."
  },
  fr: {
    app_title: "CV Reviewer Pro",
    app_subtitle: "Optimiseur de CV & Analyseur ATS",
    color_label: "Couleur:",
    lang_label: "Langue:",
    cv_input_heading: "Contenu de votre CV",
    load_sample_btn: "Charger un CV Exemple",
    upload_hint: "ou glissez-déposez un fichier texte",
    jd_heading: "Description du Poste (Optionnel)",
    analyze_btn: "Analyser le CV",
    report_heading: "Rapport d'Analyse et Conseils",
    print_btn: "Imprimer / PDF",
    empty_title: "Prêt à Analyser Votre CV",
    empty_desc: "Collez votre CV à gauche puis cliquez sur 'Analyser le CV' pour des conseils personnalisés.",
    overall_score_title: "Score Global",
    metrics_score_title: "Impact & Données Chiffrées",
    structure_score_title: "Structure & Sections",
    action_score_title: "Verbes d'Action",
    ats_match_title: "Correspondance Emploi",
    word_count: "Mots:",
    bullet_count: "Puces:",
    quant_count: "Métriques:",
    skills_count: "Compétences:",
    sections_detected_title: "Sections Détectées",
    skills_detected_title: "Compétences Extraites",
    suggestions_title: "Conseils d'Amélioration",
    enhancer_title: "Transformateur de Points Clés",
    enhancer_desc: "Découvrez comment transformer vos points en résultats quantifiés :",
    footer_text: "Créé pour les candidats du monde entier • Changement dynamique de Couleur (Rang) et Langue (Lang).",
    status_excellent: "Excellent Profil",
    status_good: "Bon - Quelques Ajustements",
    status_average: "À Améliorer",
    status_poor: "Corrections Majeures Requises",
    placeholder_cv: "Collez le texte de votre CV ici...",
    placeholder_jd: "Collez la description du poste cible ici..."
  },
  de: {
    app_title: "CV Reviewer Pro",
    app_subtitle: "KI-Lebenslauf-Optimierer & ATS-Scanner",
    color_label: "Farbe (Rang):",
    lang_label: "Sprache:",
    cv_input_heading: "Ihr Lebenslauf-Inhalt",
    load_sample_btn: "Beispiel-CV laden",
    upload_hint: "oder Textdatei hier ablegen",
    jd_heading: "Stellenbeschreibung (Optional)",
    analyze_btn: "Lebenslauf analysieren",
    report_heading: "Analysebericht & Empfehlungen",
    print_btn: "Drucken / PDF",
    empty_title: "Bereit zur Prüfung",
    empty_desc: "Fügen Sie Ihren Lebenslauf ein und klicken Sie auf 'Lebenslauf analysieren'.",
    overall_score_title: "Gesamtstärke",
    metrics_score_title: "Wirkung & Zahlen",
    structure_score_title: "Aufbau & Abschnitte",
    action_score_title: "Aktionsverben",
    ats_match_title: "Job-Übereinstimmung",
    word_count: "Wörter:",
    bullet_count: "Punkte:",
    quant_count: "Metriken:",
    skills_count: "Kompetenzen:",
    sections_detected_title: "Abschnitts-Prüfung",
    skills_detected_title: "Erkannte Fähigkeiten",
    suggestions_title: "Handlungsempfehlungen",
    enhancer_title: "Stichpunkt-Optimierer",
    enhancer_desc: "So verwandeln Sie einfache Aufgaben in messbare Erfolge:",
    footer_text: "Entwickelt für weltweite Bewerber • Dynamische Farb- (Rang) und Sprachwahl (Lang).",
    status_excellent: "Hervorragendes Profil",
    status_good: "Gut - Kleine Verbesserungen",
    status_average: "Verbesserungswürdig",
    status_poor: "Kritische Fehler",
    placeholder_cv: "Fügen Sie Ihren Lebenslauf hier ein...",
    placeholder_jd: "Fügen Sie die Stellenbeschreibung hier ein..."
  },
  ja: {
    app_title: "CV Reviewer Pro",
    app_subtitle: "AI 職務経歴書・履歴書最適化＆ATSチェッカー",
    color_label: "テーマ色 (Rang):",
    lang_label: "言語 (Lang):",
    cv_input_heading: "職務経歴書 / レジュメ内容",
    load_sample_btn: "サンプルCVを読み込む",
    upload_hint: "またはテキストファイルをドラッグ＆ドロップ",
    jd_heading: "募集要項・求人票 (ATS適合度判定用・任意)",
    analyze_btn: "レジュメを即時分析",
    report_heading: "レビュー分析結果と改善提案",
    print_btn: "印刷 / PDF保存",
    empty_title: "レビュー準備完了",
    empty_desc: "左側にレジュメのテキストを入力して「レジュメを即時分析」ボタンをクリックしてください。",
    overall_score_title: "総合スコア",
    metrics_score_title: "成果と数値実績",
    structure_score_title: "構成・セクション",
    action_score_title: "アクション動詞",
    ats_match_title: "求人マッチ度",
    word_count: "単語数:",
    bullet_count: "箇条書き数:",
    quant_count: "数値指標数:",
    skills_count: "検出スキル数:",
    sections_detected_title: "必須セクション確認",
    skills_detected_title: "検出されたスキル＆キーワード",
    suggestions_title: "具体的な改善アドバイス",
    enhancer_title: "箇条書き改善サンプル",
    enhancer_desc: "成果を数値化して魅力的なアピール文に変換する例：",
    footer_text: "グローバル転職者のために設計 • 「Rang（色）」と「Lang（言語）」の即時切り替えに対応",
    status_excellent: "優れたレジュメ",
    status_good: "良好 - さらなる向上可能",
    status_average: "改善が必要",
    status_poor: "要大幅修正",
    placeholder_cv: "職務経歴書・履歴書のテキストをここに貼り付けてください...",
    placeholder_jd: "求人票（Job Description）のテキストを貼り付けてください..."
  }
};

// ----------------------------------------------------------------------------
// 2. SAMPLE CVS FOR TESTING
// ----------------------------------------------------------------------------
const SAMPLE_CVS = {
  software_eng: `Alex Morgan
Senior Full-Stack Software Engineer
Email: alex.morgan@email.com | Phone: +1 (555) 234-5678 | LinkedIn: linkedin.com/in/alexmorgan | GitHub: github.com/alexmorgan

PROFESSIONAL SUMMARY
Results-driven Senior Full-Stack Software Engineer with 6+ years of experience designing and scaling high-traffic distributed applications. Proven track record in microservices, cloud infrastructure (AWS/GCP), and modern web technologies. Boosted system throughput by 45% and mentored 10+ junior developers.

SKILLS & TECHNOLOGIES
Languages & Frameworks: Python, JavaScript, TypeScript, React.js, Node.js, Next.js, Django, FastAPI, SQL, Go
Cloud & DevOps: AWS (Lambda, ECS, S3, RDS), Docker, Kubernetes, CI/CD, Terraform, GitHub Actions
Databases & Systems: PostgreSQL, MongoDB, Redis, GraphQL, REST APIs, Kafka, Elasticsearch
Methodologies: Agile/Scrum, Test-Driven Development (TDD), System Architecture

PROFESSIONAL EXPERIENCE

Senior Software Engineer | CloudNova Solutions
June 2021 – Present | San Francisco, CA
• Architected and deployed microservices backend in Node.js and Go, serving 2.5M daily active users with 99.99% uptime.
• Reduced cloud infrastructure costs by 32% ($140K annual savings) by optimizing AWS container autoscaling and database query latency.
• Spearheaded migration from legacy monolithic architecture to React and GraphQL, accelerating page load times by 48%.
• Led a cross-functional agile team of 8 engineers and conducted 50+ technical interviews and code reviews.

Software Engineer | FinTech Wave
August 2018 – May 2021 | Austin, TX
• Developed automated payment processing pipeline handling $45M+ in monthly transaction volume with zero compliance breaches.
• Engineered real-time fraud detection engine using Python and Redis, decreasing chargeback rates by 27%.
• Implemented comprehensive unit and integration test suites increasing test coverage from 55% to 92%.

EDUCATION
Bachelor of Science in Computer Science | University of Texas at Austin (2014 – 2018)
GPA: 3.85 / 4.0

CERTIFICATIONS & PROJECTS
• AWS Certified Solutions Architect – Associate (2023)
• Open Source: Creator of fast-api-cache (1.2k GitHub Stars)`
};

// ----------------------------------------------------------------------------
// 3. SKILLS & KEYWORDS DATABASE
// ----------------------------------------------------------------------------
const TECH_SKILLS = [
  "Python", "JavaScript", "TypeScript", "React", "Node.js", "Next.js", "Java", "C++",
  "C#", "Go", "Golang", "Rust", "Swift", "Kotlin", "PHP", "Ruby", "HTML5", "CSS3",
  "Tailwind", "SQL", "PostgreSQL", "MySQL", "MongoDB", "Redis", "GraphQL", "REST APIs",
  "AWS", "GCP", "Azure", "Docker", "Kubernetes", "CI/CD", "Terraform", "Git", "GitHub",
  "Agile", "Scrum", "Microservices", "Linux", "Machine Learning", "Data Science",
  "PyTorch", "TensorFlow", "Pandas", "Kafka", "Figma", "DevOps", "Elasticsearch"
];

const ACTION_VERBS = [
  "architected", "accelerated", "automated", "built", "boosted", "created", "delivered",
  "deployed", "designed", "developed", "engineered", "established", "executed", "expanded",
  "generated", "headed", "implemented", "improved", "increased", "launched", "led",
  "maximized", "mentored", "migrated", "minimized", "negotiated", "optimized", "orchestrated",
  "reduced", "resolved", "revamped", "scaled", "spearheaded", "streamlined", "transformed"
];

const WEAK_WORDS = [
  "hardworking", "team player", "go-getter", "detail-oriented", "responsible for",
  "duties included", "helped with", "assisted in", "worked on", "self-motivated"
];

// ----------------------------------------------------------------------------
// 4. APP STATE & INITIALIZATION
// ----------------------------------------------------------------------------
let currentLang = localStorage.getItem("cv_lang") || "en";
let currentColor = localStorage.getItem("cv_color") || "indigo";
let currentTheme = localStorage.getItem("cv_theme") || "dark";

document.addEventListener("DOMContentLoaded", () => {
  initThemeAndColor();
  initLanguage();
  setupEventListeners();
});

function initThemeAndColor() {
  document.documentElement.setAttribute("data-theme", currentTheme);
  document.documentElement.setAttribute("data-color", currentColor);

  // Update theme button icon
  const themeBtn = document.getElementById("themeToggleBtn");
  if (themeBtn) {
    themeBtn.innerHTML = currentTheme === "dark" ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
  }

  // Update active color dot
  document.querySelectorAll(".color-dot").forEach(dot => {
    dot.classList.toggle("active", dot.dataset.color === currentColor);
  });
}

function initLanguage() {
  const select = document.getElementById("languageSelect");
  if (select) {
    select.value = currentLang;
  }
  applyTranslations(currentLang);
}

function applyTranslations(lang) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;

  // Update all data-i18n elements
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Update placeholders
  const cvInput = document.getElementById("cvTextInput");
  if (cvInput && dict.placeholder_cv) {
    cvInput.placeholder = dict.placeholder_cv;
  }

  const jdInput = document.getElementById("jdTextInput");
  if (jdInput && dict.placeholder_jd) {
    jdInput.placeholder = dict.placeholder_jd;
  }
}

// ----------------------------------------------------------------------------
// 5. EVENT LISTENERS
// ----------------------------------------------------------------------------
function setupEventListeners() {
  // Rang (Color) selection
  document.querySelectorAll(".color-dot").forEach(dot => {
    dot.addEventListener("click", () => {
      currentColor = dot.dataset.color;
      document.documentElement.setAttribute("data-color", currentColor);
      localStorage.setItem("cv_color", currentColor);
      document.querySelectorAll(".color-dot").forEach(d => d.classList.remove("active"));
      dot.classList.add("active");
    });
  });

  // Theme (Dark/Light) toggle
  const themeBtn = document.getElementById("themeToggleBtn");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      currentTheme = currentTheme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", currentTheme);
      localStorage.setItem("cv_theme", currentTheme);
      themeBtn.innerHTML = currentTheme === "dark" ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    });
  }

  // Lang selection
  const langSelect = document.getElementById("languageSelect");
  if (langSelect) {
    langSelect.addEventListener("change", (e) => {
      currentLang = e.target.value;
      localStorage.setItem("cv_lang", currentLang);
      applyTranslations(currentLang);
      // If results are already visible, re-analyze or re-render text
      const cvText = document.getElementById("cvTextInput").value.trim();
      if (cvText) {
        analyzeCV();
      }
    });
  }

  // Load sample CV
  const sampleBtn = document.getElementById("loadSampleBtn");
  if (sampleBtn) {
    sampleBtn.addEventListener("click", () => {
      document.getElementById("cvTextInput").value = SAMPLE_CVS.software_eng;
      analyzeCV();
    });
  }

  // Clear CV
  const clearBtn = document.getElementById("clearCvBtn");
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      document.getElementById("cvTextInput").value = "";
      document.getElementById("jdTextInput").value = "";
      document.getElementById("emptyState").classList.remove("hidden");
      document.getElementById("resultsContainer").classList.add("hidden");
    });
  }

  // Accordion toggle for JD
  const jdToggle = document.getElementById("jdToggle");
  const jdContent = document.getElementById("jdContent");
  if (jdToggle && jdContent) {
    jdToggle.addEventListener("click", () => {
      jdToggle.classList.toggle("open");
      jdContent.classList.toggle("open");
    });
  }

  // File Upload
  const fileInput = document.getElementById("fileInput");
  if (fileInput) {
    fileInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          document.getElementById("cvTextInput").value = event.target.result;
          analyzeCV();
        };
        reader.readAsText(file);
      }
    });
  }

  // Drag and Drop
  const dropZone = document.getElementById("dropZone");
  if (dropZone) {
    ['dragenter', 'dragover'].forEach(eventName => {
      dropZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        dropZone.style.borderColor = "var(--primary)";
      }, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
      dropZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        dropZone.style.borderColor = "";
      }, false);
    });

    dropZone.addEventListener('drop', (e) => {
      const dt = e.dataTransfer;
      const file = dt.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          document.getElementById("cvTextInput").value = event.target.result;
          analyzeCV();
        };
        reader.readAsText(file);
      }
    });
  }

  // Analyze Button
  const analyzeBtn = document.getElementById("analyzeBtn");
  if (analyzeBtn) {
    analyzeBtn.addEventListener("click", () => {
      analyzeCV();
    });
  }

  // Print / PDF Button
  const printBtn = document.getElementById("printReportBtn");
  if (printBtn) {
    printBtn.addEventListener("click", () => {
      window.print();
    });
  }
}

// ----------------------------------------------------------------------------
// 6. CV ANALYSIS & ATS SCORING ENGINE
// ----------------------------------------------------------------------------
function analyzeCV() {
  const cvText = document.getElementById("cvTextInput").value.trim();
  const jdText = document.getElementById("jdTextInput").value.trim();

  if (!cvText) {
    alert(currentLang === "hi" ? "कृपया पहले अपना सीवी पेस्ट करें!" : "Please paste or load your CV text first!");
    return;
  }

  // Hide empty state, show results
  document.getElementById("emptyState").classList.add("hidden");
  document.getElementById("resultsContainer").classList.remove("hidden");

  // 1. Basic Counts
  const words = cvText.match(/\b[A-Za-z0-9+#.-]+\b/g) || [];
  const wordCount = words.length;
  const bulletMatches = cvText.match(/^[\s]*[•\-\*]\s+/gm) || [];
  const bulletCount = bulletMatches.length;

  // 2. Metrics & Quantifiable Impact ($ , % , numbers, multipliers)
  const metricMatches = cvText.match(/(\d+(\.\d+)?%|\$\d+[\d,]*[kKmMbB]?|\d+[\d,]*\+?\s*(users|clients|team|engineers|years|saving|revenue|daily|monthly|annual|growth|uptime)|[0-9]+x\b)/gi) || [];
  const quantCount = metricMatches.length;

  // 3. Action Verbs
  const lowerCV = cvText.toLowerCase();
  const foundActionVerbs = ACTION_VERBS.filter(verb => {
    const reg = new RegExp(`\\b${verb}\\b`, 'i');
    return reg.test(lowerCV);
  });

  // 4. Skills extraction
  const foundSkills = TECH_SKILLS.filter(skill => {
    const escaped = skill.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    const reg = new RegExp(`\\b${escaped}\\b`, 'i');
    return reg.test(cvText);
  });

  // 5. Sections Detection
  const sectionChecks = [
    { id: "contact", name: "Contact & Links", regex: /(email|phone|linkedin|github|\+?\d{10,}|@)/i },
    { id: "summary", name: "Summary / Objective", regex: /(summary|profile|about me|objective)/i },
    { id: "experience", name: "Experience / Work History", regex: /(experience|employment|work history|career)/i },
    { id: "education", name: "Education", regex: /(education|university|college|bachelor|master|degree|phd|gpa)/i },
    { id: "skills", name: "Skills & Tools", regex: /(skills|technologies|tools|competencies)/i },
    { id: "projects", name: "Projects & Highlights", regex: /(projects|open source|portfolio|hackathon)/i }
  ];

  const detectedSections = sectionChecks.map(s => ({
    ...s,
    present: s.regex.test(cvText)
  }));

  // 6. Weak Clichés
  const foundWeakWords = WEAK_WORDS.filter(w => {
    const reg = new RegExp(`\\b${w}\\b`, 'i');
    return reg.test(lowerCV);
  });

  // 7. Calculate Scores
  // Metric Score (0 - 100)
  const metricScore = Math.min(100, Math.round((quantCount / 6) * 100));

  // Structure Score (0 - 100)
  const presentSectionsCount = detectedSections.filter(s => s.present).length;
  const structureScore = Math.round((presentSectionsCount / detectedSections.length) * 100);

  // Action Verbs Score (0 - 100)
  const actionScore = Math.min(100, Math.round((foundActionVerbs.length / 7) * 100));

  // ATS / Overall Score Calculation
  let lengthPenalty = 0;
  if (wordCount < 250) lengthPenalty = 20;
  else if (wordCount > 1200) lengthPenalty = 15;

  let overall = Math.round(
    (structureScore * 0.35) +
    (metricScore * 0.35) +
    (actionScore * 0.20) +
    (Math.min(100, foundSkills.length * 10) * 0.10) -
    lengthPenalty
  );
  overall = Math.max(10, Math.min(99, overall));

  // Job Description Match (if provided)
  let jdMatchPercent = null;
  if (jdText) {
    const jdWords = jdText.toLowerCase().match(/\b[a-z0-9+#.-]{3,}\b/g) || [];
    const jdTechSkills = TECH_SKILLS.filter(skill => {
      const reg = new RegExp(`\\b${skill.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}\\b`, 'i');
      return reg.test(jdText);
    });

    if (jdTechSkills.length > 0) {
      const matched = jdTechSkills.filter(s => foundSkills.includes(s));
      jdMatchPercent = Math.round((matched.length / jdTechSkills.length) * 100);
    } else {
      const common = words.filter(w => jdWords.includes(w.toLowerCase()));
      jdMatchPercent = Math.min(100, Math.round((common.length / (words.length * 0.5)) * 100));
    }
  }

  // 8. Render UI Results
  renderScores(overall, metricScore, structureScore, actionScore, jdMatchPercent);
  renderStats(wordCount, bulletCount, quantCount, foundSkills.length);
  renderSections(detectedSections);
  renderSkills(foundSkills);
  renderSuggestions(detectedSections, quantCount, foundActionVerbs, foundWeakWords, wordCount, bulletCount);
  renderBulletEnhancements();
}

// ----------------------------------------------------------------------------
// 7. RENDER FUNCTIONS
// ----------------------------------------------------------------------------
function renderScores(overall, metric, structure, action, jdMatch) {
  const dict = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  // Overall Score Gauge
  const scoreValEl = document.getElementById("overallScoreVal");
  scoreValEl.textContent = overall;

  const circle = document.getElementById("overallCircle");
  const circumference = 2 * Math.PI * 42; // r=42 -> 263.89
  const offset = circumference - (overall / 100) * circumference;
  circle.style.strokeDasharray = `${circumference}`;
  circle.style.strokeDashoffset = offset;

  // Overall Badge
  const badgeEl = document.getElementById("overallBadge");
  badgeEl.className = "badge";
  if (overall >= 80) {
    badgeEl.textContent = dict.status_excellent;
    badgeEl.classList.add("excellent");
  } else if (overall >= 65) {
    badgeEl.textContent = dict.status_good;
    badgeEl.classList.add("good");
  } else if (overall >= 45) {
    badgeEl.textContent = dict.status_average;
    badgeEl.classList.add("average");
  } else {
    badgeEl.textContent = dict.status_poor;
    badgeEl.classList.add("poor");
  }

  // Sub-scores
  document.getElementById("metricScoreVal").textContent = `${metric}%`;
  document.getElementById("metricProgress").style.width = `${metric}%`;

  document.getElementById("structureScoreVal").textContent = `${structure}%`;
  document.getElementById("structureProgress").style.width = `${structure}%`;

  document.getElementById("actionScoreVal").textContent = `${action}%`;
  document.getElementById("actionProgress").style.width = `${action}%`;

  // JD Match
  const jdValEl = document.getElementById("atsMatchVal");
  const jdProgEl = document.getElementById("atsProgress");
  if (jdMatch !== null) {
    jdValEl.textContent = `${jdMatch}%`;
    jdProgEl.style.width = `${jdMatch}%`;
  } else {
    jdValEl.textContent = "N/A";
    jdProgEl.style.width = "0%";
  }
}

function renderStats(words, bullets, quants, skills) {
  document.getElementById("statWordCount").textContent = words;
  document.getElementById("statBulletCount").textContent = bullets;
  document.getElementById("statQuantCount").textContent = quants;
  document.getElementById("statSkillsCount").textContent = skills;
}

function renderSections(sections) {
  const container = document.getElementById("sectionBadges");
  container.innerHTML = "";

  sections.forEach(s => {
    const tag = document.createElement("span");
    tag.className = `tag ${s.present ? "detected" : "missing"}`;
    tag.innerHTML = `<i class="fa-solid ${s.present ? "fa-check" : "fa-xmark"}"></i> ${s.name}`;
    container.appendChild(tag);
  });
}

function renderSkills(skills) {
  const container = document.getElementById("skillsCloud");
  container.innerHTML = "";

  if (skills.length === 0) {
    container.innerHTML = `<span class="tag" style="color:var(--text-muted);">No major technical skills recognized. Add explicit keywords in a 'Skills' section.</span>`;
    return;
  }

  skills.forEach(skill => {
    const tag = document.createElement("span");
    tag.className = "tag skill-tag";
    tag.innerHTML = `<i class="fa-solid fa-code"></i> ${skill}`;
    container.appendChild(tag);
  });
}

function renderSuggestions(sections, quantCount, actionVerbs, weakWords, wordCount, bulletCount) {
  const list = document.getElementById("suggestionsList");
  list.innerHTML = "";

  const isHindi = currentLang === "hi";

  // Check Missing Sections
  const missing = sections.filter(s => !s.present);
  if (missing.length > 0) {
    const missingNames = missing.map(m => m.name).join(", ");
    addSuggestion(list, "crit",
      isHindi ? "अनुपस्थित अनुभाग" : "Missing Key Sections",
      isHindi ? `आपके सीवी में निम्नलिखित खंड नहीं मिले: ${missingNames}। इन्हें तुरंत जोड़ें ताकि ATS फिल्टर पास हो सके।` : `Could not detect sections: ${missingNames}. Ensure you have clear headers.`
    );
  }

  // Metrics suggestion
  if (quantCount < 3) {
    addSuggestion(list, "warn",
      isHindi ? "संख्यात्मक परिणामों (Metrics) की कमी" : "Quantify Achievements with Data",
      isHindi ? "अपनी उपलब्धियों में प्रतिशत (%), बचत ($), उपयोगकर्ताओं की संख्या या गति सुधार जोड़ें (उदा. 'बिक्री में 25% की वृद्धि की')।" : "Add measurable results like %, $, time saved, or user numbers (e.g. 'Improved response time by 35%')."
    );
  } else {
    addSuggestion(list, "good",
      isHindi ? "शानदार मेट्रिक्स एवं आंकड़े!" : "Strong Impact Quantification",
      isHindi ? `बधाई! आपके बायोडाटा में ${quantCount} संख्यात्मक आंकड़े मिले हैं। यह नियोक्ताओं को आकर्षित करता है।` : `Great work! Found ${quantCount} quantified metrics showcasing high business impact.`
    );
  }

  // Action Verbs
  if (actionVerbs.length < 4) {
    addSuggestion(list, "warn",
      isHindi ? "सक्रिय क्रियाओं (Action Verbs) का उपयोग बढ़ाएं" : "Use Powerful Action Verbs",
      isHindi ? "बुलेट पॉइंट्स को मजबूत शब्दों जैसे 'Architected', 'Spearheaded', 'Optimized', 'Delivered' से शुरू करें।" : "Start your bullet points with strong verbs like 'Spearheaded', 'Automated', 'Engineered', 'Optimized'."
    );
  }

  // Weak Clichés
  if (weakWords.length > 0) {
    addSuggestion(list, "warn",
      isHindi ? "सामान्य क्लीशे शब्दों को हटाएं" : "Avoid Passive Phrases & Clichés",
      isHindi ? `सामान्य शब्दों जैसे '${weakWords.slice(0, 3).join(", ")}' के बजाय वास्तविक परिणाम और ठोस कार्य लिखें।` : `Replace generic phrases like '${weakWords.slice(0, 3).join(", ")}' with proven achievements.`
    );
  }

  // Word count check
  if (wordCount < 300) {
    addSuggestion(list, "warn",
      isHindi ? "सीवी बहुत संक्षिप्त है" : "Resume Content is Too Brief",
      isHindi ? "आपका सीवी 300 शब्दों से कम है। कृपया विस्तृत प्रोजेक्ट और कार्य अनुभव जोड़ें।" : "Your resume is under 300 words. Expand on key responsibilities, tools, and technical scope."
    );
  } else if (wordCount > 1000) {
    addSuggestion(list, "warn",
      isHindi ? "सीवी बहुत लंबा है" : "Resume May Be Overly Lengthy",
      isHindi ? "आपका सीवी 1000 शब्दों से अधिक है। यदि अनुभव 5 वर्ष से कम है तो इसे 1-2 पृष्ठों में संक्षिप्त करें।" : "Your resume exceeds 1000 words. Keep it concise, focused, and under 2 pages."
    );
  }
}

function addSuggestion(container, type, title, message) {
  const item = document.createElement("div");
  item.className = `suggestion-item ${type}`;

  let icon = "fa-circle-exclamation";
  if (type === "good") icon = "fa-circle-check";
  if (type === "warn") icon = "fa-triangle-exclamation";

  item.innerHTML = `
    <i class="fa-solid ${icon} sug-icon"></i>
    <div class="sug-text">
      <h5>${title}</h5>
      <p>${message}</p>
    </div>
  `;
  container.appendChild(item);
}

function renderBulletEnhancements() {
  const container = document.getElementById("bulletTransformation");
  const isHindi = currentLang === "hi";

  const examples = [
    {
      before: isHindi ? "वेबसाइट बैकएंड पर काम किया और बग ठीक किए।" : "Worked on the website backend and fixed bugs.",
      after: isHindi ? "FastAPI और Redis का उपयोग करके बैकएंड को पुनः डिज़ाइन किया, जिससे API लेटेंसी 40% कम हुई और 500k+ मासिक उपयोगकर्ताओं को सेवा मिली।" : "Architected high-throughput FastAPI backend with Redis caching, reducing p99 latency by 42% for 500K+ monthly active users."
    },
    {
      before: isHindi ? "टीम के सदस्यों की मदद की और कोड रिव्यू किया।" : "Helped team members and reviewed code.",
      after: isHindi ? "6 इंजीनियरों की टीम का नेतृत्व किया, CI/CD ऑटोमेशन लागू किया और कोड रिव्यू टर्नअराउंड समय को 4 दिन से घटाकर 6 घंटे किया।" : "Mentored 6 junior engineers and implemented automated GitHub Actions CI/CD, slashing deployment cycles from 4 days to 6 hours."
    }
  ];

  container.innerHTML = examples.map(ex => `
    <div class="transform-item">
      <div class="t-before">
        <span class="t-tag bad">${isHindi ? "कमजोर (Before)" : "Weak (Before)"}</span>
        <span>${ex.before}</span>
      </div>
      <div class="t-after">
        <span class="t-tag good">${isHindi ? "प्रभावशाली (After)" : "High Impact (After)"}</span>
        <span>${ex.after}</span>
      </div>
    </div>
  `).join("");
}
