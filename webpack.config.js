var path = require('path');

module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: "dist/",
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css']
            },
            {
                test: /\.scss$/,
                loader: ["style", "css", "sass"]
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                loader: 'file'
            }
        ]
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    }
}