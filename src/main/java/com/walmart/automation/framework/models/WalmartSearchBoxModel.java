package com.walmart.automation.framework.models;

import org.openqa.selenium.By;

public class WalmartSearchBoxModel {
    protected static By searchBox = By.xpath("//input[@id='global-search-input']");
    protected static By productNotMatchAssertion = By.xpath("//div[@id='mainSearchContent']//strong");
    protected static By searchDropDownButton = By.xpath("//button[@id='listboxActive']");
    protected static By totalSearchDropDownButtonOptions = By.xpath("//div[@class='Grid-col u-size-1-3 display-inline-block']/button");
    protected static By advaceSearchSelectedOption = By.xpath("//button[@data-tl-id='SearchDropdown-column-0-option-2']");
    protected static By totalNumberOfproductInAdvanceSearch = By.xpath("//div[@class='display-inline-block pull-left prod-ProductCard--Image']/a");

    public static By getSearchBox() {
        return searchBox;
    }

    public static By getProductNotMatchAssertion() {
        return productNotMatchAssertion;
    }

    public static By getSearchDropDownButton() {
        return searchDropDownButton;
    }

    public static By getTotalSearchDropDownButtonOptions() {
        return totalSearchDropDownButtonOptions;
    }

    public static By getAdvaceSearchSelectedOption() {
        return advaceSearchSelectedOption;
    }

    public static By getTotalNumberOfproductInAdvanceSearch() {
        return totalNumberOfproductInAdvanceSearch;
    }
}
