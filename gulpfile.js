const gulp = require('gulp')
const { series } = require('gulp')
const browserSync = require('browser-sync').create()
const yargs = require('yargs')
const sourcemaps = require('gulp-sourcemaps') //让错误信息友好显示
const named = require('vinyl-named')

const webpackStream = require('webpack-stream')
const webpack = require('webpack')
const del = require('del')
const autoprefixer = require('gulp-autoprefixer')
const sass = require('gulp-sass')(require('sass'))
const header = require('gulp-header')
const moment = require('moment')
const fileinclude = require('gulp-file-include')
const beautify = require('gulp-beautify')

const gulpUnits = require('./gulp/units')
const webpackDevConfig = require('./webpack/webpack.dev')
const webpackProdConfig = require('./webpack/webpack.prod')

const config = gulpUnits.loadConfig('config.yml', __dirname)
const isProduction = yargs.argv.production
const udpateTime = moment().format('YYYY/MM/DD HH:mm:ss')

// compile js
function compileJs() {
  return gulp
    .src(config.pathConfig.js.in)
    .pipe(named())
    .pipe(sourcemaps.init())
    .pipe(
      webpackStream(
        isProduction ? webpackProdConfig : webpackDevConfig,
        webpack
      )
    )
    .pipe(gulp.dest(config.pathConfig.js.out))
}

// compile css
function compileCss() {
  return gulp
    .src(config.pathConfig.scss.in)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ['last 2 versions', 'ie >= 9', 'ios >= 7']
      })
    )
    .pipe(header('/*' + udpateTime + '*/ \n'))
    .pipe(gulp.dest(config.pathConfig.scss.out))
    .pipe(browserSync.reload({ stream: true }))
}

function compileHtml() {
  return gulp
    .src(config.pathConfig.html.in)
    .pipe(fileinclude())
    .pipe(beautify.html({ indent_size: 2 }))
    .pipe(gulp.dest(config.pathConfig.html.out))
}

// watch
function watch() {
  gulp
    .watch(config.pathConfig.js.in)
    .on('all', gulp.series(compileJs, browserSync.reload))
  gulp
    .watch(config.pathConfig.html.in)
    .on('all', gulp.series(compileHtml, browserSync.reload))
  gulp
    .watch(config.pathConfig.scss.in)
    .on('all', gulp.series(compileCss, browserSync.reload))
}

async function cleanDist() {
  del.sync(['dist'])
}

// start local server
function server(done) {
  browserSync.init(
    {
      server: './dist',
      port: config.port
    },
    done
  )
}

exports.build = series(cleanDist, compileJs, compileCss, compileHtml)
exports.default = series(
  cleanDist,
  compileJs,
  compileCss,
  compileHtml,
  server,
  watch
)
