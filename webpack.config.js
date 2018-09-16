const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude:/(node_modules)/,
        loader:'babel-loader',
        options:{
          presets:['@babel/preset-env', '@babel/preset-react'],
          plugins:['@babel/plugin-proposal-class-properties']
        }
      },
      { 
        test: /\.(jpe?g|png|gif|svg)$/i, 
        loader: 'file-loader'
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      }
    ]
  }
};