
import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";

(async () => {
  const files = await imagemin(["./src/assets/weatherImageOrigin/*.png"], {
    destination: "./src/assets/weatherImage/",
    plugins: [imageminWebp({ quality: 50 })],
  });

  console.log("Images optimized");
})();