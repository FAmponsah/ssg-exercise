require('selenium-webdriver');
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const { setWorldConstructor, setDefaultTimeout } = require('cucumber');

class CustomWorld {
    constructor() {
        this.baseUrl = 'http://computer-database.herokuapp.com';
        this.driver = new webdriver.Builder()
            .forBrowser('chrome')
            .build();
    }
}

setDefaultTimeout(60 * 1000);

setWorldConstructor(CustomWorld);
