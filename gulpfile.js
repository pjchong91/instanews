//Required Node Modules

var     gulp = require('gulp'), 
uglify = require("gulp-uglify"),
rename = require("gulp-rename"),
browserSync = require("browser-sync"),
eslint = require("gulp-eslint")
sass = require("gulp-sass"),
autoprefixer = require("gulp-autoprefixer"),
cssnano = require("gulp-cssnano");
babel = require("gulp-babel");

// gulp.task("babel", () => {
//   return gulp
//     .src("src/js.script.js")
//     .pipe(babel())
//     .pipe(gulp.dest("./build/js/babel.js"));
// });

// gulp.task('babel', () => //Babel Task
//     gulp.src('js/script.js')
//         .pipe(babel({
//             presets: ['env']
//         }))
//         .pipe(gulp.dest('./build/js/babel.js'))
// );

gulp.task("sass", function() {
    return gulp
      .src("./sass/style.scss")
      .pipe(sass())
      .pipe(
        autoprefixer({
          browsers: ["last 2 versions"]
        })
      )
      .pipe(gulp.dest("./build/css"))
      .pipe(cssnano())
      .pipe(rename("style.min.css"))
      .pipe(gulp.dest("./build/css"));
  });

gulp.task('lint', () =>{
    return gulp
    .src(['./js/*.js', '!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task("scripts", gulp.series("lint", function(){
    return gulp
    .src('./js/*.js') //Grab all files from this directory
    .pipe(babel({ //Babel our script.js file
        presets: ['env']
    }))
    .pipe(uglify()) //Uglify them
    .pipe(rename({ extname: ".min.js" }))//Add .min.js to the filename
    .pipe(gulp.dest("./build/js")); 
} ));

gulp.task("watch", function(done){
    gulp.watch('js/*.js', gulp.series('scripts'));
    gulp.watch('sass/*.scss', gulp.series('sass'));
    done();
});

gulp.task("browser-sync", function(done){
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    
    gulp
    .watch(['./build/js/*.js','./build/css/*.css'])
    .on('change', browserSync.reload);
    
    done();
});



gulp.task('default', gulp.parallel('browser-sync','watch'));



