var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('images', function () {
  return gulp.src('src/*.{jpg,png}')
    .pipe($.responsive({
      '*.jpg': [
        {
          rename: { prefix: 'hd_' },
          withMetadata: true,
          progressive: false
        }, 
        {
          width: 600,
          rename: { prefix: 'preview_', suffix: '_dt' },
        }, 
        {
          height: 300,
          rename: { prefix: 'thumbnail', suffix: '_dt' },
        }
      ]
    }, {
      // Global configuration for all images
      quality: 80,
      // Use progressive (interlace) scan for JPEG and PNG output
      progressive: true,
      // Strip all metadata
      withMetadata: false,
      errorOnUnusedImage: true
    }))
    .pipe(gulp.dest('dist'));
});