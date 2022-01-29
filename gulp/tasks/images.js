import gulp from "gulp";
import config from "../config";

const copyImages = () => (
    gulp.src(`${config.src.images}/**/*`)
    .pipe(gulp.dest(`${config.dest.images}`))
)

export const imagesBuild = gulp.parallel(imagesBuild)

export const imagesWatch = () => gulp.watch(`${config.src.images}/**/*`, imagesBuild)