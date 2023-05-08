/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
}

module.exports = {
    experimental: {
        appDir: true,
      },
    images: {
        domains: ['i.imgur.com', 'imgur.com', 'cdn.discordapp.com', 'media.discordapp.net']
    },
}
