"""
Unit tests for Smart CV Reviewer
"""

import unittest
from cv_reviewer import analyze_cv_text, COLOR_THEMES, MESSAGES

class TestCVReviewer(unittest.TestCase):

    def setUp(self):
        with open("sample_cv.txt", "r", encoding="utf-8") as f:
            self.sample_text = f.read()

    def test_analysis_sections_detection(self):
        res = analyze_cv_text(self.sample_text)
        self.assertTrue(res["sections"]["Contact Info"])
        self.assertTrue(res["sections"]["Experience"])
        self.assertTrue(res["sections"]["Education"])
        self.assertTrue(res["sections"]["Skills"])
        self.assertTrue(res["sections"]["Projects"])

    def test_metrics_and_skills_detection(self):
        res = analyze_cv_text(self.sample_text)
        self.assertGreaterEqual(res["metric_count"], 3)
        self.assertIn("Python", res["found_skills"])
        self.assertIn("React", res["found_skills"])
        self.assertIn("AWS", res["found_skills"])
        self.assertGreater(res["overall_score"], 70)

    def test_empty_or_short_cv(self):
        res = analyze_cv_text("Simple text with no headers.")
        self.assertLess(res["overall_score"], 50)
        self.assertEqual(res["metric_count"], 0)

    def test_theme_and_lang_dictionaries(self):
        self.assertIn("indigo", COLOR_THEMES)
        self.assertIn("emerald", COLOR_THEMES)
        self.assertIn("hi", MESSAGES)
        self.assertIn("es", MESSAGES)
        self.assertIn("en", MESSAGES)

if __name__ == "__main__":
    unittest.main()
