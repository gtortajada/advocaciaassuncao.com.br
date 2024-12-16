/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@chakra-ui/react'],
  eslint: {
    dirs: ['pages', 'utils'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
}

export default nextConfig