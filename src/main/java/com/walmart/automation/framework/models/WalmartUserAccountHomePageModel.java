package com.walmart.automation.framework.models;

import org.openqa.selenium.By;

public class WalmartUserAccountHomePageModel {
    private static By logedinUserButton = By.xpath("//button[@data-automation-id='BubbleButtonheader-GlobalHeaderBubblesNav-Account']");
    private static By listOfLoginButton = By.xpath("//ul[@class='GlobalAccountMenu-menuContainer']/li/a");

    public static By getLogedinUserButton(){
        return logedinUserButton;
    }
    public static By getListOfLoginButton() {
        return listOfLoginButton;
    }
}
