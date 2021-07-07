# Requestly for Selenium

This is the package for using [Requestly](https://requestly.io) in [Selenium](https://www.selenium.dev/). Using Requestly you can Modify Headers, Redirect Url, Mock API response, Delay/Throttle requests, etc.

## Installation

```
npm install requestly-selenium selenium-webdriver chromedriver
```

## Usage

```
require("chromedriver");
const { Builder } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const { getRequestlyExtension, importRequestlySharedList } = require("requestly-selenium");

const options = new chrome.Options().addExtensions(getRequestlyExtension());

const driver = new Builder()
    .forBrowser("chrome")
    .setChromeOptions(options)
    .build();

importRequestlySharedList(driver,<sharedList_URL>); // Imports Rules in Selenium using Requestly sharedList feature

```

#### Shared List

Users can share Requestly Rules with other users using Shared Lists which is used for importing rules into Selenium webdriver. Find more information [here](https://requestly.io/blog/2018/06/14/share-rules-with-other-users/)

