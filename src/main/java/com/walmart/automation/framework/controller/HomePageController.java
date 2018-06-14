package com.walmart.automation.framework.controller;

import com.walmart.automation.framework.models.WalmartHomePageModel;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

public class HomePageController {
    private WebDriver driver = null;

    public HomePageController(WebDriver driver){
        this.driver = driver;
    }

    public void navigationButtonClick(){
        WebElement navigationMenuButton = driver.findElement(WalmartHomePageModel.getHomePageNavigationMenuButton());
        navigationMenuButton.click();
    }


    //Verifing datatable's product with actual product
    public void verifyOptions(String[] expectedMenuList){
        List<WebElement>options = driver.findElements(WalmartHomePageModel.getTopLinks());
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

    public void optionalTopLinksCheck(){
        List <WebElement> totalLinks = driver.findElements(WalmartHomePageModel.getTopLinks());
        System.out.println("total number of links and images ----- " + totalLinks.size());

        List <WebElement> activeLinks = new ArrayList<WebElement>();

        for(int i = 0; i < totalLinks.size(); i++){
            if(totalLinks.get(i).getAttribute("href") != null){
                activeLinks.add(totalLinks.get(i));
            }
        }
        System.out.println("total number of active links ------ " + activeLinks.size());

        for(int j = 0; j < activeLinks.size(); j++){
            HttpURLConnection connections = null;
            try {
                connections = (HttpURLConnection)new URL(activeLinks.get(j).getAttribute("href")).openConnection();
            } catch (IOException e) {
                e.printStackTrace();
            }
            try {
                connections.connect();
            } catch (IOException e) {
                e.printStackTrace();
            }
            String responseMessage = null;
            try {
                responseMessage = connections.getResponseMessage();
            } catch (IOException e) {
                e.printStackTrace();
            }
            connections.disconnect();
            System.out.println(activeLinks.get(j).getAttribute("href")+"----->"+responseMessage);
        }
    }

    public void optionalCampaignLinksCheck() throws Throwable {
        List <WebElement> totalLinks = driver.findElements(WalmartHomePageModel.getOptionalCampaignLinks());
        //totalLinks.addAll(driver.findElements(By.tagName("img")));
        System.out.println("total number of links and images ----- " + totalLinks.size());

        List <String> activeLinks = new ArrayList<String>();

        for(int i = 0; i < totalLinks.size(); i++){
            if(totalLinks.get(i).getAttribute("href") != null){
                activeLinks.add(totalLinks.get(i).getAttribute("href"));
            }
        }
        System.out.println("total number of active links ------ " + activeLinks.size());

        for(int j = 0; j < activeLinks.size(); j++){
            HttpURLConnection connections =(HttpURLConnection)new URL(activeLinks.get(j)).openConnection();
            connections.connect();
            String responseMessage = connections.getResponseMessage();
            connections.disconnect();
            System.out.println(activeLinks.get(j)+"----->"+responseMessage);
        }
    }

    public void groceryButtonClick(){
        WebElement groceryButton = driver.findElement(WalmartHomePageModel.getHomePageGroceryButton());
        groceryButton.click();
    }

    public void pageTitleAssertion(String expected){
        String actual = driver.getTitle();
        System.out.println("Actual page title is ----->" + actual);
        System.out.println("Expected page title is ----->" + expected);
        Assert.assertEquals(expected,actual);
    }

    public void accountButtonClick(){
        WebElement accountButton = driver.findElement(WalmartHomePageModel.getHomePageAccountButton());
        accountButton.click();
    }

    public void accountButtonAssertion(String expected){
        String actual = driver.findElement(WalmartHomePageModel.getHomePageAccountButtonAssert()).getText();
        System.out.println("actual is ----->" + "" + actual);
        System.out.println("expected is ----->" + "" + expected);
        Assert.assertEquals(expected,actual);
    }

    public void storeLocationButtonClick(){
        WebElement locationButton =  driver.findElement(WalmartHomePageModel.getHomePageLocationButton());
        locationButton.click();
    }

    public void storeLocationButtonAssertion(String expected){
        String actual = driver.findElement(WalmartHomePageModel.getHomePageLocationButtonAssert()).getText();
        System.out.println("actual is ----->" + "" + actual);
        System.out.println("expected is ----->" + "" + expected);
        Assert.assertEquals(expected,actual);
    }

    public void cartButtonClick(){
        WebElement cartButton = driver.findElement(WalmartHomePageModel.getHomePageCartButton());
        cartButton.click();
    }

    public void brokenLinksAndImagesTest(){
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
    public void deleteAllCookies(){
        driver.manage().deleteAllCookies();
    }
}
