# Requestly for Selenium

This is the package for using [Requestly](https://requestly.io) in [Selenium](https://www.selenium.dev/). Using Requestly you can Modify Headers, Redirect Url, Mock API response, Delay/Throttle requests, etc.

## Installation

```sh
npm install selenium-webdriver @requestly/selenium
```

## Usage

#### For Chrome

```js
require("chromedriver");
const { Builder } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const { getRequestlyExtension, importRequestlySharedList } = require("@requestly/selenium");

const options = new chrome.Options().addExtensions(getRequestlyExtension("chrome"));

const driver = new Builder()
    .forBrowser("chrome")
    .setChromeOptions(options)
    .build();

importRequestlySharedList(driver, <sharedList_URL>); // Imports Rules in Selenium using Requestly sharedList feature

```

> `chromedriver` is an npm wrapper for selenium ChromeDriver.

#### For Firefox

```js
require("geckodriver");
const { Builder } = require("selenium-webdriver");
const firefox = require("selenium-webdriver/firefox");
const { getRequestlyExtension, importRequestlySharedList } = require("@requestly/selenium");

const options = new firefox.Options().addExtensions(getRequestlyExtension("firefox"));

const driver = new Builder()
    .forBrowser("firefox")
    .setFirefoxOptions(options)
    .build();

importRequestlySharedList(driver, <sharedList_URL>); // Imports Rules in Selenium using Requestly sharedList feature

```

> `geckodriver` is an npm wrapper for selenium.

#### Shared List

Users can share Requestly Rules with other users using Shared Lists which is used for importing rules into Selenium webdriver. You can try this sample shared list - https://app.requestly.io/shared-lists/viewer/1625686153436-Sample-Rules

Find more information [here](https://requestly.io/blog/2018/06/14/share-rules-with-other-users/)
