$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/smoke_features/feedback.feature");
formatter.feature({
  "name": "FeedBack",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@FeedBack"
    }
  ]
});
formatter.scenario({
  "name": "Submit the Provide feedback without filling the form from the home page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FeedBack"
    },
    {
      "name": "@Scenario"
    }
  ]
});
formatter.step({
  "name": "Environment COMP_HOME_PAGE",
  "keyword": "Given "
});
formatter.match({
  "location": "FeddBackStep.Environment(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on provide feed back button",
  "keyword": "And "
});
formatter.match({
  "location": "FeddBackStep.Click_on_provide_feed_back_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d75.0.3770.100)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 10.0.15063 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027WINDOWS-ANAA9TN\u0027, ip: \u0027192.168.85.190\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.38.552522 (437e6fbedfa876..., userDataDir: C:\\Users\\SANZED~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 75.0.3770.100, webStorageEnabled: true}\nSession ID: d799acb19d9de310a4e510552169ccb1\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.executeScript(RemoteWebDriver.java:482)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.executeScript(WebDriverFacade.java:411)\r\n\tat gov.gsa.sam.stepdefinition.FeddBackStep.Click_on_provide_feed_back_button(FeddBackStep.java:58)\r\n\tat ✽.Click on provide feed back button(src/test/resources/smoke_features/feedback.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Check the three question",
  "keyword": "Then "
});
formatter.match({
  "location": "FeddBackStep.Check_the_three_question()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "FeddBackStep.user_click_on_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on learning center link",
  "keyword": "And "
});
formatter.match({
  "location": "FeddBackStep.Click_on_learn_center_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Navigate into New to beta.SAM.gov page",
  "keyword": "And "
});
formatter.match({
  "location": "FeddBackStep.Navigate_into_New_to_betaSAMgov_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Browser close",
  "keyword": "And "
});
formatter.match({
  "location": "FeddBackStep.Browser_close()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Cancel the Provide feedback without filling the form from the home page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FeedBack"
    },
    {
      "name": "@Scenario"
    }
  ]
});
formatter.step({
  "name": "Environment COMP_HOME_PAGE",
  "keyword": "Given "
});
