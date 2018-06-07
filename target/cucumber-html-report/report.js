$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/loginPageFunctionality.feature");
formatter.feature({
  "line": 1,
  "name": "Walmart login page funtionalities",
  "description": "",
  "id": "walmart-login-page-funtionalities",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5535581401,
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
  "duration": 3241040400,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 12544400,
  "status": "passed"
});
formatter.match({
  "location": "WalmartHomePageSteps.user_click_on_account_button()"
});
formatter.result({
  "duration": 153395600,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.click_on_signin_option()"
});
formatter.result({
  "duration": 2521707601,
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
  "duration": 12712100,
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
  "duration": 489890900,
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
  "duration": 322797200,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.user_click_on_signin_button()"
});
formatter.result({
  "duration": 173189600,
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
  "duration": 7324899,
  "status": "passed"
});
formatter.after({
  "duration": 690562400,
  "status": "passed"
});
formatter.before({
  "duration": 3828481600,
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
  "duration": 3941209699,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.walmart_homepage_shoule_dispaly()"
});
formatter.result({
  "duration": 11949399,
  "status": "passed"
});
formatter.match({
  "location": "WalmartHomePageSteps.user_click_on_account_button()"
});
formatter.result({
  "duration": 156653400,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.click_on_signin_option()"
});
formatter.result({
  "duration": 3057159800,
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
  "duration": 7843499,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "2. User put invalid email and valid password",
  "description": "",
  "id": "walmart-login-page-funtionalities;2.-user-put-invalid-email-and-valid-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "User write email \"demo.user@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User write password \"demmowalmart\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User click on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "\"Your password and email do not match. Please try again or \"this error massage should display",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo.user@gmail.com",
      "offset": 18
    }
  ],
  "location": "WalmartLoginPageSteps.user_write_email(String)"
});
formatter.result({
  "duration": 468729200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demmowalmart",
      "offset": 21
    }
  ],
  "location": "WalmartLoginPageSteps.user_write_password(String)"
});
formatter.result({
  "duration": 332301500,
  "status": "passed"
});
formatter.match({
  "location": "WalmartLoginPageSteps.user_click_on_signin_button()"
});
formatter.result({
  "duration": 182129299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your password and email do not match. Please try again or ",
      "offset": 1
    }
  ],
  "location": "WalmartLoginPageSteps.this_error_massage_should_display(String)"
});
formatter.result({
  "duration": 42866901,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[@class\u003d\u0027alert active alert-error alert-block\u0027]/span/button\"}\n  (Session info: chrome\u003d66.0.3359.181)\n  (Driver info: chromedriver\u003d2.39.562718 (9a2698cba08cf5a471a29d30c8b3e12becabb0e9),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027SHIFT-PC01\u0027, ip: \u0027192.168.0.105\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.39.562718 (9a2698cba08cf5..., userDataDir: C:\\Users\\SHIFTS~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 66.0.3359.181, webStorageEnabled: true}\nSession ID: 161dd1b351e6ee69595069e18db460ad\n*** Element info: {Using\u003dxpath, value\u003d//span[@class\u003d\u0027alert active alert-error alert-block\u0027]/span/button}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat com.walmart.automation.steps.WalmartLoginPageSteps.this_error_massage_should_display(WalmartLoginPageSteps.java:57)\r\n\tat ✽.Then \"Your password and email do not match. Please try again or \"this error massage should display(src/test/resources/features/loginPageFunctionality.feature:19)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1006631801,
  "status": "passed"
});
});