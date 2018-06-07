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
