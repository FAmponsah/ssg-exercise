require('selenium-webdriver');
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const { setWorldConstructor, setDefaultTimeout } = require('cucumber');

class CustomWorld {
    constructor() {
        this.baseUrl = 'http://computer-database.herokuapp.com';
        this.shortTimeout = 2 * 1000;
        this.mediumTimeout = 30 * 1000;
        this.longTimeout = 60 * 1000;

        this.driver = new webdriver.Builder()
            .forBrowser('chrome')
            .build();
    }
}

setDefaultTimeout(120 * 1000);

setWorldConstructor(CustomWorld);
