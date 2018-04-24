var     gulp = require('gulp'),
uglify = require("gulp-uglify"),
rename = require("gulp-rename"),
browserSync = require("browser-sync"),
eslint = require("gulp-eslint");


// function(){
//     return gulp
//     .src('./js/*.js') //Grab all files from this directory
//     .pipe(uglify()) //Uglify them
//     .pipe(rename({ extname: ".min.js" }))//Add .min.js to the filename
//     .pipe(gulp.dest("./build/js")); 
// }

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
    .pipe(uglify()) //Uglify them
    .pipe(rename({ extname: ".min.js" }))//Add .min.js to the filename
    .pipe(gulp.dest("./build/js")); 
} ));



gulp.task("watch", function(done){
    gulp.watch('js/*.js', gulp.series('scripts'));
    done();
});

gulp.task("browser-sync", function(done){
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    
    gulp
    .watch(['./build/js/*.js','style.css'])
    .on('change', browserSync.reload);
    
    done();
});



gulp.task('default', gulp.parallel('browser-sync','watch'));



