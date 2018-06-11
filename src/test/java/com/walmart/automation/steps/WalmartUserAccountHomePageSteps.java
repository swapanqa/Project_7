package com.walmart.automation.steps;

import com.walmart.automation.framework.controller.UserAccountHomePageController;
import com.walmart.automation.framework.hooks.BaseSteps;
import com.walmart.automation.framework.models.WalmartUserAccountHomePageModel;
import com.walmart.automation.framework.utils.Delay;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebElement;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

public class WalmartUserAccountHomePageSteps extends BaseSteps {

    @When("^User Click on loged in user account button$")
    public void user_Click_on_loged_in_user_account_button(){
        getDelay().delayFor(5000);
        getApplicationController().getUserAccountHomePageController().userAccountButtonClick();
    }

    @Then("^User click all the options and check all the button show the right page$")
    public void user_click_all_the_options_and_check_all_the_button_show_the_right_page(){
        getApplicationController().getUserAccountHomePageController().userHomePageButtonTest();
    }
}
