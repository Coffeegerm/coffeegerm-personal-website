/** @type {import('next').NextConfig} */
const { BOOK_REVIEWS_DATABASE_ID, NOTION_CLIENT_AUTH_SECRET } = process.env;

const nextConfig = {
  reactStrictMode: true,
  env: {
    BOOK_REVIEWS_DATABASE_ID,
    NOTION_CLIENT_AUTH_SECRET
  },
};

console.log('Configuration >', nextConfig.env);

module.exports = nextConfig;
