package com.walmart.automation.framework.hooks;

import com.walmart.automation.framework.driverfactory.DriverFactory;
import org.openqa.selenium.WebDriver;

public class BaseSteps {
//    protected static WebDriver driver = null;
    protected WebDriver driver = DriverFactory.getInstance("chrome").getDriver();
}
