var gulp = require('gulp');
var gulpStylus = require('gulp-stylus');
var gulpConcat = require('gulp-concat');
var gulpPug = require('gulp-pug');

gulp.task('default', function() {
	gulp.start('styles')
	gulp.start('scripts')
	gulp.start('pug')
});

gulp.task('styles', function() {
	gulp.src('./styles/**/*.styl')
	.pipe(gulpConcat('build.styl'))
	.pipe(gulpStylus())
	.pipe(gulp.dest('./build/css/'))

	gulp.src('./styles/**/*.css')
	.pipe(gulpConcat('libs.css'))
	.pipe(gulp.dest('./build/css/'))
});

gulp.task('scripts', function() {
	gulp.src('./scripts/**/*.js')
	.pipe(gulpConcat('build.js'))
	.pipe(gulp.dest('./build/js/'))
});

gulp.task('pug', function() {
	gulp.src('./templates/**/*.pug')
	.pipe(gulpPug())
	.pipe(gulp.dest('./build/templates/'))
});

gulp.task('watch', function() {
	gulp.start('default');
	gulp.watch('./styles/**/*.styl', ['styles']);
	gulp.watch('./scripts/**/*.js', ['scripts']);
	gulp.watch('./templates/**/*.pug', ['pug']);
});