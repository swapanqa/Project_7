package com.walmart.automation.framework.controller;

import com.walmart.automation.framework.models.WalmartSearchBoxModel;
import com.walmart.automation.framework.models.WalmartSignUpPageModel;
import com.walmart.automation.framework.utils.Waits;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.util.concurrent.TimeUnit;

public class SignUpPageController {
    protected WebDriver driver;

    public SignUpPageController(WebDriver driver){
        this.driver = driver;
    }

    public void createAccountButtonForRegistrationClick(){
        WebElement createAccountButtonElement = driver.findElement(WalmartSignUpPageModel.getCreateAccountButtonForGoingToRegistrationPage());
        driver.manage().timeouts().implicitlyWait(3000,TimeUnit.SECONDS);
        createAccountButtonElement.click();
    }

    public void pageTitleAssertion(String expected){
        String actual = driver.getTitle();
        System.out.println("Actual page title is ----->" + actual);
        System.out.println("Expected page title is ----->" + expected);
        Assert.assertEquals(expected,actual);
    }

    public void firstNameText(String firstName){
        WebElement firstNameBoxElement = driver.findElement(WalmartSignUpPageModel.getFirstNameBox());
        firstNameBoxElement.sendKeys(firstName);
    }

    public void lastNameText(String lastName){
        WebElement lastNameBoxElement = driver.findElement(WalmartSignUpPageModel.getLastNameBox());
        lastNameBoxElement.sendKeys(lastName);
    }

    public void emailText(String email){
        WebElement emailBoxElement = driver.findElement(WalmartSignUpPageModel.getEmailBox());
        emailBoxElement.sendKeys(email);
    }

    public void passwordText(String passWord){
        WebElement passWordBoxElement = driver.findElement(WalmartSignUpPageModel.getPassWordBox());
        passWordBoxElement.sendKeys(passWord);
    }
}
