import * as devTools from "./generators";
import home from "./home_tab";
import menu from "./menu/menu";
import contact from "./contact";

const mainContent = document.getElementById("content");
// to do

// set a 3 row grid for the main page
// this will be used as the base layout for the page
// top row will serve as the logo and nav container
// middle row will be the one that will be used to dinamically
// load the diferent parts of the website

const layoutGrid = devTools.generateElement("div", "layout-grid");
const logo = devTools.generateElement("h1", "logo");
logo.textContent = "IL RISTORANTE";

const tabLabels = ["Home", "Menu", "Contact"];
const tabContainer = devTools.generateElement("div", "tab-container");
tabLabels.forEach((label) => {
  const tab = devTools.generateElement("button", "tab");
  tab.textContent = label;
  tabContainer.appendChild(tab);
});

const headerContainer = devTools.generateElement("div", "header-container");
headerContainer.appendChild(logo);
headerContainer.appendChild(tabContainer);
mainContent.appendChild(layoutGrid);
layoutGrid.appendChild(headerContainer);
layoutGrid.appendChild(contact);
