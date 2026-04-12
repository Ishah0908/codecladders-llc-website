# Codecladders LLC Website

Premium, modern, production-ready company website for Codecladders LLC, built with Next.js App Router, TypeScript, and Tailwind CSS.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Fully responsive design
- SEO metadata per page

## Pages Included

- Home
- About Us
- IT Staffing
- Healthcare Staffing
- Employers
- Candidates
- Contact Us

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Open http://localhost:3000

## Production Validation

Run these before deployment:

```bash
npm run lint
npm run build
```

## Deploy to Vercel

1. Push this repository to GitHub.
2. Go to Vercel and choose New Project.
3. Import the GitHub repository.
4. Vercel auto-detects Next.js settings.
5. Keep default build settings:
	- Build Command: `next build`
	- Output: `.next`
6. Click Deploy.

## Vercel CLI (Optional)

```bash
npm i -g vercel
vercel
vercel --prod
```

## Notes

- Forms currently use placeholder behavior and can be connected to any backend/API.
- Replace placeholder contact details and testimonials with live company information.
