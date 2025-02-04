// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: ["cdn.motor1.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.motor1.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
