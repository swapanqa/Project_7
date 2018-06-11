package com.walmart.automation.framework.controller;

import com.walmart.automation.framework.models.WalmartUserAccountHomePageModel;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

public class UserAccountHomePageController {
    protected WebDriver driver = null;

    public UserAccountHomePageController(WebDriver driver){
       this.driver = driver;
    }

    public void userAccountButtonClick(){
        WebElement userLoginButtonElement = driver.findElement(WalmartUserAccountHomePageModel.getLogedinUserButton());
        userLoginButtonElement.click();
    }

    public void userHomePageButtonTest(){
        List<WebElement> buttonOptions = driver.findElements(WalmartUserAccountHomePageModel.getListOfLoginButton());
        System.out.println("number of options ----->" + buttonOptions.size());
        List<WebElement> activeButtonOptions = new ArrayList<WebElement>();
        for(int i = 0; i< buttonOptions.size()-1; i++) {
            if (buttonOptions.get(i).getAttribute("href") != null) {
                activeButtonOptions.add(buttonOptions.get(i));
            }
        }
        System.out.println("active button ----->" + activeButtonOptions.size());
        int count = 1;
        for(int j = 0; j < activeButtonOptions.size(); j++){
            HttpURLConnection connection = null;
            try {
                connection = (HttpURLConnection)new URL(activeButtonOptions.get(j).getAttribute("href")).openConnection();
            } catch (IOException e) {
                e.printStackTrace();
            }
            String message = null;
            try {
                message = connection.getResponseMessage();
            } catch (IOException e) {
                e.printStackTrace();
            }
            connection.disconnect();
            System.out.println("#" + count + "-->" + activeButtonOptions.get(j).getAttribute("href") + "----->" + message);
            count ++;
        }

    }
}
