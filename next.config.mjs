/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_API_TOKEN: process.env.NEXT_API_TOKEN,
    JWT_SECRET: process.env.JWT_SECRET,
  },
  images: {
    domains: [
      "universitywebsitbucket.s3.ap-south-1.amazonaws.com",
    ],
  },
};

export default nextConfig;
