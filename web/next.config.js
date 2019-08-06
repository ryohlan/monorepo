const withTM = require('next-transpile-modules')

const envs = {
  production: require('./env/prod.json'),
  staging: require('./env/stg.json'),
  local: require('./env/local.json')
}

const env = envs[process.env.APP_ENV || 'local']

module.exports = withTM({
  transpileModules: ['shared'],
  env,
  resolve: {
    alias: {
      'react-native$': 'react-native-web'
    }
  }
})
