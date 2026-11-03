# Dun-Rite Detailing & Coatings — website

Next.js (App Router) · React · TypeScript · Tailwind CSS v4 · Framer Motion. Deploys to Vercel as-is.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Things to connect / confirm before launch

1. **Quote + contact form delivery** — set `QUOTE_WEBHOOK_URL` (Vercel → Settings → Environment Variables) to any endpoint that accepts a JSON POST (Formspree, Make, Zapier, Apps Script…). Until set, the forms show an honest "not connected yet" notice with prefilled email / call / online-booking buttons. See `src/app/api/quote/route.ts`.
2. **Prices** — none were available on the existing site, so none are shown. Add them in `src/lib/content.ts`.
3. **Testimonials** — `TESTIMONIALS` in `src/lib/content.ts`. Two entries are short fragments; replace with the full original text.
4. **Social links** — Instagram and Facebook URLs were found via public listings; the old site's icons pointed at "#". Confirm in `SITE`.
5. **Domain** — set `NEXT_PUBLIC_SITE_URL` for canonical URLs / sitemap.

All copy, services and nav live in `src/lib/content.ts`.
