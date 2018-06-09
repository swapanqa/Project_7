$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/userAccountFunctionality.feature");
formatter.feature({
  "line": 1,
  "name": "User account functionality",
  "description": "",
  "id": "user-account-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6865689500,
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
  "duration": 4174507000,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 35344200,
  "status": "passed"
});
formatter.match({
  "location": "WalmartHomePageSteps.user_click_on_account_button()"
});
formatter.result({
  "duration": 336496100,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.click_on_signin_option()"
});
formatter.result({
  "duration": 2959725400,
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
  "duration": 22756600,
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
  "duration": 1389620600,
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
  "duration": 551742501,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.user_click_on_signin_button()"
});
formatter.result({
  "duration": 212799200,
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
  "duration": 21357299,
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
  "duration": 3535891399,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d66.0.3359.181)\n  (Driver info: chromedriver\u003d2.40.565498 (ea082db3280dd6843ebfb08a625e3eb905c4f5ab),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027SHIFT-PC01\u0027, ip: \u0027192.168.0.109\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.40.565498 (ea082db3280dd6..., userDataDir: C:\\Users\\SHIFTS~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 66.0.3359.181, webStorageEnabled: true}\nSession ID: fe4ae3ba48f98249deb087afd3092950\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat com.walmart.automation.steps.WalmartUserAccountPageSteps.user_Click_on_loged_in_user_account_button(WalmartUserAccountPageSteps.java:16)\r\n\tat ✽.When User Click on loged in user account button(src/test/resources/features/userAccountFunctionality.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "WalmartUserAccountPageSteps.user_click_all_the_options_and_check_all_the_button_show_the_right_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1760155700,
  "status": "passed"
});
});