
var gulp = require('gulp'),
	stylus = require('gulp-stylus'),
	watch = require('gulp-watch'),
	del = require('del');

/*----------  Compile Stylus  ----------*/

gulp.task('distCSS', function() {

	gulp.src('_src/assets/_styl/main.styl')
		.pipe(stylus())
		.pipe(gulp.dest('_dist/assets/css'));

});


/*----------  Copy Files  ----------*/

gulp.task('copyHTML', function() {

    gulp.src(['_src/*.html'])
        .pipe(gulp.dest('_dist/'));

});
gulp.task('copyImages', function() {

    gulp.src('_src/assets/images/*')
        .pipe(gulp.dest('_dist/assets/images'));

});
gulp.task('copyJS', function() {

    gulp.src('_src/assets/_js/*.js')
        .pipe(gulp.dest('_dist/assets/js'));

});


/*----------  Watch  ----------*/

gulp.task('watch', function() {

	watch(['_src/assets/_styl/*.styl', '_src/assets/_styl/**/*.styl'], function() {
		gulp.start('distCSS');
	}); // Stylus

	watch(['_src/*.html'], function() {
		gulp.start('copyHTML');
	}); // HTML

	watch(['_src/assets/images/*'], function() {
		gulp.start('copyImages');
	}); // Images

	watch(['_src/assets/_js/*.js'], function() {
		gulp.start('copyJS');
	}); // JS

});


/*----------  Delete _dist folder  ----------*/

gulp.task('delDist', function(){
	del('_dist');
});


/*----------  Default Task  ----------*/

gulp.task('default', function() {

	gulp.start('distCSS'); // Compile Stylus
	gulp.start('copyHTML'); // Copy HTML
	gulp.start('copyImages'); // Copy Images
	gulp.start('copyJS'); // Copy Images
	gulp.start('watch'); // Watch

}); 