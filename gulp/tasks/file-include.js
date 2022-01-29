import gulp from 'gulp';
import sourceStream from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import config from '../config';
import fileinclude from 'gulp-file-include';



const htmlBuild = function() {
    return gulp.src([`./${config.src.html}/**/*.html`])
    .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
      }))
      .pipe(gulp.dest(`./${config.dest.html}`));
  };

export const htmlWatch = () => gulp.watch(`${config.src.html}/**/*.html`, htmlBuild)
