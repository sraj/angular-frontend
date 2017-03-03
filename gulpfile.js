var gulp = require('gulp');
var sass = require('gulp-sass');
var bower = require('gulp-bower');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglifyjs');
var concat = require('gulp-concat');
var atc = require('gulp-angular-templatecache');

var pkgjson = require('./package.json');

var config = {
  pkg: pkgjson,
  src: './frontend/app',
  libs: './bower_components',
  dist: './frontend/static',
};

gulp.task('bower', function() {
  return bower().pipe(gulp.dest(config.libs));
});

gulp.task('fonts', function() {
  return gulp.src([
    config.libs + '/font-awesome/fonts/**.*',
    config.libs + '/bootstrap-sass/assets/fonts/**/**.*'
  ])
    .pipe(gulp.dest(config.dist + '/fonts'));
});

gulp.task('css', function() {
  return gulp.src('sass/frontend.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      sourceComments: false,
      outputStyle: 'compressed',
      includePaths: [
        config.libs + '/bootstrap-sass/assets/stylesheets',
        config.libs + '/font-awesome/scss',
      ],
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.dist + '/css'));
});

gulp.task('libjs', function() {
  return gulp.src([
    config.libs + '/angular/angular.min.js',
    config.libs + '/angular-route/angular-route.min.js',
    config.libs + '/angular-bootstrap/ui-bootstrap.min.js',
    config.libs + '/angular-bootstrap/ui-bootstrap-tpls.min.js',
  ])
    .pipe(uglify('libraries.min.js', {
      compress: true,
      outSourceMap: true,
    }))
    .pipe(gulp.dest(config.dist + '/js'));
});

gulp.task('templates', function() {
  return gulp.src([
    config.src + '/**/*.html',
  ])
    .pipe(atc({
      module: "AFApp.Templates",
      root: 'app/',
      standalone: true}))
    .pipe(uglify('templates.min.js', {
      compress: false,
      outSourceMap: true,
    }))
    .pipe(gulp.dest(config.dist + '/js'));
});

gulp.task('js', function() {
  return gulp.src([
    config.src + '/**/*.js',
  ])
    .pipe(concat("afapp.js"))
    .pipe(gulp.dest(config.dist + '/js'))
    .pipe(uglify('afapp.min.js', {
      compress: false,
      outSourceMap: true,
    }))
    .pipe(gulp.dest(config.dist + '/js'));
});

gulp.task('watch', function() {
  gulp.watch('sass/*.scss', ['css']);
  gulp.watch([config.src + '/**/*.html'], ['templates']);
  gulp.watch([config.src + '/**/*.js'], ['js']);
});

gulp.task('default', ['bower', 'fonts', 'css', 'libjs', 'templates', 'js']);
