package com.walmart.automation.framework.models;

import org.openqa.selenium.By;

public class WalmartSignUpPageModel {
    private static By createAccountButtonForGoingToRegistrationPage = By.xpath("//a[@data-tl-id='GlobalAccountMenu-link-3']");
    private static By firstNameBox = By.xpath("//input[@data-tl-id='signup-first-name-input']");
    private static By lastNameBox = By.xpath("//input[@data-tl-id='signup-last-name-input']");
    private static By emailBox = By.xpath("//input[@data-tl-id='signup-email-input']");
    private static By passWordBox = By.xpath("//input[@class='form-control show-hide' and @type='password']");
//    public static By rememberMeCheckBox = By.xpath("//input[@name='remember me']");
//    public static By autoEmailCheckBox = By.xpath("//input[@name='newsletter']");
    private static By confirmCreateAccountButton = By.xpath("//button[@data-automation-id='signup-submit-btn']");
    private static By invalidEmailAssert = By.xpath("//div[@class='error-label font-semibold ada-error-message']/span[@class='ada-error-text']");
    private static By invalidPasswordAssert = By.xpath("//span[@class='ada-error-text']");

    public static By getCreateAccountButtonForGoingToRegistrationPage() {
        return createAccountButtonForGoingToRegistrationPage;
    }

    public static By getFirstNameBox() {
        return firstNameBox;
    }

    public static By getLastNameBox() {
        return lastNameBox;
    }

    public static By getEmailBox() {
        return emailBox;
    }

    public static By getPassWordBox() {
        return passWordBox;
    }

    public static By getConfirmCreateAccountButton() {
        return confirmCreateAccountButton;
    }

    public static By getInvalidEmailAssert() {
        return invalidEmailAssert;
    }

    public static By getInvalidPasswordAssert() {
        return invalidPasswordAssert;
    }
}
