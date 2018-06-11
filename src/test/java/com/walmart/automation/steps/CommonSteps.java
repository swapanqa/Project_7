package com.walmart.automation.steps;

import com.aventstack.extentreports.Status;
import com.walmart.automation.framework.hooks.BaseSteps;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class CommonSteps extends BaseSteps {
    @When("^Open browser and start application$")
    public void open_browser_and_start_application(){
        driver.navigate().to("https://www.walmart.com/");
    }

    @Then("^Walmart homepage shoule dispaly$")
    public void walmart_homepage_shoule_dispaly(){
        String expexted = "Walmart.com | Save Money. Live Better.";
        String actualTitle = driver.getTitle();
        Assert.assertEquals("Walmart.com | Save Money. Live Better.",actualTitle);
    }
}
