var gulp = require("gulp");
var rename = require("gulp-rename");
var copy = require('gulp-copy');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var connect = require('gulp-connect');
var sass = require("gulp-sass");
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');
var notify = require('gulp-notify');

var glob = require('glob');
var browserify = require('browserify');
var vueify = require('vueify')
var babelify = require('babelify')
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

gulp.task("sass", function () {
    "use strict";

    return gulp.src([
        "./src/styles/**/*.entry.+(scss|sass)"
    ])
    .pipe(sass())
    .pipe(rename("styles.css"))
    .pipe(gulp.dest("dist"))
    .pipe(connect.reload())
    .pipe(notify("sass files updated!"));
});


gulp.task('js:vue', function() {
    var files = glob.sync('./src/js/**/*.entry.js');

    browserify({
        entries: files,
        debug: true
    })
    .transform(vueify)
    .transform(babelify.configure({
        presets: ["es2015"],
        sourceMaps: true
    }))
    .bundle()
    .pipe(source('vue.build.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
        .pipe(uglify())
        .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload())
    .pipe(notify("js:vueJS task completed!"));
});

gulp.task('start-server', function() {
    connect.server({ port: 8081, livereload: true });
});

gulp.task('watch:js:vue', function() {
    gulp.watch('src/js/**/*.+(js|vue)', ['js:vue']);
});

gulp.task('watch:sass', function() {
    gulp.watch('src/styles/**/*.+(scss|sass)', ['sass']);
});

gulp.task('compile', ['sass', 'js:vue']);
gulp.task('watch', ['compile', 'watch:js:vue', 'watch:sass']);
gulp.task('serve', ['watch', 'start-server']);
gulp.task('default', ['compile']);