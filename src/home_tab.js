// generate a three part grid that has text on the sides
// and contains a png on the center cell
import * as devTools from "./generators";
import MainImage from "./main_dish.png";

const text1 = devTools.generateElementWithText("div", "home-text1", "Always Delivering");
const text2 = devTools.generateElementWithText("div", "home-text2", "Exceptionally  Delicious Meals");
const text3 = devTools.generateElementWithText("div", "flavour-text", "Lorem ipsum dolor sit amet.");
const textBundle = devTools.generateBundleDiv([text1, text2, text3], "home-text-container");
const image = devTools.generateImage(MainImage, "home-image");

export default devTools.generateBundleDiv([textBundle, image], "home-container");
