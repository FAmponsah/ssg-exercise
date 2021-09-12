const { Given, When, Then } = require('cucumber');
const { By, until } = require('selenium-webdriver');
const expect = require('chai').expect;
const createCompsLocators = require('../locators/create-computers');


Given('I click on the {string} button', async function (createComputrButton) {
    const timeToWait = 25000;
    await this.driver.sleep(timeToWait);
    const createNewCompBtn = await this.driver.findElement(By.id(createCompsLocators.CREATE_COMPUTER_BTN_ID));
    await createNewCompBtn.click();
});

When('I enter the computer details as: {string}, {string}, {string}, {string}, respectively', async function (compName, intDate, discDate, country) {
    const computerNameField = await this.driver.findElement(By.id(createCompsLocators.COMPUTER_NAME_ID));
    const introducedDateField = await this.driver.findElement(By.id(createCompsLocators.INTRODUCED_DATE_ID));
    const discontinuedDateField = await this.driver.findElement(By.id(createCompsLocators.DISCONTINUED_DATE_ID));
    const compNameField = await this.driver.findElement(By.id(createCompsLocators.COMPUTER_NAME_ID));

    await computerNameField.senKeys(compName);
    await introducedDateField.senKeys(intDate);
    await discontinuedDateField.senKeys(discDate);
    await this.driver.selectDropDownItem(compNameField, "IBM");
});

When('I click on the create this computer button', async function () {
    return 'pending';
});

Then('I should see the message {string} displayed on the screen', async function (expectedMessage) {
    return 'pending';
});
