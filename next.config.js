/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
    reactStrictMode: true,
    i18n,
    redirects: () => {
        return [
            {
                source: '/fr-fr/page1-en',
                destination: '/page1',
                permanent: true,
                locale: false,
            },
            {
                source: '/en-us/page1-fr',
                destination: '/fr-fr/page1',
                permanent: true,
                locale: false,
            },
        ]
    }
}

module.exports = nextConfig
