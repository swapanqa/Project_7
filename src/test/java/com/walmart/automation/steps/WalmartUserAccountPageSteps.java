package com.walmart.automation.steps;

import com.walmart.automation.framework.hooks.BaseSteps;
import com.walmart.automation.framework.models.WalmartUserAccountPageModel;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebElement;

import java.util.List;
import java.util.concurrent.TimeUnit;

public class WalmartUserAccountPageSteps extends BaseSteps {
    @When("^User Click on loged in user account button$")
    public void user_Click_on_loged_in_user_account_button(){
        WebElement userLoginButtonElement = driver.findElement(WalmartUserAccountPageModel.logedinUserButton);
        userLoginButtonElement.click();
    }

    @Then("^User click all the options and check all the button show the right page$")
    public void user_click_all_the_options_and_check_all_the_button_show_the_right_page(){
        List<WebElement>buttonOptions = driver.findElements(WalmartUserAccountPageModel.listOfLoginButton);
        System.out.println("number of options ----->" + buttonOptions.size());
    }
}
