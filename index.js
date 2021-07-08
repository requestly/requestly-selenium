const path = require("path");
const fs = require("fs");
const CONSTANTS = require(path.join(__dirname, "CONSTANTS"));

/**
 * Reads and encodes file into base64
 * @param {String} file
 * @returns The file bytes converted into base64
 */
function encodeFile(file) {
  const stream = fs.readFileSync(file);
  return Buffer.from(stream).toString("base64");
}

/**
 * Returns base64 encoded Requestly extension which can be added to selenium browser
 * @returns Encoded Extension
 */
function getRequestlyExtension() {
  return encodeFile(
    path.join(
      __dirname,
      CONSTANTS.EXTENSION_FOLDER,
      CONSTANTS.REQUESTLY_EXTENSION
    )
  );
}

/**
 * Imports shared-list to user rules in requestly
 * @param {Object} driver selenium-webdriver instance
 * @param {Object} until selenium-webdriver until instance to wait for a condition
 * @param {Object} By selenium-webdriver By instance to locate an element
 * @param {String} sharedListUrl Requestly SharedList Url to be imported
 */
const importRequestlySharedList = async (driver, until, By, sharedListUrl) => {
  const tabs = await driver.getAllWindowHandles();
  // Switch to /rules which gets opened after installation of extension because
  // The focus is by default on the 1st tab opened.
  await driver.switchTo().window(tabs[0]);
  // Close the /rules tab
  await driver.close();
  // Switch to the 1st tab(default)
  await driver.switchTo().window(tabs[1]);
  // Open Page Url
  await driver.get(sharedListUrl);
  // Wait until Import List button gets loaded
  await driver.wait(
    until.elementsLocated(By.css(CONSTANTS.IMPORT_LIST_BUTTON_CLASS)),
    10000
  );
  // Click on import List button
  await driver.findElement(By.css(CONSTANTS.IMPORT_LIST_BUTTON_CLASS)).click();
};

module.exports = {
  getRequestlyExtension,
  importRequestlySharedList,
};
