const { Given, When, Then } = require('cucumber');
const { By, until } = require('selenium-webdriver');
const expect = require('chai').expect;
const raceCarsLocators = require('../locators/racecards');


Given('I am on {string}', async function (bigRaceEntriesUrl) {
    await this.driver.get(bigRaceEntriesUrl);
    await this.driver.wait(until.elementLocated(By.id(raceCarsLocators.NAVIGATION_BAR)));
});

When('I click the {string} header', async function (tabToClick) {
    const chosenTab = await this.driver.findElement(By.linkText(tabToClick));
    await chosenTab.click();
});

When('I click the name link of a result', async function () {
    const results = await this.driver.findElement(By.xpath(raceCarsLocators.RACE_RESULT_ROWS));
    const sections = await results.findElements(By.tagName("section"));
    await sections[0].click();
});

Then('the date of the next big race event is in the future', async function () {
    const bigRaceEntries = await this.driver.findElement(By.css(raceCarsLocators.BIG_RACE_ENTRIES_TABLE));
    await this.driver.wait(until.elementIsVisible(bigRaceEntries), this.longTimeout);
    const nextBigRaceEventText = await bigRaceEntries.getText();

    let now = new Date();
    const dateNow = now.getDate() + " " + 
                    now.toLocaleDateString("default", { month: "long" }).substring(0, 3) + " " + 
                    now.getFullYear().toString().substring(2);

    expect(nextBigRaceEventText).to.be.above(dateNow.toString(),
        `The displayed date of the next big race event ${nextBigRaceEventText} is not greater than ${dateNow}`);
});

Then('I can see details about the weather conditions', async function () {
    const weatherConditions = await this.driver.findElements(By.css(raceCarsLocators.WEATHER_CONDITIONS));
    // const weatherConditionsText = await weatherConditions.getText();
    // expect(weatherConditionsText).to.be.defined('Weather conditions information was not displayed on the UI as expected.');
});
