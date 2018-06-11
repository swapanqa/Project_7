package com.walmart.automation.framework.controller;

import com.walmart.automation.framework.hooks.BaseSteps;
import org.openqa.selenium.WebDriver;

public class ApplicationController{
    protected WebDriver driver = null;
    protected UserAccountHomePageController userAccountHomePageController = null;
    protected HomePageController homePageController = null;

    public ApplicationController(WebDriver driver){
        this.driver = driver;
    }

    public UserAccountHomePageController getUserAccountHomePageController() {
        if(userAccountHomePageController == null){
            userAccountHomePageController = new UserAccountHomePageController(driver);
        }
        return userAccountHomePageController;
    }

    public HomePageController getHomePageController() {
        if(homePageController == null){
            homePageController = new HomePageController(driver);
        }
        return homePageController;
    }
}
