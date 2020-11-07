var gulp = require('gulp');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');

const { src, dest, watch, series, parallel } = require('gulp');

const task = () => {
    return src('sass/*.scss', {sourcemaps: true})
        .pipe(sassGlob())
        .pipe(plumber())
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(dest('dist/css'))
        .pipe(dest('dist/css', {sourcemaps: true}))
}

const keiryoWatch = () => {
    watch('sass/*.scss', task)
}
exports.keiryoWatch = keiryoWatch;

