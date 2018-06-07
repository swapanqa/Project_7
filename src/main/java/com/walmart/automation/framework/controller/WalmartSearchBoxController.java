package com.walmart.automation.framework.controller;

import org.openqa.selenium.By;

public class WalmartSearchBoxController {
    public static By searchBox = By.xpath("//input[@id='global-search-input']");
    public static By productNotMatchAssertion = By.xpath("//div[@id='mainSearchContent']//strong");
    public static By searchDropDownButton = By.xpath("//button[@id='listboxActive']");
    public static By totalSearchDropDownButtonOptions = By.xpath("//div[@class='Grid-col u-size-1-3 display-inline-block']/button");
    public static By advaceSearchSelectedOption = By.xpath("//button[@data-tl-id='SearchDropdown-column-0-option-2']");
    public static By totalNumberOfproductInAdvanceSearch = By.xpath("//div[@class='display-inline-block pull-left prod-ProductCard--Image']/a");
}
