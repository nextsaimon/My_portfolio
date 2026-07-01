/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "r2.nextsaimon.com",
      },
    ],
  },
};

export default nextConfig;
