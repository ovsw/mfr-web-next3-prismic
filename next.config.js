/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "uploads-ssl.webflow.com",
      "images.unsplash.com",
      "images.prismic.io",
    ],
  },
};

module.exports = nextConfig;
