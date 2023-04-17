/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        hostname: 'imgur.com',
        port: "",
        pathname: "/mSPFvM4.jpg/**",
        pathname: "/CJnszdo.jpg/**"
      },
    ],
  },
}
