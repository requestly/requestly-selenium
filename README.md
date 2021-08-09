# Requestly for Selenium

This is the package for using [Requestly](https://requestly.io) in [Selenium](https://www.selenium.dev/). Using Requestly you can Modify Headers, Redirect Request Url, Mock API response, Delay/Throttle requests, etc.

## Installation

```sh
npm install selenium-webdriver @requestly/selenium
```

## Usage

### For Chrome

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

### For Firefox

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

> `geckodriver` is an npm wrapper for selenium firefox.

### For Edge

```js
require('msedgedriver');
var webdriver = require('selenium-webdriver');
const edge = require("selenium-webdriver/edge");
const { getRequestlyExtension, importRequestlySharedList } = require("@requestly/selenium");

const options = new edge.Options().addExtensions(getRequestlyExtension("MicrosoftEdge"));

var driver = new webdriver.Builder()
  .forBrowser('MicrosoftEdge')
  .setEdgeOptions(options)
  .build();

importRequestlySharedList(driver, <sharedList_URL>); // Imports Rules in Selenium using Requestly sharedList feature

```

> `msedgedriver` is an npm wrapper for selenium edge.

### Shared List

Users can share Requestly Rules with other users using Shared Lists which is used for importing rules into Selenium webdriver.

Almost all websites contain `content-security-policy` and `X-Frame-Options` header due to which the browser does not the allow the website to open in iframe.

You can try this sharedlist to open websites in iframe:
[https://app.requestly.io/rules/#sharedList/1628536158787-Open-Websites-in-iframe](https://app.requestly.io/rules/#sharedList/1628536158787-Open-Websites-in-iframe)

#### Snippet to open linkedin in iframe in selenium

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

importRequestlySharedList(driver,"https://app.requestly.io/rules/#sharedList/1628536158787-Open-Websites-in-iframe"); // Imports Rule to load linkedin in iframe

driver.get("https://jsbin.com/zotofulofu/2/edit?html,output"); // Opens a jsbin which loads linkedin in iframe

```

> Try opening the above `jsbin` without the `importRequestlySharedList` step. Did `linkedin` load in `iframe` without that step?


Find more information [here](https://requestly.io/blog/2018/06/14/share-rules-with-other-users/)
