package com.walmart.automation.framework.controller;

import com.walmart.automation.framework.models.WalmartHomePageModel;
import com.walmart.automation.framework.models.WalmartSearchBoxModel;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.sql.SQLOutput;
import java.util.List;

public class SearchBoxController {
    protected WebDriver driver;

    public SearchBoxController(WebDriver driver){
        this.driver = driver;
    }

    public void deleteAllCookies(){
        driver.manage().deleteAllCookies();
    }

    public void searchBoxText(String searchingProduct){
        WebElement searcBoxElement = driver.findElement(WalmartSearchBoxModel.getSearchBox());
        searcBoxElement.sendKeys(searchingProduct);
        searcBoxElement.sendKeys(Keys.ENTER);
    }

    public void pageTitleAssertion(String expected){
        String actual = driver.getTitle();
        System.out.println("Actual title is ----->" + actual);
        System.out.println("Expected title is ----->" + expected);
        Assert.assertEquals(expected,actual);
    }

    public void searchBoxInvalidText(String invalidProduct){
        WebElement searcBoxElement = driver.findElement(WalmartSearchBoxModel.getSearchBox());
        searcBoxElement.sendKeys(invalidProduct);
        searcBoxElement.sendKeys(Keys.ENTER);
    }

    public void productNotMatchAssertion(){
        String actualMassage = driver.findElement(WalmartSearchBoxModel.getProductNotMatchAssertion()).getText();
        System.out.println(actualMassage);
        Assert.assertEquals("Sorry, no products matched \"eerrtt\"",actualMassage);
    }

    public void searchBoxDropDownClick(){
        WebElement searchDropDownButtonElement = driver.findElement(WalmartSearchBoxModel.getSearchDropDownButton());
        searchDropDownButtonElement.click();
    }

    public void numberOfDropdownOptionsAssertion(int totalDDOptions){
        List<WebElement> options = driver.findElements(WalmartSearchBoxModel.getTotalSearchDropDownButtonOptions());
        int totalNumberOfOptions = options.size();
        Assert.assertEquals(totalDDOptions,totalNumberOfOptions);
    }

    //Verifing datatable's product with actual product
    public void verifyOptionsAssertion(String[] expectedMenuList){
        List<WebElement>options = driver.findElements(WalmartSearchBoxModel.getTotalSearchDropDownButtonOptions());
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

    //method for puting datatablel products into an array
    public String[] datatableToArray (List<List<String>> data){
        String [] expectedList = new String[data.get(0).size()];
        for (int i = 0; i < data.size(); i ++){
            for (int j = 0; j < data.get(i).size(); j++){
                String text = data.get(i).get(j);
                expectedList[j] = text;
            }
        }
        return  expectedList;
    }

    public void advanceSearchSelectedOption(String option){
        WebElement optionSelected = driver.findElement(WalmartSearchBoxModel.getAdvaceSearchSelectedOption());
        String text = optionSelected.getText();
        if(text.equalsIgnoreCase(option)){
            optionSelected.click();
        }
    }

    public void numberOfAdvanceSearchedProductAssertion(int expectedNumberOfProduct){
        List<WebElement>searchedProducts = driver.findElements(WalmartSearchBoxModel.getTotalNumberOfproductInAdvanceSearch());
        int actualNumberOfSearchedProduct = searchedProducts.size();
        System.out.println("actualNumberOfSearchedProduct is ----->" + actualNumberOfSearchedProduct);
        System.out.println("expectedNumberOfProduct is ----->" + expectedNumberOfProduct);
        Assert.assertEquals(expectedNumberOfProduct,actualNumberOfSearchedProduct);
    }
}
