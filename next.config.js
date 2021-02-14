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
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH
}
