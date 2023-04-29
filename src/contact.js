/* eslint-disable no-restricted-syntax */
import * as devTools from "./generators";

const contactInfo = {
  Adress: "Pine Street 1401",
  "Open Time": "Tue-Sun:8am-11pm",
  Phone: "(222)-888 5555",
  Email: "ilrestorante@testmail.com",
};

const infoDiv = (function generateContactCard(info) {
  const title = devTools.generateElementWithText("h1", "contact-title", "Contact");
  const container = devTools.generateElement("div", "contact-wrapper");

  for (const [key, value] of Object.entries(info)) {
    const dataLabel = devTools.generateElementWithText("div", "data-label", `${key}:`);
    const dataValue = devTools.generateElementWithText("div", "data-value", value);
    const dataWrapper = devTools.generateBundleDiv([dataLabel, dataValue], "data-wrapper");
    container.appendChild(dataWrapper);
  }

  return devTools.generateBundleDiv([title, container], "contact-info");
}(contactInfo));

function generateContactForm() {
  const formWrapper = devTools.generateElement("div", "form-wrapper");
  const form = devTools.generateElement("form", "contact-form");

  form.innerHTML = `
  <h3>Message us</h3>
  <div class="input-box">
    <label for="name" class="label-name">Name:</label>
    <input type="text" id="name" required />
  </div>
  <div class="input-box">
    <label for="email" class="label-email">Email:</label>
    <input type="text" id="email" required />
  </div>
  <div class="input-box">
    <label for="phone" class="label-email">Phone:</label>
    <input type="number" id="phone" required />
  </div>
  <div class="input-box">
    <label for="phone" class="label-email">Message:</label>
    <textarea required></textarea>
  </div>
  <input type="submit" value="Send" />`;

  formWrapper.appendChild(form);
  return formWrapper;
}

const contactTab = devTools.generateBundleDiv([infoDiv, generateContactForm()], "contact-container");

export default contactTab;
