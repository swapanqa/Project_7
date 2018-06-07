Feature: Walmart signup page funtionalities
  Background: Not a valideted home page
    When Open browser and start application
    Then Walmart homepage shoule dispaly
    When User click on account button
    And Click on create account
    Then SignUp "Login" page should display

    Scenario: 1.Create an account with invalid email
      When User put first name"firstName"
      And User put last name "lastName"
      And User put email "demo.user01@gmail"
      And User put password "123456"
#      And User uncheck remember me check box
#      And User uncheck auto email check box
      And User click on create account button
      Then invalid email massage "Please enter a valid email address." should display

    Scenario: 1.Create an account with invalid email
     When User put first name"firstName"
     And User put last name "lastName"
     And User put email "demo.auser01@gmail"
     And User put password "12345"
#      And User uncheck remember me check box
#      And User uncheck auto email check box
     And User click on create account button
     Then invalid password massage "Must contain between 6 and 12 characters." should display
