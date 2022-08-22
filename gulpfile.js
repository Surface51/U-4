const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer')
const webpack = require('webpack-stream');
const livereload = require('gulp-livereload');
// const concat = require('gulp-concat');
const rename = require('gulp-rename');

function css() {
    return src('./src/sass/*.scss', { sourcemaps: true })
        .pipe(sass())
        .pipe(sourcemaps.init())
        .pipe(postcss([
            autoprefixer({ supports: "last 2 versions" }),
            cssnano()
        ]))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('./dist/css/'), { sourcemaps: true })
        .pipe(livereload())
}

function js() {
    return src('./src/js/script.js')
        .pipe(webpack({
            mode: 'production',
            devtool: 'source-map'
        }))
        .pipe(dest('./dist/js/'));
}

function browser() {
    browserSync.init({
        server: ".",
        files: [
            './**/*.html',
            './**/*.css'
        ],
        ghostMode: false, // Turn on for cool device mirroring
        open: false, // Doesn't open by default
    });
    livereload.listen();
    watch('./src/sass/**/*.scss', css);
    watch('./src/js/*.js', js).on('change', browserSync.reload);
}

exports.css = css;
exports.js = js;
exports.default = series(css, js, browser);
