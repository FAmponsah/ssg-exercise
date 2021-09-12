const { Given, When, Then } = require('cucumber');
const { By, until } = require('selenium-webdriver');
const expect = require('chai').expect;
const deleteComputersLocators = require('../locators/delete-computers');


Given('I click on the computer name in the first row', async function () {
    const computerName = await this.driver.findElement(By.css(deleteComputersLocators.FIRST_COMPUTER_NAME));
    await this.driver.wait(until.elementIsVisible(computerName));
    await computerName.click();
});

When('I click on the delete button', async function () {
    const deleteButton = await this.driver.findElement(By.css(deleteComputersLocators.DELETE_BTN));
    await this.driver.wait(until.elementIsVisible(deleteButton));
    await deleteButton.click();
});

Then('I should see the delete confirmation message {string}', async function(expectedDeleteConfirmationMessage) {
    await this.driver.manage().setTimeouts({ implicit: this.longtimeout });
    const deleteComfirmationPane = await this.driver.findElement(By.css(deleteComputersLocators.DELETE_COMFIRMATION));
    await this.driver.wait(until.elementIsVisible(deleteComfirmationPane));
    const actualDeleteConfirmationMessage = await deleteComfirmationPane.getText();
    expect(actualDeleteConfirmationMessage).to.equal(expectedDeleteConfirmationMessage,
        `The displayed message ${actualDeleteConfirmationMessage} is not as expected ${expectedDeleteConfirmationMessage} after deleting a computer.`)
});
