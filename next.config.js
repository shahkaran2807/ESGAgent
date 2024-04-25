// next.config.js
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.py$/,
      loader: 'python-loader'
    })
    return config
  }
}
