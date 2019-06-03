// gulpfile.js 
const gulp = require('gulp');
const responsive = require('gulp-responsive');

const imageResize = () => {
	return gulp.src('assets/img/screenshots/lowell/*.png')
		.pipe(responsive({
			'*.png': [{
				width: 400,
				rename: {
					suffix: '-400px'
				}
			},
			{
				width: 800,
				rename: {
					suffix: '-800px'
				},
				withoutEnlargement: true
			}]
		}))
		.pipe(gulp.dest('assets/img/screenshots/lowell'));
};

gulp.task('images', imageResize);