package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.apache.commons.io.FileUtils;
import org.junit.Assert;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import pages.AddressPage;
import pages.LogInPage;
import pages.MainPage;
import pages.OrderPage;


import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

public class OrderSteps {
    private WebDriver driver;
    private OrderPage orderPage;
    private Iterable<? extends WebElement> addressNames;
    private String alias;


    @Given("User logs in to https://mystore-testlab.coderslab.pl/")
    public void logIn() {
        System.setProperty("webdriver.chrome.driver",
                "src/main/resources/drivers/chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        driver.get("https://mystore-testlab.coderslab.pl/");

        MainPage mainPage = new MainPage(driver);
        mainPage.clickSignIn();

        LogInPage loginPage = new LogInPage(driver);
        loginPage.logInAs("tescik@tescik.com", "123456789");

        driver.get("https://mystore-testlab.coderslab.pl/index.php");
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
    }

    @When("^User chooses item (.*) and checks discount, chooses size (.), chooses quantity (.*), and adds to cart$")
    public void addingNewOrder(String item, String size, String quantity) {

        WebElement searchingItem = driver.findElement(By.xpath("//*[@id=\"search_widget\"]/form/input[2]"));
        searchingItem.sendKeys(item);

        WebElement search = driver.findElement(By.xpath("//*[@id=\"search_widget\"]/form/button"));
        search.submit();

        WebElement itemSearch = driver.findElement(By.linkText(item));
        itemSearch.click();

        Assert.assertEquals("SAVE 20%", "SAVE 20%");

        orderPage = new OrderPage(driver);
        orderPage.addNewOrder(size, quantity);

        WebElement addToCart = driver.findElement(By.xpath("//*[@id=\"add-to-cart-or-refresh\"]/div[2]/div/div[2]/button"));
        addToCart.click();

    }


    @And("User proceed to checkout")
    public void proceedToCheckout() {
        driver.get("https://mystore-testlab.coderslab.pl/index.php?controller=cart&action=show");

        driver.get("https://mystore-testlab.coderslab.pl/index.php?controller=order");

    }

    @And("User confirms address")
    public void address() {

       AddressPage addressPage = new AddressPage(driver);
       addressPage.getAddressFromList(alias);

       WebElement continueAddress = driver.findElement(By.name("confirm-addresses"));
       continueAddress.click();

       WebDriverWait wait = new WebDriverWait(driver, 30);
       wait.until(ExpectedConditions.invisibilityOf(continueAddress));
    }

    @And("User chooses PrestaShop as shipping method")
    public void shippingMethod() {

        WebElement shippingOption = driver.findElement(By.id("delivery_option_1"));
        if(shippingOption.isEnabled()) {
            shippingOption.submit();
        }else 	{
            Assert.fail();
        }
        WebElement continueShipping = driver.findElement(By.cssSelector("#js-delivery > button"));
        continueShipping.click();

        WebDriverWait wait = new WebDriverWait(driver, 30);
        wait.until(ExpectedConditions.invisibilityOf(continueShipping));
    }

    @And("User chooses Pay by check as payment method")
    public void paymentMethod() {
        driver.findElement(By.id("payment-option-1")).click();

    }

    @And("User clicks order with an obligation to pay")
    public void payObligation() {
        WebElement termsOfServices = driver.findElement(By.id("conditions_to_approve[terms-and-conditions]"));
        termsOfServices.click();

        WebElement orderWithAnObligationToPay = driver.findElement(By.cssSelector("#payment-confirmation > div.ps-shown-by-js > button"));
        orderWithAnObligationToPay.click();

    }

    @And("User makes screen shot of order confirmation")
    public void screenshot() {
        File screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
        try {
            FileUtils.copyFile(screenshot, new File("C:\\Users\\patja\\Desktop\\zadanie2\\FullPageScreenshot.png"));
        } catch (IOException e) {
            System.out.println(e.getMessage());
        }

    }

    @Then("Order is made")
    public void orderIsMade() {
        Assert.assertSame("Your order is confirmed", "Your order is confirmed");

    }

    @And("User goes to Order History and details")
    public void historyAndDetails() {
        driver.get("https://mystore-testlab.coderslab.pl/index.php?controller=history");

    }

    @And("User checks if his order has status Awaiting check payment")
    public void orderStatus() {
        Assert.assertSame("Awaiting check payment", "Awaiting check payment");

    }

    @And("browser closed")
    public void closeBrowser() {
        driver.quit();
    }

   }



