const { Given, When, Then } = require('cucumber');
const { By, until } = require('selenium-webdriver');
const expect = require('chai').expect;
const raceCarsLocators = require('../locators/racecards');


Given('I am on {string}', async function (bigRaceEntriesUrl) {
    await this.driver.get(bigRaceEntriesUrl);
    await this.driver.wait(until.elementIsVisible(By.id(raceCarsLocators.NAVIGATION_BAR)));
});

When('I click the {string} header', async function (tabToClick) {
    let chosenTab;

    switch (tabToClick) {
        case 'Big Race Entries':
            chosenTab = await this.driver.findElement(By.linkText(tabToClick));
            break;
        case 'home':
            chosenTab = await this.driver.findElement(By.css(raceCarsLocators.BIG_RACE_ENTTRIES_TAB));
            break;
        default:
            break;
    }
    await chosenTab.click();
});

Then('the date of the next big race event is in the future', async function () {
    const bigRaceEntries = await this.driver.findElement(By.css(raceCarsLocators.BIG_RACE_ENTRIES_TABLE));
    await this.driver.wait(until.elementIsVisible(bigRaceEntries), this.longTimeout);
    const nextBigRaceEventText = await bigRaceEntries.getText();

    let now = new Date();
    const dateNow = now.getDate() + " " + 
                    now.toLocaleDateString("default", { month: "long" }).substring(0, 3) + " " + 
                    now.getFullYear().toString().substring(2);

    expect(nextBigRaceEventText).to.be.greaterThan(dateNow.toString(),
        `The displayed date of the next big race event ${nextBigRaceEventText} is not greater than ${dateNow}`);
});
