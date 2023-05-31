/** @type {import('next').NextConfig} */


const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'micro1',
        remotes: {
          appContainer: `appContainer@http://localhost:3000/_next/static/${
            isServer ? 'ssr' : 'chunks'
          }/remoteEntry.js`,
        },
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './navbar': './src/components/navbar.js',
          './Service': './src/components/Service.js'
        },
        shared: {},
      })
    );

    return config;
  },
}

module.exports = nextConfig
