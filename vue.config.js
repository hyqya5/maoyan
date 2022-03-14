module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://ad.maoyan.com',
        ws: true,
        changeOrigin: true
      }
    }
  }
}