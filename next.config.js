/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["static01.nyt.com"],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors. Remove it afterwards.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
