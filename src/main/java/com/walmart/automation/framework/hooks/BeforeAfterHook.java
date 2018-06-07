package com.walmart.automation.framework.hooks;

import com.walmart.automation.framework.driverfactory.DriverFactory;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import io.github.bonigarcia.wdm.ChromeDriverManager;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class BeforeAfterHook extends BaseSteps {

    @Before
    public void setUp(Scenario scenario){
//        ChromeDriverManager.getInstance().setup();
//        System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "/drivers/chromedriver.exe");
//        driver = new ChromeDriver();
//        System.setProperty("webdriver.gecko.driver",System.getProperty("user.dir") + "/driver/geckodriver32.exe");
//        driver = new FirefoxDriver();
//        System.setProperty("webdriver.ie.driver",System.getProperty("user.dir") +"/driver/IEDriverServer.exe");
//        driver = new InternetExplorerDriver();
        System.out.println("----------------------------------------------------------------------");
        System.out.println("*************** Test Environment Set up ***************");
        System.out.println("***************    Starting Scenario    ***************");
        System.out.println("*************** Scenario Name -- " + scenario.getName() + " ***************");
        System.out.println("----------------------------------------------------------------------");
        driver.manage().window().maximize();
    }
    @After
    public void tearDown(Scenario scenario){
        if(scenario.isFailed()){
            System.out.println("Failed scenario is ----->" + scenario.getName());
            byte[] screenshot = ((TakesScreenshot)this.driver).getScreenshotAs(OutputType.BYTES);
            scenario.embed(screenshot,"image/png");
        }
//        driver.close();
        DriverFactory.getInstance().removeDriver();
    }
}
