/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true, // Deshabilita la optimización de imágenes para exportación estática
  },
};

export default nextConfig;
