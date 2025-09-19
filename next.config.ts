import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack: (config: any) => {
    return config;
  },
  /* config options here */
  compress: false,
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  devIndicators: false,
  output: 'standalone',
};

export default nextConfig;
