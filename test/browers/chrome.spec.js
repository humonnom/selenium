const Chrome = require('selenium-webdriver/chrome');
const {suite} = require('selenium-webdriver/testing');
const {Browser} = require("selenium-webdriver");

suite(function(env)  {
    describe('Chrome', function() {
        it('Basic Chrome test', async function () {
            const options = new Chrome.Options();
            let driver = await env
                .builder()
                .setChromeOptions(options)
                .build();

            await driver.get('https://www.selenium.dev/selenium/web/blank.html');
            await driver.quit();
        });
    });
}, {browsers: [Browser.CHROME]})

