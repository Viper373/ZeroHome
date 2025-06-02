/** @type {import('next').NextConfig} */
const isGhPages = process.env.DEPLOY_TARGET === 'gh-pages';
const repoName = 'ZeroHome';

const nextConfig = {
  output: 'export',
  reactStrictMode: false,
  images: {
    domains: ['placeholder.com'],
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  ...(isGhPages
    ? {
        assetPrefix: `/${repoName}/`,
        basePath: `/${repoName}`,
      }
    : {}),
}

export default nextConfig
