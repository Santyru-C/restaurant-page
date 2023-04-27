// generate a three part grid that has text on the sides
// and contains a png on the center cell
import * as devTools from "./generators";
import MainImage from "./main_dish.png";

const text1 = devTools.generateElement("div", "home-text1");
const text2 = devTools.generateElement("div", "home-text2");
const text3 = devTools.generateElement("div", "flavour-text");
text1.textContent = "Always Delivering";
text2.textContent = "Exceptionally  Delicious Meals";
text3.textContent = "Lorem ipsum dolor sit amet.";
const textBundle = devTools.generateBundleDiv([text1, text2, text3], "home-text-container");
const image = devTools.generateImage(MainImage, "home-image");

export default devTools.generateBundleDiv([textBundle, image], "home-container");
