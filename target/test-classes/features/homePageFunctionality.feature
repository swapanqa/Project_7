Feature: Walmart home page functionality
  Background:
    Given Not a valideted home page
    When Open browser and start application
    Then Walmart homepage shoule dispaly

    @reportTest
   Scenario: 1.Verify navigation menu button is working
     When User click on navigation menu button
     Then GlobalHeaderSparkMenu-optionalTopLinks are going to show this options
     | Free Grocery Pickup| Reorder Items| Track Orders|

    @links
   Scenario: 2.Verify GlobalHeaderSparkMenu-optionalTopLinks are working properly
     When User click on navigation menu button
     Then GlobalHeaderSparkMenu-optionalTopLinks are working properly

    @links
   Scenario: 3.Verify GlobalHeaderSparkMenu-optionalCampaignLinks are working properly
     When User click on navigation menu button
     Then GlobalHeaderSparkMenu-optionalCampaignLinks are working properly

#   Scenario: 4.Verify GlobalHeaderDepartmentsMenus are working properly
#    When User click on navigation menu button
#    Then GlobalHeaderDepartmentsMenu options are working properly

   Scenario: 5.Verify grocery button is navigate into a expected page
    When User click on grocery button
    Then "Walmart Grocery - Home" is going to display

#   @smoke
   Scenario: 6.Verify account button is working
    When User click on account button
    Then "Account" dropdown is going to display

   Scenario: 7.Verify account button is working
    When User click on store location button
    Then "Location" dropdown is going to show

   Scenario: 7.Verify cart button is working
    When User click on cart button
    Then "Cart" page is going to show

   Scenario: 8.Verifying all links and images are not broken
     When User is in homepage
     Then All link and images are not broken

