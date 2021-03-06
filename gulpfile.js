var gulp = require('gulp'),
gutil = require('gulp-util'),
//jshint = require('gulp-jshint'),
//browserify = require('gulp-browserify'),
//uglify = require('gulp-uglify'),
//concat = require('gulp-concat'),
//clean = require('gulp-clean'),
embedlr = require('gulp-embedlr'),
refresh = require('gulp-livereload'),
lrserver = require('tiny-lr')(),
express = require('express'),
livereload = require('connect-livereload'),
sass = require('gulp-sass'),
minifycss = require('gulp-minify-css'),
//ngAnnotate = require('gulp-ng-annotate'),
autoprefixer = require('gulp-autoprefixer'),
scsslint = require('gulp-scss-lint'),
//jasmine = require('gulp-jasmine');
notify = require('gulp-notify');
livereloadport = 35729,
serverport = 7000;

// Set up an express server (but not starting it yet)
var server = express();
// Add live reload
server.use(livereload({port: livereloadport}));
// Use our 'dist' folder as rootfolder
server.use(express.static('./website'));
// Because I like HTML5 pushstate .. this redirects everything back to our index.html
server.all('/*', function(req, res) {
  res.sendfile('index.html', { root: 'website' });
});

// // JSHint task
// gulp.task('lint', function() {
//   gulp.src('./app/scripts/*.js')
//   .pipe(jshint())
//   // You can look into pretty reporters as well, but that's another story
//   .pipe(jshint.reporter('default'));
// });


//
gulp.task('views', function() {
  // Get our index.html
  gulp.src('app/index.html')
  // And put it in the website folder
  .pipe(gulp.dest('website/'));
  // JS
  gulp.src('app/js/**/*')
  .pipe(gulp.dest('website/js/'));
  gulp.src('src/concept.js')
  .pipe(gulp.dest('website/js/'));
  gulp.src('bower_components/angulartics/dist/angulartics.min.js')
  .pipe(gulp.dest('website/js/'));
  gulp.src('bower_components/angulartics/dist/angulartics-ga.min.js')
  .pipe(gulp.dest('website/js/'));
  // Images
  gulp.src('./app/images/**/*')
  .pipe(gulp.dest('website/images'));
  // Fonts/Icons
  gulp.src('./bower_components/open-iconic/font/fonts/**/*')
  .pipe(gulp.dest('website/fonts'));
  gulp.src('./bower_components/open-iconic/font/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'));
  gulp.src('./bower_components/open-iconic/font/fonts/**/*')
  .pipe(gulp.dest('scss/fonts'));
  gulp.src('./bower_components/open-iconic/font/css/open-iconic.scss')
  .pipe(gulp.dest('scss/base'));

  // Any other view files from pages
  gulp.src('./app/views/**/*')
  .pipe(gulp.dest('website/views/'))
  .pipe(refresh(lrserver)); // Tell the lrserver to refresh

});

// Lint SCSS
// gulp.task('scss-lint', function() {
//   gulp.src('app/styles/*.scss')
//     .pipe(scsslint());
// });

// Dev task
gulp.task('dev', function() {
  // Start webserver
  server.listen(serverport);
  // Start live reload
  lrserver.listen(livereloadport);
  // Run the watch task, to keep taps on changes
  gulp.watch();
});

// Styles task
gulp.task('styles', function() {
  gulp.src('src/concept.scss')
  // The onerror handler prevents Gulp from crashing when you make a mistake in your SASS
  .pipe(sass({ errLogToConsole: true, sourceComments: 'map', sourceMap: 'sass' }))
  // Optionally add autoprefixer
  .pipe(autoprefixer("last 2 versions", "> 1%", "ie 8"))
  // Minify
  .pipe(minifycss())
  // These last two should look familiar now :)
  .pipe(gulp.dest('dist/css/'))
  .pipe(refresh(lrserver));
});

// Custom styles task
gulp.task('custom-styles', function() {
  gulp.src('app/styles/custom.scss')
  // The onerror handler prevents Gulp from crashing when you make a mistake in your SASS
  .pipe(sass({ errLogToConsole: true, sourceComments: 'map', sourceMap: 'sass' }))
  // Optionally add autoprefixer
  .pipe(autoprefixer("last 2 versions", "> 1%", "ie 8"))
  // Minify
  .pipe(minifycss())
  // These last two should look familiar now :)
  .pipe(gulp.dest('website/css/'))
  .pipe(refresh(lrserver));
});

gulp.task('watch', [], function() {
  // Watch our files
  gulp.watch(['app/views/**/*.html','src/**/*.scss','src/**/*.js','app/index.html','images/**/*.jpg','images/**/*.png','app/styles/**/*.scss'],[
  'views',
  'styles',
  'custom-styles'
  ]);
});

gulp.task('default' , function() {
  gulp.start('views','dev','styles','custom-styles','watch');
});
