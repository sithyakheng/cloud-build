# Cloud Build — cloudbuild.com (placeholder)

Landing site for **Cloud Build**, a web design & build studio. Built with
Next.js (App Router) + TypeScript + Tailwind, matching your NestKH stack so
it deploys the same way.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Before you launch — two things to fill in

1. **Social links** — open `components/ContactSection.tsx` and replace the
   `"#"` placeholders with your real Facebook, Telegram, TikTok, and
   Instagram links.
2. **Portfolio** — open `components/WorkSection.tsx` and add your projects
   to the `projects` array at the top (there's an example for NestKH
   already commented in). Until you add any, the section shows two
   "coming soon" placeholder frames — that's intentional, not a bug.

## Deploy to Vercel

1. Push this to a new GitHub repo (see below).
2. Go to vercel.com → New Project → import the repo.
3. No environment variables needed — it just deploys.
4. Point your domain at it once you're ready.

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial Cloud Build landing page"
git branch -M main
git remote add origin https://github.com/sithyakheng/YOUR-REPO-NAME.git
git push -u origin main
```
