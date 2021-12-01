package steps;

import cucumber.api.java.cs.A;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import pages.*;

import java.util.concurrent.TimeUnit;

public class NewAddressPageSteps {

    private WebDriver driver;
    private AddressesPage addressesPage;
    private WebElement addAddressButton;
    private Object String;

    @Given("User logs in to https://mystore-testlab.coderslab.pl/")
    public void logIn() {
        System.setProperty("webdriver.chrome.driver",
                "src/main/resources/drivers/chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        driver.get("https://mystore-testlab.coderslab.pl/");

        MainPage mainPage = new MainPage(driver);
        mainPage.clickSignIn();

        LogInPage loginPage = new LogInPage(driver);
        loginPage.logInAs("tescik@tescik.com", "123456789");
    }

    @And("User goes to Addresses")
    public void clickAddressesPage() {
        YourAccountPage yourAccountPage = new YourAccountPage(driver);
        yourAccountPage.clickAddresses();
    }

    @And("User clicks Create new address")
    public void createNewAddress() {
        driver.get("https://mystore-testlab.coderslab.pl/index.php?controller=address");
        addressesPage = new AddressesPage(driver);
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);

    }
    @When("User fills address form with alias (.*), address (.*), city (.*), postal code (.*), country (.*), phone (.*)")
    public void fillAddressForm(String alias, String address, String city, String postalCode, String country, String phone) {
        addressesPage.fillAddressForm(alias, address, city, postalCode, country, phone);
    }
    @And("User saves new address")
    public void saveNewAddress() {
        AddressesPage addressesPage = new AddressesPage(driver);
        addressesPage.clickSubmitAddress();
    }
    @Then("new address is added")
    public void addressAdded() {
        Assert.assertEquals("Address successfully added!", "Address successfully added!");
    }

    @And("User deletes new address (.*)")
    public void deleteNewAddress (String address){
        WebElement searchingNewAddress = driver.findElement(By.xpath("//*[@id=\"content\"]"));
        searchingNewAddress.getAttribute(address);
        WebElement deletingNewAddress = driver.findElement(By.partialLinkText("Delete"));
        deletingNewAddress.click();
    }

    @And("New address is deleted")
    public void addressIsDeleted (){
        Assert.assertEquals("Address successfully deleted!", "Address successfully deleted!");
    }

    @Then("browser closed")
    public void closeBrowser() {
        driver.quit();
    }
}
