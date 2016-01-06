module.exports = {
  entry : "./app/client.js",
  output : {
    filename : "client.js",
    path : __dirname + "/dist"
  },
  module : {
    loaders : [
      {
        test : /.js$/,
        exclude : /node_modules/,
        loaders : ['babel?presets[]=es2015&presets[]=react']
      }
    ]
  }
}
