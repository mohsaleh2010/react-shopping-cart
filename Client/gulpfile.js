// top level function [ task - src - - dest - watch]
const gulp = require('gulp');
const gulpsass = require('gulp-sass');
const sass = gulpsass(require('sass'))





gulp.task('watchME', async function () {

    gulp.src('src/Components/**/*.scss').pipe(sass()).pipe(gulp.dest('src/css'))
})

// add watchMe in file package.json
// gulp.task('watchME',async function(){
//     gulp.watch('src/Components/**/*.scss',async function(){

//         gulp.src('src/Components/**/*.scss').pipe(sass()).pipe(gulp.dest('src/css'))
//     })
// })