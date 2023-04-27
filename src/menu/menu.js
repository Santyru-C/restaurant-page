import * as devTools from "../generators";
import { generateBundleDiv } from "../generators";
import Meal1 from "./meal_imgs/meal1.png";
import Meal2 from "./meal_imgs/meal2.png";
import Meal3 from "./meal_imgs/meal3.png";

function generateMealMenu(imageSrc, name, description, price) {
  const mealImage = devTools.generateImage(imageSrc, "meal-image");
  const mealName = devTools.generateElementWithText("div", "meal-name", name);
  const mealDesc = devTools.generateElementWithText("div", "meal-desc", description);
  const mealInfo = devTools.generateBundleDiv([mealName, mealDesc], "meal-info");
  const mealPrice = devTools.generateElementWithText("div", "meal-price", price);

  return generateBundleDiv([mealImage, mealInfo, mealPrice], "meal-menu");
}

const menu1 = generateMealMenu(Meal1, "asdfsdaf", "sadfasdf", "200");

export default menu1;
