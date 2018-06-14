package com.walmart.automation.framework.controller;

import com.walmart.automation.framework.models.WalmartLoginPageModel;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class LoginPageController {
    protected WebDriver driver = null;

    public LoginPageController(WebDriver driver){
        this.driver = driver;
    }

    public void SigninOptionClick(){
        WebElement homePageSigninOptionElement = driver.findElement(WalmartLoginPageModel.getHomePageSigninButton());
        homePageSigninOptionElement.click();
    }

    public void pageTitleAssertion(String expected){
        String actual = driver.getTitle();
        System.out.println("Actual page title is ----->" + actual);
        System.out.println("Expected page title is ----->" + expected);
        Assert.assertEquals(expected,actual);
    }

    public void emailText(String email){
        WebElement emailElement = driver.findElement(WalmartLoginPageModel.getEmailTextBox());
        emailElement.sendKeys(email);
    }

    public void  passwordText(String password){
        WebElement passwordElement = driver.findElement(WalmartLoginPageModel.getPasswordTextBox());
        passwordElement.sendKeys(password);
    }

    public void signinButtonClick(){
        WebElement loginPageSigninButton = driver.findElement(WalmartLoginPageModel.getLoginPageSigninButton());
        loginPageSigninButton.click();
    }

    public void loginErrorMassageAssertion(String expected){
        String actual = driver.findElement(WalmartLoginPageModel.getLoginNotSuccessfulAssertion()).getText();
        System.out.println("actual massage is ----->" + actual);
        System.out.println("Expected massage is ----->" + expected);
        Assert.assertEquals(expected,actual);
    }

}
