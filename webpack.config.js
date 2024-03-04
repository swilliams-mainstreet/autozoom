const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    "chrome-content-script": "./src/chrome-content-script.js",
    "chrome-background-script": "./src/chrome-background-script.js"
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        // Copy manifest.json from the project root to the build directory
        { from: 'manifest.json', to: 'manifest.json' },
        // Copy the entire resources directory to the build directory under 'resources'
        { from: 'resources', to: 'resources' }
      ]
    })    
  ]
};
