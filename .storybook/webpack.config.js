
const path = require('path')

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.jpe?g$/,
        loader: 'file-loader',
        include: path.resolve(__dirname, '../assets')
      },
      {
        test: /\.png$/,
        loader: 'file-loader',
        include: path.resolve(__dirname, '../assets')
      }
    ]
  },
  resolve: {
    alias: {
      '@': path.dirname(path.resolve(__dirname))
    }
  }
}

// Full-control mode TODO: Not working, but will be obligatory in future versions
// https://storybook.js.org/docs/configurations/custom-webpack-config/#full-control-mode

// Export a function. Accept the base config as the only param.
// module.exports = async ({ config, mode }) => {
//   // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
//   // You can change the configuration based on that.
//   // 'PRODUCTION' is used when building the static version of storybook.

//   // Make whatever fine-grained changes you need
//   config.module.rules.push({
//     test: /\.css$/,
//     use: [
//       'style-loader',
//       'css-loader'
//     ],
//     include: path.resolve(__dirname, '../')
//   });

//   config.module.rules.push({
//     test: /\.jpe?g$/,
//     loader: 'file-loader',
//     include: path.resolve(__dirname, '../assets')
//   });

//   // Return the altered config
//   return config;
// };
