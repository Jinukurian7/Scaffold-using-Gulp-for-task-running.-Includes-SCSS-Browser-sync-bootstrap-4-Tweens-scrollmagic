// Dependencies
var gulp = require('gulp');
var concat = require('gulp-concat');
var streamqueue = require('streamqueue');
var gutil = require('gulp-util');
var uglify = require('gulp-uglifyjs');
var compass = require('gulp-compass');
var plumber = require('gulp-plumber');
var notify = require("gulp-notify");
var injectPartials = require('gulp-inject-partials');
var svgSprite = require("gulp-svg-sprites");
var purify = require('purify-css'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

// Compass compiler
gulp.task('compass', function() {
    gulp.src('./dev/sass/**/*.scss')
        .pipe(plumber(function(error) {
            gutil.log(error.message);
            this.emit('end');
        }))
        .pipe(compass({
            config_file: './config.rb',
            css: './dev/css',
            sass: './dev/sass'
        }))
        .pipe(gulp.dest('./dev/css'));
});

// Purify css
gulp.task('css-purify', function() {
    var content = ['./dev/*.html', './dev/js/*.js'];
    var css = ['./dev/css/styles.css'];
    var excludeClasses = [];
    var options = {
        // Will write purified CSS to this file.
        minify: true,
        output: './dev/css/styles.min.css',
        whitelist: excludeClasses
    };
    purify(content, css, options);

});

// Partial renderer 
gulp.task('ptl_render', function () {
  return gulp.src('./dev/templates/*.html')
  .pipe(injectPartials({
     removeTags: true
  }))
  .pipe(gulp.dest('./dev'));
});


// Uglied Js
gulp.task('uglify', function() {
    gulp.src('./dev/js/temp/bundle.js')
        .pipe(plumber(function(error) {
            gutil.log(error.message);
            this.emit('end');
        }))
        .pipe(uglify('main.js'))
        .pipe(gulp.dest('./dev/js'))
});

// Svg sprites
gulp.task('svg-sprites', function() {
    var config = {
        templates: { scss: true },
        cssFile: "../../sass/partials/_svg-sprite.scss",
        common: 'svg-icon',
        selector: "icon-%f",
        preview: false
    };
    return gulp.src('./dev/images/svgitems/*.svg')
        .pipe(svgSprite(config))
        .pipe(gulp.dest("./dev/images/"));
});

// Gulp streamqueue
gulp.task('scripts', function() {
    return streamqueue({ objectMode: true },
        gulp.src('dev/lib/jquery.min.js'),
        gulp.src('dev/lib/ScrollMagic.js'),
        gulp.src('dev/lib/bootstrap.min.js'), 
        gulp.src('dev/lib/greensock/TweenMax.min.js'),
        gulp.src('dev/lib/ScrollMagic.min.js'),
        gulp.src('dev/lib/plugins/animation.gsap.min.js'),
        gulp.src('dev/lib/jquery.magnific-popup.min.js'),
        gulp.src('dev/lib/scripts.js')
    )
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('dev/js/temp'));
});

/* Reload task */
gulp.task('bs-reload', function() {
    browserSync.reload();
});

gulp.task('browser-sync', function() {
    browserSync.init(['./dev/css/*.css', './dev/js/*.js'], {
        ui: {
            // port: 435
        },
        // port : 434,
        server: {
            baseDir: './dev/'
        }
    });
});

// or simply 
// gulp.task('browserSync', function() {
//   browserSync.init({
//     server: {
//       baseDir: ''
//     },
//   })
// })

// Set defaults
//gulp.task('run', ['scripts','uglify','compass']);

// Live watch
gulp.task('watch', ['ptl_render', 'compass', 'scripts', 'uglify', 'browser-sync'], function() {
    gulp.watch('./dev/templates/**/*.html', ['ptl_render']);
    gulp.watch('./dev/sass/**/*.scss', ['compass']);
    gulp.watch('./dev/lib/*.js', ['scripts']);
    gulp.watch('./dev/js/temp/bundle.js', ['uglify']);
    gulp.watch(['./dev/css/styles.css', './dev/js/*.js']);
    gulp.watch(['./dev/*.html'], ['bs-reload']);
});
