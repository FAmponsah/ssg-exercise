@viewcomputersdatabse
Feature: As a web user I should be able to view computers in the computers database so that I can create, edit and delete computers

@viewhomepageandtestpagination
Scenario: As a web user I should be able to view computers in the computers database
  Given I am on the heroku app computers database domain '/computers'
  And I see all hompage elements in their default states
  And I see a list of all available computers displayed
  And there are more than ten computers available in the computer database
  When I click on the next pagination button
  Then I should see the page of the next list of computers
  And I can click on the previous pagination button

@searchforcomputers
Scenario Outline: As a web user I should search for a computer in the computers database
  Given I am on the heroku app computers database domain '/computers'
  When I search a '<Context>' computer as '<Computer>'
  Then I should see the section header as '<Header>'
  And I should see the message '<Message>'
  Examples:
  | Context      | Computer | Header              | Message            |
  | Non-existent | QATest   | No computers found  | Nothing to display |
  | Existent     | IBM      | computers found     |                    |
  | Empty field  |          | computers found     |                    |
