package com.walmart.automation.framework.utils;

import org.openqa.selenium.WebDriver;

import java.util.concurrent.TimeUnit;

public class Waits {
    private WebDriver driver = null;

    public Waits(WebDriver driver){
        this.driver = driver;
    }

    public void impliciteWait(int mili){
        driver.manage().timeouts().implicitlyWait(mili,TimeUnit.SECONDS);
    }
}
