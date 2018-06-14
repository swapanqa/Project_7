$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("addToCartFunctionality.feature");
formatter.feature({
  "line": 1,
  "name": "Add to cart functionality",
  "description": "",
  "id": "add-to-cart-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 10475697800,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "Given Not a valideted home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "Open browser and start application",
  "keyword": "When "
});
formatter.step({
  "line": 4,
  "name": "Walmart homepage shoule dispaly",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "User click on account button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Click on signin option",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Login \"Login\" page should display",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User write email \"demo.auser01@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User write password \"demowalmart\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User click on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "\"Walmart.com | Save Money. Live Better.\" pagetitle should display",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.open_browser_and_start_application()"
});
formatter.result({
  "duration": 2864118000,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 18638400,
  "status": "passed"
});
formatter.match({
  "location": "WalmartHomePageSteps.user_click_on_account_button()"
});
formatter.result({
  "duration": 250691900,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.click_on_signin_option()"
});
formatter.result({
  "duration": 2451889100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 7
    }
  ],
  "location": "WalmartLoginPageSteps.login_page_should_display(String)"
});
formatter.result({
  "duration": 7061000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo.auser01@gmail.com",
      "offset": 18
    }
  ],
  "location": "WalmartLoginPageSteps.user_write_email(String)"
});
formatter.result({
  "duration": 560378100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demowalmart",
      "offset": 21
    }
  ],
  "location": "WalmartLoginPageSteps.user_write_password(String)"
});
formatter.result({
  "duration": 364304400,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.user_click_on_signin_button()"
});
formatter.result({
  "duration": 217950100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Walmart.com | Save Money. Live Better.",
      "offset": 1
    }
  ],
  "location": "WalmartLoginPageSteps.page_should_display(String)"
});
formatter.result({
  "duration": 5019288900,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "1.User account button all the options",
  "description": "",
  "id": "add-to-cart-functionality;1.user-account-button-all-the-options",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.after({
  "duration": 733764300,
  "status": "passed"
});
formatter.uri("homePageFunctionality.feature");
formatter.feature({
  "line": 1,
  "name": "Walmart home page functionality",
  "description": "",
  "id": "walmart-home-page-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3705517900,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "Not a valideted home page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Open browser and start application",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Walmart homepage shoule dispaly",
  "keyword": "Then "
});
formatter.match({
  "location": "WalmartHomePageSteps.not_a_valideted_home_page()"
});
formatter.result({
  "duration": 37614400,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.open_browser_and_start_application()"
});
formatter.result({
  "duration": 8704301900,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 10836200,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "1.Verify navigation menu button is working",
  "description": "",
  "id": "walmart-home-page-functionality;1.verify-navigation-menu-button-is-working",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@reportTest"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User click on navigation menu button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "GlobalHeaderSparkMenu-optionalTopLinks are going to show this options",
  "rows": [
    {
      "cells": [
        "Free Grocery Pickup",
        "Reorder Items",
        "Track Orders"
      ],
      "line": 11
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "WalmartHomePageSteps.user_click_on_navigation_menu_button()"
});
formatter.result({
  "duration": 173436000,
  "status": "passed"
});
formatter.match({
  "location": "WalmartHomePageSteps.globalheadersparkmenu_optionalTopLinks_are_going_to_show_this_options(DataTable)"
});
formatter.result({
  "duration": 164826700,
  "status": "passed"
});
formatter.after({
  "duration": 775048800,
  "status": "passed"
});
formatter.before({
  "duration": 8430989200,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "Not a valideted home page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Open browser and start application",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Walmart homepage shoule dispaly",
  "keyword": "Then "
});
formatter.match({
  "location": "WalmartHomePageSteps.not_a_valideted_home_page()"
});
formatter.result({
  "duration": 47534800,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.open_browser_and_start_application()"
});
formatter.result({
  "duration": 21168261600,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 14202100,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "2.Verify GlobalHeaderSparkMenu-optionalTopLinks are working properly",
  "description": "",
  "id": "walmart-home-page-functionality;2.verify-globalheadersparkmenu-optionaltoplinks-are-working-properly",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@links"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User click on navigation menu button",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "GlobalHeaderSparkMenu-optionalTopLinks are working properly",
  "keyword": "Then "
});
formatter.match({
  "location": "WalmartHomePageSteps.user_click_on_navigation_menu_button()"
});
formatter.result({
  "duration": 139111400,
  "status": "passed"
});
formatter.match({
  "location": "WalmartHomePageSteps.globalheadersparkmenu_optionalTopLinks_are_working_properly()"
});
formatter.result({
  "duration": 1853613900,
  "status": "passed"
});
formatter.after({
  "duration": 806212900,
  "status": "passed"
});
formatter.before({
  "duration": 3774548400,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "Not a valideted home page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Open browser and start application",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Walmart homepage shoule dispaly",
  "keyword": "Then "
});
formatter.match({
  "location": "WalmartHomePageSteps.not_a_valideted_home_page()"
});
formatter.result({
  "duration": 33357500,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.open_browser_and_start_application()"
});
formatter.result({
  "duration": 4660940000,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 9954500,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "3.Verify GlobalHeaderSparkMenu-optionalCampaignLinks are working properly",
  "description": "",
  "id": "walmart-home-page-functionality;3.verify-globalheadersparkmenu-optionalcampaignlinks-are-working-properly",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@links"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "User click on navigation menu button",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "GlobalHeaderSparkMenu-optionalCampaignLinks are working properly",
  "keyword": "Then "
});
formatter.match({
  "location": "WalmartHomePageSteps.user_click_on_navigation_menu_button()"
});
formatter.result({
  "duration": 288116700,
  "status": "passed"
});
formatter.match({
  "location": "WalmartHomePageSteps.globalheadersparkmenu_optionalCampaignLinks_are_working_properly()"
});
formatter.result({
  "duration": 4195995600,
  "status": "passed"
});
formatter.after({
  "duration": 859360400,
  "status": "passed"
});
formatter.before({
  "duration": 3796131500,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "Not a valideted home page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Open browser and start application",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Walmart homepage shoule dispaly",
  "keyword": "Then "
});
formatter.match({
  "location": "WalmartHomePageSteps.not_a_valideted_home_page()"
});
formatter.result({
  "duration": 49464000,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.open_browser_and_start_application()"
});
formatter.result({
  "duration": 2915428000,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 6016800,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 23,
      "value": "#   Scenario: 4.Verify GlobalHeaderDepartmentsMenus are working properly"
    },
    {
      "line": 24,
      "value": "#    When User click on navigation menu button"
    },
    {
      "line": 25,
      "value": "#    Then GlobalHeaderDepartmentsMenu options are working properly"
    }
  ],
  "line": 27,
  "name": "5.Verify grocery button is navigate into a expected page",
  "description": "",
  "id": "walmart-home-page-functionality;5.verify-grocery-button-is-navigate-into-a-expected-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "User click on grocery button",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "\"Walmart Grocery - Home\" is going to display",
  "keyword": "Then "
});
formatter.match({
  "location": "WalmartHomePageSteps.user_click_on_grocery_button()"
});
formatter.result({
  "duration": 4050647800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Walmart Grocery - Home",
      "offset": 1
    }
  ],
  "location": "WalmartHomePageSteps.is_going_to_display(String)"
});
formatter.result({
  "duration": 7963900,
  "status": "passed"
});
formatter.after({
  "duration": 869458800,
  "status": "passed"
});
formatter.before({
  "duration": 3750970500,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "Not a valideted home page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Open browser and start application",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Walmart homepage shoule dispaly",
  "keyword": "Then "
});
formatter.match({
  "location": "WalmartHomePageSteps.not_a_valideted_home_page()"
});
formatter.result({
  "duration": 40133600,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.open_browser_and_start_application()"
});
formatter.result({
  "duration": 3424882700,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 17780600,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 31,
      "value": "#   @smoke"
    }
  ],
  "line": 32,
  "name": "6.Verify account button is working",
  "description": "",
  "id": "walmart-home-page-functionality;6.verify-account-button-is-working",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 33,
  "name": "User click on account button",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "\"Account\" dropdown is going to display",
  "keyword": "Then "
});
formatter.match({
  "location": "WalmartHomePageSteps.user_click_on_account_button()"
});
formatter.result({
  "duration": 344642000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account",
      "offset": 1
    }
  ],
  "location": "WalmartHomePageSteps.account_dropdown_is_going_to_display(String)"
});
formatter.result({
  "duration": 145527900,
  "status": "passed"
});
formatter.after({
  "duration": 781761700,
  "status": "passed"
});
formatter.before({
  "duration": 3683373500,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "Not a valideted home page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Open browser and start application",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Walmart homepage shoule dispaly",
  "keyword": "Then "
});
formatter.match({
  "location": "WalmartHomePageSteps.not_a_valideted_home_page()"
});
formatter.result({
  "duration": 43266200,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.open_browser_and_start_application()"
});
formatter.result({
  "duration": 2449702200,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 164716000,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "7.Verify account button is working",
  "description": "",
  "id": "walmart-home-page-functionality;7.verify-account-button-is-working",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 37,
  "name": "User click on store location button",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "\"Location\" dropdown is going to show",
  "keyword": "Then "
});
formatter.match({
  "location": "WalmartHomePageSteps.user_click_on_store_location_button()"
});
formatter.result({
  "duration": 160981800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Location",
      "offset": 1
    }
  ],
  "location": "WalmartHomePageSteps.location_dropdown_is_going_to_show(String)"
});
formatter.result({
  "duration": 77685300,
  "status": "passed"
});
formatter.after({
  "duration": 972158100,
  "status": "passed"
});
formatter.before({
  "duration": 3704997900,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "Not a valideted home page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Open browser and start application",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Walmart homepage shoule dispaly",
  "keyword": "Then "
});
formatter.match({
  "location": "WalmartHomePageSteps.not_a_valideted_home_page()"
});
formatter.result({
  "duration": 44403800,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.open_browser_and_start_application()"
});
formatter.result({
  "duration": 32356260600,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 54150300,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "7.Verify cart button is working",
  "description": "",
  "id": "walmart-home-page-functionality;7.verify-cart-button-is-working",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 41,
  "name": "User click on cart button",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "\"Cart\" page is going to show",
  "keyword": "Then "
});
formatter.match({
  "location": "WalmartHomePageSteps.user_click_on_cart_button()"
});
formatter.result({
  "duration": 2556306000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cart",
      "offset": 1
    }
  ],
  "location": "WalmartHomePageSteps.page_is_going_to_show(String)"
});
formatter.result({
  "duration": 160931400,
  "status": "passed"
});
formatter.after({
  "duration": 788799800,
  "status": "passed"
});
formatter.before({
  "duration": 3699635900,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "Not a valideted home page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Open browser and start application",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Walmart homepage shoule dispaly",
  "keyword": "Then "
});
formatter.match({
  "location": "WalmartHomePageSteps.not_a_valideted_home_page()"
});
formatter.result({
  "duration": 28768400,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.open_browser_and_start_application()"
});
formatter.result({
  "duration": 2448795800,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 204806000,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "8.Verifying all links and images are not broken",
  "description": "",
  "id": "walmart-home-page-functionality;8.verifying-all-links-and-images-are-not-broken",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 45,
  "name": "User is in homepage",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "All link and images are not broken",
  "keyword": "Then "
});
formatter.match({
  "location": "WalmartHomePageSteps.user_is_in_homepage()"
});
formatter.result({
  "duration": 4000129200,
  "status": "passed"
});
formatter.match({
  "location": "WalmartHomePageSteps.all_link_and_images_are_not_broken()"
});
formatter.result({
  "duration": 18176721600,
  "status": "passed"
});
formatter.after({
  "duration": 770036200,
  "status": "passed"
});
formatter.uri("loginPageFunctionality.feature");
formatter.feature({
  "line": 1,
  "name": "Walmart login page funtionalities",
  "description": "",
  "id": "walmart-login-page-funtionalities",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3758217500,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "Not a valideted home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "Open browser and start application",
  "keyword": "When "
});
formatter.step({
  "line": 4,
  "name": "Walmart homepage shoule dispaly",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "User click on account button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Click on signin option",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Login \"Login\" page should display",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.open_browser_and_start_application()"
});
formatter.result({
  "duration": 3056514100,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 15482900,
  "status": "passed"
});
formatter.match({
  "location": "WalmartHomePageSteps.user_click_on_account_button()"
});
formatter.result({
  "duration": 316779600,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.click_on_signin_option()"
});
formatter.result({
  "duration": 2326052700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 7
    }
  ],
  "location": "WalmartLoginPageSteps.login_page_should_display(String)"
});
formatter.result({
  "duration": 10080500,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "1.User put all the valid informations",
  "description": "",
  "id": "walmart-login-page-funtionalities;1.user-put-all-the-valid-informations",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "User write email \"demo.auser01@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User write password \"demowalmart\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User click on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "\"Walmart.com | Save Money. Live Better.\" pagetitle should display",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo.auser01@gmail.com",
      "offset": 18
    }
  ],
  "location": "WalmartLoginPageSteps.user_write_email(String)"
});
formatter.result({
  "duration": 623083300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demowalmart",
      "offset": 21
    }
  ],
  "location": "WalmartLoginPageSteps.user_write_password(String)"
});
formatter.result({
  "duration": 345221900,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.user_click_on_signin_button()"
});
formatter.result({
  "duration": 170254400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Walmart.com | Save Money. Live Better.",
      "offset": 1
    }
  ],
  "location": "WalmartLoginPageSteps.page_should_display(String)"
});
formatter.result({
  "duration": 5018316000,
  "status": "passed"
});
formatter.after({
  "duration": 749510700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "2. User put valid email and valid password",
  "description": "",
  "id": "walmart-login-page-funtionalities;2.-user-put-valid-email-and-valid-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "User write email \"\u003cEmail\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User write password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User click on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "\"Walmart.com | Save Money. Live Better.\" pagetitle should display",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "walmart-login-page-funtionalities;2.-user-put-valid-email-and-valid-password;",
  "rows": [
    {
      "cells": [
        "Email",
        "Password"
      ],
      "line": 21,
      "id": "walmart-login-page-funtionalities;2.-user-put-valid-email-and-valid-password;;1"
    },
    {
      "cells": [
        "demo.auser01@gmail.com",
        "demowalmart"
      ],
      "line": 22,
      "id": "walmart-login-page-funtionalities;2.-user-put-valid-email-and-valid-password;;2"
    },
    {
      "cells": [
        "demo.auser01@gmail.com",
        "demowalmart"
      ],
      "line": 23,
      "id": "walmart-login-page-funtionalities;2.-user-put-valid-email-and-valid-password;;3"
    },
    {
      "cells": [
        "demo.auser01@gmail.com",
        "demowalmart"
      ],
      "line": 24,
      "id": "walmart-login-page-funtionalities;2.-user-put-valid-email-and-valid-password;;4"
    },
    {
      "cells": [
        "demo.auser01@gmail.com",
        "demowalmart"
      ],
      "line": 25,
      "id": "walmart-login-page-funtionalities;2.-user-put-valid-email-and-valid-password;;5"
    },
    {
      "cells": [
        "demo.auser01@gmail.com",
        "demowalmart"
      ],
      "line": 26,
      "id": "walmart-login-page-funtionalities;2.-user-put-valid-email-and-valid-password;;6"
    },
    {
      "cells": [
        "demo.auser01@gmail.com",
        "demowalmart"
      ],
      "line": 27,
      "id": "walmart-login-page-funtionalities;2.-user-put-valid-email-and-valid-password;;7"
    },
    {
      "cells": [
        "demo.auser01@gmail.com",
        "demowalmart"
      ],
      "line": 28,
      "id": "walmart-login-page-funtionalities;2.-user-put-valid-email-and-valid-password;;8"
    },
    {
      "cells": [
        "demo.auser01@gmail.com",
        "demowalmart"
      ],
      "line": 29,
      "id": "walmart-login-page-funtionalities;2.-user-put-valid-email-and-valid-password;;9"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5925841500,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "Not a valideted home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "Open browser and start application",
  "keyword": "When "
});
formatter.step({
  "line": 4,
  "name": "Walmart homepage shoule dispaly",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "User click on account button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Click on signin option",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Login \"Login\" page should display",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.open_browser_and_start_application()"
});
formatter.result({
  "duration": 2845646200,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 14736400,
  "status": "passed"
});
formatter.match({
  "location": "WalmartHomePageSteps.user_click_on_account_button()"
});
formatter.result({
  "duration": 263042700,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.click_on_signin_option()"
});
formatter.result({
  "duration": 2144739300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 7
    }
  ],
  "location": "WalmartLoginPageSteps.login_page_should_display(String)"
});
formatter.result({
  "duration": 5415400,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "2. User put valid email and valid password",
  "description": "",
  "id": "walmart-login-page-funtionalities;2.-user-put-valid-email-and-valid-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "User write email \"demo.auser01@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User write password \"demowalmart\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User click on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "\"Walmart.com | Save Money. Live Better.\" pagetitle should display",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo.auser01@gmail.com",
      "offset": 18
    }
  ],
  "location": "WalmartLoginPageSteps.user_write_email(String)"
});
formatter.result({
  "duration": 551234900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demowalmart",
      "offset": 21
    }
  ],
  "location": "WalmartLoginPageSteps.user_write_password(String)"
});
formatter.result({
  "duration": 387589400,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.user_click_on_signin_button()"
});
formatter.result({
  "duration": 234074000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Walmart.com | Save Money. Live Better.",
      "offset": 1
    }
  ],
  "location": "WalmartLoginPageSteps.page_should_display(String)"
});
formatter.result({
  "duration": 5015582600,
  "status": "passed"
});
formatter.after({
  "duration": 780104400,
  "status": "passed"
});
formatter.before({
  "duration": 3737085500,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "Not a valideted home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "Open browser and start application",
  "keyword": "When "
});
formatter.step({
  "line": 4,
  "name": "Walmart homepage shoule dispaly",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "User click on account button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Click on signin option",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Login \"Login\" page should display",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.open_browser_and_start_application()"
});
formatter.result({
  "duration": 11253995200,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 13957200,
  "status": "passed"
});
formatter.match({
  "location": "WalmartHomePageSteps.user_click_on_account_button()"
});
formatter.result({
  "duration": 269459200,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.click_on_signin_option()"
});
formatter.result({
  "duration": 2087937800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 7
    }
  ],
  "location": "WalmartLoginPageSteps.login_page_should_display(String)"
});
formatter.result({
  "duration": 5368400,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "2. User put valid email and valid password",
  "description": "",
  "id": "walmart-login-page-funtionalities;2.-user-put-valid-email-and-valid-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "User write email \"demo.auser01@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User write password \"demowalmart\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User click on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "\"Walmart.com | Save Money. Live Better.\" pagetitle should display",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo.auser01@gmail.com",
      "offset": 18
    }
  ],
  "location": "WalmartLoginPageSteps.user_write_email(String)"
});
formatter.result({
  "duration": 620119600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demowalmart",
      "offset": 21
    }
  ],
  "location": "WalmartLoginPageSteps.user_write_password(String)"
});
formatter.result({
  "duration": 331285900,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.user_click_on_signin_button()"
});
formatter.result({
  "duration": 178993600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Walmart.com | Save Money. Live Better.",
      "offset": 1
    }
  ],
  "location": "WalmartLoginPageSteps.page_should_display(String)"
});
formatter.result({
  "duration": 5015576100,
  "status": "passed"
});
formatter.after({
  "duration": 802785800,
  "status": "passed"
});
formatter.before({
  "duration": 4011687500,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "Not a valideted home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "Open browser and start application",
  "keyword": "When "
});
formatter.step({
  "line": 4,
  "name": "Walmart homepage shoule dispaly",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "User click on account button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Click on signin option",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Login \"Login\" page should display",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.open_browser_and_start_application()"
});
formatter.result({
  "duration": 2537567700,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 194305500,
  "status": "passed"
});
formatter.match({
  "location": "WalmartHomePageSteps.user_click_on_account_button()"
});
formatter.result({
  "duration": 157326600,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.click_on_signin_option()"
});
formatter.result({
  "duration": 1982223200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 7
    }
  ],
  "location": "WalmartLoginPageSteps.login_page_should_display(String)"
});
formatter.result({
  "duration": 15141800,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "2. User put valid email and valid password",
  "description": "",
  "id": "walmart-login-page-funtionalities;2.-user-put-valid-email-and-valid-password;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "User write email \"demo.auser01@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User write password \"demowalmart\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User click on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "\"Walmart.com | Save Money. Live Better.\" pagetitle should display",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo.auser01@gmail.com",
      "offset": 18
    }
  ],
  "location": "WalmartLoginPageSteps.user_write_email(String)"
});
formatter.result({
  "duration": 787020300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demowalmart",
      "offset": 21
    }
  ],
  "location": "WalmartLoginPageSteps.user_write_password(String)"
});
formatter.result({
  "duration": 344975300,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.user_click_on_signin_button()"
});
formatter.result({
  "duration": 173479700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Walmart.com | Save Money. Live Better.",
      "offset": 1
    }
  ],
  "location": "WalmartLoginPageSteps.page_should_display(String)"
});
formatter.result({
  "duration": 5013131000,
  "status": "passed"
});
formatter.after({
  "duration": 732669800,
  "status": "passed"
});
formatter.before({
  "duration": 3732538500,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "Not a valideted home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "Open browser and start application",
  "keyword": "When "
});
formatter.step({
  "line": 4,
  "name": "Walmart homepage shoule dispaly",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "User click on account button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Click on signin option",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Login \"Login\" page should display",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.open_browser_and_start_application()"
});
formatter.result({
  "duration": 1858132100,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 1079130500,
  "status": "passed"
});
formatter.match({
  "location": "WalmartHomePageSteps.user_click_on_account_button()"
});
formatter.result({
  "duration": 200242000,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.click_on_signin_option()"
});
formatter.result({
  "duration": 1977957700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 7
    }
  ],
  "location": "WalmartLoginPageSteps.login_page_should_display(String)"
});
formatter.result({
  "duration": 5803400,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "2. User put valid email and valid password",
  "description": "",
  "id": "walmart-login-page-funtionalities;2.-user-put-valid-email-and-valid-password;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "User write email \"demo.auser01@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User write password \"demowalmart\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User click on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "\"Walmart.com | Save Money. Live Better.\" pagetitle should display",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo.auser01@gmail.com",
      "offset": 18
    }
  ],
  "location": "WalmartLoginPageSteps.user_write_email(String)"
});
formatter.result({
  "duration": 536953200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demowalmart",
      "offset": 21
    }
  ],
  "location": "WalmartLoginPageSteps.user_write_password(String)"
});
formatter.result({
  "duration": 315656100,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.user_click_on_signin_button()"
});
formatter.result({
  "duration": 269673300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Walmart.com | Save Money. Live Better.",
      "offset": 1
    }
  ],
  "location": "WalmartLoginPageSteps.page_should_display(String)"
});
formatter.result({
  "duration": 5017302500,
  "status": "passed"
});
formatter.after({
  "duration": 751024600,
  "status": "passed"
});
formatter.before({
  "duration": 3646592000,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "Not a valideted home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "Open browser and start application",
  "keyword": "When "
});
formatter.step({
  "line": 4,
  "name": "Walmart homepage shoule dispaly",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "User click on account button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Click on signin option",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Login \"Login\" page should display",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.open_browser_and_start_application()"
});
formatter.result({
  "duration": 3052120500,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 27898700,
  "status": "passed"
});
formatter.match({
  "location": "WalmartHomePageSteps.user_click_on_account_button()"
});
formatter.result({
  "duration": 272789900,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.click_on_signin_option()"
});
formatter.result({
  "duration": 2383080100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 7
    }
  ],
  "location": "WalmartLoginPageSteps.login_page_should_display(String)"
});
formatter.result({
  "duration": 6663700,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "2. User put valid email and valid password",
  "description": "",
  "id": "walmart-login-page-funtionalities;2.-user-put-valid-email-and-valid-password;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "User write email \"demo.auser01@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User write password \"demowalmart\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User click on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "\"Walmart.com | Save Money. Live Better.\" pagetitle should display",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo.auser01@gmail.com",
      "offset": 18
    }
  ],
  "location": "WalmartLoginPageSteps.user_write_email(String)"
});
formatter.result({
  "duration": 616370700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demowalmart",
      "offset": 21
    }
  ],
  "location": "WalmartLoginPageSteps.user_write_password(String)"
});
formatter.result({
  "duration": 322324600,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.user_click_on_signin_button()"
});
formatter.result({
  "duration": 156180300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Walmart.com | Save Money. Live Better.",
      "offset": 1
    }
  ],
  "location": "WalmartLoginPageSteps.page_should_display(String)"
});
formatter.result({
  "duration": 5020066800,
  "status": "passed"
});
formatter.after({
  "duration": 915614300,
  "status": "passed"
});
formatter.before({
  "duration": 3651850300,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "Not a valideted home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "Open browser and start application",
  "keyword": "When "
});
formatter.step({
  "line": 4,
  "name": "Walmart homepage shoule dispaly",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "User click on account button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Click on signin option",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Login \"Login\" page should display",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.open_browser_and_start_application()"
});
formatter.result({
  "duration": 14059858100,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 15603300,
  "status": "passed"
});
formatter.match({
  "location": "WalmartHomePageSteps.user_click_on_account_button()"
});
formatter.result({
  "duration": 151559800,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.click_on_signin_option()"
});
formatter.result({
  "duration": 7840080200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 7
    }
  ],
  "location": "WalmartLoginPageSteps.login_page_should_display(String)"
});
formatter.result({
  "duration": 6736000,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "2. User put valid email and valid password",
  "description": "",
  "id": "walmart-login-page-funtionalities;2.-user-put-valid-email-and-valid-password;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "User write email \"demo.auser01@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User write password \"demowalmart\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User click on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "\"Walmart.com | Save Money. Live Better.\" pagetitle should display",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo.auser01@gmail.com",
      "offset": 18
    }
  ],
  "location": "WalmartLoginPageSteps.user_write_email(String)"
});
formatter.result({
  "duration": 637477200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demowalmart",
      "offset": 21
    }
  ],
  "location": "WalmartLoginPageSteps.user_write_password(String)"
});
formatter.result({
  "duration": 302609400,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.user_click_on_signin_button()"
});
formatter.result({
  "duration": 159533600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Walmart.com | Save Money. Live Better.",
      "offset": 1
    }
  ],
  "location": "WalmartLoginPageSteps.page_should_display(String)"
});
formatter.result({
  "duration": 7074636000,
  "status": "passed"
});
formatter.after({
  "duration": 758662900,
  "status": "passed"
});
formatter.before({
  "duration": 3667143400,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "Not a valideted home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "Open browser and start application",
  "keyword": "When "
});
formatter.step({
  "line": 4,
  "name": "Walmart homepage shoule dispaly",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "User click on account button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Click on signin option",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Login \"Login\" page should display",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.open_browser_and_start_application()"
});
formatter.result({
  "duration": 2885594100,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 9978900,
  "status": "passed"
});
formatter.match({
  "location": "WalmartHomePageSteps.user_click_on_account_button()"
});
formatter.result({
  "duration": 262586700,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.click_on_signin_option()"
});
formatter.result({
  "duration": 2245401200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 7
    }
  ],
  "location": "WalmartLoginPageSteps.login_page_should_display(String)"
});
formatter.result({
  "duration": 9423000,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "2. User put valid email and valid password",
  "description": "",
  "id": "walmart-login-page-funtionalities;2.-user-put-valid-email-and-valid-password;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "User write email \"demo.auser01@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User write password \"demowalmart\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User click on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "\"Walmart.com | Save Money. Live Better.\" pagetitle should display",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo.auser01@gmail.com",
      "offset": 18
    }
  ],
  "location": "WalmartLoginPageSteps.user_write_email(String)"
});
formatter.result({
  "duration": 545557800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demowalmart",
      "offset": 21
    }
  ],
  "location": "WalmartLoginPageSteps.user_write_password(String)"
});
formatter.result({
  "duration": 363454600,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.user_click_on_signin_button()"
});
formatter.result({
  "duration": 167153800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Walmart.com | Save Money. Live Better.",
      "offset": 1
    }
  ],
  "location": "WalmartLoginPageSteps.page_should_display(String)"
});
formatter.result({
  "duration": 5014959400,
  "status": "passed"
});
formatter.after({
  "duration": 743071200,
  "status": "passed"
});
formatter.before({
  "duration": 3718747600,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "Not a valideted home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "Open browser and start application",
  "keyword": "When "
});
formatter.step({
  "line": 4,
  "name": "Walmart homepage shoule dispaly",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "User click on account button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Click on signin option",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Login \"Login\" page should display",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.open_browser_and_start_application()"
});
formatter.result({
  "duration": 2839628900,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 33579200,
  "status": "passed"
});
formatter.match({
  "location": "WalmartHomePageSteps.user_click_on_account_button()"
});
formatter.result({
  "duration": 154018500,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.click_on_signin_option()"
});
formatter.result({
  "duration": 1846342400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 7
    }
  ],
  "location": "WalmartLoginPageSteps.login_page_should_display(String)"
});
formatter.result({
  "duration": 5208600,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "2. User put valid email and valid password",
  "description": "",
  "id": "walmart-login-page-funtionalities;2.-user-put-valid-email-and-valid-password;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "User write email \"demo.auser01@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User write password \"demowalmart\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User click on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "\"Walmart.com | Save Money. Live Better.\" pagetitle should display",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo.auser01@gmail.com",
      "offset": 18
    }
  ],
  "location": "WalmartLoginPageSteps.user_write_email(String)"
});
formatter.result({
  "duration": 660053900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demowalmart",
      "offset": 21
    }
  ],
  "location": "WalmartLoginPageSteps.user_write_password(String)"
});
formatter.result({
  "duration": 298797100,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.user_click_on_signin_button()"
});
formatter.result({
  "duration": 168015900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Walmart.com | Save Money. Live Better.",
      "offset": 1
    }
  ],
  "location": "WalmartLoginPageSteps.page_should_display(String)"
});
formatter.result({
  "duration": 5013884500,
  "status": "passed"
});
formatter.after({
  "duration": 777429500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 31,
  "name": "3. User put valid email and invalid password",
  "description": "",
  "id": "walmart-login-page-funtionalities;3.-user-put-valid-email-and-invalid-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "User write email \"demo.auser@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "User write password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 34,
      "value": "#    And User click on signin button"
    },
    {
      "line": 35,
      "value": "#    Then \"Your password and email do not match. Please try again or reset your password. \"this error massage should display"
    }
  ],
  "line": 36,
  "name": "",
  "description": "",
  "id": "walmart-login-page-funtionalities;3.-user-put-valid-email-and-invalid-password;",
  "rows": [
    {
      "cells": [
        "Password"
      ],
      "line": 37,
      "id": "walmart-login-page-funtionalities;3.-user-put-valid-email-and-invalid-password;;1"
    },
    {
      "cells": [
        "123e"
      ],
      "line": 38,
      "id": "walmart-login-page-funtionalities;3.-user-put-valid-email-and-invalid-password;;2"
    },
    {
      "cells": [
        "123e1"
      ],
      "line": 39,
      "id": "walmart-login-page-funtionalities;3.-user-put-valid-email-and-invalid-password;;3"
    },
    {
      "cells": [
        "1g3e"
      ],
      "line": 40,
      "id": "walmart-login-page-funtionalities;3.-user-put-valid-email-and-invalid-password;;4"
    },
    {
      "cells": [
        "12ue1"
      ],
      "line": 41,
      "id": "walmart-login-page-funtionalities;3.-user-put-valid-email-and-invalid-password;;5"
    },
    {
      "cells": [
        "123e"
      ],
      "line": 42,
      "id": "walmart-login-page-funtionalities;3.-user-put-valid-email-and-invalid-password;;6"
    },
    {
      "cells": [
        "123e1"
      ],
      "line": 43,
      "id": "walmart-login-page-funtionalities;3.-user-put-valid-email-and-invalid-password;;7"
    },
    {
      "cells": [
        "1g3e"
      ],
      "line": 44,
      "id": "walmart-login-page-funtionalities;3.-user-put-valid-email-and-invalid-password;;8"
    },
    {
      "cells": [
        "12ue1"
      ],
      "line": 45,
      "id": "walmart-login-page-funtionalities;3.-user-put-valid-email-and-invalid-password;;9"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3653678400,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "Not a valideted home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "Open browser and start application",
  "keyword": "When "
});
formatter.step({
  "line": 4,
  "name": "Walmart homepage shoule dispaly",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "User click on account button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Click on signin option",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Login \"Login\" page should display",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.open_browser_and_start_application()"
});
formatter.result({
  "duration": 3715176000,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 10603200,
  "status": "passed"
});
formatter.match({
  "location": "WalmartHomePageSteps.user_click_on_account_button()"
});
formatter.result({
  "duration": 179499600,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.click_on_signin_option()"
});
formatter.result({
  "duration": 2941077200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 7
    }
  ],
  "location": "WalmartLoginPageSteps.login_page_should_display(String)"
});
formatter.result({
  "duration": 14686600,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "3. User put valid email and invalid password",
  "description": "",
  "id": "walmart-login-page-funtionalities;3.-user-put-valid-email-and-invalid-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "User write email \"demo.auser@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "User write password \"123e\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "demo.auser@gmail.com",
      "offset": 18
    }
  ],
  "location": "WalmartLoginPageSteps.user_write_email(String)"
});
formatter.result({
  "duration": 592931400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123e",
      "offset": 21
    }
  ],
  "location": "WalmartLoginPageSteps.user_write_password(String)"
});
formatter.result({
  "duration": 182584800,
  "status": "passed"
});
formatter.after({
  "duration": 789728200,
  "status": "passed"
});
formatter.before({
  "duration": 3742535100,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "Not a valideted home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "Open browser and start application",
  "keyword": "When "
});
formatter.step({
  "line": 4,
  "name": "Walmart homepage shoule dispaly",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "User click on account button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Click on signin option",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Login \"Login\" page should display",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.open_browser_and_start_application()"
});
formatter.result({
  "duration": 12652450700,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 185206200,
  "status": "passed"
});
formatter.match({
  "location": "WalmartHomePageSteps.user_click_on_account_button()"
});
formatter.result({
  "duration": 161866900,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.click_on_signin_option()"
});
formatter.result({
  "duration": 13239530600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 7
    }
  ],
  "location": "WalmartLoginPageSteps.login_page_should_display(String)"
});
formatter.result({
  "duration": 9761600,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "3. User put valid email and invalid password",
  "description": "",
  "id": "walmart-login-page-funtionalities;3.-user-put-valid-email-and-invalid-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "User write email \"demo.auser@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "User write password \"123e1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "demo.auser@gmail.com",
      "offset": 18
    }
  ],
  "location": "WalmartLoginPageSteps.user_write_email(String)"
});
formatter.result({
  "duration": 493483500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123e1",
      "offset": 21
    }
  ],
  "location": "WalmartLoginPageSteps.user_write_password(String)"
});
formatter.result({
  "duration": 181695900,
  "status": "passed"
});
formatter.after({
  "duration": 690224600,
  "status": "passed"
});
formatter.before({
  "duration": 9200253800,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "Not a valideted home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "Open browser and start application",
  "keyword": "When "
});
formatter.step({
  "line": 4,
  "name": "Walmart homepage shoule dispaly",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "User click on account button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Click on signin option",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Login \"Login\" page should display",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.open_browser_and_start_application()"
});
formatter.result({
  "duration": 2310620700,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 928922900,
  "status": "passed"
});
formatter.match({
  "location": "WalmartHomePageSteps.user_click_on_account_button()"
});
formatter.result({
  "duration": 151632600,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.click_on_signin_option()"
});
formatter.result({
  "duration": 2033937100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 7
    }
  ],
  "location": "WalmartLoginPageSteps.login_page_should_display(String)"
});
formatter.result({
  "duration": 5328200,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "3. User put valid email and invalid password",
  "description": "",
  "id": "walmart-login-page-funtionalities;3.-user-put-valid-email-and-invalid-password;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "User write email \"demo.auser@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "User write password \"1g3e\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "demo.auser@gmail.com",
      "offset": 18
    }
  ],
  "location": "WalmartLoginPageSteps.user_write_email(String)"
});
formatter.result({
  "duration": 596956500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1g3e",
      "offset": 21
    }
  ],
  "location": "WalmartLoginPageSteps.user_write_password(String)"
});
formatter.result({
  "duration": 179698400,
  "status": "passed"
});
formatter.after({
  "duration": 780166700,
  "status": "passed"
});
formatter.before({
  "duration": 3733745200,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "Not a valideted home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "Open browser and start application",
  "keyword": "When "
});
formatter.step({
  "line": 4,
  "name": "Walmart homepage shoule dispaly",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "User click on account button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Click on signin option",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Login \"Login\" page should display",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.open_browser_and_start_application()"
});
formatter.result({
  "duration": 2914577700,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 48606300,
  "status": "passed"
});
formatter.match({
  "location": "WalmartHomePageSteps.user_click_on_account_button()"
});
formatter.result({
  "duration": 187526800,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.click_on_signin_option()"
});
formatter.result({
  "duration": 2525659300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 7
    }
  ],
  "location": "WalmartLoginPageSteps.login_page_should_display(String)"
});
formatter.result({
  "duration": 4260900,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "3. User put valid email and invalid password",
  "description": "",
  "id": "walmart-login-page-funtionalities;3.-user-put-valid-email-and-invalid-password;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "User write email \"demo.auser@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "User write password \"12ue1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "demo.auser@gmail.com",
      "offset": 18
    }
  ],
  "location": "WalmartLoginPageSteps.user_write_email(String)"
});
formatter.result({
  "duration": 502826600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12ue1",
      "offset": 21
    }
  ],
  "location": "WalmartLoginPageSteps.user_write_password(String)"
});
formatter.result({
  "duration": 219117700,
  "status": "passed"
});
formatter.after({
  "duration": 736264000,
  "status": "passed"
});
formatter.before({
  "duration": 3768653100,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "Not a valideted home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "Open browser and start application",
  "keyword": "When "
});
formatter.step({
  "line": 4,
  "name": "Walmart homepage shoule dispaly",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "User click on account button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Click on signin option",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Login \"Login\" page should display",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.open_browser_and_start_application()"
});
formatter.result({
  "duration": 2725078100,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 46577500,
  "status": "passed"
});
formatter.match({
  "location": "WalmartHomePageSteps.user_click_on_account_button()"
});
formatter.result({
  "duration": 243966400,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.click_on_signin_option()"
});
formatter.result({
  "duration": 2651099100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 7
    }
  ],
  "location": "WalmartLoginPageSteps.login_page_should_display(String)"
});
formatter.result({
  "duration": 8970500,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "3. User put valid email and invalid password",
  "description": "",
  "id": "walmart-login-page-funtionalities;3.-user-put-valid-email-and-invalid-password;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "User write email \"demo.auser@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "User write password \"123e\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "demo.auser@gmail.com",
      "offset": 18
    }
  ],
  "location": "WalmartLoginPageSteps.user_write_email(String)"
});
formatter.result({
  "duration": 530666300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123e",
      "offset": 21
    }
  ],
  "location": "WalmartLoginPageSteps.user_write_password(String)"
});
formatter.result({
  "duration": 179784000,
  "status": "passed"
});
formatter.after({
  "duration": 769972300,
  "status": "passed"
});
formatter.before({
  "duration": 3782249000,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "Not a valideted home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "Open browser and start application",
  "keyword": "When "
});
formatter.step({
  "line": 4,
  "name": "Walmart homepage shoule dispaly",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "User click on account button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Click on signin option",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Login \"Login\" page should display",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.open_browser_and_start_application()"
});
formatter.result({
  "duration": 2722736700,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 69988000,
  "status": "passed"
});
formatter.match({
  "location": "WalmartHomePageSteps.user_click_on_account_button()"
});
formatter.result({
  "duration": 355829200,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.click_on_signin_option()"
});
formatter.result({
  "duration": 2714695100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 7
    }
  ],
  "location": "WalmartLoginPageSteps.login_page_should_display(String)"
});
formatter.result({
  "duration": 5837300,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "3. User put valid email and invalid password",
  "description": "",
  "id": "walmart-login-page-funtionalities;3.-user-put-valid-email-and-invalid-password;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "User write email \"demo.auser@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "User write password \"123e1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "demo.auser@gmail.com",
      "offset": 18
    }
  ],
  "location": "WalmartLoginPageSteps.user_write_email(String)"
});
formatter.result({
  "duration": 521380800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123e1",
      "offset": 21
    }
  ],
  "location": "WalmartLoginPageSteps.user_write_password(String)"
});
formatter.result({
  "duration": 231603800,
  "status": "passed"
});
formatter.after({
  "duration": 823139200,
  "status": "passed"
});
formatter.before({
  "duration": 3634767000,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "Not a valideted home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "Open browser and start application",
  "keyword": "When "
});
formatter.step({
  "line": 4,
  "name": "Walmart homepage shoule dispaly",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "User click on account button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Click on signin option",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Login \"Login\" page should display",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.open_browser_and_start_application()"
});
formatter.result({
  "duration": 17354997900,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 1038602700,
  "status": "passed"
});
formatter.match({
  "location": "WalmartHomePageSteps.user_click_on_account_button()"
});
formatter.result({
  "duration": 210655500,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.click_on_signin_option()"
});
formatter.result({
  "duration": 13361831700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 7
    }
  ],
  "location": "WalmartLoginPageSteps.login_page_should_display(String)"
});
formatter.result({
  "duration": 6294000,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "3. User put valid email and invalid password",
  "description": "",
  "id": "walmart-login-page-funtionalities;3.-user-put-valid-email-and-invalid-password;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "User write email \"demo.auser@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "User write password \"1g3e\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "demo.auser@gmail.com",
      "offset": 18
    }
  ],
  "location": "WalmartLoginPageSteps.user_write_email(String)"
});
formatter.result({
  "duration": 569315200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1g3e",
      "offset": 21
    }
  ],
  "location": "WalmartLoginPageSteps.user_write_password(String)"
});
formatter.result({
  "duration": 178113500,
  "status": "passed"
});
formatter.after({
  "duration": 708189000,
  "status": "passed"
});
formatter.before({
  "duration": 4002827700,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "Not a valideted home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "Open browser and start application",
  "keyword": "When "
});
formatter.step({
  "line": 4,
  "name": "Walmart homepage shoule dispaly",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "User click on account button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Click on signin option",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Login \"Login\" page should display",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.open_browser_and_start_application()"
});
formatter.result({
  "duration": 3177774700,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 6457700,
  "status": "passed"
});
formatter.match({
  "location": "WalmartHomePageSteps.user_click_on_account_button()"
});
formatter.result({
  "duration": 318581500,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.click_on_signin_option()"
});
formatter.result({
  "duration": 2038185200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 7
    }
  ],
  "location": "WalmartLoginPageSteps.login_page_should_display(String)"
});
formatter.result({
  "duration": 4389500,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "3. User put valid email and invalid password",
  "description": "",
  "id": "walmart-login-page-funtionalities;3.-user-put-valid-email-and-invalid-password;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "User write email \"demo.auser@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "User write password \"12ue1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "demo.auser@gmail.com",
      "offset": 18
    }
  ],
  "location": "WalmartLoginPageSteps.user_write_email(String)"
});
formatter.result({
  "duration": 595259600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12ue1",
      "offset": 21
    }
  ],
  "location": "WalmartLoginPageSteps.user_write_password(String)"
});
formatter.result({
  "duration": 245603600,
  "status": "passed"
});
formatter.after({
  "duration": 750025100,
  "status": "passed"
});
formatter.uri("searchBoxFunctionality.feature");
formatter.feature({
  "line": 1,
  "name": "Walmart search box functionality",
  "description": "",
  "id": "walmart-search-box-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3797196200,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "Not a valideted search box",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "Open browser and start application",
  "keyword": "When "
});
formatter.step({
  "line": 4,
  "name": "Walmart homepage shoule dispaly",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.open_browser_and_start_application()"
});
formatter.result({
  "duration": 2885585600,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 41099900,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "1.Valid search in the search box",
  "description": "",
  "id": "walmart-search-box-functionality;1.valid-search-in-the-search-box",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "User enter in the search box \"Nike Benassi Solarsoft Slide\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Searched product page should dispaly \"Nike Benassi Solarsoft Slide - Walmart.com\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Nike Benassi Solarsoft Slide",
      "offset": 30
    }
  ],
  "location": "WalmartSearchBoxSteps.user_enter_in_the_search_box(String)"
});
formatter.result({
  "duration": 6495302300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nike Benassi Solarsoft Slide - Walmart.com",
      "offset": 38
    }
  ],
  "location": "WalmartSearchBoxSteps.searched_product_page_should_dispaly(String)"
});
formatter.result({
  "duration": 10317900,
  "status": "passed"
});
formatter.after({
  "duration": 811214400,
  "status": "passed"
});
formatter.before({
  "duration": 3774538300,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "Not a valideted search box",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "Open browser and start application",
  "keyword": "When "
});
formatter.step({
  "line": 4,
  "name": "Walmart homepage shoule dispaly",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.open_browser_and_start_application()"
});
formatter.result({
  "duration": 2890381600,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 9274300,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "2.Invalid search in the search box",
  "description": "",
  "id": "walmart-search-box-functionality;2.invalid-search-in-the-search-box",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "User enter an invalid product in the search box \"eerrtt\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "No product match massage should display",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "eerrtt",
      "offset": 49
    }
  ],
  "location": "WalmartSearchBoxSteps.user_enter_an_invalid_product_in_the_search_box(String)"
});
formatter.result({
  "duration": 3085116700,
  "status": "passed"
});
formatter.match({
  "location": "WalmartSearchBoxSteps.no_product_match_massage_should_display()"
});
formatter.result({
  "duration": 57583500,
  "status": "passed"
});
formatter.after({
  "duration": 836402200,
  "status": "passed"
});
formatter.before({
  "duration": 3704547500,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "Not a valideted search box",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "Open browser and start application",
  "keyword": "When "
});
formatter.step({
  "line": 4,
  "name": "Walmart homepage shoule dispaly",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.open_browser_and_start_application()"
});
formatter.result({
  "duration": 3333017200,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 17364500,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "3.Count search box dropdown list",
  "description": "",
  "id": "walmart-search-box-functionality;3.count-search-box-dropdown-list",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "User click on search box drop down button",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "List going to show 26 options",
  "keyword": "Then "
});
formatter.match({
  "location": "WalmartSearchBoxSteps.user_click_on_search_box_drop_down_button()"
});
formatter.result({
  "duration": 179059600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "26",
      "offset": 19
    }
  ],
  "location": "WalmartSearchBoxSteps.list_going_to_show_options(int)"
});
formatter.result({
  "duration": 49084700,
  "status": "passed"
});
formatter.after({
  "duration": 787168300,
  "status": "passed"
});
formatter.before({
  "duration": 3875631000,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "Not a valideted search box",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "Open browser and start application",
  "keyword": "When "
});
formatter.step({
  "line": 4,
  "name": "Walmart homepage shoule dispaly",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.open_browser_and_start_application()"
});
formatter.result({
  "duration": 3436299300,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 27974100,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "4.Verify all the options are shown in the list",
  "description": "",
  "id": "walmart-search-box-functionality;4.verify-all-the-options-are-shown-in-the-list",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "User click on search box drop down button",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "List going to show this options",
  "rows": [
    {
      "cells": [
        "All Departments",
        "Auto \u0026 Tire",
        "Baby",
        "Beauty",
        "Books",
        "Cell Phones",
        "Clothing",
        "Electronics",
        "Food",
        "Gifts \u0026 Registry",
        "Health",
        "Home",
        "Home Improvement",
        "Household Essentials",
        "Jewelry",
        "Movies",
        "Music",
        "Office",
        "Party \u0026 Occasions",
        "Patio \u0026 Garden",
        "Pets",
        "Pharmacy",
        "Photo Center",
        "Sports \u0026 Outdoors",
        "Toys",
        "Video Games"
      ],
      "line": 21
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "WalmartSearchBoxSteps.user_click_on_search_box_drop_down_button()"
});
formatter.result({
  "duration": 355361700,
  "status": "passed"
});
formatter.match({
  "location": "WalmartSearchBoxSteps.list_going_to_show_this_options(DataTable)"
});
formatter.result({
  "duration": 943150900,
  "status": "passed"
});
formatter.after({
  "duration": 801717500,
  "status": "passed"
});
formatter.before({
  "duration": 3675667800,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "Not a valideted search box",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "Open browser and start application",
  "keyword": "When "
});
formatter.step({
  "line": 4,
  "name": "Walmart homepage shoule dispaly",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.open_browser_and_start_application()"
});
formatter.result({
  "duration": 9426164500,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 12515900,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "5.Verify advance search in the search box",
  "description": "",
  "id": "walmart-search-box-functionality;5.verify-advance-search-in-the-search-box",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "User click on search box drop down button",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Select option\"baby\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User enter in the search box \"socks\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Page going to show 36 products",
  "keyword": "Then "
});
formatter.match({
  "location": "WalmartSearchBoxSteps.user_click_on_search_box_drop_down_button()"
});
formatter.result({
  "duration": 275320100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "baby",
      "offset": 14
    }
  ],
  "location": "WalmartSearchBoxSteps.select_option(String)"
});
formatter.result({
  "duration": 144226100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "socks",
      "offset": 30
    }
  ],
  "location": "WalmartSearchBoxSteps.user_enter_in_the_search_box(String)"
});
formatter.result({
  "duration": 8696499200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "36",
      "offset": 19
    }
  ],
  "location": "WalmartSearchBoxSteps.page_going_to_show_products(int)"
});
formatter.result({
  "duration": 24250400,
  "status": "passed"
});
formatter.after({
  "duration": 881667000,
  "status": "passed"
});
formatter.uri("signUpPageFunctionality.feature");
formatter.feature({
  "line": 1,
  "name": "Walmart signup page funtionalities",
  "description": "",
  "id": "walmart-signup-page-funtionalities",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8834683500,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "Not a valideted home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "Open browser and start application",
  "keyword": "When "
});
formatter.step({
  "line": 4,
  "name": "Walmart homepage shoule dispaly",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "User click on account button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Click on create account",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "SignUp \"Login\" page should display",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.open_browser_and_start_application()"
});
formatter.result({
  "duration": 3027657600,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 70952300,
  "status": "passed"
});
formatter.match({
  "location": "WalmartHomePageSteps.user_click_on_account_button()"
});
formatter.result({
  "duration": 323310700,
  "status": "passed"
});
formatter.match({
  "location": "WalmartSignUpPageSteps.click_on_create_account()"
});
formatter.result({
  "duration": 2580342200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 8
    }
  ],
  "location": "WalmartSignUpPageSteps.signup_page_should_display(String)"
});
formatter.result({
  "duration": 6340500,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "1.Create an account with invalid email",
  "description": "",
  "id": "walmart-signup-page-funtionalities;1.create-an-account-with-invalid-email",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "User put first name\"firstName\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User put last name \"lastName\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User put email \"demo.user01@gmail\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User put password \"123456\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 14,
      "value": "#      And User uncheck remember me check box"
    },
    {
      "line": 15,
      "value": "#      And User uncheck auto email check box"
    }
  ],
  "line": 16,
  "name": "User click on create account button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "invalid email massage \"Please enter a valid email address.\" should display",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "firstName",
      "offset": 20
    }
  ],
  "location": "WalmartSignUpPageSteps.user_put_first_name(String)"
});
formatter.result({
  "duration": 334236600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lastName",
      "offset": 20
    }
  ],
  "location": "WalmartSignUpPageSteps.user_put_last_name(String)"
});
formatter.result({
  "duration": 275239800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo.user01@gmail",
      "offset": 16
    }
  ],
  "location": "WalmartSignUpPageSteps.user_put_email(String)"
});
formatter.result({
  "duration": 609815600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 19
    }
  ],
  "location": "WalmartSignUpPageSteps.user_put_password(String)"
});
formatter.result({
  "duration": 451111100,
  "status": "passed"
});
formatter.match({
  "location": "WalmartSignUpPageSteps.user_click_on_create_account_button()"
});
formatter.result({
  "duration": 27131800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter a valid email address.",
      "offset": 23
    }
  ],
  "location": "WalmartSignUpPageSteps.invalid_email_massage_should_display(String)"
});
formatter.result({
  "duration": 46015300,
  "status": "passed"
});
formatter.after({
  "duration": 817474600,
  "status": "passed"
});
formatter.before({
  "duration": 3834621600,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "Not a valideted home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "Open browser and start application",
  "keyword": "When "
});
formatter.step({
  "line": 4,
  "name": "Walmart homepage shoule dispaly",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "User click on account button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Click on create account",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "SignUp \"Login\" page should display",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.open_browser_and_start_application()"
});
formatter.result({
  "duration": 6069544200,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 7230100,
  "status": "passed"
});
formatter.match({
  "location": "WalmartHomePageSteps.user_click_on_account_button()"
});
formatter.result({
  "duration": 287917700,
  "status": "passed"
});
formatter.match({
  "location": "WalmartSignUpPageSteps.click_on_create_account()"
});
formatter.result({
  "duration": 2443966300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 8
    }
  ],
  "location": "WalmartSignUpPageSteps.signup_page_should_display(String)"
});
formatter.result({
  "duration": 5534000,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "1.Create an account with invalid email",
  "description": "",
  "id": "walmart-signup-page-funtionalities;1.create-an-account-with-invalid-email",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "User put first name\"firstName\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User put last name \"lastName\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User put email \"demo.auser01@gmail\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User put password \"12345\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 24,
      "value": "#      And User uncheck remember me check box"
    },
    {
      "line": 25,
      "value": "#      And User uncheck auto email check box"
    }
  ],
  "line": 26,
  "name": "User click on create account button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "invalid password massage \"Must contain between 6 and 12 characters.\" should display",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "firstName",
      "offset": 20
    }
  ],
  "location": "WalmartSignUpPageSteps.user_put_first_name(String)"
});
formatter.result({
  "duration": 345013900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lastName",
      "offset": 20
    }
  ],
  "location": "WalmartSignUpPageSteps.user_put_last_name(String)"
});
formatter.result({
  "duration": 370642900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo.auser01@gmail",
      "offset": 16
    }
  ],
  "location": "WalmartSignUpPageSteps.user_put_email(String)"
});
formatter.result({
  "duration": 734323400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345",
      "offset": 19
    }
  ],
  "location": "WalmartSignUpPageSteps.user_put_password(String)"
});
formatter.result({
  "duration": 355852600,
  "status": "passed"
});
formatter.match({
  "location": "WalmartSignUpPageSteps.user_click_on_create_account_button()"
});
formatter.result({
  "duration": 19859300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Must contain between 6 and 12 characters.",
      "offset": 26
    }
  ],
  "location": "WalmartSignUpPageSteps.invalid_password_massage_should_display(String)"
});
formatter.result({
  "duration": 20683000,
  "status": "passed"
});
formatter.after({
  "duration": 891079300,
  "status": "passed"
});
formatter.uri("userAccountHomePageFunctionality.feature");
formatter.feature({
  "line": 1,
  "name": "User account functionality",
  "description": "",
  "id": "user-account-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3757295500,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "Given Not a valideted home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "Open browser and start application",
  "keyword": "When "
});
formatter.step({
  "line": 4,
  "name": "Walmart homepage shoule dispaly",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "User click on account button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Click on signin option",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Login \"Login\" page should display",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User write email \"demo.auser01@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User write password \"demowalmart\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User click on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "\"Walmart.com | Save Money. Live Better.\" pagetitle should display",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.open_browser_and_start_application()"
});
formatter.result({
  "duration": 3269302600,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 10635800,
  "status": "passed"
});
formatter.match({
  "location": "WalmartHomePageSteps.user_click_on_account_button()"
});
formatter.result({
  "duration": 356502700,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.click_on_signin_option()"
});
formatter.result({
  "duration": 6787769000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 7
    }
  ],
  "location": "WalmartLoginPageSteps.login_page_should_display(String)"
});
formatter.result({
  "duration": 4922700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo.auser01@gmail.com",
      "offset": 18
    }
  ],
  "location": "WalmartLoginPageSteps.user_write_email(String)"
});
formatter.result({
  "duration": 855712900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demowalmart",
      "offset": 21
    }
  ],
  "location": "WalmartLoginPageSteps.user_write_password(String)"
});
formatter.result({
  "duration": 429497000,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.user_click_on_signin_button()"
});
formatter.result({
  "duration": 199962000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Walmart.com | Save Money. Live Better.",
      "offset": 1
    }
  ],
  "location": "WalmartLoginPageSteps.page_should_display(String)"
});
formatter.result({
  "duration": 5015240200,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "1. User account button\u0027s options are working properly",
  "description": "",
  "id": "user-account-functionality;1.-user-account-button\u0027s-options-are-working-properly",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "User Click on loged in user account button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User click all the options and check all the button show the right page",
  "keyword": "Then "
});
formatter.match({
  "location": "WalmartUserAccountHomePageSteps.user_Click_on_loged_in_user_account_button()"
});
formatter.result({
  "duration": 5138941000,
  "status": "passed"
});
formatter.match({
  "location": "WalmartUserAccountHomePageSteps.user_click_all_the_options_and_check_all_the_button_show_the_right_page()"
});
formatter.result({
  "duration": 15759907600,
  "status": "passed"
});
formatter.after({
  "duration": 878272400,
  "status": "passed"
});
});