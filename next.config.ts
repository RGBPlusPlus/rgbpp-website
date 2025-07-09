import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 如果部署平台要求使用 /docs 前缀，取消注释下面这行
  // basePath: process.env.NODE_ENV === 'production' ? '/docs' : '',
  
  // 或者如果不需要 /docs 前缀，确保没有 basePath 配置
  // basePath: '',
  
  /* config options here */
};

export default nextConfig;
