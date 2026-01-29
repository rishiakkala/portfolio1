/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.simpleicons.org',
                pathname: '/**',
            },
        ],
    },
    reactStrictMode: true,
};

module.exports = nextConfig;
