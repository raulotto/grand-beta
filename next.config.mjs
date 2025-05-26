/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  //basePath: '/banner-ts/test',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
