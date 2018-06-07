Feature: Walmart search box functionality
  Background: Not a valideted search box
    When Open browser and start application
    Then Walmart homepage shoule dispaly

  Scenario: 1.Valid search in the search box
    When User enter in the search box "Nike Benassi Solarsoft Slide"
    Then Searched product page should dispaly

  Scenario: 2.Invalid search in the search box
    When User enter an invalid product in the search box "eerrtt"
    Then No product match massage should display

  Scenario: 3.Count search box dropdown list
    When User click on search box drop down button
    Then List going to show 26 options

  Scenario: 4.Verify all the options are shown in the list
    When User click on search box drop down button
    Then List going to show this options
    |All Departments |Auto & Tire |Baby |Beauty |Books |Cell Phones |Clothing |Electronics |Food |Gifts & Registry |Health |Home |Home Improvement |Household Essentials |Jewelry |Movies |Music |Office |Party & Occasions |Patio & Garden |Pets |Pharmacy |Photo Center |Sports & Outdoors |Toys |Video Games |

  Scenario: 5.Verify advance search in the search box
    When User click on search box drop down button
    And Select option"baby"
    And User enter in the search box "socks"
    Then Page going to show 34 products
