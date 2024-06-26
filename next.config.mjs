/** @type {import('next').NextConfig} */
import withPWAConfig from "next-pwa";

const withPWA = withPWAConfig({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

async function rewrites() {
  return [
    {
      source: "/doctor/:slug*",
      destination: "/pages/doctor/:slug*",
    },
    {
      source: "/patient/:slug*",
      destination: "/pages/patient/:slug*",
    },
    {
      source: "/home/:slug*",
      destination: "/pages/home/:slug*",
    },
  ];
}

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn-icons-png.flaticon.com"],
  },
  rewrites,
};

export default withPWA(nextConfig);
