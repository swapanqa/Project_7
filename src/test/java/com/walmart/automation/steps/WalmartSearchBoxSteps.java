package com.walmart.automation.steps;

import com.walmart.automation.framework.models.WalmartSearchBoxModel;
import com.walmart.automation.framework.hooks.BaseSteps;
import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;

import java.util.List;

public class WalmartSearchBoxSteps extends BaseSteps {

//    for valid search
    @Given("^Not a valideted search box$")
    public void not_a_valideted_search_box(){
        getApplicationController().getSearcBoxController().deleteAllCookies();
    }

    @When("^User enter in the search box \"([^\"]*)\"$")
    public void user_enter_in_the_search_box(String searchingProduct){
        getApplicationController().getSearcBoxController().searchBoxText(searchingProduct);
    }

    @Then("^Searched product page should dispaly \"([^\"]*)\"$")
    public void searched_product_page_should_dispaly(String expected){
        getApplicationController().getSearcBoxController().pageTitleAssertion(expected);
    }

//    for invalid search
    @When("^User enter an invalid product in the search box \"([^\"]*)\"$")
    public void user_enter_an_invalid_product_in_the_search_box(String invalidProduct){
        getApplicationController().getSearcBoxController().searchBoxInvalidText(invalidProduct);
    }

    @Then("^No product match massage should display$")
    public void no_product_match_massage_should_display(){
        getApplicationController().getSearcBoxController().productNotMatchAssertion();
    }

//    for varify dropdown list size
    @When("^User click on search box drop down button$")
    public void user_click_on_search_box_drop_down_button(){
        getApplicationController().getSearcBoxController().searchBoxDropDownClick();
    }
    @Then("^List going to show (\\d+) options$")
    public void list_going_to_show_options(int totalDDOptions) {
        getApplicationController().getSearcBoxController().numberOfDropdownOptionsAssertion(totalDDOptions);
    }

//    for varify dropdown options
    @Then("^List going to show this options$")
    public void list_going_to_show_this_options(DataTable dataTable){
        List<List<String>> data = dataTable.raw();
        String[] expectedItems = getApplicationController().getSearcBoxController().datatableToArray(data);
        getApplicationController().getSearcBoxController().verifyOptionsAssertion(expectedItems);
    }


    //for verifing advance search
    @When("^Select option\"([^\"]*)\"$")
    public void select_option(String option){
        getApplicationController().getSearcBoxController().advanceSearchSelectedOption(option);
    }

    @Then("^Page going to show (\\d+) products$")
    public void page_going_to_show_products(int expectedNumberOfProduct){
        getApplicationController().getSearcBoxController().numberOfAdvanceSearchedProductAssertion(expectedNumberOfProduct);
    }
}
