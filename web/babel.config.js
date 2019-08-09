const path = require('path')

module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@src': path.resolve(__dirname, 'src'),
          '^react-native$': 'react-native-web'
        }
      }
    ]
  ]
}
