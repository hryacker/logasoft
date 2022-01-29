import gulp from 'gulp';
import sassFunction from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import qcmq from 'gulp-group-css-media-queries';
import cleanCss from 'gulp-clean-css';
import compilerSass from 'sass';
import gulpif from 'gulp-if';
import rename from 'gulp-rename';
import sourcemaps from 'gulp-sourcemaps';

import config from "../config";

const sass = sassFunction(compilerSass);

export const scssBuild = () => (
    gulp.src(`${config.src.sass}/style.scss`)
        .pipe(gulpif(config.isDev, sourcemaps.init()))
        .pipe(sass().on('error', sass.logError))
        .pipe(qcmq())
        // .pipe(cleanCss({ level: 2 }))
        .pipe(autoprefixer({ cascade: true }))
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulpif(config.isDev, sourcemaps.write()))
        .pipe(gulp.dest(config.dest.css))
)

export const scssWatch = () => {
    gulp.watch(`${config.src.sass}/**/*.scss`, scssBuild);
}