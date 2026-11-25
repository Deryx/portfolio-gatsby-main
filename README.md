# Deryx Scott — Portfolio

A responsive personal portfolio built with Gatsby 5, React 18, TypeScript, and Sass.

## Local development

```bash
npm ci
npm run develop
```

Open `http://localhost:8000`.

## Production build

```bash
npm run build
npm run serve
```

## Project structure

- `src/pages/index.tsx` — portfolio page content and sections
- `src/pages/styles.scss` — responsive light-theme design system and page styles
- `src/images/deryx-scott-profile.webp` — optimized professional portrait
- `src/images/*.webp` — optimized featured project previews

## Content updates

Featured projects, skills, and experience are defined near the top of `src/pages/index.tsx`. Update dates and descriptions there when your work history changes. The résumé button was intentionally not included until a current résumé PDF is added to the project; this avoids publishing a broken download link.

## Deployment

The project can continue to deploy through the existing Vercel Gatsby configuration. Connect the repository to Vercel and use the standard Gatsby build command `gatsby build` with the output directory `public`.
