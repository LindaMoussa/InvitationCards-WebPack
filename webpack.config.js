var webpack = require('webpack');
//import node from 'file.node';
const nodeExternals = require('webpack-node-externals');

const dev= process.env.NODE_DEV !=='production'; //dev mode
module.exports={
    entry:'./js/script.js' ,
    output:{
        path: __dirname + '/js',
        filename: 'bundle.js'
    },
    mode: dev ? 'development' : 'production',
    plugins: [
        new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
        })
    ],
     module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
//     rules: [
//      {
//        test: /\.node$/,
//        use: 'node-loader'
//      }
//    ],
  target: 'node',
//  externals: [nodeExternals(),
//              canvas: {
//             commonjs: "canvas",
//             commonjs2: "canvas",
//             amd: "canvas",
//             root: "_"
//         }],
    externals:{
         canvas: {
             commonjs: "canvas",
             commonjs2: "canvas",
             amd: "canvas",
             root: "_"
         }
}
    

}