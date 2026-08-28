/** @type {import('next').NextConfig} */

// When deploying to GitHub Pages, set GITHUB_PAGES=true in the workflow env.
// This adds the repository name as the base path since GitHub Pages serves
// project sites from /repo-name/ by default.
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  // Static HTML export — required for GitHub Pages (no Node.js server)
  output: "export",

  // When on GitHub Pages, prefix all paths with /aroma-agro-foods
  basePath: isGithubPages ? "/aroma-agro-foods" : "",

  // next/image optimization requires a server — disable for static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
