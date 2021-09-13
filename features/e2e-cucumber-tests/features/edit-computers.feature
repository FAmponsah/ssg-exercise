@editcomputers
Feature: As a web user I should be able to edit a computer in the computers database so that I can update its details

#@runtest
@editexistingcomputer
Scenario Outline: As a web user I should be able to edit a computer in the computers database: <Name>
  Given I am on the heroku app computers database domain '/computers'
  And I see a list of all available computers displayed
  And I search for a 'existent' computer as 'IBM'
  And I click on the computer name in the first row
  And I enter the computer details as '<Name>' '<IntDate>' '<DisDate>'
  When I click on the 'save' button
  Then I should see the message '<Message>'
  Examples:
  | Name     | IntDate | DisDate | Message                                          |
  |          |         |         | Required                                         |
  | Test-001 |         |         | Done! Computer Test Machine 001 has been updated |

#@canceldelete

#@selectnewcompany