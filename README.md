# ThinkShift AI — Your Decision Blind Spot Auditor

> **"Every decision has a blind spot."**  
> *AI-powered critical thinking that reveals what you may be missing — without deciding for you.*

[![React](https://img.shields.io/badge/React-18-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.1-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8.svg)](https://tailwindcss.com/)
[![Google Gemini API](https://img.shields.io/badge/AI-Google%20Gemini-orange.svg)](https://aistudio.google.com/)
[![Responsible AI](https://img.shields.io/badge/Responsible%20AI-Diagnostic%20Only-emerald.svg)](#responsible-ai-principles)

---

## 📌 Problem Statement

In high-stakes decisions (career shifts, startup commitments, major financial investments, relationship transitions), humans suffer from predictable cognitive traps:
- **Confirmation Bias:** Selectively noticing evidence that validates an emotional preference.
- **Inside View Syndrome:** Over-optimistically estimating timelines and energy without verifying historical base rates.
- **Hidden Assumptions:** Treating fragile, unverified beliefs as guaranteed baseline facts.
- **Unpriced Friction:** Discounting the daily compounding toll of commutes, administrative bureaucracy, or secondary logistics.
- **Advisor Misalignment:** Generic AI chatbots frequently provide hasty normative advice (*"You should take the internship!"*), taking away user agency and reinforcing superficial thinking.

---

## 💡 Solution: ThinkShift AI

**ThinkShift AI** is not a generic advice chatbot. It is a **Decision Blind Spot Auditor**.

It acts as a cognitive mirror that systematically probes your reasoning:
- It **never makes the decision for you**.
- It categorizes every factor using strict **epistemic tags**:
  - `FACT`: Indisputably verified data provided by the user.
  - `ASSUMPTION`: Unverified belief treated as truth.
  - `UNKNOWN`: Critical missing empirical data.
  - `NEEDS VERIFICATION`: Claims requiring empirical validation.
- It calculates an objective **Blind Spot Exposure Index** (0–100).
- It executes cognitive stress tests: **Active Cognitive Inversion (The Flip Test)**, **6-Lens Multi-Perspective Simulation**, and **Pre-Mortem Failure Analysis**.

---

## 🚀 Key Features

### 1. Structured Decision Analyzer
Elicits the 5 essential pillars of your deliberation:
1. *What decision are you considering?*
2. *What factors are influencing you?*
3. *Why are you currently leaning this way?*
4. *What constraints or concerns do you have?*
5. *How confident are you in your current reasoning?* (0–100 slider with dynamic uncertainty calibration)

### 2. Comprehensive Blind Spot Report (The WOW Screen)
- **Blind Spot Exposure Gauge:** Visual radial arc quantifying vulnerability to unexamined assumptions.
- **Reversibility Index:** Evaluates whether the decision is **Type 1 (One-Way Door / Irreversible)** or **Type 2 (Two-Way Door / Reversible)**.
- **Pre-Mortem Scenario Matrix:** Side-by-side analysis of the plausible best-case versus cascade-failure worst-case.
- **🔍 Hidden Assumptions:** Classified by impact level (`HIGH`, `MEDIUM`, `LOW`) with detailed *"Why Questionable"* breakdowns.
- **🧩 Missing Information:** Identifies unknown variables that could pivot the decision calculus.
- **⚠️ Potential Contradictions:** Pinpoints tensions between desired outcomes and stated constraints.
- **🧠 Possible Cognitive Biases:** Non-diagnostic identification of anchoring, optimism bias, sunk cost, or present bias with actionable reframes.
- **👥 Stakeholder Perspectives:** Uncovers unseen concerns of managers, family, project teammates, and future selves.
- **⏳ Short vs. Long-Term Dynamics:** Contrasts days 1–90 immediate friction with years 1–5 compounding trajectories.
- **❓ Questions to Investigate:** Interactive checklist allowing users to verify items one by one.
- **🔬 Falsifiability Tripwires:** Specific discoveries that would rationally compel a change of mind.

### 3. The Flip Test (Active Cognitive Inversion)
- Generates the steelmanned counter-thesis for the opposite path or walking away.
- Details the **unappreciated upside** of the inverse route and the **hidden drag** of the favored path.
- Asks the pivotal reflection inquiry: *"Which argument exposed something you hadn't considered?"*

### 4. 6-Lens Perspective Shift
Challenges your reasoning through 6 distinct archetypes:
1. **YOU:** Current mindset & ambition.
2. **SKEPTIC:** Cold realist exposing hidden costs and drag.
3. **FUTURE YOU (3 Years Out):** Retrospective evaluation of long-term leverage.
4. **MENTOR:** Veteran guidance focused on code quality, leverage, and mentorship.
5. **AFFECTED PERSON:** Family or collaborators who absorb secondary stress.
6. **DEVIL'S ADVOCATE:** Counter-strategist arguing for walking away completely.

### 5. On-Demand Cognitive Stress-Tests (Gemini Powered)
- *Challenge my biggest assumption*
- *What am I ignoring?*
- *What could go wrong? (Pre-Mortem)*
- *What would change my mind?*
- *Show me the strongest counterargument*

### 6. One-Click Demo Mode
Instant one-click analysis of the exact hackathon reference problem:
> **Decision:** *"Should I accept a 6-month software engineering internship?"*  
> **Factors:** ₹35k/mo stipend, 45h/wk, 25km commute, early startup, possible return offer, final semester college capstone.

### 7. Decision History & Persistence
- Automatically saves audits to browser `localStorage`.
- Restore past analyses with one click.
- Export entire audit history to JSON or download individual reports as formatted Markdown (`.md`) or printable PDF briefs.

---

## 🛡️ Responsible AI Principles

1. **Non-Normative:** ThinkShift never commands the user (*"Accept the internship"*, *"Do not buy the home"*). Instead, it states: *"Here are areas you may want to investigate."*
2. **Epistemic Classifications:** Clear distinction between verified facts and assumptions.
3. **Non-Diagnostic:** Does not diagnose psychological conditions. Biases are presented as possibilities (*"Possible confirmation bias"*, *"Consider whether anchoring is present"*).
4. **Falsifiability First:** Helps users identify what evidence would prove their reasoning wrong before commitment.

---

## 🏗️ Architecture & Gemini Integration

```
┌─────────────────────────────────────────────────────────────┐
│                      Client (Browser)                       │
│  React 18 + TypeScript + Tailwind CSS + Lucide Icons        │
│  - LandingHero / DecisionForm / ReportView / FlipTest       │
│  - LocalStorage (Decision History & In-Memory Key Override) │
└──────────────┬───────────────────────────────▲──────────────┘
               │                               │
               │ HTTP POST /api/proxy          │ JSON Response
               ▼                               │
┌─────────────────────────────────────────────────────────────┐
│             Secure Vite Server / Express Middleware         │
│  - Loads GEMINI_API_KEY from process.env / .env             │
│  - Never exposes server secrets to frontend client bundle   │
│  - Enforces JSON Schema & System Instruction Persona        │
└──────────────┬───────────────────────────────▲──────────────┘
               │                               │
               │ HTTPS POST                    │ Structured JSON
               ▼                               │
┌─────────────────────────────────────────────────────────────┐
│                Google Gemini 1.5 Flash API                  │
│       https://generativelanguage.googleapis.com/...         │
└─────────────────────────────────────────────────────────────┘
```

### JSON Schema Output Specification

```json
{
  "decisionSummary": "String",
  "blindSpotExposure": 0,
  "reversibility": "Type 1 or Type 2",
  "bestCase": "String",
  "worstCase": "String",
  "hiddenAssumptions": [
    {
      "assumption": "String",
      "classification": "ASSUMPTION | NEEDS VERIFICATION",
      "impact": "HIGH | MEDIUM | LOW",
      "whyQuestionable": "String"
    }
  ],
  "missingInformation": [
    {
      "factor": "String",
      "classification": "UNKNOWN | NEEDS VERIFICATION",
      "whyItMatters": "String"
    }
  ],
  "potentialContradictions": [
    {
      "tension": "String",
      "explanation": "String"
    }
  ],
  "possibleBiases": [
    {
      "bias": "String",
      "evidence": "String",
      "reframe": "String"
    }
  ],
  "stakeholderPerspectives": [
    {
      "stakeholder": "String",
      "viewpoint": "String",
      "unseenConcern": "String"
    }
  ],
  "shortTermConsiderations": ["String"],
  "longTermConsiderations": ["String"],
  "questionsToInvestigate": ["String"],
  "evidenceThatCouldChangeMind": ["String"],
  "reflectionQuestions": ["String"]
}
```

---

## 🛠️ Tech Stack

- **Frontend:** React 18, TypeScript, Tailwind CSS
- **Icons & UI:** Lucide React, Canvas Confetti
- **Build Tool:** Vite 6
- **AI Engine:** Google Gemini API (`gemini-1.5-flash`)
- **Persistence:** LocalStorage (zero external database required)
- **Deployment:** Vercel / Netlify / Node.js

---

## ⚡ Quick Start & Local Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/thinkshift-ai.git
cd thinkshift-ai
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Open `.env` and add your Google Gemini API key:
```env
GEMINI_API_KEY=AIzaSy...
```
*(You can get a free Gemini API key from [Google AI Studio](https://aistudio.google.com/app/apikey). If omitted, the app runs smoothly in Demo Mode with full sample data).*

### 4. Run Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

---

## 🚢 Deployment

### Deploy to Vercel
1. Push this repository to GitHub.
2. Import the project into [Vercel](https://vercel.com).
3. Set the Environment Variable: `GEMINI_API_KEY = your_gemini_key`.
4. Deploy!

### Static Hosting (GitHub Pages / Netlify)
You can build the production assets:
```bash
npm run build
```
Users can input their Gemini API key directly in the application's **Gemini API Settings** modal, which stores it securely in their own browser's local storage.

---

## 🔮 Future Improvements

1. **Collaborative Multi-Rater Mode:** Allow co-founders or mentors to audit the same decision and generate a comparative blind-spot overlap matrix.
2. **Decision Outcome Journal:** Set a 3-month or 6-month check-in reminder to record what actually happened, training personal decision calibration.
3. **Voice Inquiry Mode:** Audio conversational inquiry to interrogate assumptions while driving or walking.
4. **Monte Carlo Probability Modeling:** Simulate financial and career payoff curves based on user confidence intervals.

---

## 📜 License
MIT License. Created for the ThinkShift AI Hackathon.
