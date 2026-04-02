/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    // 允许在存在类型错误的情况下完成生产构建
    ignoreBuildErrors: true,
  },
  eslint: {
    // 允许在存在 ESLint 错误的情况下完成生产构建
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
