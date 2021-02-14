const isProd = (process.env.NODE_ENV || 'production') === 'production';

module.exports = {
  publicRuntimeConfig: {
    APP_NAME: "Portfolio | Muhammad Fadhilah Mulyana",
  },
  // compilerOptions: {
  //   "baseUrl": ".",
  // },
  crossOrigin: 'anonymous',
  exportPathMap: () => ({
    '/': { page: '/' },
  }),
  assetPrefix: isProd ? 'fadilnatakusumah.github.io' : '',
}