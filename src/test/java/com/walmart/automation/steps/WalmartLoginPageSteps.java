package com.walmart.automation.steps;

import com.walmart.automation.framework.models.WalmartLoginPageModel;
import com.walmart.automation.framework.hooks.BaseSteps;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebElement;

import java.util.concurrent.TimeUnit;

public class WalmartLoginPageSteps extends BaseSteps {

    @When("^Click on signin option$")
    public void click_on_signin_option(){
        getApplicationController().getLoginPageController().SigninOptionClick();
    }

    @Then("^Login \"([^\"]*)\" page should display$")
    public void login_page_should_display(String expected){
        getApplicationController().getLoginPageController().pageTitleAssertion(expected);
    }

    @When("^User write email \"([^\"]*)\"$")
    public void user_write_email(String email){
        getApplicationController().getLoginPageController().emailText(email);
    }

    @When("^User write password \"([^\"]*)\"$")
    public void user_write_password(String password){
        getApplicationController().getLoginPageController().passwordText(password);
    }

    @When("^User click on signin button$")
    public void user_click_on_signin_button(){
        getApplicationController().getLoginPageController().signinButtonClick();
    }

//    login success assertion
    @Then("^\"([^\"]*)\" pagetitle should display$")
    public void page_should_display(String expected){
        getDelay().delayFor(5000);
        getApplicationController().getLoginPageController().pageTitleAssertion(expected);
    }

//    login not successful assertion
    @Then("^\"([^\"]*)\"this error massage should display$")
    public void this_error_massage_should_display(String expected){
        getDelay().delayFor(3000);
        getApplicationController().getLoginPageController().loginErrorMassageAssertion(expected);
    }
}
