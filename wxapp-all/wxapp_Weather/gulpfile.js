const gulp = require('gulp');
const combiner = require('stream-combiner2');
const jsonminify = require('gulp-jsonminify'); //压缩
const sass = require('gulp-sass');
const rename = require('gulp-rename');
// gulp 思想很简单 将开发流程分成一个个的任务，
// 创建了一个json 专业任务
const src = './client'; //开发目录
const dist = './dist'; //项目目录
 
gulp.task('json', () => { //新建一个任务
  return gulp
    // 找到文件
    .src(`${src}/**/*.json`)
    // 进行一翻处理 
    .pipe(jsonminify())
    .pipe(gulp.dest(dist))
});
gulp.task('wxss',()=>{
  const combined = combiner.obj([
  
    gulp.src(`${src}/**/*.{wxss,scss}`),sass().on('error',sass.logError),
    rename((path)=>(path.extname='.wxss')),
    gulp.dest(dist)
  ]);
  combined.on('error',()=>{})
})
gulp.task('wxml', () => { //新建一个任务
  return gulp
    // 找到文件
    .src(`${src}/**/*.wxml`)
    // 进行一翻处理 
    // .pipe(jsonminify())
    .pipe(gulp.dest(dist))
});

gulp.task('default',['wxml','wxss','json'])
