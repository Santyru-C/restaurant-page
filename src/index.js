const mainContent = document.getElementById("content");

// to do

// set a 3 row grid for the main page
// this will be used as the base layout for the page
// top row will serve as the logo and nav container
// middle row will be the one that will be used to dinamically
// load the diferent parts of the website

const layoutGrid = document.createElement("div");
layoutGrid.classList.add("layout-grid");

function generateNavBar() {
  const navBar = document.createElement("div");
  navBar.classList.add("top-nav");

  const tabLabels = ["Home", "Menu", "Contact"];
  tabLabels.forEach((label) => {
    const tab = document.createElement("div");
    tab.textContent = label;
    tab.classList.add("tab");
    navBar.appendChild(tab);
  });
  return navBar;
}

mainContent.appendChild(layoutGrid);
layoutGrid.appendChild(generateNavBar());
