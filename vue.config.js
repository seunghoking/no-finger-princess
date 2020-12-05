module.exports = {
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')

    svgRule.uses.clear()

    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
      .options({
        svgo: {
          plugins: [
            { removeComments: true },
            { cleanupIDs: false },
            { collapseGroups: false },
            { removeEmptyContainers: false },
          ],
        },
      })
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/scss/main.scss";
        `,
      },
    },
  },
}
