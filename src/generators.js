function generateElement(element, elementClass) {
  const newElement = document.createElement(element);
  newElement.classList.add(elementClass);
  return newElement;
}

function generateImage(src, imgClass) {
  /* Returns the image wrapped in a generic div container */
  const imageContainer = generateElement("div", "image-container");

  const image = document.createElement("img");
  image.classList.add(imgClass);
  image.src = src;

  imageContainer.appendChild(image);
  return imageContainer;
}

function generateElementWithText(element, elementClass, text) {
  const newElement = generateElement(element, elementClass);
  newElement.textContent = text;

  return newElement;
}

function generateBundleDiv(childElements, className) {
  const bundleDiv = document.createElement("div");
  bundleDiv.classList.add(className);

  childElements.forEach((element) => {
    bundleDiv.appendChild(element);
  });

  return bundleDiv;
}

export {
  generateElement,
  generateImage,
  generateBundleDiv,
  generateElementWithText,
};
