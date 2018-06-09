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
        driver.manage().deleteAllCookies();
    }

    @When("^User enter in the search box \"([^\"]*)\"$")
    public void user_enter_in_the_search_box(String searchingProduct){
        WebElement searcBoxElement = driver.findElement(WalmartSearchBoxModel.searchBox);
        searcBoxElement.sendKeys(searchingProduct);
        searcBoxElement.sendKeys(Keys.ENTER);
    }

    @Then("^Searched product page should dispaly$")
    public void searched_product_page_should_dispaly(){
        String actualTitle = driver.getTitle();
        System.out.println(actualTitle);
        Assert.assertEquals("Nike Benassi Solarsoft Slide - Walmart.com",actualTitle);
    }

//    for invalid search
    @When("^User enter an invalid product in the search box \"([^\"]*)\"$")
    public void user_enter_an_invalid_product_in_the_search_box(String searchingInvalidProduct){
        WebElement searcBoxElement = driver.findElement(WalmartSearchBoxModel.searchBox);
        searcBoxElement.sendKeys(searchingInvalidProduct);
        searcBoxElement.sendKeys(Keys.ENTER);
    }

    @Then("^No product match massage should display$")
    public void no_product_match_massage_should_display(){
        String actualMassage = driver.findElement(WalmartSearchBoxModel.productNotMatchAssertion).getText();
        System.out.println(actualMassage);
        Assert.assertEquals("Sorry, no products matched \"eerrtt\"",actualMassage);
    }

//    for varify dropdown list size
    @When("^User click on search box drop down button$")
    public void user_click_on_search_box_drop_down_button(){
        WebElement searchDropDownButtonElement = driver.findElement(WalmartSearchBoxModel.searchDropDownButton);
        searchDropDownButtonElement.click();
    }
    @Then("^List going to show (\\d+) options$")
    public void list_going_to_show_options(int totalSize){
        List<WebElement>options = driver.findElements(WalmartSearchBoxModel.totalSearchDropDownButtonOptions);
        int totalNumberOfOptions = options.size();
        Assert.assertEquals(totalSize,totalNumberOfOptions);
    }
//    for varify dropdown options
    @Then("^List going to show this options$")
    public void list_going_to_show_this_options(DataTable dataTable){
        List<List<String>> data = dataTable.raw();
        String[] expectedItems = dataTableToArray(data);
        verifyDropDownOptions(expectedItems);
    }

    //method for puting datatablel products into an array
    public String[] dataTableToArray(List<List<String>> data){
        String[] expectedItems = new String[data.get(0).size()];
        int count = 1;
        for(int i=0; i<data.size(); i++){
            for(int j=0; j<data.get(i).size(); j++){
                String text = data.get(i).get(j);
                System.out.println("Expected Item #" + count + " -- " + text);
                expectedItems[j] = text;
                count++;
            }
        }
        return expectedItems;
    }

    //Verifing datatable's product with actual product
    public void verifyDropDownOptions(String[] expectedMenuList){
        List<WebElement>options = driver.findElements(By.xpath("//div[@class='Grid-col u-size-1-3 display-inline-block']/button"));
        String[] actualItemTexts = new String[options.size()];
        int count = 0;
        for (WebElement item : options) {
            String text = item.getText();
            System.out.println(text);
            actualItemTexts[count] = text;
            count++;
        }
        Assert.assertEquals(expectedMenuList,actualItemTexts);
    }

    //for verifing advance search
    @When("^Select option\"([^\"]*)\"$")
    public void select_option(String arg1) throws Throwable {
        WebElement optionSelected = driver.findElement(WalmartSearchBoxModel.advaceSearchSelectedOption);
        String text = optionSelected.getText();
        if(text.equalsIgnoreCase("baby")){
            optionSelected.click();
        }
    }

    @Then("^Page going to show (\\d+) products$")
    public void page_going_to_show_products(int expectedNumberOfProduct){
        List<WebElement>searchedProducts = driver.findElements(WalmartSearchBoxModel.totalNumberOfproductInAdvanceSearch);
        int actualNumberOfSearchedProduct = searchedProducts.size();
        System.out.println("actualNumberOfSearchedProduct is :" + actualNumberOfSearchedProduct);
        Assert.assertEquals(expectedNumberOfProduct,actualNumberOfSearchedProduct);
    }
}
