import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack: (config: any, { isServer }: { isServer: boolean }) => {
    if (isServer) {
      config.resolve.alias['msw/browser'] = false; // 서버 환경에서는 브라우저 모듈 제외
    } else {
      config.resolve.alias['msw/node'] = false; // 클라이언트 환경에서는 노드 모듈 제외
    }
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
