/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
    output: "export",
    basePath: isProd ? "/unbound-online": "",
    assetPrefix: isProd ? "/unbound-online": "",
};

export default nextConfig;
