
import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";

(async () => {
  const files = await imagemin(["./src/assets/iconsOrigin/*.png"], {
    destination: "./src/assets/icons/",
    plugins: [imageminWebp({ quality: 50 })],
  });

  console.log("Images optimized");
})();