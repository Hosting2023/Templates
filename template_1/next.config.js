// TODO: fix import warning
import createSvgPlugin from '@stefanprobst/next-svg';

/** @type {import('next').NextConfig} */
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

export default withSvg(nextConfig);

// import createSvgPlugin from '@stefanprobst/next-svg';
// import { i18n } from "./next-i18next.config.js";

// // Объединяем оба конфига
// const nextConfig = {
//     reactStrictMode: true,
//     swcMinify: true,
//     images: {
//         unoptimized: true,
//     },
//     output: 'standalone',
//     i18n,
//     trailingSlash: true,
//     compiler: {
//         removeConsole: {
//             exclude: ['error', 'log'],
//         },
//     }
// };

// const withSvg = createSvgPlugin({
//     id: '__root__',
//     svgoPlugins: [],
// });

// export default withSvg(nextConfig);
