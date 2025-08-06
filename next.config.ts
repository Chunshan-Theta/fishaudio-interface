import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  eslint: {
    // 在構建時忽略 ESLint 錯誤
    ignoreDuringBuilds: true,
  },
  typescript: {
    // 在構建時忽略 TypeScript 錯誤（可選）
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
