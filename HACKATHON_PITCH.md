# ThinkShift AI — 3-Minute Hackathon Demo Script & Judge Q&A

> **Tagline:** "Every decision has a blind spot."  
> **Elevator Pitch:** "ThinkShift AI is a decision blind spot auditor that reveals what you may be missing in high-stakes reasoning — without deciding for you."

---

## ⏱️ 3-Minute Live Demo Walkthrough

### 0:00 – 0:30 | The Hook (The Problem with AI Advice)
- **Say:** *"When people face tough career or life decisions, they often turn to ChatGPT and ask: 'Should I accept this offer?' The AI usually gives a generic, confident recommendation: 'Yes, you should accept it!' That is dangerous. LLMs hallucinate certainty, rob users of agency, and reinforce confirmation bias."*
- **Show:** The ThinkShift AI landing page. Highlight the motto: *"ThinkShift does not make decisions for you. It helps you examine your reasoning."*

---

### 0:30 – 1:15 | The Decision Analyzer & Demo Case
- **Say:** *"Instead of a chatbot, ThinkShift is an analytical mirror. Let's look at a common student dilemma: accepting a 6-month startup internship during your final college semester with ₹35k stipend and a 25km commute."*
- **Click:** **"Try Demo"** (or load from presets).
- **Point out:** The 5 structured inputs:
  1. Core Decision
  2. Factors & Constraints
  3. Stated Reasoning
  4. Self-reported Confidence Slider (75% confidence)

---

### 1:15 – 2:15 | The "WOW" Blind Spot Report
- **Point out:**
  1. **Blind Spot Exposure Index (68/100):** Highlights high vulnerability to unexamined assumptions.
  2. **Type 1 vs Type 2 Reversibility:** Bezos framework — irreversible graduation timing vs reversible employment.
  3. **Epistemic Classifications:**
     - `FACT`: ₹35,000 stipend.
     - `ASSUMPTION`: High probability of full-time conversion.
     - `UNKNOWN`: The startup's verified financial runway.
     - `NEEDS VERIFICATION`: College capstone attendance exemption policy.
  4. **Pre-Mortem Failure Matrix:** Best case vs cascade failure scenario.
  5. **Potential Contradictions:** Desiring academic excellence while adding a 60-hour work+commute weekly burden.

---

### 2:15 – 2:45 | The Differentiators: Flip Test & Perspectives
- **Click:** **"The Flip Test"** tab → Click **"🔄 Flip My Thinking"**.
  - Show how Gemini builds the steelmanned case for walking away (preserving recruitment energy for top-tier off-campus drives).
- **Click:** **"6-Lens Perspectives"**.
  - Contrast the **Skeptic** (commute math), **Future You** (career capital in 3 years), and **Devil's Advocate** (walking away).
- **Click:** Instant Cognitive Challenge button: *"What am I ignoring?"*.

---

### 2:45 – 3:00 | Conclusion & Impact
- **Say:** *"ThinkShift replaces hasty artificial confidence with rigorous critical thinking. It turns generative AI into an epistemic auditor that makes human decision-makers sharper, more resilient, and less prone to expensive blind spots."*

---

## 🏆 Anticipated Judge Questions & Answers

### Q1: "Why not just ask ChatGPT or Claude to analyze my decision?"
> **Answer:** *"Generic chatbots are trained to be helpful agreeable conversationalists. They suffer from sycophancy (agreeing with the user's premise) and frequently spit out normative answers ('I recommend Option A'). ThinkShift's system prompt and UI enforce an epistemic diagnostic framework that strictly forbids recommendations, classifies premises into FACT vs ASSUMPTION vs UNKNOWN, and conducts pre-mortems and inversion tests."*

### Q2: "How is the Gemini API integrated?"
> **Answer:** *"We use Google's Gemini 1.5 Flash via a secure server proxy layer. The server enforces structured JSON output schema matching our TypeScript types. If the API is offline or unkeyed, the app degrades gracefully into a high-fidelity preset demo mode so it never crashes."*

### Q3: "How do you protect privacy?"
> **Answer:** *"Zero user tracking or cloud databases. All decision history is stored in local browser `localStorage`. API keys can be entered directly in browser memory or injected server-side."*
