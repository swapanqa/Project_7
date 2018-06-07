package com.walmart.automation.steps;

import com.walmart.automation.framework.controller.WalmartLoginPageController;
import com.walmart.automation.framework.hooks.BaseSteps;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.util.concurrent.TimeUnit;

public class WalmartLoginPageSteps extends BaseSteps {

    @When("^Click on signin option$")
    public void click_on_signin_option(){
        WebElement homePageSigninOptionElement = driver.findElement(WalmartLoginPageController.homePageSigninButton);
        homePageSigninOptionElement.click();
    }

    @Then("^Login \"([^\"]*)\" page should display$")
    public void login_page_should_display(String expected){
        String actual = driver.getTitle();
        Assert.assertEquals(expected,actual);
    }

    @When("^User write email \"([^\"]*)\"$")
    public void user_write_email(String email){
        WebElement emailElement = driver.findElement(WalmartLoginPageController.emailTextBox);
        emailElement.sendKeys(email);
    }

    @When("^User write password \"([^\"]*)\"$")
    public void user_write_password(String password){
        WebElement passwordElement = driver.findElement(WalmartLoginPageController.passwordTextBox);
        passwordElement.sendKeys(password);
    }

    @When("^User click on signin button$")
    public void user_click_on_signin_button(){
        WebElement loginPageSigninButton = driver.findElement(WalmartLoginPageController.loginPageSigninButton);
        loginPageSigninButton.click();
    }

//    login success assertion
    @Then("^\"([^\"]*)\" pagetitle should display$")
    public void page_should_display(String expected){
        driver.manage().timeouts().implicitlyWait(5000,TimeUnit.SECONDS);
        String actual = driver.getTitle();
        System.out.println("actual is----->" + actual);
        Assert.assertEquals(expected,actual);
    }

//    login not successful assertion
    @Then("^\"([^\"]*)\"this error massage should display$")
    public void this_error_massage_should_display(String expected){
        driver.manage().timeouts().implicitlyWait(3000,TimeUnit.SECONDS);
        String actual = driver.findElement(WalmartLoginPageController.loginNotSuccessfulAssertion).getText();
        System.out.println("actual is ----->" + actual);
        Assert.assertEquals(expected,actual);
    }
}
