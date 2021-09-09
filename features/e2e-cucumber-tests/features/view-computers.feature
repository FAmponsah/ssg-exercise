@runtest
@vieweditdeletecomputers
Feature: As a web user I should be able to view computers in the computers database so that I can create, edit and delete computers

@viewcomputers
Scenario: As a web user I should be able to view computers in the computers database
  When I navigate to 'http://computer-database.herokuapp.com/computers'
  Then I should see all hompage elements in their default states
  And I should see a list of all available computers displayed

# @nextandpreviouspages
# Scenario: As a web user I should be able to view computers using the next and previous buttons
     

# check computer names are not empty