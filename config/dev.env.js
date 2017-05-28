var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  G_HOST: '"http://order.tfimi.vankeservice.com"',
  G_PORT: '""',
  G_PREFIX: '""'
})
