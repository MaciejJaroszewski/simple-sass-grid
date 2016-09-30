var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('sass', function(){
	return gulp.src('scss/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('css'))
});

gulp.task('default', ['gulp-sass'], function(){
	gulp.watch('scss/**/*.scss', ['sass']);
});