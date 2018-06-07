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

  Scenario: 2. User put invalid email and valid password
    When User write email "demo.user@gmail.com"
    And User write password "demmowalmart"
    And User click on signin button
    Then "Your password and email do not match. Please try again or reset your password. "this error massage should display

  Scenario: 3. User put valid email and invalid password
    When User write email "demo.auser@gmail.com"
    And User write password "1234r"
    And User click on signin button
    Then "Your password and email do not match. Please try again or reset your password. "this error massage should display

  Scenario Outline: : 4. User put invalid inemail and invalid password
    When User write email "<Email>"
    And User write password "<Password>"
#    And User click on signin button
#    Then "Your password and email do not match. Please try again or reset your password. "this error massage should display

    Examples:
      |Email         |Password|
      |user00@gmail.com|123e    |
      |user01@gmail.com|123e1  |
      |user02@gmail.com|1g3e   |
      |user03@gmail.com|12ue1  |
      |user04@gmail.com|123e   |
      |user05@gmail.com|123e1  |
      |user06@gmail.com|1g3e   |
      |user07@gmail.com|12ue1  |