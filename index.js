const path = require("path");
const fs = require("fs");
const { By, until } = require("selenium-webdriver");

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
 * Returns base64 encoded Requestly extension which can be added to selenium-chrome
 * @returns Encoded Extension
 */
function getRequestlyExtension() {
  return encodeFile(
    path.join(__dirname, "extensions", "requestly-21.6.30.crx")
  );
}

/**
 * Imports shared-list to user rules in requestly
 * @param {Object} driver selenium webDriver instance
 * @param {String} sharedListUrl Requestly SharedList Url to be imported
 */
const importRequestlySharedList = async (driver, sharedListUrl) => {
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
  await driver.wait(until.elementsLocated(By.css(".btn-primary")), 10000);
  // Click on import List button
  await driver.findElement(By.css(".btn-primary")).click();
};

module.exports = {
  getRequestlyExtension,
  importRequestlySharedList,
};
