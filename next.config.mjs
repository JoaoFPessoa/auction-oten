// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["venda-imoveis.caixa.gov.br", "cdn-motor1.com"],
  },
};

export default nextConfig;
