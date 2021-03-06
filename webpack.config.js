// webpack.config.js
const Encore = require('@symfony/webpack-encore');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


Encore

    // Env
    .configureRuntimeEnvironment("dev")







    // the project directory where all compiled assets will be stored
    .setOutputPath('public/build/')

    // the public path used by the web server to access the previous directory
    .setPublicPath('/build')

    // will create public/build/app.js and public/build/app.css
    .createSharedEntry('layout', './assets/js/layout.js')
    .addEntry('login', './assets/js/login.js')
    .addEntry('register', './assets/js/register.js')
    .addEntry('react_price_check', './assets/js/Components/PriceApp/price_check.js')
    .addEntry('rep_log', './assets/js/Components/RepLogApp/rep_log.js')


    .enableBuildNotifications()
    // fixes modules that expect jQuery to be global
    .autoProvidejQuery()

    .addPlugin(new CopyWebpackPlugin([
        // copies to {output}/static
        {from: './assets/static', to: 'static'}
    ]))
    .addPlugin(
        new UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true
        })
    )
    .addLoader(
        {
            test: /\.yaml$/,
            include: __dirname + '/translations',
            loader: 'yaml',
        }
    )


    .enableSassLoader()
    .enableSourceMaps(!Encore.isProduction())
    .cleanupOutputBeforeBuild()
    .enableVersioning()
    .enableReactPreset()
;

// export the final configuration
module.exports = Encore.getWebpackConfig();
