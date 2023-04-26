function generateElement(element, elementClass) {
  const newElement = document.createElement(element);
  newElement.classList.add(elementClass);
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

export { generateElement, generateImage, generateBundleDiv };
