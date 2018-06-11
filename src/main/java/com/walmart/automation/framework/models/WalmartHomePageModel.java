package com.walmart.automation.framework.models;

import org.openqa.selenium.By;

public class WalmartHomePageModel {
    private static By homePageNavigationMenuButton = By.xpath("//button[@data-automation-id='header-Header-sparkButton']");
    private static By topLinks = By.xpath("//div[@class='GlobalHeaderSparkMenu-optionalTopLinks']/a");
    private static By optionalToplinks = By.xpath("//div[@class='GlobalHeaderSparkMenu-optionalTopLinks']/a");
    private static By optionalCampaignLinks = By.xpath("//div[@class='GlobalHeaderSparkMenu-optionalCampaignLinks']/a");
    private static By homePageGroceryButton = By.xpath("//a[@aria-label='Visit Walmart grocery website']");
    private static By homePageAccountButton = By.xpath("//button[@data-automation-id='BubbleButtonheader-GlobalHeaderBubblesNav-Account']");
    private static By homePageAccountButtonAssert = By.xpath("//div[@class='GlobalAccountMenu-userTitle font-semibold']");
    private static By homePageLocationButton = By.xpath("//button[@data-tl-id='BubbleButtonheader-GlobalHeaderBubblesNav-Location']");
    private static By homePageLocationButtonAssert = By.xpath("//h3[@class='GlobalLocation-headerTitle']");
    private static By homePageCartButton = By.xpath("//a[@data-tl-id='header-GlobalHeaderBubblesNav-Cart-BubbleLink']");
    private static By homePageLinks = By.tagName("a");
    private static By homePageImages = By.tagName("img");

    public static By getHomePageNavigationMenuButton() {
        return homePageNavigationMenuButton;
    }
    public static By getTopLinks(){
        return topLinks;
    }

    public static By getOptionalToplinks() {
        return optionalToplinks;
    }

    public static By getOptionalCampaignLinks() {
        return optionalCampaignLinks;
    }

    public static By getHomePageGroceryButton() {
        return homePageGroceryButton;
    }

    public static By getHomePageAccountButton() {
        return homePageAccountButton;
    }

    public static By getHomePageAccountButtonAssert() {
        return homePageAccountButtonAssert;
    }

    public static By getHomePageLocationButton() {
        return homePageLocationButton;
    }

    public static By getHomePageLocationButtonAssert() {
        return homePageLocationButtonAssert;
    }

    public static By getHomePageCartButton() {
        return homePageCartButton;
    }

    public static By getHomePageLinks() {
        return homePageLinks;
    }

    public static By getHomePageImages() {
        return homePageImages;
    }
}
