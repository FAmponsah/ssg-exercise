@test
Feature: As a web user of the racing post site I should be able to view dates of race events and view meeting details of a race result

@viewnextbigraceeventdate
Scenario: As a web user I should be able to view the date of the next big race event
    Given I am on 'https://www.racingpost.com/racecards/'
    When I click the 'Big Race Entries' header
    Then the date of the next big race event is in the future

@viewmeetingdetails
Scenario: As a web user I should be able to view meeting details of a race result
   Given I am on 'https://www.racingpost.com/results/'
   When I click the name link of a result
   Then I can view meeting details of a race result
