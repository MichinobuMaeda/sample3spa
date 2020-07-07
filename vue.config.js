module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  lintOnSave: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000', // local api server
        pathRewrite: { '^/api': '' } // rewrite
      }
    },
    https: false,
    port: 8080,
    open: false
  }
}
