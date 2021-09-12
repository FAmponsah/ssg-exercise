@deletecomputers
Feature: As a web user I should be able to delete a computer in the computers database so that I can remove it from the computers listing page

#@runtest
@deleteexistingcomputer
Scenario: As a web user I should be able to delete a computers in the computers database
  Given I am on the heroku app computers database domain '/computers'
  And I see a list of all available computers displayed
  And I click on the computer name in the first row
  When I click on the delete button
  Then I should see the delete confirmation message 'Done! Computer has been deleted'
  # UNIMPLEMENTED: The step below will fail becuase others are creating computers in the database
  # And the number of computers should be decreased by one 

#@canceldelete
