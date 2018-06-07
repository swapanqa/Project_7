package com.walmart.automation.steps;

import com.walmart.automation.framework.controller.WalmartHomePageController;
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
        driver.manage().deleteAllCookies();
    }
    @When("^User click on navigation menu button$")
    public void user_click_on_navigation_menu_button(){
        WebElement navigationMenuButton = driver.findElement(WalmartHomePageController.homePageNavigationMenuButton);
        navigationMenuButton.click();
    }

    @Then("^GlobalHeaderSparkMenu-optionalTopLinks are going to show this options$")
    public void globalheadersparkmenu_optionalTopLinks_are_going_to_show_this_options(DataTable dataTable){
        List<List<String>> data = dataTable.raw();
        String[] expectedItems = dataTableToArray(data);
        verifyDropDownOptions(expectedItems);
    }

    //method for puting datatablel products into an array
    public String[] dataTableToArray(List<List<String>> data){
        driver.manage().timeouts().implicitlyWait(5000,TimeUnit.SECONDS);
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
        List<WebElement>options = driver.findElements(WalmartHomePageController.topLinks);
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
//    verifing GlobalHeaderSparkMenu-optionalTopLinks are working properly
    @Then("^GlobalHeaderSparkMenu-optionalTopLinks are working properly$")
    public void globalheadersparkmenu_optionalTopLinks_are_working_properly() throws Throwable {
        List <WebElement> totalLinks = driver.findElements(WalmartHomePageController.optionalToplinks);
//        totalLinks.addAll(driver.findElements(By.tagName("img")));
        System.out.println("total number of links and images ----- " + totalLinks.size());

        List <WebElement> activeLinks = new ArrayList<WebElement>();

        for(int i = 0; i < totalLinks.size(); i++){
            if(totalLinks.get(i).getAttribute("href") != null){
                activeLinks.add(totalLinks.get(i));
            }
        }
        System.out.println("total number of active links ------ " + activeLinks.size());

        for(int j = 0; j < activeLinks.size(); j++){
            HttpURLConnection connections =(HttpURLConnection)new URL(activeLinks.get(j).getAttribute("href")).openConnection();
            connections.connect();
            String responseMessage = connections.getResponseMessage();
            connections.disconnect();
            System.out.println(activeLinks.get(j).getAttribute("href")+"----->"+responseMessage);
        }
    }

//    verifing GlobalHeaderSparkMenu-optionalCampaignLinks are working properly
    @Then("^GlobalHeaderSparkMenu-optionalCampaignLinks are working properly$")
    public void globalheadersparkmenu_optionalCampaignLinks_are_working_properly() throws Throwable{
        List <WebElement> totalLinks = driver.findElements(WalmartHomePageController.optionalCampaignLinks);
        //totalLinks.addAll(driver.findElements(By.tagName("img")));
        System.out.println("total number of links and images ----- " + totalLinks.size());

        List <String> activeLinks = new ArrayList<String>();

        for(int i = 0; i < totalLinks.size(); i++){
            if(totalLinks.get(i).getAttribute("href") != null){
                activeLinks.add(totalLinks.get(i).getAttribute("href"));
            }
        }
        System.out.println("total number of active links ------ " + activeLinks.size());

        for(int j = 0; j < activeLinks.size(); j++){
            HttpURLConnection connections =(HttpURLConnection)new URL(activeLinks.get(j)).openConnection();
            connections.connect();
            String responseMessage = connections.getResponseMessage();
            connections.disconnect();
            System.out.println(activeLinks.get(j)+"----->"+responseMessage);
        }
    }

////    verifing GlobalHeaderDepartmentsMenu options are working properly
//    @Then("^GlobalHeaderDepartmentsMenu options are working properly$")
//    public void globalheaderdepartmentsmenu_options_are_working_properly() throws Throwable {
//        driver.findElement(By.xpath("//div[@class='GlobalHeaderDepartmentsMenu']/button[@data-automation-id='GlobalHeaderDepartmentsMenu-deptButtonMobile-0']")).click();
////        int totalButtonOptions = buttonOptions.size();
////        System.out.println("total number of option is ----->" + totalButtonOptions);
//    }

//    verify grocery button is working properly
    @When("^User click on grocery button$")
    public void user_click_on_grocery_button(){
        WebElement groceryButton = driver.findElement(WalmartHomePageController.homePageGroceryButton);
        groceryButton.click();
        driver.manage().timeouts().implicitlyWait(5000,TimeUnit.SECONDS);
    }

    @Then("^\"([^\"]*)\" is going to display$")
    public void is_going_to_display(String expected){
        String actual = driver.getTitle();
        Assert.assertEquals(expected,actual);
    }

//    verify account button is working properly
    @When("^User click on account button$")
    public void user_click_on_account_button() throws Throwable {
        WebElement accountButton = driver.findElement(WalmartHomePageController.homePageAccountButton);
        accountButton.click();
    }

    @Then("^\"([^\"]*)\" dropdown is going to display$")
    public void dropdown_is_going_to_display(String expected) throws Throwable {
        String actual = driver.findElement(WalmartHomePageController.homePageAccountButtonAssert).getText();
        System.out.println("actual is ----->" + "" + actual);
        Assert.assertEquals(expected,actual);
    }

//    verify store location button is working properly
    @When("^User click on store location button$")
    public void user_click_on_store_location_button() throws Throwable {
        WebElement locationButton =  driver.findElement(WalmartHomePageController.homePageLocationButton);
        locationButton.click();
    }

    @Then("^\"([^\"]*)\" dropdown is going to show$")
    public void dropdown_is_going_to_show(String expected) throws Throwable {
        String actual = driver.findElement(WalmartHomePageController.homePageLocationButtonAssert).getText();
        System.out.println("actual is ----->" + "" + actual);
        Assert.assertEquals(expected,actual);
    }

//    verify cart button is working properly
    @When("^User click on cart button$")
    public void user_click_on_cart_button() throws Throwable {
        WebElement cartButton = driver.findElement(WalmartHomePageController.homePageCartButton);
        cartButton.click();
    }

    @Then("^\"([^\"]*)\" page is going to show$")
    public void page_is_going_to_show(String expected) throws Throwable {
        String actual = driver.getTitle();
        Assert.assertEquals(expected,actual);
    }

//    verify all images and links are not broken
    @When("^User is in homepage$")
    public void user_is_in_homepage() throws InterruptedException {
        Thread.sleep(5000);
    }

    @Then("^All link and images are not broken$")
    public void all_link_and_images_are_not_broken(){
        List <WebElement> totalLinksAndImages = driver.findElements(WalmartHomePageController.homePageLinks);
        totalLinksAndImages.addAll(driver.findElements(WalmartHomePageController.homePageImages));
        System.out.println("total number of links and images are ----->" + totalLinksAndImages.size());

        List <String> activeLinks = new ArrayList<String>();

        for(int i = 0; i < totalLinksAndImages.size(); i++){
            if(totalLinksAndImages.get(i).getAttribute("href") != null){
                activeLinks.add(totalLinksAndImages.get(i).getAttribute("href"));
            }
        }
        System.out.println("total number of active links are ----->" + activeLinks.size());

        int count = 1;
        for(int j = 0; j < activeLinks.size(); j++){
            String url = activeLinks.get(j);
            try {
                HttpURLConnection connection = (HttpURLConnection)new URL(activeLinks.get(j)).openConnection();
                connection.connect();
                String massage = connection.getResponseMessage();
                connection.disconnect();
                System.out.println(count + "--->" + url + "----->" + massage);
                count++;
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

}

