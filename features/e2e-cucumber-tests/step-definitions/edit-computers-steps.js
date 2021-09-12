const { Given, When, Then } = require('cucumber');
const { By, until } = require('selenium-webdriver');
const expect = require('chai').expect;
const editCompLocators = require('../locators/edit-computers');
const helperFunctions = require('../../support/helper-functions');


Given('I enter the computer details as {string} {string} {string}', async function (newName, startDate, endDate) {
    await helperFunctions.waitForTimeout(this.longtimeout)
    const computerName = await this.driver.findElement(By.id(editCompLocators.COMPUTER_NAME_ID));
    const introducedDate = await this.driver.findElement(By.id(editCompLocators.INTRODUCED_DATE_ID));
    const discontinuedDate = await this.driver.findElement(By.id(editCompLocators.DISCONTINUED_BTN_ID));

    await computerName.clear().sendKeys(newName);
    await introducedDate.clear().sendKeys(introducedDate);
    await discontinuedDate.clear().sendKeys(discontinuedDate);
});

When('I click on the save button', async function () {
    return 'pending';
});

Then('I should see the message {string}', async function (expectedMessage) {
    return 'pending';
});