const path = require('path');

const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

const nextConfig = {
    reactStrictMode: true,

    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack']
        });
        config.resolve.alias = {
            ...config.resolve.alias,
            '@f': path.resolve(__dirname, './src')
        };
        return config;
    }
};

const plugins = [withImages];

module.exports = withPlugins([...plugins], nextConfig);
