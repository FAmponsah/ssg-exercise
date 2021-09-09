const { Given, When, Then } = require('cucumber');
const { By, until } = require('selenium-webdriver');
const expect = require('chai').expect;
const homepageLocators = require('../locators/homepage');


When('I navigate to {string}', async function (herokuAppUrl) {
    await this.driver.get(herokuAppUrl);
});

Then('I should see all hompage elements in their default states', async function () {
    const filterByNameButton = await this.driver.findElement(By.id(homepageLocators.FILTERBYNAMEBTNID));
    const searchBox = await this.driver.findElement(By.id(homepageLocators.SEARCHBOXID));
    const addComputerButton = await this.driver.findElement(By.id(homepageLocators.ADDCOMPUTERBTNID));
    const disabledPrevButton = await this.driver.findElement(By.xpath(homepageLocators.DISABLEDPREVBUTTONXPATH));
    const currentButton = await this.driver.findElement(By.xpath(homepageLocators.CURRENTBTNCLASS));
    const nextButton = await this.driver.findElement(By.xpath(homepageLocators.NEXTBTNXPATH));

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

Then('I should see a list of all available computers displayed', async function () {
    return 'pending';
});
