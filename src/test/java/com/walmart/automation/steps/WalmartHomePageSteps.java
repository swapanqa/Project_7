package com.walmart.automation.steps;

import com.aventstack.extentreports.Status;
import com.walmart.automation.framework.models.WalmartHomePageModel;
import com.walmart.automation.framework.hooks.BaseSteps;
import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebElement;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;

public class WalmartHomePageSteps extends BaseSteps {

    @Given("^Not a valideted home page$")
    public void not_a_valideted_home_page() {
        getApplicationController().getHomePageController().deleteAllCookies();
    }
    @When("^User click on navigation menu button$")
    public void user_click_on_navigation_menu_button(){
        getApplicationController().getHomePageController().navigationButtonClick();
    }

    @Then("^GlobalHeaderSparkMenu-optionalTopLinks are going to show this options$")
    public void globalheadersparkmenu_optionalTopLinks_are_going_to_show_this_options(DataTable dataTable){
        List<List<String>> data = dataTable.raw();
        String[] expectedItems = getApplicationController().getHomePageController().datatableToArray(data);
        getApplicationController().getHomePageController().verifyOptions(expectedItems);
    }

//    verifing GlobalHeaderSparkMenu-optionalTopLinks are working properly
    @Then("^GlobalHeaderSparkMenu-optionalTopLinks are working properly$")
    public void globalheadersparkmenu_optionalTopLinks_are_working_properly() throws Throwable {
        getApplicationController().getHomePageController().optionalTopLinksCheck();
    }

//    verifing GlobalHeaderSparkMenu-optionalCampaignLinks are working properly
    @Then("^GlobalHeaderSparkMenu-optionalCampaignLinks are working properly$")
    public void globalheadersparkmenu_optionalCampaignLinks_are_working_properly() throws Throwable{
        getApplicationController().getHomePageController().optionalCampaignLinksCheck();
    }

//    verify grocery button is working properly
    @When("^User click on grocery button$")
    public void user_click_on_grocery_button(){
        getApplicationController().getHomePageController().groceryButtonClick();
        getApplicationController().getWaits().impliciteWait(5000);
    }

    @Then("^\"([^\"]*)\" is going to display$")
    public void is_going_to_display(String expected){
        getApplicationController().getHomePageController().pageTitleAssertion(expected);
    }

//    verify account button is working properly
    @When("^User click on account button$")
    public void user_click_on_account_button() throws Throwable {
        getApplicationController().getHomePageController().accountButtonClick();
    }

    @Then("^\"([^\"]*)\" dropdown is going to display$")
    public void account_dropdown_is_going_to_display(String expected){
        getApplicationController().getHomePageController().accountButtonAssertion(expected);
    }

//    verify store location button is working properly
    @When("^User click on store location button$")
    public void user_click_on_store_location_button(){
        getApplicationController().getHomePageController().storeLocationButtonClick();
    }

    @Then("^\"([^\"]*)\" dropdown is going to show$")
    public void location_dropdown_is_going_to_show(String expected) {
        getApplicationController().getHomePageController().storeLocationButtonAssertion(expected);
    }

//    verify cart button is working properly
    @When("^User click on cart button$")
    public void user_click_on_cart_button(){
        getApplicationController().getHomePageController().cartButtonClick();
    }

    @Then("^\"([^\"]*)\" page is going to show$")
    public void page_is_going_to_show(String expected){
        getApplicationController().getHomePageController().pageTitleAssertion(expected);
    }

//    verify all images and links are not broken
    @When("^User is in homepage$")
    public void user_is_in_homepage() throws InterruptedException {
        getDelay().delayFor(4000);
    }

    @Then("^All link and images are not broken$")
    public void all_link_and_images_are_not_broken(){
        getApplicationController().getHomePageController().brokenLinksAndImagesTest();
    }

}

