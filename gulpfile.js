var     gulp = require('gulp'),
uglify = require("gulp-uglify"),
rename = require("gulp-rename"),
browserSync = require("browser-sync");

gulp.task("scripts", function(){
    return gulp
    .src('./js/*.js') //Grab all files from this directory
    .pipe(uglify()) //Uglify them
    .pipe(rename({ extname: ".min.js" }))//Add .min.js to the filename
    .pipe(gulp.dest("./build/js")); 
})

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
    .watch('./build/js/*.js')
    .on('change', browserSync.reload);
    
    done();
});



gulp.task('default', gulp.parallel('browser-sync','watch'));



