package com.walmart.automation.framework.models;

import org.openqa.selenium.By;

public class WalmartHomePageModel {
    public static By homePageNavigationMenuButton = By.xpath("//button[@data-automation-id='header-Header-sparkButton']");
    public static By topLinks = By.xpath("//div[@class='GlobalHeaderSparkMenu-optionalTopLinks']/a");
    public static By optionalToplinks = By.xpath("//div[@class='GlobalHeaderSparkMenu-optionalTopLinks']/a");
    public static By optionalCampaignLinks = By.xpath("//div[@class='GlobalHeaderSparkMenu-optionalCampaignLinks']/a");
    public static By homePageGroceryButton = By.xpath("//a[@aria-label='Visit Walmart grocery website']");
    public static By homePageAccountButton = By.xpath("//button[@data-automation-id='BubbleButtonheader-GlobalHeaderBubblesNav-Account']");
    public static By homePageAccountButtonAssert = By.xpath("//div[@class='GlobalAccountMenu-userTitle font-semibold']");
    public static By homePageLocationButton = By.xpath("//button[@data-tl-id='BubbleButtonheader-GlobalHeaderBubblesNav-Location']");
    public static By homePageLocationButtonAssert = By.xpath("//h3[@class='GlobalLocation-headerTitle']");
    public static By homePageCartButton = By.xpath("//a[@data-tl-id='header-GlobalHeaderBubblesNav-Cart-BubbleLink']");
    public static By homePageLinks = By.tagName("a");
    public static By homePageImages = By.tagName("img");
}
