import { defineConfig } from 'astro/config';

// GitHub Actions sets GITHUB_REPOSITORY to "owner/repository" during deployment.
// That lets Astro build asset links correctly for a GitHub Pages project URL.
const repository = process.env.GITHUB_REPOSITORY;
const [owner, repositoryName] = repository?.split('/') ?? [];
const isUserOrOrganizationSite = repositoryName === `${owner}.github.io`;
const base = repository && !isUserOrOrganizationSite ? `/${repositoryName}` : '/';

export default defineConfig({
  base,
  ...(owner ? { site: `https://${owner}.github.io` } : {}),
});
