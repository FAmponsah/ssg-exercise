const { Given, When, Then } = require('cucumber');
const { By, until } = require('selenium-webdriver');
const expect = require('chai').expect;
const helpers = require('../page-objects/helpers');
const commonLocators = require('../page-objects/common-locators');


Given('I am on {string}', async function (bigRaceEntriesUrl) {
    await this.driver.get(bigRaceEntriesUrl);
    await this.driver.wait(until.elementLocated(By.id(commonLocators.NAVIGATION_BAR)));
});

When('I click the {string} header', async function (tabToClick) {
    const chosenTab = await this.driver.findElement(By.linkText(tabToClick));
    await chosenTab.click();
});

When('I click the name link of a result', async function () {
    const results = await this.driver.findElement(By.xpath(commonLocators.RACE_RESULT_ROWS));
    const sections = await results.findElements(By.tagName("section"));
    await sections[0].click();
});

Then('the date of the next big race event is in the future', async function () {
    const bigRaceEntries = await this.driver.findElement(By.css(commonLocators.BIG_RACE_ENTRIES_TABLE));
    await this.driver.wait(until.elementIsVisible(bigRaceEntries), this.mediumTimeout);
    const nextBigRaceEventDate = await bigRaceEntries.getText();
    const dateNow = await helpers.getTodaysFormatedDate();
    const dateIsInTheFuture = (nextBigRaceEventDate >= dateNow); // The future date can be today but with a later timestamp.
    expect(dateIsInTheFuture).equal(true,
        `The displayed date of the next big race event ${nextBigRaceEventDate} is not further than ${dateNow}`);
});

Then('I can view meeting details of a race result', async function () {
    const meetings = await this.driver.findElements(By.css(commonLocators.MEETING_DETAILS_SECTION));
    const meetingDetails = await meetings[0].getText();
    const emptyString = '';
    expect(meetingDetails).to.not.equal(emptyString, 'Meeting setails of a race result was not displayed as expected.');
});

























































