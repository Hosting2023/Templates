import createSvgPlugin from '@stefanprobst/next-svg';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  output: 'export',
};

const withSvg = createSvgPlugin({
  id: '__root__',
  svgoPlugins: [],
});

export default withNextIntl(withSvg(nextConfig));
