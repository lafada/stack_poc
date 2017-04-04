var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('serve', function() {
    connect.server({
        root: '.',
        port: 8888
    });
});

gulp.task('default', ['serve']);
