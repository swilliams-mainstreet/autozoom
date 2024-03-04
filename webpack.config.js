const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  // Explicitly set an empty entry point if no JS bundling is needed
  entry: {},
  output: {
    path: path.resolve(__dirname, 'build'),
    // This line can be omitted or adjusted if not bundling JS files
    filename: "[name].bundle.js"
  },
  // This module section can be omitted if you're not processing JS files
  // module: { ... },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'manifest.json', to: 'manifest.json' },
        { from: 'resources', to: 'resources' },
        { from: 'background.js', to: 'background.js' }
      ]
    })    
  ]
};
