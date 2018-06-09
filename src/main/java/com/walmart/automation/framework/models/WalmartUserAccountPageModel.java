package com.walmart.automation.framework.models;

import org.openqa.selenium.By;

public class WalmartUserAccountPageModel {
    public static By logedinUserButton = By.xpath("//button[@data-automation-id='BubbleButtonheader-GlobalHeaderBubblesNav-Account']");
    public static By listOfLoginButton = By.xpath("//ul[@class='GlobalAccountMenu-menuContainer']/li");
}
