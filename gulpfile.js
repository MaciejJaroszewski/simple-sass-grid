var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('sass', function(){
	return gulp.src('app/scss/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('app/css'))
});

gulp.task('default', ['gulp-sass'], function(){
	gulp.watch('app/scss/**/*.scss', ['sass']);
});