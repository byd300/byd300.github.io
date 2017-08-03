var browserSync = require('browser-sync').create();
var gulp = require('gulp');
var sass = require('gulp-sass');

// gulp.task('sass', function() {
// 	return gulp.src('./sass/*.scss')
// 		.pipe(sass())
// 		.pipe(gulp.dest('./css'));
// });

gulp.task('watch', function() {
	gulp.watch('./sass/*.scss', ['sass']);
});

//gulp.task ('default', ['sass', 'watch']);


// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch('./sass/*.scss', ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src('./sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);