package com.walmart.automation.framework.controller;

import org.openqa.selenium.By;

public class WalmartLoginPageController {
    public static By homePageSigninButton = By.xpath("//a[@data-tl-id='GlobalAccountMenu-link-0']");
    public static By emailTextBox = By.xpath("//input[@data-tl-id='signin-email-input']");
    public static By passwordTextBox = By.xpath("//input[@data-tl-id='signin-password-input']");
    public static By loginPageSigninButton = By.xpath("//button[@data-automation-id='signin-submit-btn']");
    public static By loginNotSuccessfulAssertion = By.xpath("//span[@class='alert active alert-error alert-block']/span");
}
