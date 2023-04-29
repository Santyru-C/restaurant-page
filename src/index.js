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

const tabLabels = ["home", "menu", "contact"];
const tabContainer = devTools.generateElement("ul", "tab-container");
tabLabels.forEach((label) => {
  const tabClass = `tab-${label}`;
  const tabText = label.charAt(0).toUpperCase() + label.slice(1);
  const tab = devTools.generateElementWithText("li", tabClass, tabText);
  tabContainer.appendChild(tab);
});

const headerContainer = devTools.generateElement("div", "header-container");
const contentContainer = devTools.generateElement("div", "content-container");
headerContainer.appendChild(logo);
headerContainer.appendChild(tabContainer);
mainContent.appendChild(layoutGrid);
layoutGrid.appendChild(headerContainer);
layoutGrid.appendChild(contentContainer);

let currentTab = "home";

function switchTab(newTab) {
  if (newTab !== currentTab) {
    contentContainer.removeChild(contentContainer.lastChild);
    switch (newTab) {
      case "home":
        console.log(home);
        contentContainer.appendChild(home);
        currentTab = "home";
        break;
      case "menu":
        contentContainer.appendChild(menu);
        currentTab = "menu";
        break;
      case "contact":
        contentContainer.appendChild(contact);
        currentTab = "contact";
        break;
      default:
        console.log("nain");
    }
  }
}
const homeTab = document.getElementsByClassName("tab-home")[0];
const menuTab = document.getElementsByClassName("tab-menu")[0];
const contactTab = document.getElementsByClassName("tab-contact")[0];
homeTab.addEventListener("click", () => { switchTab("home"); });
menuTab.addEventListener("click", () => { switchTab("menu"); });
contactTab.addEventListener("click", () => { switchTab("contact"); });
contentContainer.appendChild(home);
