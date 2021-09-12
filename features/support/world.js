require('selenium-webdriver');
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const { setWorldConstructor, setDefaultTimeout } = require('cucumber');

class CustomWorld {
    constructor() {
        this.baseUrl = 'http://computer-database.herokuapp.com';
        this.shorttimeout = 2 * 1000;
        this.mediumtimeout = 20 * 1000;
        this.longtimeout = 60 * 1000;

        this.driver = new webdriver.Builder()
            .forBrowser('chrome')
            .build();
    }
}

setDefaultTimeout(120 * 1000);

setWorldConstructor(CustomWorld);
