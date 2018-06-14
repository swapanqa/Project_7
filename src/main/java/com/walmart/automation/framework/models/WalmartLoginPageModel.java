package com.walmart.automation.framework.models;

import org.openqa.selenium.By;

public class WalmartLoginPageModel {
    private static By homePageSigninButton = By.xpath("//a[@data-tl-id='GlobalAccountMenu-link-0']");
    private static By emailTextBox = By.xpath("//input[@data-tl-id='signin-email-input']");
    private static By passwordTextBox = By.xpath("//input[@data-tl-id='signin-password-input']");
    private static By loginPageSigninButton = By.xpath("//button[@data-automation-id='signin-submit-btn']");
    private static By loginNotSuccessfulAssertion = By.xpath("//span[@class='alert active alert-error alert-block']/span");

    public static By getHomePageSigninButton() {
        return homePageSigninButton;
    }

    public static By getEmailTextBox() {
        return emailTextBox;
    }

    public static By getPasswordTextBox() {
        return passwordTextBox;
    }

    public static By getLoginPageSigninButton() {
        return loginPageSigninButton;
    }

    public static By getLoginNotSuccessfulAssertion() {
        return loginNotSuccessfulAssertion;
    }
}
