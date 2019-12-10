var fileinclude = require('gulp-file-include'),
  gulp = require('gulp');
 
gulp.task('fileinclude', async function() {
  gulp.src(['html-partials/index.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./'));
});