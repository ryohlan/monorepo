const path = require('path')

module.exports = {
  presets: ['module:@haul-bundler/babel-preset-react-native'],
  plugins: [
    'transform-inline-environment-variables',
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@src': path.resolve(__dirname, 'src')
        }
      }
    ]
  ]
}
