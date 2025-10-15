/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Disable optimizer to serve local /public images directly and avoid ResponseAborted in dev
    unoptimized: true,
  },
};

export default nextConfig;
