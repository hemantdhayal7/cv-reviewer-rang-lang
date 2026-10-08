#!/usr/bin/env python3
"""
Smart CV Reviewer & ATS Analyzer (Python CLI)
Supports dynamic Rang (Terminal Color Themes) and Lang (Multilingual Reports).
"""

import re
import sys
import argparse
from typing import Dict, List, Any

# -----------------------------------------------------------------------------
# RANG (TERMINAL COLOR THEMES)
# -----------------------------------------------------------------------------
COLOR_THEMES = {
    "indigo": {
        "primary": "\033[94m",      # Blue / Indigo
        "accent": "\033[96m",       # Cyan
        "success": "\033[92m",      # Green
        "warning": "\033[93m",      # Yellow
        "danger": "\033[91m",       # Red
        "bold": "\033[1m",
        "reset": "\033[0m"
    },
    "emerald": {
        "primary": "\033[92m",      # Green
        "accent": "\033[96m",       # Cyan
        "success": "\033[92m",
        "warning": "\033[93m",
        "danger": "\033[91m",
        "bold": "\033[1m",
        "reset": "\033[0m"
    },
    "crimson": {
        "primary": "\033[91m",      # Red
        "accent": "\033[95m",       # Magenta
        "success": "\033[92m",
        "warning": "\033[93m",
        "danger": "\033[91m",
        "bold": "\033[1m",
        "reset": "\033[0m"
    },
    "amber": {
        "primary": "\033[93m",      # Yellow / Amber
        "accent": "\033[97m",       # White
        "success": "\033[92m",
        "warning": "\033[93m",
        "danger": "\033[91m",
        "bold": "\033[1m",
        "reset": "\033[0m"
    },
    "violet": {
        "primary": "\033[95m",      # Magenta / Violet
        "accent": "\033[94m",       # Blue
        "success": "\033[92m",
        "warning": "\033[93m",
        "danger": "\033[91m",
        "bold": "\033[1m",
        "reset": "\033[0m"
    }
}

# -----------------------------------------------------------------------------
# LANG (MULTILINGUAL LOCALIZATION)
# -----------------------------------------------------------------------------
MESSAGES = {
    "en": {
        "title": "=== SMART CV REVIEWER & ATS ANALYZER ===",
        "overall_score": "Overall Resume Strength:",
        "metrics_score": "Impact & Quantified Metrics:",
        "structure_score": "Section & Structure Completeness:",
        "action_score": "Action Verbs & Leadership:",
        "skills_detected": "Detected Technical Skills:",
        "sections_detected": "Detected Sections:",
        "tips_heading": "Actionable Suggestions for Improvement:",
        "tip_metrics_low": "Add more measurable results (%, $, users, latency, latency improvement).",
        "tip_metrics_high": "Great job! Strong quantitative metrics detected.",
        "tip_action_low": "Start bullet points with high-impact action verbs (e.g., Architected, Spearheaded).",
        "tip_missing_sec": "Missing essential resume sections: {sections}",
        "tip_word_low": "Resume seems brief ({words} words). Consider adding detailed project highlights.",
        "word_count": "Total Word Count:",
        "bullets_count": "Bullet Points Found:"
    },
    "hi": {
        "title": "=== स्मार्ट सीवी समीक्षक एवं एटीएस विश्लेषक ===",
        "overall_score": "कुल बायोडाटा स्कोर:",
        "metrics_score": "संख्यात्मक प्रभाव एवं आंकड़े:",
        "structure_score": "संरचना एवं अनुभाग पूर्णता:",
        "action_score": "सक्रिय क्रिया शब्द (Action Verbs):",
        "skills_detected": "पहचाने गए तकनीकी कौशल:",
        "sections_detected": "पहचाने गए अनुभाग:",
        "tips_heading": "सुधार के लिए महत्वपूर्ण सुझाव:",
        "tip_metrics_low": "उपलब्धियों में अधिक संख्यात्मक परिणाम (%, $, बचत, गति सुधार) जोड़ें।",
        "tip_metrics_high": "उत्कृष्ट! बायोडाटा में प्रभावशाली संख्यात्मक आंकड़े मौजूद हैं।",
        "tip_action_low": "वाक्यों को मजबूत क्रियाओं जैसे 'Architected', 'Spearheaded' से शुरू करें।",
        "tip_missing_sec": "आवश्यक अनुभाग अनुपस्थित हैं: {sections}",
        "tip_word_low": "सीवी संक्षिप्त प्रतीत होता है ({words} शब्द)। प्रोजेक्ट का विवरण जोड़ें।",
        "word_count": "कुल शब्द संख्या:",
        "bullets_count": "पहचाने गए बुलेट पॉइंट्स:"
    },
    "es": {
        "title": "=== OPTIMIZADOR Y REVISOR DE CV ATS ===",
        "overall_score": "Fuerza General del CV:",
        "metrics_score": "Impacto y Métricas Cuantitativas:",
        "structure_score": "Estructura y Secciones:",
        "action_score": "Verbos de Acción:",
        "skills_detected": "Habilidades Técnicas Detectadas:",
        "sections_detected": "Secciones Detectadas:",
        "tips_heading": "Consejos para Mejorar tu CV:",
        "tip_metrics_low": "Agrega más resultados cuantificables (%, $, usuarios, tiempo ahorrado).",
        "tip_metrics_high": "¡Excelente! Se detectaron métricas cuantitativas sólidas.",
        "tip_action_low": "Comienza los puntos con verbos de acción fuertes.",
        "tip_missing_sec": "Secciones importantes no encontradas: {sections}",
        "tip_word_low": "El CV parece muy breve ({words} palabras). Agrega más detalles.",
        "word_count": "Total de Palabras:",
        "bullets_count": "Puntos Clave Detectados:"
    }
}

TECH_SKILLS = [
    "Python", "JavaScript", "TypeScript", "React", "Node.js", "Next.js", "Java", "C++",
    "Go", "Rust", "Swift", "Kotlin", "SQL", "PostgreSQL", "MongoDB", "Redis", "GraphQL",
    "AWS", "GCP", "Azure", "Docker", "Kubernetes", "CI/CD", "Terraform", "Git", "GitHub",
    "Agile", "Microservices", "Linux", "Machine Learning", "FastAPI", "Django"
]

ACTION_VERBS = [
    "architected", "accelerated", "automated", "built", "boosted", "created", "delivered",
    "deployed", "designed", "developed", "engineered", "executed", "expanded", "generated",
    "implemented", "improved", "increased", "launched", "led", "mentored", "migrated",
    "optimized", "orchestrated", "reduced", "revamped", "scaled", "spearheaded", "transformed"
]

SECTION_PATTERNS = {
    "Contact Info": r"(email|phone|linkedin|github|\+?\d{10,}|@)",
    "Summary / Objective": r"(summary|profile|about me|objective)",
    "Experience": r"(experience|employment|work history|career)",
    "Education": r"(education|university|college|bachelor|master|degree|phd|gpa)",
    "Skills": r"(skills|technologies|tools|competencies)",
    "Projects": r"(projects|portfolio|open source|hackathon)"
}


def analyze_cv_text(text: str) -> Dict[str, Any]:
    """Analyzes CV text for metrics, structure, verbs, and keywords."""
    words = re.findall(r"\b[A-Za-z0-9+#.-]+\b", text)
    word_count = len(words)
    bullets = re.findall(r"^[\s]*[•\-\*]\s+", text, re.MULTILINE)
    bullet_count = len(bullets)

    # Quantifiable metrics: %, $, numbers with units
    metrics = re.findall(
        r"(\d+(\.\d+)?%|\$\d+[\d,]*[kKmMbB]?|\d+[\d,]*\+?\s*(users|clients|team|engineers|years|saving|revenue|daily|monthly|uptime)|[0-9]+x\b)",
        text,
        re.IGNORECASE
    )
    metric_count = len(metrics)

    # Action verbs
    lower_text = text.lower()
    found_verbs = [v for v in ACTION_VERBS if re.search(r"\b" + v + r"\b", lower_text)]

    # Skills
    found_skills = []
    for skill in TECH_SKILLS:
        if re.search(r"\b" + re.escape(skill) + r"\b", text, re.IGNORECASE):
            found_skills.append(skill)

    # Sections
    sections = {}
    for name, pattern in SECTION_PATTERNS.items():
        sections[name] = bool(re.search(pattern, text, re.IGNORECASE))

    # Scores (0-100)
    metric_score = min(100, int((metric_count / 5) * 100))
    present_sec_count = sum(1 for v in sections.values() if v)
    structure_score = int((present_sec_count / len(sections)) * 100)
    action_score = min(100, int((len(found_verbs) / 6) * 100))

    length_penalty = 0
    if word_count < 200:
        length_penalty = 20
    elif word_count > 1200:
        length_penalty = 15

    overall_score = max(10, min(99, int(
        (structure_score * 0.35) +
        (metric_score * 0.35) +
        (action_score * 0.20) +
        (min(100, len(found_skills) * 10) * 0.10) -
        length_penalty
    )))

    return {
        "word_count": word_count,
        "bullet_count": bullet_count,
        "metric_count": metric_count,
        "found_verbs": found_verbs,
        "found_skills": found_skills,
        "sections": sections,
        "metric_score": metric_score,
        "structure_score": structure_score,
        "action_score": action_score,
        "overall_score": overall_score
    }


def print_report(res: Dict[str, Any], lang: str = "en", rang: str = "indigo"):
    """Prints a styled, colorized report with multi-language support."""
    c = COLOR_THEMES.get(rang, COLOR_THEMES["indigo"])
    msg = MESSAGES.get(lang, MESSAGES["en"])

    print("\n" + f"{c['primary']}{c['bold']}{msg['title']}{c['reset']}\n")
    print(f"{c['accent']}▶ {msg['overall_score']}{c['reset']} {c['bold']}{res['overall_score']}/100{c['reset']}")
    print(f"  • {msg['metrics_score']} {res['metric_score']}% ({res['metric_count']} metrics found)")
    print(f"  • {msg['structure_score']} {res['structure_score']}%")
    print(f"  • {msg['action_score']} {res['action_score']}% ({len(res['found_verbs'])} verbs found)")

    print(f"\n{c['accent']}▶ {msg['word_count']}{c['reset']} {res['word_count']} | {c['accent']}{msg['bullets_count']}{c['reset']} {res['bullet_count']}")

    # Sections check
    print(f"\n{c['primary']}{c['bold']}{msg['sections_detected']}{c['reset']}")
    for sec_name, present in res["sections"].items():
        status_sym = f"{c['success']}✓{c['reset']}" if present else f"{c['danger']}✗{c['reset']}"
        print(f"  [{status_sym}] {sec_name}")

    # Skills found
    print(f"\n{c['primary']}{c['bold']}{msg['skills_detected']}{c['reset']}")
    if res["found_skills"]:
        print("  " + ", ".join(f"{c['accent']}{s}{c['reset']}" for s in res["found_skills"]))
    else:
        print("  None detected.")

    # Actionable Tips
    print(f"\n{c['warning']}{c['bold']}{msg['tips_heading']}{c['reset']}")
    missing = [k for k, v in res["sections"].items() if not v]
    if missing:
        print(f"  {c['danger']}!{c['reset']} " + msg["tip_missing_sec"].format(sections=", ".join(missing)))

    if res["metric_count"] < 3:
        print(f"  {c['warning']}!{c['reset']} " + msg["tip_metrics_low"])
    else:
        print(f"  {c['success']}✓{c['reset']} " + msg["tip_metrics_high"])

    if len(res["found_verbs"]) < 4:
        print(f"  {c['warning']}!{c['reset']} " + msg["tip_action_low"])

    if res["word_count"] < 250:
        print(f"  {c['warning']}!{c['reset']} " + msg["tip_word_low"].format(words=res["word_count"]))

    print(f"\n{c['primary']}---------------------------------------------------{c['reset']}\n")


def main():
    parser = argparse.ArgumentParser(description="Smart CV Reviewer with Rang & Lang support")
    parser.add_argument("file", nargs="?", help="Path to CV text file (optional)")
    parser.add_argument("--lang", choices=["en", "hi", "es"], default="en", help="Language for output (en, hi, es)")
    parser.add_argument("--rang", choices=list(COLOR_THEMES.keys()), default="indigo", help="Color theme (indigo, emerald, crimson, amber, violet)")
    args = parser.parse_args()

    if args.file:
        try:
            with open(args.file, "r", encoding="utf-8") as f:
                content = f.read()
        except Exception as e:
            print(f"Error reading file {args.file}: {e}", file=sys.stderr)
            sys.exit(1)
    else:
        print("Enter/Paste your CV text below (Press Ctrl+D or Ctrl+Z when done):")
        content = sys.stdin.read()

    if not content.strip():
        print("No CV content provided.", file=sys.stderr)
        sys.exit(1)

    results = analyze_cv_text(content)
    print_report(results, lang=args.lang, rang=args.rang)


if __name__ == "__main__":
    main()
