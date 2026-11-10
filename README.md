# Peer Ahammad — Portfolio

A React + TypeScript portfolio for AI/ML research and engineering work.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Deployment

The project is configured for Vercel. `vercel.json` rewrites application routes to `index.html`, allowing direct navigation to project and research detail pages.

Set the production site URL in deployment metadata if the domain changes. The canonical and Open Graph metadata currently point to `https://peerahamad.isonewho.codes`.

## Structure

- `src/data.ts` — project, research, internship and profile content.
- `src/App.tsx` — home page, project detail routes and research detail routes.
- `src/App.css` / `src/index.css` — visual system and responsive styles.
- `public/resume.pdf` — resume document.

## Content accuracy notes

- The grokking study is labelled preliminary and awaiting guide verification; it is not presented as an approved internship deliverable.
- The official VTU ITISMU research internship is shown as ongoing from 1 September 2026 to 1 January 2027, under Dr. M. N. Birje, Director, ITISMU. These details and the official scope are verified against the internship letter dated 1 September 2026.
- Capability Dynamics is labelled only as a proposed research direction awaiting guide clarification and approval; no model experiments are claimed to have started.
- The grokking investigation remains a separate preliminary study awaiting guide verification, not an approved internship deliverable.
- Experimental metrics include contextual caveats on the relevant project pages.
- EchoJudge is intentionally not included in the project list.
