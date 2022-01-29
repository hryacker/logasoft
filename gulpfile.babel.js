import gulp from "gulp";
import server from "./gulp/tasks/server";
import { scriptsBuild, scriptsWatch } from "./gulp/tasks/scripts";
import { scssBuild, scssWatch } from "./gulp/tasks/styles";
import { assetsBuild, assetsWatch } from "./gulp/tasks/assets";
import { htmlWatch } from "./gulp/tasks/file-include";
// import { imagesBuild, imagesWatch } from "./gulp/tasks/images";
import config from "./gulp/config";

config.setEnv();

export const build = gulp.parallel(
    scriptsBuild, 
    scssBuild, 
    assetsBuild,
);

export const watch = gulp.series(
    server, 
    gulp.parallel(
        scriptsWatch, 
        scssWatch, 
        assetsWatch,
        htmlWatch
    ));

// export const fileinclude = gulp.series(htmlinclude);

