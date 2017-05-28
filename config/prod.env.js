module.exports = function (key) {
  var conf = prodEnvList[key] ? prodEnvList[key] : prodEnvList['prd']
  // NODE_ENV: '"production"'
  console.log('prod.env.js key:' + key + ', conf:')
  console.log(conf)
  console.log(Object.assign({'NODE_ENV': '"production"'}, conf))
  return Object.assign({'NODE_ENV': '"production"'}, conf)
}

var prodEnvList = {
  'prd': {
    G_HOST: '"http://fmaster.fimi.vankeservice.com"',
    G_PORT: '""',
    G_PREFIX: '""'
  },
  'sit': {
    G_HOST: '"http://fmaster.tfimi.vankeservice.com"',
    G_PORT: '""',
    G_PREFIX: '""'
  },
  'iprd': {
    G_HOST: '"http://112.74.187.227"',
    G_PORT: '"12400"',
    G_PREFIX: '""'
  },
  'isit': {
    G_HOST: '"http://10.0.73.61"',
    G_PORT: '"12400"',
    G_PREFIX: '""'
  },
  'i115': {
    G_HOST: '"http://10.0.57.115"',
    G_PORT: '"12400"',
    G_PREFIX: '""'
  }
}


