const { Given, When, Then } = require('cucumber');
const { By, until } = require('selenium-webdriver');
const expect = require('chai').expect;
const raceCarsLocators = require('../locators/racecars');


Given('I am on {string}', async function (string) {
    return 'pending';
});

When('I click the {string} header', async function (string) {
    return 'pending';
});

Then('the date of the next big race event is in the future', function () {
    return 'pending';
});
