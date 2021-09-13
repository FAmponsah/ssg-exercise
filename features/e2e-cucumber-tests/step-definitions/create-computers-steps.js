const { Given, When, Then } = require('cucumber');
const { By, until } = require('selenium-webdriver');
const expect = require('chai').expect;
const createCompsLocators = require('../locators/create-computers');
const homepageLocators = require('../locators/homepage');
const helperFunctions = require('../../support/helper-functions');


Given('I click on the {string} button', async function (buttonName) {
    await helperFunctions.waitForTimeout(this.mediumTimeout);
    let element;

    switch (buttonName) {
        case 'Create a new computer':
            element = await this.driver.findElement(By.css(createCompsLocators.ADD_NEW_COMPUTER_BTN));
            break;
        default:
            break;
    }
    await element.click();
});

Given('I enter the new computer details as {string} {string} {string} {string}', async function (compName, intDate, discDate, country) {
    const computerNameField = await this.driver.findElement(By.id(createCompsLocators.COMPUTER_NAME_ID));
    const introducedDateField = await this.driver.findElement(By.id(createCompsLocators.INTRODUCED_DATE_ID));
    const discontinuedDateField = await this.driver.findElement(By.id(createCompsLocators.DISCONTINUED_DATE_ID));

    await computerNameField.clear().senKeys(compName);
    await introducedDateField.clear().senKeys(intDate);
    await discontinuedDateField.clear().senKeys(discDate);

    if(company !== '') {
        await this.driver.selectDropDownItem(compNameField, company);
    }
});

When('I click on the create this computer button', async function () {
    return 'pending';
});

Then('I should see the message {string} displayed on the screen', async function (expectedMessage) {
    return 'pending';
});
