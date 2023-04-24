// generate a three part grid that has text on the sides
// and contains a png on the center cell
import MainImage from "./main_dish.png";

function generateTextDiv(template) {
  const textContainer = document.createElement("div");
  textContainer.classList.add(template[0]);
  textContainer.textContent = template[1];
  return textContainer;
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

const textTemplate1 = ["restaurant_name-text", "Praesent imperdiet bibendum elementum."];
const textTemplate2 = ["flavour-text", "Lorem ipsum dolor sit amet."];
const text1 = generateTextDiv(textTemplate1);
const text2 = generateTextDiv(textTemplate2);
const image = generateImage(MainImage);

function generateBundleDiv(childElements) {
  const bundleDiv = document.createElement("div");
  bundleDiv.classList.add("home-main-container");

  childElements.forEach((element) => {
    bundleDiv.appendChild(element);
  });

  return bundleDiv;
}

export default generateBundleDiv([text1, image, text2]);
