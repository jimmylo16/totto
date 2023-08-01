/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["co.totto.com", "tottoco.vteximg.com.br"],
    dangerouslyAllowSVG: true,
  },
};

module.exports = nextConfig;
