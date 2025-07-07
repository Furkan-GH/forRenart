import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['cdn.shopify.com'],  // burada güvenilen domain'leri yaz
  },
};

export default nextConfig;
