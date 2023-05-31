/** @type {import('next').NextConfig} */


const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'micro2',
        remotes: {
          appContainer: `appContainer@http://localhost:3000/_next/static/${
            isServer ? 'ssr' : 'chunks'
          }/remoteEntry.js`,
        },
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './Footer': './src/components/Footer.js',
        },
        shared: {},
      })
    );

    return config;
  },
}

module.exports = nextConfig
