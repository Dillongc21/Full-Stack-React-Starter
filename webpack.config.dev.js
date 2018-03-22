import path from 'path';
import HtmlWpPlugin from "html-webpack-plugin";

export default {
  mode: 'development',
  devtool: 'inline-source-map',
  context: path.join(__dirname, "src"),
  entry: './app.js',
  target: 'web',

  output: {
    path: path.join(__dirname, "src"),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "sass-loader" // compiles Sass to CSS
        }]
      }
    ],
  },

  plugins: [
    //Create HTML file that includes ref to bundled JS
    new HtmlWpPlugin({
      template: 'index.html',
      inject: true
    })
  ],

  resolve: {
    extensions: ['*', '.js', '.jsx']
  }
}
