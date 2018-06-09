Feature: Walmart login page funtionalities
  Background: Not a valideted home page
    When Open browser and start application
    Then Walmart homepage shoule dispaly
    When User click on account button
    And Click on signin option
    Then Login "Login" page should display

  Scenario: 1.User put all the valid informations
    When User write email "demo.auser01@gmail.com"
    And User write password "demowalmart"
    And User click on signin button
    Then "Login" pagetitle should display

  Scenario Outline: 2. User put valid email and valid password
    When User write email "<Email>"
    And User write password "<Password>"
    And User click on signin button
    Then "Login" pagetitle should display
    Examples:
      |Email                 |Password   |
      |demo.auser01@gmail.com|demowalmart|
      |demo.auser01@gmail.com|demowalmart|
      |demo.auser01@gmail.com|demowalmart|
      |demo.auser01@gmail.com|demowalmart|
      |demo.auser01@gmail.com|demowalmart|
      |demo.auser01@gmail.com|demowalmart|
      |demo.auser01@gmail.com|demowalmart|
      |demo.auser01@gmail.com|demowalmart|

  Scenario Outline: 3. User put valid email and invalid password
    When User write email "demo.auser@gmail.com"
    And User write password "<Password>"
#    And User click on signin button
#    Then "Your password and email do not match. Please try again or reset your password. "this error massage should display
    Examples:
      |Password|
      |123e    |
      |123e1   |
      |1g3e    |
      |12ue1   |
      |123e    |
      |123e1   |
      |1g3e    |
      |12ue1   |
