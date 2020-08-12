const path = require('path');
const SRC_DIR = path.join(__dirname, '/public/scripts');
const DIST_DIR = path.join(__dirname, '/public/dist');
module.exports = {
    entry: `${SRC_DIR}/AppIndex.js`,
    output: {filename: 'bundle.js',
        path: DIST_DIR,},
    module: {
        rules: [{test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
        },
        {
            test:/\.css$/,
            use:['style-loader',
                'css-loader']
            }        
    ],
    },
};