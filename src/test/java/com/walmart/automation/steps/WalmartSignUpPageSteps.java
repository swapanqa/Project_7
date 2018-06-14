package com.walmart.automation.steps;

import com.walmart.automation.framework.models.WalmartSignUpPageModel;
import com.walmart.automation.framework.hooks.BaseSteps;
import com.walmart.automation.framework.models.WalmartSignUpPageModel;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebElement;

import java.util.concurrent.TimeUnit;

public class WalmartSignUpPageSteps extends BaseSteps {
    @When("^Click on create account$")
    public void click_on_create_account() throws Throwable {
        getApplicationController().getSignUpPageController().createAccountButtonForRegistrationClick();
    }

    @Then("^SignUp \"([^\"]*)\" page should display$")
    public void signup_page_should_display(String expected){
        getApplicationController().getSignUpPageController().pageTitleAssertion(expected);
    }

    @When("^User put first name\"([^\"]*)\"$")
    public void user_put_first_name(String firstName){
        getApplicationController().getSignUpPageController().firstNameText(firstName);
    }

    @When("^User put last name \"([^\"]*)\"$")
    public void user_put_last_name(String lastName){
        getApplicationController().getSignUpPageController().lastNameText(lastName);
    }

    @When("^User put email \"([^\"]*)\"$")
    public void user_put_email(String email){
        getApplicationController().getSignUpPageController().emailText(email);
    }

    @When("^User put password \"([^\"]*)\"$")
    public void user_put_password(String passWord){
        getApplicationController().getSignUpPageController().passwordText(passWord);
    }

//    @When("^User uncheck remember me check box$")
//    public void user_uncheck_remember_me_check_box() throws Throwable {
//        WebElement rememberMeCheckBoxElement = driver.findElement(WalmartSignUpPageController.rememberMeCheckBox);
//        rememberMeCheckBoxElement.click();
//    }
//
//    @When("^User uncheck auto email check box$")
//    public void user_uncheck_auto_email_check_box() throws Throwable {
//        WebElement autoEmailElement = driver.findElement(WalmartSignUpPageController.autoEmailCheckBox);
//        autoEmailElement.click();
//    }
//
    @When("^User click on create account button$")
    public void user_click_on_create_account_button() throws Throwable {
        WebElement createAccountElement = driver.findElement(WalmartSignUpPageModel.getConfirmCreateAccountButton());
    }

//    email assertion
    @Then("^invalid email massage \"([^\"]*)\" should display$")
    public void invalid_email_massage_should_display(String expected) throws Throwable {
        String actual = driver.findElement(WalmartSignUpPageModel.getInvalidEmailAssert()).getText();
        Assert.assertEquals(expected,actual);
    }

//    password assertion
    @Then("^invalid password massage \"([^\"]*)\" should display$")
    public void invalid_password_massage_should_display(String expected) throws Throwable {
        driver.findElement(WalmartSignUpPageModel.getInvalidPasswordAssert());
    }

}
