package com.walmart.automation.framework.controller;

import com.walmart.automation.framework.utils.Waits;
import org.openqa.selenium.WebDriver;

public class ApplicationController{
    protected WebDriver driver = null;
    protected Waits waits = null;
    protected UserAccountHomePageController userAccountHomePageController = null;
    protected HomePageController homePageController = null;
    protected LoginPageController loginPageController = null;
    protected SearchBoxController searchBoxController = null;
    protected SignUpPageController signUpPageController = null;

    public ApplicationController(WebDriver driver){
        this.driver = driver;
    }

    public Waits getWaits(){
        if(waits == null){
            waits = new Waits(driver);
        }
        return waits;
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

    public LoginPageController getLoginPageController() {
        if(loginPageController == null){
            loginPageController = new LoginPageController(driver);
        }
        return loginPageController;
    }

    public SearchBoxController getSearcBoxController(){
        if(searchBoxController == null){
            searchBoxController = new SearchBoxController(driver);
        }
        return searchBoxController;
    }

    public SignUpPageController getSignUpPageController(){
        if(signUpPageController == null){
            signUpPageController = new SignUpPageController(driver);
        }
        return signUpPageController;
    }
}
