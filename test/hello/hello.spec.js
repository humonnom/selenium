const {Builder} = require('selenium-webdriver');

(async function helloSelenium() {
    let driver = await new Builder().forBrowser('chrome').build();

    await driver.get('https://test.artue.io');

    await driver.quit();
})();
