# TrustTerms

TrustTerms is a modern web application that analyzes Terms & Conditions and Privacy Policies to help users understand important risks before accepting them.

## Live Demo

https://trustterms-psi.vercel.app/

---

## Features

- Analyze pasted privacy policy text
- Analyze privacy policy URLs
- Detect risky legal clauses
- Risk scoring system
- Trust score visualization
- Responsive modern UI
- Backend API architecture
- Rule-based policy analysis engine
- Safe fallback handling
- Production-ready Next.js setup

---

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Next.js API Routes
- Cheerio
- Axios
- Lucide React
- Vercel Deployment

---

## Architecture

Frontend:
- React components
- Client-side state handling
- Responsive UI

Backend:
- API routes inside Next.js
- Rule-based analysis engine
- URL scraping pipeline
- Risk scoring system
- Safe error handling

---

## Risk Detection Categories

TrustTerms currently detects:

- Third-party data sharing
- Binding arbitration
- Targeted advertising
- Location tracking
- Data retention
- Data selling
- Biometric collection
- Account termination
- Auto-renewal clauses
- Liability waivers
- Children's data references

---

## Local Setup

Clone repository:

```bash
git clone https://github.com/MohammadZayaan/trustterms.git
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Environment Variables

Create:

```text
.env.local
```

Add:

```env
NEXT_PUBLIC_APP_NAME=TrustTerms
GEMINI_API_KEY=your_key_here
```

---

## Future Improvements

- AI-generated summaries
- Browser extension
- PDF upload support
- Policy comparison
- Saved analyses
- User authentication
- Highlighted risky clauses
- Chrome extension

---

## Deployment

Deployed on Vercel.

---

## License

MIT