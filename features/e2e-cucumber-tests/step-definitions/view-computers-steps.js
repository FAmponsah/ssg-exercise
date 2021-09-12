const { Given, When, Then } = require('cucumber');
const { By, until } = require('selenium-webdriver');
const expect = require('chai').expect;
const homepageLocators = require('../locators/homepage');

let numberOfComputers;
let searchContext = '';


Given('I am on the heroku app computers database domain {string}', async function (domain) {
    const herokuAppUrl = this.baseUrl.concat(domain);
    await this.driver.get(herokuAppUrl);
});

Given('I see all hompage elements in their default states', async function () {
    const filterByNameButton = await this.driver.findElement(By.id(homepageLocators.FILTER_BY_NAME_BTN_ID));
    const searchBox = await this.driver.findElement(By.id(homepageLocators.SEARCH_BOX_ID));
    const addComputerButton = await this.driver.findElement(By.id(homepageLocators.ADD_COMPUTER_BTN_ID));
    const disabledPrevButton = await this.driver.findElement(By.xpath(homepageLocators.DISABLED_PREV_BUTTON_XPATH));
    const currentButton = await this.driver.findElement(By.xpath(homepageLocators.CURRENT_BTN_CLASS));
    const nextButton = await this.driver.findElement(By.css(homepageLocators.NEXT_BTN_SELECTOR));

    await this.driver.wait(until.elementIsVisible(searchBox));

    const filterButtonIsDisplayed = await filterByNameButton.isDisplayed();
    const searchBoxIsDisplayed = await filterByNameButton.isDisplayed();
    const addComputerButtonIsDisplayed = await addComputerButton.isDisplayed();
    const disabledPrevButtonIsDisplayed = await disabledPrevButton.isDisplayed();
    const currentButtonIsDisplayed = await currentButton.isDisplayed();
    const nextButtonIsDisplayed = await nextButton.isDisplayed();

    const scenario = 'on the computers database homepage as expected.';

    expect(filterButtonIsDisplayed).to.equal(true, `The filter by name button was not displayed ${scenario}`);
    expect(searchBoxIsDisplayed).to.equal(true, `The filter by name search box was not displayed ${scenario}`);
    expect(addComputerButtonIsDisplayed).to.equal(true, `The add a new computer button was not displayed ${scenario}`);
    expect(disabledPrevButtonIsDisplayed).to.equal(true, `The disabled previous pagination button was not displayed ${scenario}`);
    expect(currentButtonIsDisplayed).to.equal(true, `The current pagination button was not displayed ${scenario}`);
    expect(nextButtonIsDisplayed).to.equal(true, `The next pagination button was not displayed ${scenario}`);
    
    const filterButtonIsEnabled = await filterByNameButton.isEnabled();
    const searchBoxIsEnabled = await filterByNameButton.isEnabled();
    const addComputerButtonIsEnabled = await addComputerButton.isEnabled();
    const currentButtonIsEnabled = await currentButton.isEnabled();
    const nextButtonIsEnabled = await nextButton.isEnabled();
    
    expect(filterButtonIsEnabled).to.equal(true, `The filter by name button was not enabled ${scenario}`);
    expect(searchBoxIsEnabled).to.equal(true, `The filter by name search box was not enabled ${scenario}`);
    expect(addComputerButtonIsEnabled).to.equal(true, `The add a new computer button was not enabled ${scenario}`);
    expect(currentButtonIsEnabled).to.equal(true, `The current pagination button was not enabled ${scenario}`);
    expect(nextButtonIsEnabled).to.equal(true, `The next pagination button was not enabled ${scenario}`);
});

Given('I see a list of all available computers displayed', async function () {
    const resultsTable = await this.driver.findElement(By.className(homepageLocators.COMPUTERS_TABLE_ID));
    const tableBody = await resultsTable.findElement(By.tagName('tbody'));
    const tableRows = await tableBody.findElements(By.tagName('tr'));
    const numberOfRows = tableRows.length;
    expect(numberOfRows).to.be.greaterThan(0, 'There are no rows listed in the computers table as expected.');
});

Given('there are more than ten computers available in the computer database', async function () {
    const mainSectionHeader = await this.driver.findElement(By.xpath(homepageLocators.SECTION_HEADER_XPATH));
    let mainSectionHeaderText = await mainSectionHeader.getText();
    numberOfComputers = mainSectionHeaderText.split(" ")[0];
    const actualNoOfComputers = parseInt(numberOfComputers, 10);
    const expectedMinNoOfComputers = 10;
    expect(actualNoOfComputers).to.be.above(expectedMinNoOfComputers, `The number of computers ${actualNoOfComputers} in the computer database is not as expected ${expectedMinNoOfComputers}.`);
});

When('I click on the next pagination button', async function () {
    const nextButton = await this.driver.findElement(By.xpath(homepageLocators.NEXT_BTN_XPATH));
    const nextButtonLink = await nextButton.findElement(By.tagName('a'));

    if (numberOfComputers > 0) {
        await nextButtonLink.click();
    }
});

When('I search for a {string} computer as {string}', async function (context, computerName) {
    searchContext = context;
    const searchField = await this.driver.findElement(By.id(homepageLocators.SEARCH_BOX_ID));
    const filterByNameButton = await this.driver.findElement(By.id(homepageLocators.FILTER_BY_NAME_BTN_ID));
    await searchField.sendKeys(computerName);
    await filterByNameButton.click();
});

Then('I should see the page of the next list of computers', async function () {
    const expectedUrl = baseUrl.concat('/computers?p=1');
    const actualUrl = await this.driver.getCurrentUrl();
    expect(actualUrl).to.equal(expectedUrl,
        `The displayed Url ${actualUrl} is not as expected ${expectedUrl} after clicking on the next button.`)
});

Then('I can click on the previous pagination button', async function () {
    const previousButton = await this.driver.findElement(By.xpath(homepageLocators.PREV_BTN_XPATH));
    const previousButtonLink = await previousButton.findElement(By.tagName('a'));;
    await previousButtonLink.click();
});

Then('I should see the section header as {string}', async function(expectedSectionHeaderText) {
    const sectionHeader = await this.driver.findElement(By.xpath(homepageLocators.SECTION_HEADER_XPATH));
    const actualSectionHeaderText = await sectionHeader.getText();
    expect(actualSectionHeaderText).to.include(expectedSectionHeaderText,
        `The displayed section header text ${actualSectionHeaderText} is not as expected ${expectedSectionHeaderText} after searching for a ${searchContext} computer.`);
});

Then('I should see the message {string}', async function(expectedMessage) {
    if(expectedMessage !== '') {
        const nothingToDisplayWell = await this.driver.findElement(By.css(homepageLocators.NOTHING_TO_DISPLAY_TEXT_SELECTOR));
        const actualMessage = await nothingToDisplayWell.getText();
        expect(actualMessage).to.equal(expectedMessage, `The displayed message ${actualMessage} is not as expected ${expectedMessage} after searching for a computer.`);
    }
});
