import gulp from "gulp";
import paths from "./gulp/config/paths.js";
import plugins from "./gulp/config/plugins.js";
import server from "./gulp/tasks/server.js";
import cleanDist from "./gulp/tasks/cleanDist.js";
import html from "./gulp/tasks/html.js";
import js from "./gulp/tasks/js.js";
import scss from "./gulp/tasks/scss.js";
import img from "./gulp/tasks/img.js";
import { ttf, otfToTtf, ttfToWoff, fonts } from "./gulp/tasks/fonts.js";
import files from "./gulp/tasks/files.js";

// Ð³Ð»Ð¾Ð±Ð°Ð»ÑŒÐ½Ñ‹Ðµ Ð¿ÐµÑ€ÐµÐ¼ÐµÐ½Ð½Ñ‹Ðµ
global.app = {
  isBuild: process.argv.includes("--build"),
  isDev: !process.argv.includes("--build"),
  paths: paths,
  gulp: gulp,
  plugins: plugins,
};

// Ñ‚Ð°Ñ�Ðº Ð´Ð»Ñ� ÐºÐ¾Ð½Ð²ÐµÑ€Ñ‚Ð°Ñ†Ð¸Ð¸ ÑˆÑ€Ð¸Ñ„Ñ‚Ð¾Ð²
gulp.task("optimize", async function () {
  return gulp.series(ttf, otfToTtf, ttfToWoff);
});

// Ð¾Ñ�Ð½Ð¾Ð²Ð½Ñ‹Ðµ Ð·Ð°Ð´Ð°Ñ‡Ð¸
const mainTasks = gulp.parallel(files, html, scss, js, img, fonts);

// Ð½Ð°Ð±Ð»ÑŽÐ´Ð°Ñ‚ÐµÐ»Ð¸ Ð·Ð° Ñ�Ð¼ÐµÐ½Ð¾Ð¹ Ñ„Ð°Ð¹Ð»Ð¾Ð² Ð´Ð»Ñ� Ð¿ÐµÑ€ÐµÑ�Ð±Ð¾Ñ€ÐºÐ¸
function watcher() {
  gulp.watch(paths.watch.files, files);
  gulp.watch(paths.watch.html, html);
  gulp.watch(paths.watch.scss, scss);
  gulp.watch(paths.watch.js, js);
  gulp.watch(paths.watch.img, img);
}

// Ñ�Ñ†ÐµÐ½Ð°Ñ€Ð¸Ð¸
const dev = gulp.series(cleanDist, mainTasks, gulp.parallel(server, watcher));
const build = gulp.series(cleanDist, mainTasks);

gulp.task("default", dev);

export { dev, build };
