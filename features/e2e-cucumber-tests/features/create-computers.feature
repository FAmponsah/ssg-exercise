#@runtest
@createcomputers
Feature: As a web user I should be able to create computers in the computers database so that I can use them

@addnewcomputer
Scenario Outline: As a web user I should be able to add a new computer
    Given I am on the heroku app computers database domain '/computers'
    And I click on the 'Create a new computer' button
    When I enter the computer details as: '<Computer name>', '<Introduced date>', '<Discontinued date>', '<Country>', respectively
    And I click on the create this computer button
    Then I should see the message '<Message>' displayed on the screen
    Examples:
      | Computer name  | Introduced date | Discontinued date | Company | Message                                        |
      |                |                 |                   |         | Required                                       |
      | Test Machine 1 |                 |                   |         |                                                |
      | Test Machine 2 | 2021/09/09      |                   |         | Done! Computer Test Machine 2 has been created |
      | Test Machine 3 | 2021/09/09      | 2021/12/09        |         | Done! Computer Test Machine 3 has been created |
      | Test Machine 4 | 2021/09/09      | 2021/12/09        | IBM     | Done! Computer Test Machine 4 has been created |
      | Test Machine 5 | 2021/09/09      | 2021/12/09        | Cannon  | Done! Computer Test Machine 5 has been created |
