const mix = require('laravel-mix');

require('dotenv').config();

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your WordPlate applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JavaScript files.
 |
 */

const theme = process.env.WP_THEME;

// mix.setResourceRoot('../');
// mix.setPublicPath(`public/themes/${theme}/assets`);

mix.js('assets/js/index.js', 'public/assets/js/app.js');
mix.postCss('assets/css/style.css', 'public/assets/css/app.css');
mix.postCss('assets/css/media.css', 'public/assets/css/media.css');
mix.postCss('assets/css/animation.css', 'public/assets/css/animation.css');
