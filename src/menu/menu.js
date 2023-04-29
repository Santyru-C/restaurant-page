import * as devTools from "../generators";
import Meal1 from "./meal_imgs/meal1.png";
import Meal2 from "./meal_imgs/meal2.png";
import Meal3 from "./meal_imgs/meal3.png";

const menu = [
  [Meal1, "Lorem Ipsum", "Etiam accumsan turpis sed enim sollicitudin dignissim.", "20"],
  [Meal2, "Lorem Ipsum", "Etiam accumsan turpis sed enim sollicitudin dignissim.", "25"],
  [Meal3, "Lorem Ipsum", "Etiam accumsan turpis sed enim sollicitudin dignissim.", "30"],
];
// agregar otra mas y poner overflow control en el cotenedor

function generateMealDiv(imageSrc, name, description, price) {
  const mealImage = devTools.generateImage(imageSrc, "meal-image");
  const mealName = devTools.generateElementWithText("div", "meal-name", name);
  const mealDesc = devTools.generateElementWithText("div", "meal-desc", description);
  const mealInfo = devTools.generateBundleDiv([mealName, mealDesc], "meal-info");
  const mealRight = devTools.generateBundleDiv([mealImage, mealInfo], "meal-right");
  const mealPrice = devTools.generateElementWithText("div", "meal-price", price);

  return devTools.generateBundleDiv([mealRight, mealPrice], "meal-menu");
}

function generateFullMenu(menuTemplate) {
  const container = [];

  menuTemplate.forEach((element) => {
    const img = element[0];
    const name = element[1];
    const desc = element[2];
    const price = element[3];

    const mealDiv = generateMealDiv(img, name, desc, price);
    container.push(mealDiv);
  });

  return devTools.generateBundleDiv(container, "menu-container");
}

export default generateFullMenu(menu);
