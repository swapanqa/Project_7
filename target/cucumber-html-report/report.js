$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("addToCartFunctionality.feature");
formatter.feature({
  "line": 1,
  "name": "Add to cart functionality",
  "description": "",
  "id": "add-to-cart-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6046934200,
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
  "name": "\"Login\" pagetitle should display",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.open_browser_and_start_application()"
});
formatter.result({
  "duration": 5036575800,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 16130100,
  "status": "passed"
});
formatter.match({
  "location": "WalmartHomePageSteps.user_click_on_account_button()"
});
formatter.result({
  "duration": 176805900,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.click_on_signin_option()"
});
formatter.result({
  "duration": 3150466600,
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
  "duration": 9167600,
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
  "duration": 567766600,
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
  "duration": 368476100,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.user_click_on_signin_button()"
});
formatter.result({
  "duration": 186240000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 1
    }
  ],
  "location": "WalmartLoginPageSteps.page_should_display(String)"
});
formatter.result({
  "duration": 12169800,
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
  "duration": 739953600,
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
  "duration": 3740532700,
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
  "duration": 61157300,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.open_browser_and_start_application()"
});
formatter.result({
  "duration": 3148504800,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 7257500,
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
  "duration": 251214700,
  "status": "passed"
});
formatter.match({
  "location": "WalmartHomePageSteps.globalheadersparkmenu_optionalTopLinks_are_going_to_show_this_options(DataTable)"
});
formatter.result({
  "duration": 249592600,
  "status": "passed"
});
formatter.after({
  "duration": 707254800,
  "status": "passed"
});
formatter.before({
  "duration": 3745718600,
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
  "duration": 47159800,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.open_browser_and_start_application()"
});
formatter.result({
  "duration": 3035651300,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 23274100,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "2.Verify GlobalHeaderSparkMenu-optionalTopLinks are working properly",
  "description": "",
  "id": "walmart-home-page-functionality;2.verify-globalheadersparkmenu-optionaltoplinks-are-working-properly",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "User click on navigation menu button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "GlobalHeaderSparkMenu-optionalTopLinks are working properly",
  "keyword": "Then "
});
formatter.match({
  "location": "WalmartHomePageSteps.user_click_on_navigation_menu_button()"
});
formatter.result({
  "duration": 281487600,
  "status": "passed"
});
formatter.match({
  "location": "WalmartHomePageSteps.globalheadersparkmenu_optionalTopLinks_are_working_properly()"
});
formatter.result({
  "duration": 2111011100,
  "status": "passed"
});
formatter.after({
  "duration": 675907100,
  "status": "passed"
});
formatter.before({
  "duration": 3824857600,
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
  "duration": 48239000,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.open_browser_and_start_application()"
});
formatter.result({
  "duration": 3402383000,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 16223600,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "3.Verify GlobalHeaderSparkMenu-optionalCampaignLinks are working properly",
  "description": "",
  "id": "walmart-home-page-functionality;3.verify-globalheadersparkmenu-optionalcampaignlinks-are-working-properly",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "User click on navigation menu button",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "GlobalHeaderSparkMenu-optionalCampaignLinks are working properly",
  "keyword": "Then "
});
formatter.match({
  "location": "WalmartHomePageSteps.user_click_on_navigation_menu_button()"
});
formatter.result({
  "duration": 215072600,
  "status": "passed"
});
formatter.match({
  "location": "WalmartHomePageSteps.globalheadersparkmenu_optionalCampaignLinks_are_working_properly()"
});
formatter.result({
  "duration": 5602430100,
  "status": "passed"
});
formatter.after({
  "duration": 661616000,
  "status": "passed"
});
formatter.before({
  "duration": 3713744000,
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
  "duration": 67657600,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.open_browser_and_start_application()"
});
formatter.result({
  "duration": 3703874900,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 11836100,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 21,
      "value": "#   Scenario: 4.Verify GlobalHeaderDepartmentsMenus are working properly"
    },
    {
      "line": 22,
      "value": "#    When User click on navigation menu button"
    },
    {
      "line": 23,
      "value": "#    Then GlobalHeaderDepartmentsMenu options are working properly"
    }
  ],
  "line": 25,
  "name": "5.Verify grocery button is navigate into a expected page",
  "description": "",
  "id": "walmart-home-page-functionality;5.verify-grocery-button-is-navigate-into-a-expected-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "User click on grocery button",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "\"Walmart Grocery - Home\" is going to display",
  "keyword": "Then "
});
formatter.match({
  "location": "WalmartHomePageSteps.user_click_on_grocery_button()"
});
formatter.result({
  "duration": 4798225200,
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
  "duration": 9729000,
  "status": "passed"
});
formatter.after({
  "duration": 724028000,
  "status": "passed"
});
formatter.before({
  "duration": 3737831700,
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
  "duration": 59255900,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.open_browser_and_start_application()"
});
formatter.result({
  "duration": 3699164400,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 15735600,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 29,
      "value": "#   @smoke"
    }
  ],
  "line": 30,
  "name": "6.Verify account button is working",
  "description": "",
  "id": "walmart-home-page-functionality;6.verify-account-button-is-working",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "User click on account button",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "\"Account\" dropdown is going to display",
  "keyword": "Then "
});
formatter.match({
  "location": "WalmartHomePageSteps.user_click_on_account_button()"
});
formatter.result({
  "duration": 251337400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account",
      "offset": 1
    }
  ],
  "location": "WalmartHomePageSteps.dropdown_is_going_to_display(String)"
});
formatter.result({
  "duration": 66163000,
  "status": "passed"
});
formatter.after({
  "duration": 648198600,
  "status": "passed"
});
formatter.before({
  "duration": 3738494700,
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
  "duration": 77772200,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.open_browser_and_start_application()"
});
formatter.result({
  "duration": 3309078600,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 8594200,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "7.Verify account button is working",
  "description": "",
  "id": "walmart-home-page-functionality;7.verify-account-button-is-working",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 35,
  "name": "User click on store location button",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "\"Location\" dropdown is going to show",
  "keyword": "Then "
});
formatter.match({
  "location": "WalmartHomePageSteps.user_click_on_store_location_button()"
});
formatter.result({
  "duration": 191908700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Location",
      "offset": 1
    }
  ],
  "location": "WalmartHomePageSteps.dropdown_is_going_to_show(String)"
});
formatter.result({
  "duration": 52732200,
  "status": "passed"
});
formatter.after({
  "duration": 627787700,
  "status": "passed"
});
formatter.before({
  "duration": 3677829100,
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
  "duration": 65371400,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.open_browser_and_start_application()"
});
formatter.result({
  "duration": 3055600600,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 13974700,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "7.Verify cart button is working",
  "description": "",
  "id": "walmart-home-page-functionality;7.verify-cart-button-is-working",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 39,
  "name": "User click on cart button",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "\"Cart\" page is going to show",
  "keyword": "Then "
});
formatter.match({
  "location": "WalmartHomePageSteps.user_click_on_cart_button()"
});
formatter.result({
  "duration": 1920725800,
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
  "duration": 223956300,
  "status": "passed"
});
formatter.after({
  "duration": 705333400,
  "status": "passed"
});
formatter.before({
  "duration": 3631153100,
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
  "duration": 50770100,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.open_browser_and_start_application()"
});
formatter.result({
  "duration": 3079478500,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 6729600,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "8.Verifying all links and images are not broken",
  "description": "",
  "id": "walmart-home-page-functionality;8.verifying-all-links-and-images-are-not-broken",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 43,
  "name": "User is in homepage",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "All link and images are not broken",
  "keyword": "Then "
});
formatter.match({
  "location": "WalmartHomePageSteps.user_is_in_homepage()"
});
formatter.result({
  "duration": 5000705000,
  "status": "passed"
});
formatter.match({
  "location": "WalmartHomePageSteps.all_link_and_images_are_not_broken()"
});
formatter.result({
  "duration": 26975848900,
  "status": "passed"
});
formatter.after({
  "duration": 658730399,
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
  "duration": 3805634299,
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
  "duration": 3401812700,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 8110201,
  "status": "passed"
});
formatter.match({
  "location": "WalmartHomePageSteps.user_click_on_account_button()"
});
formatter.result({
  "duration": 194021501,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.click_on_signin_option()"
});
formatter.result({
  "duration": 3185837700,
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
  "duration": 4797800,
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
  "name": "\"Login\" pagetitle should display",
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
  "duration": 597086500,
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
  "duration": 332927300,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.user_click_on_signin_button()"
});
formatter.result({
  "duration": 177522700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 1
    }
  ],
  "location": "WalmartLoginPageSteps.page_should_display(String)"
});
formatter.result({
  "duration": 10792000,
  "status": "passed"
});
formatter.after({
  "duration": 686775500,
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
  "name": "\"Login\" pagetitle should display",
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
  "duration": 3689719400,
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
  "duration": 3832298300,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 55371700,
  "status": "passed"
});
formatter.match({
  "location": "WalmartHomePageSteps.user_click_on_account_button()"
});
formatter.result({
  "duration": 168936301,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.click_on_signin_option()"
});
formatter.result({
  "duration": 2561956201,
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
  "duration": 3988399,
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
  "name": "\"Login\" pagetitle should display",
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
  "duration": 540149900,
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
  "duration": 298046799,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.user_click_on_signin_button()"
});
formatter.result({
  "duration": 170897000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 1
    }
  ],
  "location": "WalmartLoginPageSteps.page_should_display(String)"
});
formatter.result({
  "duration": 9416500,
  "status": "passed"
});
formatter.after({
  "duration": 686374200,
  "status": "passed"
});
formatter.before({
  "duration": 3773192001,
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
  "duration": 4340021800,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 5779200,
  "status": "passed"
});
formatter.match({
  "location": "WalmartHomePageSteps.user_click_on_account_button()"
});
formatter.result({
  "duration": 162708500,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.click_on_signin_option()"
});
formatter.result({
  "duration": 2239894601,
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
  "duration": 4658100,
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
  "name": "\"Login\" pagetitle should display",
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
  "duration": 511073601,
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
  "duration": 324429200,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.user_click_on_signin_button()"
});
formatter.result({
  "duration": 179782300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 1
    }
  ],
  "location": "WalmartLoginPageSteps.page_should_display(String)"
});
formatter.result({
  "duration": 5802400,
  "status": "passed"
});
formatter.after({
  "duration": 709121801,
  "status": "passed"
});
formatter.before({
  "duration": 3774818000,
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
  "duration": 3118427600,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 8776000,
  "status": "passed"
});
formatter.match({
  "location": "WalmartHomePageSteps.user_click_on_account_button()"
});
formatter.result({
  "duration": 234389401,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.click_on_signin_option()"
});
formatter.result({
  "duration": 2743352901,
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
  "duration": 4729099,
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
  "name": "\"Login\" pagetitle should display",
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
  "duration": 501310099,
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
  "duration": 303487400,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.user_click_on_signin_button()"
});
formatter.result({
  "duration": 180297801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 1
    }
  ],
  "location": "WalmartLoginPageSteps.page_should_display(String)"
});
formatter.result({
  "duration": 8040700,
  "status": "passed"
});
formatter.after({
  "duration": 661550799,
  "status": "passed"
});
formatter.before({
  "duration": 4656568600,
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
  "duration": 3941582099,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 8947000,
  "status": "passed"
});
formatter.match({
  "location": "WalmartHomePageSteps.user_click_on_account_button()"
});
formatter.result({
  "duration": 156502899,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.click_on_signin_option()"
});
formatter.result({
  "duration": 3255012000,
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
  "duration": 6415300,
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
  "name": "\"Login\" pagetitle should display",
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
  "duration": 523669801,
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
  "duration": 334018900,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.user_click_on_signin_button()"
});
formatter.result({
  "duration": 173610701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 1
    }
  ],
  "location": "WalmartLoginPageSteps.page_should_display(String)"
});
formatter.result({
  "duration": 9104099,
  "status": "passed"
});
formatter.after({
  "duration": 692893500,
  "status": "passed"
});
formatter.before({
  "duration": 3628915601,
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
  "duration": 3940565001,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 17544400,
  "status": "passed"
});
formatter.match({
  "location": "WalmartHomePageSteps.user_click_on_account_button()"
});
formatter.result({
  "duration": 187843400,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.click_on_signin_option()"
});
formatter.result({
  "duration": 3982781100,
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
  "duration": 5060800,
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
  "name": "\"Login\" pagetitle should display",
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
  "duration": 509854400,
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
  "duration": 317072000,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.user_click_on_signin_button()"
});
formatter.result({
  "duration": 172415200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 1
    }
  ],
  "location": "WalmartLoginPageSteps.page_should_display(String)"
});
formatter.result({
  "duration": 11991501,
  "status": "passed"
});
formatter.after({
  "duration": 646997300,
  "status": "passed"
});
formatter.before({
  "duration": 4249882500,
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
  "duration": 4210127800,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 14452300,
  "status": "passed"
});
formatter.match({
  "location": "WalmartHomePageSteps.user_click_on_account_button()"
});
formatter.result({
  "duration": 134745800,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.click_on_signin_option()"
});
formatter.result({
  "duration": 3222556999,
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
  "duration": 6218701,
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
  "name": "\"Login\" pagetitle should display",
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
  "duration": 502846699,
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
  "duration": 307723000,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.user_click_on_signin_button()"
});
formatter.result({
  "duration": 166425900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 1
    }
  ],
  "location": "WalmartLoginPageSteps.page_should_display(String)"
});
formatter.result({
  "duration": 6707799,
  "status": "passed"
});
formatter.after({
  "duration": 662777899,
  "status": "passed"
});
formatter.before({
  "duration": 4331914800,
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
  "duration": 3781331300,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 13103599,
  "status": "passed"
});
formatter.match({
  "location": "WalmartHomePageSteps.user_click_on_account_button()"
});
formatter.result({
  "duration": 227380999,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.click_on_signin_option()"
});
formatter.result({
  "duration": 2447358699,
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
  "duration": 4739600,
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
  "name": "\"Login\" pagetitle should display",
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
  "duration": 656416500,
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
  "duration": 338704201,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.user_click_on_signin_button()"
});
formatter.result({
  "duration": 182721400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 1
    }
  ],
  "location": "WalmartLoginPageSteps.page_should_display(String)"
});
formatter.result({
  "duration": 9232599,
  "status": "passed"
});
formatter.after({
  "duration": 672376100,
  "status": "passed"
});
formatter.before({
  "duration": 3895338000,
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
  "duration": 4333711600,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 30588300,
  "status": "passed"
});
formatter.match({
  "location": "WalmartHomePageSteps.user_click_on_account_button()"
});
formatter.result({
  "duration": 160857699,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.click_on_signin_option()"
});
formatter.result({
  "duration": 6505829200,
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
  "duration": 4457000,
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
  "name": "\"Login\" pagetitle should display",
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
  "duration": 541251800,
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
  "duration": 343707299,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.user_click_on_signin_button()"
});
formatter.result({
  "duration": 171571399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 1
    }
  ],
  "location": "WalmartLoginPageSteps.page_should_display(String)"
});
formatter.result({
  "duration": 6313701,
  "status": "passed"
});
formatter.after({
  "duration": 645608100,
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
  "duration": 3942227501,
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
  "duration": 3296053500,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 7987100,
  "status": "passed"
});
formatter.match({
  "location": "WalmartHomePageSteps.user_click_on_account_button()"
});
formatter.result({
  "duration": 248728299,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.click_on_signin_option()"
});
formatter.result({
  "duration": 3807222700,
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
  "duration": 6050800,
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
  "duration": 480407301,
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
  "duration": 198125500,
  "status": "passed"
});
formatter.after({
  "duration": 643587299,
  "status": "passed"
});
formatter.before({
  "duration": 3880145000,
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
  "duration": 3356212200,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 28028101,
  "status": "passed"
});
formatter.match({
  "location": "WalmartHomePageSteps.user_click_on_account_button()"
});
formatter.result({
  "duration": 136654100,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.click_on_signin_option()"
});
formatter.result({
  "duration": 3228799900,
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
  "duration": 8222300,
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
  "duration": 486670200,
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
  "duration": 192500301,
  "status": "passed"
});
formatter.after({
  "duration": 670004601,
  "status": "passed"
});
formatter.before({
  "duration": 3977743900,
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
  "duration": 3879623300,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 19347700,
  "status": "passed"
});
formatter.match({
  "location": "WalmartHomePageSteps.user_click_on_account_button()"
});
formatter.result({
  "duration": 154284699,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.click_on_signin_option()"
});
formatter.result({
  "duration": 4905967500,
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
  "duration": 9941200,
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
  "duration": 453372500,
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
  "duration": 186130299,
  "status": "passed"
});
formatter.after({
  "duration": 645726300,
  "status": "passed"
});
formatter.before({
  "duration": 3830360299,
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
  "duration": 3325641199,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 14713700,
  "status": "passed"
});
formatter.match({
  "location": "WalmartHomePageSteps.user_click_on_account_button()"
});
formatter.result({
  "duration": 172106299,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.click_on_signin_option()"
});
formatter.result({
  "duration": 3184186300,
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
  "duration": 4197400,
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
  "duration": 479826700,
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
  "duration": 217647700,
  "status": "passed"
});
formatter.after({
  "duration": 668842800,
  "status": "passed"
});
formatter.before({
  "duration": 4063156801,
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
  "duration": 4504631199,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 5975200,
  "status": "passed"
});
formatter.match({
  "location": "WalmartHomePageSteps.user_click_on_account_button()"
});
formatter.result({
  "duration": 151808301,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.click_on_signin_option()"
});
formatter.result({
  "duration": 3047835900,
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
  "duration": 6756101,
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
  "duration": 479266000,
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
  "duration": 174733700,
  "status": "passed"
});
formatter.after({
  "duration": 667259300,
  "status": "passed"
});
formatter.before({
  "duration": 3939832901,
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
  "duration": 3809152801,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 5580501,
  "status": "passed"
});
formatter.match({
  "location": "WalmartHomePageSteps.user_click_on_account_button()"
});
formatter.result({
  "duration": 164655801,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.click_on_signin_option()"
});
formatter.result({
  "duration": 4400580699,
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
  "duration": 4375500,
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
  "duration": 456172700,
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
  "duration": 204991101,
  "status": "passed"
});
formatter.after({
  "duration": 657237500,
  "status": "passed"
});
formatter.before({
  "duration": 3934557999,
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
  "duration": 4248064899,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 8301000,
  "status": "passed"
});
formatter.match({
  "location": "WalmartHomePageSteps.user_click_on_account_button()"
});
formatter.result({
  "duration": 162115000,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.click_on_signin_option()"
});
formatter.result({
  "duration": 3077470899,
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
  "duration": 16324700,
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
  "duration": 456274300,
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
  "duration": 179096700,
  "status": "passed"
});
formatter.after({
  "duration": 658924500,
  "status": "passed"
});
formatter.before({
  "duration": 3859400400,
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
  "duration": 4021831000,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 5859400,
  "status": "passed"
});
formatter.match({
  "location": "WalmartHomePageSteps.user_click_on_account_button()"
});
formatter.result({
  "duration": 167755300,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.click_on_signin_option()"
});
formatter.result({
  "duration": 2804800199,
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
  "duration": 5125800,
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
  "duration": 493421501,
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
  "duration": 210897501,
  "status": "passed"
});
formatter.after({
  "duration": 670918700,
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
  "duration": 3898925600,
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
  "duration": 5255898999,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 7430601,
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
  "name": "Searched product page should dispaly",
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
  "duration": 11511720099,
  "status": "passed"
});
formatter.match({
  "location": "WalmartSearchBoxSteps.searched_product_page_should_dispaly()"
});
formatter.result({
  "duration": 7684300,
  "status": "passed"
});
formatter.after({
  "duration": 669892700,
  "status": "passed"
});
formatter.before({
  "duration": 4000551900,
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
  "duration": 5262964100,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 11903500,
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
  "duration": 3704221200,
  "status": "passed"
});
formatter.match({
  "location": "WalmartSearchBoxSteps.no_product_match_massage_should_display()"
});
formatter.result({
  "duration": 38043900,
  "status": "passed"
});
formatter.after({
  "duration": 662947500,
  "status": "passed"
});
formatter.before({
  "duration": 4213405400,
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
  "duration": 3088749400,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 14116700,
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
  "duration": 163452001,
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
  "duration": 22418900,
  "status": "passed"
});
formatter.after({
  "duration": 675221300,
  "status": "passed"
});
formatter.before({
  "duration": 3864620301,
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
  "duration": 4715675099,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 15048401,
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
  "duration": 132440100,
  "status": "passed"
});
formatter.match({
  "location": "WalmartSearchBoxSteps.list_going_to_show_this_options(DataTable)"
});
formatter.result({
  "duration": 689082200,
  "status": "passed"
});
formatter.after({
  "duration": 642687600,
  "status": "passed"
});
formatter.before({
  "duration": 4001769900,
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
  "duration": 3183099400,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 25971001,
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
  "name": "Page going to show 34 products",
  "keyword": "Then "
});
formatter.match({
  "location": "WalmartSearchBoxSteps.user_click_on_search_box_drop_down_button()"
});
formatter.result({
  "duration": 155355300,
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
  "duration": 263754801,
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
  "duration": 5584660701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "34",
      "offset": 19
    }
  ],
  "location": "WalmartSearchBoxSteps.page_going_to_show_products(int)"
});
formatter.result({
  "duration": 34390700,
  "status": "passed"
});
formatter.after({
  "duration": 638345300,
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
  "duration": 3958279801,
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
  "duration": 4497324699,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 8431500,
  "status": "passed"
});
formatter.match({
  "location": "WalmartHomePageSteps.user_click_on_account_button()"
});
formatter.result({
  "duration": 200419299,
  "status": "passed"
});
formatter.match({
  "location": "WalmartSignUpPageFunctionality.click_on_create_account()"
});
formatter.result({
  "duration": 3285198600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 8
    }
  ],
  "location": "WalmartSignUpPageFunctionality.signup_page_should_display(String)"
});
formatter.result({
  "duration": 5084600,
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
  "location": "WalmartSignUpPageFunctionality.user_put_first_name(String)"
});
formatter.result({
  "duration": 272970900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lastName",
      "offset": 20
    }
  ],
  "location": "WalmartSignUpPageFunctionality.user_put_last_name(String)"
});
formatter.result({
  "duration": 257250500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo.user01@gmail",
      "offset": 16
    }
  ],
  "location": "WalmartSignUpPageFunctionality.user_put_email(String)"
});
formatter.result({
  "duration": 468205500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 19
    }
  ],
  "location": "WalmartSignUpPageFunctionality.user_put_password(String)"
});
formatter.result({
  "duration": 365986700,
  "status": "passed"
});
formatter.match({
  "location": "WalmartSignUpPageFunctionality.user_click_on_create_account_button()"
});
formatter.result({
  "duration": 18177900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter a valid email address.",
      "offset": 23
    }
  ],
  "location": "WalmartSignUpPageFunctionality.invalid_email_massage_should_display(String)"
});
formatter.result({
  "duration": 36896900,
  "status": "passed"
});
formatter.after({
  "duration": 630653501,
  "status": "passed"
});
formatter.before({
  "duration": 3894374401,
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
  "duration": 3431856701,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 33330699,
  "status": "passed"
});
formatter.match({
  "location": "WalmartHomePageSteps.user_click_on_account_button()"
});
formatter.result({
  "duration": 218263600,
  "status": "passed"
});
formatter.match({
  "location": "WalmartSignUpPageFunctionality.click_on_create_account()"
});
formatter.result({
  "duration": 2799357200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 8
    }
  ],
  "location": "WalmartSignUpPageFunctionality.signup_page_should_display(String)"
});
formatter.result({
  "duration": 3910999,
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
  "location": "WalmartSignUpPageFunctionality.user_put_first_name(String)"
});
formatter.result({
  "duration": 277624600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lastName",
      "offset": 20
    }
  ],
  "location": "WalmartSignUpPageFunctionality.user_put_last_name(String)"
});
formatter.result({
  "duration": 278665099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo.auser01@gmail",
      "offset": 16
    }
  ],
  "location": "WalmartSignUpPageFunctionality.user_put_email(String)"
});
formatter.result({
  "duration": 493006799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345",
      "offset": 19
    }
  ],
  "location": "WalmartSignUpPageFunctionality.user_put_password(String)"
});
formatter.result({
  "duration": 323121199,
  "status": "passed"
});
formatter.match({
  "location": "WalmartSignUpPageFunctionality.user_click_on_create_account_button()"
});
formatter.result({
  "duration": 16567100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Must contain between 6 and 12 characters.",
      "offset": 26
    }
  ],
  "location": "WalmartSignUpPageFunctionality.invalid_password_massage_should_display(String)"
});
formatter.result({
  "duration": 16018299,
  "status": "passed"
});
formatter.after({
  "duration": 674583300,
  "status": "passed"
});
formatter.uri("userAccountFunctionality.feature");
formatter.feature({
  "line": 1,
  "name": "User account functionality",
  "description": "",
  "id": "user-account-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3902214700,
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
  "name": "\"Login\" pagetitle should display",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.open_browser_and_start_application()"
});
formatter.result({
  "duration": 5225526000,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 10967300,
  "status": "passed"
});
formatter.match({
  "location": "WalmartHomePageSteps.user_click_on_account_button()"
});
formatter.result({
  "duration": 140054100,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.click_on_signin_option()"
});
formatter.result({
  "duration": 5270142400,
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
  "duration": 7616699,
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
  "duration": 505508700,
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
  "duration": 314618300,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.user_click_on_signin_button()"
});
formatter.result({
  "duration": 176929499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 1
    }
  ],
  "location": "WalmartLoginPageSteps.page_should_display(String)"
});
formatter.result({
  "duration": 6072499,
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
  "location": "WalmartUserAccountPageSteps.user_Click_on_loged_in_user_account_button()"
});
formatter.result({
  "duration": 14200383500,
  "error_message": "java.lang.NullPointerException\r\n\tat com.walmart.automation.steps.WalmartUserAccountPageSteps.user_Click_on_loged_in_user_account_button(WalmartUserAccountPageSteps.java:16)\r\n\tat ✽.When User Click on loged in user account button(userAccountFunctionality.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "WalmartUserAccountPageSteps.user_click_all_the_options_and_check_all_the_button_show_the_right_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 6028979500,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d66.0.3359.181)\n  (Driver info: chromedriver\u003d2.40.565498 (ea082db3280dd6843ebfb08a625e3eb905c4f5ab),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027SHIFT-PC01\u0027, ip: \u0027192.168.0.109\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.40.565498 (ea082db3280dd6..., userDataDir: C:\\Users\\SHIFTS~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 66.0.3359.181, webStorageEnabled: true}\nSession ID: bcd89737c88665a19ed4d5f75c868129\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:291)\r\n\tat com.walmart.automation.framework.hooks.BeforeAfterHook.tearDown(BeforeAfterHook.java:39)\r\n\tat sun.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:205)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\r\n",
  "status": "failed"
});
});