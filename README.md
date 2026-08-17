# Ryza Mae Curiba — Portfolio

A minimalist black-and-white personal portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## Editing content

Almost everything text-based (name, headline, about, skills, experience,
projects, certificates, email) lives in one place:

```
src/data/content.js
```

Change it there and every section updates automatically.

## Structure

```
src/
  components/   one file per section (Navbar, Hero, About, Skills, ...)
  data/         site content (content.js)
  hooks/        useReducedMotion
  index.css     design tokens (colors, fonts) + global styles
public/
  cv/           put your CV PDF here
  assets/       optional project screenshots
```

Setup, running locally, and deploying to Vercel are covered step by step in chat.
