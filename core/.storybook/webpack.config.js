module.exports = ({ config, mode }) => {
  config.module.rules.push(
    {
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: { presets: [['react-app', { flow: false, typescript: true }]] }
    },
    {
      test: /\.(ts|tsx)$/,
      use: [{ loader: require.resolve('react-docgen-typescript-loader') }]
    }
  )
  config.resolve.extensions.push('.ts', '.tsx')
  config.resolve.alias['react-native$'] = 'react-native-web'
  return config
}
