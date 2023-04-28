import * as devTools from "./generators";

const contactInfo = {
  Adress: "Pine Street 1401",
  "Open Time": "Tue-Sun:8am-11pm",
  Phone: "(222)-888 5555",
  Email: "ilrestorante@testmail.com",
};

function generateContactCard(info) {
  const title = devTools.generateElementWithText("h1", "contact-title", "Contact");
  const container = devTools.generateElement("div", "contact-wrapper");

  for (const [key, value] of Object.entries(info)) {
    const dataLabel = devTools.generateElementWithText("div", "data-label", key);
    const dataValue = devTools.generateElementWithText("div", "data-value", value);
    console.log(`${key}: ${value}`);
    const dataWrapper = devTools.generateBundleDiv([dataLabel, dataValue], "data-wrapper");
    container.appendChild(dataWrapper);
  }

  return devTools.generateBundleDiv([title, container], "contact-tab");
}

export default generateContactCard(contactInfo);
