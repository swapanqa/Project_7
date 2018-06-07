$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/searchBoxFunctionality.feature");
formatter.feature({
  "line": 1,
  "name": "Walmart search box functionality",
  "description": "",
  "id": "walmart-search-box-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5668857300,
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
  "duration": 2470656500,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 19715000,
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
  "duration": 5501167400,
  "status": "passed"
});
formatter.match({
  "location": "WalmartSearchBoxSteps.searched_product_page_should_dispaly()"
});
formatter.result({
  "duration": 10812500,
  "status": "passed"
});
formatter.after({
  "duration": 788153500,
  "status": "passed"
});
formatter.before({
  "duration": 3633826600,
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
  "duration": 2123383500,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 21879500,
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
  "duration": 2341953400,
  "status": "passed"
});
formatter.match({
  "location": "WalmartSearchBoxSteps.no_product_match_massage_should_display()"
});
formatter.result({
  "duration": 38131500,
  "status": "passed"
});
formatter.after({
  "duration": 685231500,
  "status": "passed"
});
formatter.before({
  "duration": 3616430100,
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
  "duration": 2630124300,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 20856500,
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
  "duration": 295448200,
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
  "duration": 32901800,
  "status": "passed"
});
formatter.after({
  "duration": 653674300,
  "status": "passed"
});
formatter.before({
  "duration": 3567449500,
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
  "duration": 2243674400,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 36709800,
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
  "duration": 222481500,
  "status": "passed"
});
formatter.match({
  "location": "WalmartSearchBoxSteps.list_going_to_show_this_options(DataTable)"
});
formatter.result({
  "duration": 811170100,
  "status": "passed"
});
formatter.after({
  "duration": 710855700,
  "status": "passed"
});
formatter.before({
  "duration": 3653746200,
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
  "duration": 2488268100,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 25473300,
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
  "duration": 174844100,
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
  "duration": 280433000,
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
  "duration": 4294526600,
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
  "duration": 38637500,
  "status": "passed"
});
formatter.after({
  "duration": 653170000,
  "status": "passed"
});
});