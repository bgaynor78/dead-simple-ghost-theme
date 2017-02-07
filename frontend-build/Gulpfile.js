var gulp = require('gulp');
var sass = require('gulp-sass');
var clean = require('gulp-clean-css');

gulp.task('compile-sass', function() {
    gulp.src('scss/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('../content/themes/dead-simple/assets/css'));
});

// gulp.task('minify-css',['compile-sass'], function() {
//     gulp.src('../content/themes/dead-simple/assets/css/styles.css')
//         .pipe(clean({debug: true}, function(details) {
//             console.log(details.name + ': ' + details.stats.originalSize);
//             console.log(details.name + ': ' + details.stats.minifiedSize);
//         }))
//         .pipe(gulp.dest('../content/themes/dead-simple/assets/css/'))
// });

// Watch task that runs when using "gulp watch" in command line.
// This can be added to at some point if we'd like to add JS minification, etc later
gulp.task('watch', function() {
    gulp.watch('scss/**/*.scss', ['compile-sass']);
});

//Default task that runs if you "gulp" is run in command line.
gulp.task('default', ['watch', 'compile-sass']);
