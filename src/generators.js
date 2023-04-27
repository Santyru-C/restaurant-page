function generateElement(element, elementClass) {
  const newElement = document.createElement(element);
  newElement.classList.add(elementClass);
  return newElement;
}

function generateImage(src, imgClass) {
  const imageContainer = generateElement("div", "image-container");

  const image = document.createElement("img");
  image.classList.add(imgClass);
  image.src = src;

  imageContainer.appendChild(image);
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
