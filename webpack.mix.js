// webpack.mix.js

let mix = require('laravel-mix');

mix
    .setPublicPath('./dist')
    .js('src/js/app.js', 'js')
    .sass('src/scss/app.scss', 'css')
    .options({
        postCss: [require('tailwindcss')],
    })
    .browserSync({
        proxy: 'localhost/my-new-project', // Set to your "localhost/folder" or virtual host "myvhost.local"
        files: [
            './**/*.html',
            './dist'
        ]
    });