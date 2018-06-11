package com.walmart.automation.framework.controller;

import com.walmart.automation.framework.models.WalmartHomePageModel;
import cucumber.api.DataTable;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class HomePageController {
    private WebDriver driver = null;

    public HomePageController(WebDriver driver){
        this.driver = driver;
    }
    public void navigationButtonClick(){
        WebElement navigationMenuButton = driver.findElement(WalmartHomePageModel.getHomePageNavigationMenuButton());
        navigationMenuButton.click();
    }

}
