# Digital marketing consultant portfolio (Astro)

This is the Astro version of the portfolio site. It keeps the current design and divides it into reusable sections so the content and layout are easier to grow.

## Run it on your computer

You need Node.js 22.12 or newer.

```sh
npm install
npm run dev
```

Open the local address printed in the terminal. Astro refreshes the preview as you edit files. To make a production build, run `npm run build`; the finished static site is created in `dist/`.

## Where to edit

- `src/components/Hero.astro`: headline and opening message
- `src/components/CaseStudies.astro`: the case study details and result figures
- `src/components/Services.astro`: service list
- `src/components/About.astro`: bio and location
- `src/components/Contact.astro`: email and response time
- `src/components/SiteHeader.astro` and `SiteFooter.astro`: name, navigation and social links
- `src/styles/global.css`: visual design and responsive layout
- `src/layouts/BaseLayout.astro`: page title and SEO description

Replace every square-bracket placeholder, the example email address, and the sample LinkedIn URL before publishing. Only publish client names and results you have permission to share.

## Publish with GitHub Pages

The included `.github/workflows/deploy.yml` builds and publishes the site whenever you push to `main`. Put this Astro project at the repository root, push it to GitHub, then go to **Settings → Pages** and choose **GitHub Actions** as the source. The Astro config automatically uses the repository name as the base path for a project site.

The deployed site will be public. GitHub Actions needs access to Pages deployments in the repository settings.
