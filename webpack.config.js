var path = require('path'),
    webpack = require('webpack');

module.exports = {
    cache: {},
    entry: {
      realTimeReact: ["./react/init.jsx"]
    },
    output: {
      path: path.join(__dirname, '/', 'public/js'),
      filename: "bundle.js",
      chunkFilename: "[chunkhash].js",
      library: "realTimeReact",
      libraryTarget: "umd"
    },
    module: {
      loaders: [
        { test: /\.jsx$/, loader: "jsx-loader?insertPragma=React.DOM"}
      ]
    },
    externals: {
      "jquery": "$",
      "react": "React",
      "primus": "Primus"
    }
};
