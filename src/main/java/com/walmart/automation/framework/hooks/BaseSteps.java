package com.walmart.automation.framework.hooks;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.reporter.ExtentHtmlReporter;
import com.walmart.automation.framework.controller.ApplicationController;
import com.walmart.automation.framework.controller.UserAccountHomePageController;
import com.walmart.automation.framework.driverfactory.DriverFactory;
import com.walmart.automation.framework.utils.Delay;
import org.openqa.selenium.WebDriver;

public class BaseSteps {
//    protected static WebDriver driver = null;
//    protected static  ExtentHtmlReporter reporter;
//    protected static ExtentReports extent;
//    protected static ExtentTest logger;
protected ApplicationController applicationController = null;
protected Delay delay = null;

    protected WebDriver driver = DriverFactory.getInstance("chrome").getDriver();

    public ApplicationController getApplicationController() {
        if(applicationController == null){
            applicationController = new ApplicationController(driver);
        }
        return applicationController;
    }

    public Delay getDelay(){
        if(delay == null){
            delay = new Delay();
        }
        return delay;
    }
}