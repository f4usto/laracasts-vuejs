var gulp = require("gulp");
var rename = require("gulp-rename");

var sass = require("gulp-sass");

var fs = require("fs")
var browserify = require("browserify");
var vueify = require('vueify');

var browserSync = require('browser-sync').create();

gulp.task("sass", function () {
    "use strict";

    return gulp.src([
        "./src/scss/main.+(scss|sass)"
    ])
    .pipe(sass())
    .pipe(rename("styles.css"))
    .pipe(gulp.dest("./dist/css"))
    .pipe(browserSync.reload({
        stream: true
    }));

});

 gulp.task("browserify-vue", function () {
    "use strict";

    return browserify('./src/main.js')
        .transform(vueify)
        .bundle()
        .pipe(fs.createWriteStream("./dist/js/build.js"));
});


gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: '.'
    },
  })
})

gulp.task("watch", ['browserSync', 'sass', 'browserify-vue'], function () {
    "use strict";

    gulp.watch("./src/**/*.+(js|vue)", ["browserify-vue", 'browserSync']);
    gulp.watch("./src/**/*.+(scss|sass)", ["sass"]);
});
