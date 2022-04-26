module.exports = {
    entry: './src/index.tsx',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        alias: {
            '@mui/styled-engine': '@mui/styled-engine-sc'
        },
        extensions: ['.tsx', '.ts', '.js','.jsx'],
    },
    output: {
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: 'public/',
        port: 3000,
        publicPath: 'http://localhost:3000/dist/',
        hotOnly: true,
        historyApiFallback: true
    },
    devtool: 'eval-source-map',
}