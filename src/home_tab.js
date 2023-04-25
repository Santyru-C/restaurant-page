// generate a three part grid that has text on the sides
// and contains a png on the center cell
import MainImage from "./main_dish.jpg";

function generateElement(element, template) {
  const newElement = document.createElement(element);
  newElement.classList.add(template[0]);
  newElement.textContent = template[1];
  return newElement;
}

function generateImage(src) {
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("home-image-container");

  const homeMealImage = document.createElement("img");
  homeMealImage.classList.add("home-image");
  homeMealImage.src = src;

  imageContainer.appendChild(homeMealImage);
  return imageContainer;
}

function generateBundleDiv(childElements, className) {
  const bundleDiv = document.createElement("div");
  bundleDiv.classList.add(className);

  childElements.forEach((element) => {
    bundleDiv.appendChild(element);
  });

  return bundleDiv;
}

const textTemplate1 = ["restaurant-name-text", "Enjoy Our Delicious Meals"];
const textTemplate2 = ["flavour-text", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."];
const text1 = generateElement("div", textTemplate1);
const text2 = generateElement("div", textTemplate2);
const textBundle = generateBundleDiv([text1, text2], "home-text-container");
const image = generateImage(MainImage);

export default generateBundleDiv([image, textBundle], "home-container");
