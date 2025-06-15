import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  compress: false,
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  devIndicators: false,
  output: 'standalone',
};

export default nextConfig;
