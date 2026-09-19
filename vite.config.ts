// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GitHub Pages (project site): served under /devops-by-nabawy-app/.
// Keep in sync with `basepath` in src/router.tsx.
const pagesBase = "/devops-by-nabawy-app";

// Must match the slugs in src/lib/tracks.ts (single source of truth lives there;
// duplicated here because vite.config cannot use the `@/` alias).
const trackSlugs = [
  "devops",
  "kubernetes",
  "docker",
  "aws",
  "ansible",
  "aiops",
  "terraform",
  "cicd",
  "linux",
];

export default defineConfig({
  vite: {
    base: `${pagesBase}/`,
  },
  nitro: false, // skip nitro server build; TanStack prerender emits pure static HTML for Pages
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Prerender every route to static HTML for GitHub Pages.
    prerender: { enabled: true, crawlLinks: true, autoSubfolderIndex: true },
    pages: [
      { path: "/", prerender: { enabled: true } },
      { path: "/tracks", prerender: { enabled: true } },
      { path: "/tracks/terraform", prerender: { enabled: true } },
      { path: "/roadmap", prerender: { enabled: true } },
      ...trackSlugs.map((slug) => ({
        path: `/tracks/${slug}`,
        prerender: { enabled: true },
      })),
    ],
  },
});
