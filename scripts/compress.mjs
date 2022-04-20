
import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";

(async () => {

  await imagemin(["./src/assets/icon-origin/64/*.png"], {
    destination: "./src/assets/icon/64/",
    plugins: [imageminWebp({ quality: 50 })],
  });
  await imagemin(["./src/assets/icon-origin/128/*.png"], {
    destination: "./src/assets/icon/128/",
    plugins: [imageminWebp({ quality: 50 })],
  });

  console.log("Images optimized");
})();