module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/findrop/'
    : '/',
    transpileDependencies: ['vuetify']
  }