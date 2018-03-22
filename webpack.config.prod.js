import path from 'path';
import HtmlWpPlugin from 'html-webpack-plugin';

export default {

  mode: 'production',
  devtool: 'source-map',
  entry: {
    main: path.join(__dirname, "src/app"),
    vendor: path.join(__dirname, 'src/vendor')
  },
  target: 'web',

  output: {
    path: path.join(__dirname, "dist"),
    filename: '[name].bundle.js'
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

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: "vendor",
          test: "vendor",
          enforce: true
        },
        main: {
          name: "main",
          test: "main",
          enforce: true
        }
      }
    }
  },

  plugins: [
    //Create HTML file that includes ref to bundled JS
    new HtmlWpPlugin({
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true
    })
  ],

  resolve: {
    extensions: ['*', '.js', '.jsx']
  }
}
