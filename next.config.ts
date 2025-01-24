import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    ppr: 'incremental'
  },
  lint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
