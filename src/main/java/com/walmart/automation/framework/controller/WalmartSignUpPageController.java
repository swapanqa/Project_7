package com.walmart.automation.framework.controller;

import org.openqa.selenium.By;

public class WalmartSignUpPageController {
    public static By createAccountButtonForGoingToRegistrationPage = By.xpath("//a[@data-tl-id='GlobalAccountMenu-link-3']");
    public static By firstNameBox = By.xpath("//input[@data-tl-id='signup-first-name-input']");
    public static By lastNameBox = By.xpath("//input[@data-tl-id='signup-last-name-input']");
    public static By emailBox = By.xpath("//input[@data-tl-id='signup-email-input']");
    public static By passWordBox = By.xpath("//input[@class='form-control show-hide' and @type='password']");
//    public static By rememberMeCheckBox = By.xpath("//input[@name='remember me']");
//    public static By autoEmailCheckBox = By.xpath("//input[@name='newsletter']");
    public static By confirmCreateAccountButton = By.xpath("//button[@data-automation-id='signup-submit-btn']");
    public static By invalidEmailAssert = By.xpath("//div[@class='error-label font-semibold ada-error-message']/span[@class='ada-error-text']");
    public static By invalidPasswordAssert = By.xpath("//span[@class='ada-error-text']");
}
