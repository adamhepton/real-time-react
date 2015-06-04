module.exports = {
    cache: {},
    watch: true,
    entry: {
      realTimeReact: ["./react/init.jsx"]
    },
    output: {
      path: require('path').join(__dirname, '/', 'public/js'),
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
