import * as devTools from "../generators";
import { generateBundleDiv } from "../generators";
import Meal1 from "./meal_imgs/meal1.png";
import Meal2 from "./meal_imgs/meal2.png";
import Meal3 from "./meal_imgs/meal3.png";

const menu = [
  [Meal1, "Lorem Ipsum", "dolor sit amet", "20"],
  [Meal2, "Lorem Ipsum", "dolor sit amet", "25"],
  [Meal3, "Lorem Ipsum", "dolor sit amet", "30"],
];

function generateMealDiv(imageSrc, name, description, price) {
  const mealImage = devTools.generateImage(imageSrc, "meal-image");
  const mealName = devTools.generateElementWithText("div", "meal-name", name);
  const mealDesc = devTools.generateElementWithText("div", "meal-desc", description);
  const mealInfo = devTools.generateBundleDiv([mealName, mealDesc], "meal-info");
  const mealPrice = devTools.generateElementWithText("div", "meal-price", price);

  return generateBundleDiv([mealImage, mealInfo, mealPrice], "meal-menu");
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

  return generateBundleDiv(container, "menu");
}

export default generateFullMenu(menu);
