import gulp from 'gulp';
import browserify from 'browserify';
import sourceStream from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import sourcemaps from 'gulp-sourcemaps';
import uglify from 'gulp-uglify';
import config from '../config';

export const scriptsBuild = () => (
  browserify(`${config.src.js}/script.js`)
    .transform("babelify", {presets: ["@babel/preset-env"]})
    .bundle()
    .on('error', function browserifyError(error){
      console.log(error.stack);
      this.emit('end');
  })
  .pipe(sourceStream('script.js'))
  .pipe(buffer())
  .pipe(gulp.dest(`${config.dest.js}`))
);

export const scriptsWatch = () => gulp.watch(`${config.src.js}/**/*.js`, scriptsBuild)
