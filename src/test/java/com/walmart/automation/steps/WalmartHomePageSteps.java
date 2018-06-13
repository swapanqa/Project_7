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
        driver.manage().deleteAllCookies();
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
        getApplicationController().getHomePageController().groceryButtonClick();
        getApplicationController().getWaits().impliciteWait(5000);
    }

    @Then("^\"([^\"]*)\" is going to display$")
    public void is_going_to_display(String expected){
        String actual = driver.getTitle();
        Assert.assertEquals(expected,actual);
    }

//    verify account button is working properly
    @When("^User click on account button$")
    public void user_click_on_account_button() throws Throwable {
        WebElement accountButton = driver.findElement(WalmartHomePageModel.getHomePageAccountButton());
        accountButton.click();
    }

    @Then("^\"([^\"]*)\" dropdown is going to display$")
    public void dropdown_is_going_to_display(String expected) throws Throwable {
        String actual = driver.findElement(WalmartHomePageModel.getHomePageAccountButtonAssert()).getText();
        System.out.println("actual is ----->" + "" + actual);
        Assert.assertEquals(expected,actual);
    }

//    verify store location button is working properly
    @When("^User click on store location button$")
    public void user_click_on_store_location_button() throws Throwable {
        WebElement locationButton =  driver.findElement(WalmartHomePageModel.getHomePageLocationButton());
        locationButton.click();
    }

    @Then("^\"([^\"]*)\" dropdown is going to show$")
    public void dropdown_is_going_to_show(String expected) throws Throwable {
        String actual = driver.findElement(WalmartHomePageModel.getHomePageLocationButtonAssert()).getText();
        System.out.println("actual is ----->" + "" + actual);
        Assert.assertEquals(expected,actual);
    }

//    verify cart button is working properly
    @When("^User click on cart button$")
    public void user_click_on_cart_button() throws Throwable {
        WebElement cartButton = driver.findElement(WalmartHomePageModel.getHomePageCartButton());
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
        getDelay().delayFor(4000);
    }

    @Then("^All link and images are not broken$")
    public void all_link_and_images_are_not_broken(){
        List <WebElement> totalLinksAndImages = driver.findElements(WalmartHomePageModel.getHomePageLinks());
        totalLinksAndImages.addAll(driver.findElements(WalmartHomePageModel.getHomePageImages()));
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

