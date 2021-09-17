@runTest
Feature: As a web user I of the racing post site I should be able to view dates of 

@viewnextbigraceeventdate
Scenario: As a visitor to the racedards page I should be able to view the date of the next big race event
    Given I am on 'https://www.racingpost.com/racecards/'
    When I click the 'Big Race Entries' header
    Then the date of the next big race event is in the future

@viewresultdetails
Scenario: As a web user I should be able to view details of the weather conditions of a race result
   Given I am on 'https://www.racingpost.com/results/'
   When I click the name link of a result
   Then I can see details about the weather conditions
