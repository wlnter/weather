
import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";

(async () => {
  const files = await imagemin(["./src/assets/weatherImage/*.png"], {
    destination: "./src/assets/weatherImageCompressed/",
    plugins: [imageminWebp({ quality: 80 })],
  });

  console.log("Images optimized");
})();