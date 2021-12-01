package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;
import org.w3c.dom.html.HTMLInputElement;

import java.util.concurrent.TimeUnit;

public class AddressesPage {

    private WebDriver driver;

    @FindBy(name = "alias")
    private WebElement aliasField;
    @FindBy(name = "firstname")
    private WebElement firstNameField;
    @FindBy(name = "lastname")
    private WebElement lastNameField;
    @FindBy(name = "address1")
    private WebElement addressFirstLine;
    @FindBy(name = "city")
    private WebElement cityField;
    @FindBy(name = "postcode")
    private WebElement postalCodeField;
    @FindBy(name = "id_country")
    private WebElement countrySelect;
    @FindBy(name = "phone")
    private WebElement phoneField;
    @FindBy (name = "submitAddress")
    private WebElement saveAddress;

    public AddressesPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
    }

        public void fillAddressForm(String alias, String address, String city, String postalCode, String country, String phone) {

            aliasField.clear();
            aliasField.sendKeys(alias);

            firstNameField.clear();
            firstNameField.sendKeys("test");

            lastNameField.clear();
            lastNameField.sendKeys("testo");

            addressFirstLine.clear();
            addressFirstLine.sendKeys(address);

            cityField.clear();
            cityField.sendKeys(city);

            postalCodeField.clear();
            postalCodeField.sendKeys(postalCode);

            Select countryField = new Select(countrySelect);
            countryField.selectByVisibleText(country);

            phoneField.clear();
            phoneField.sendKeys(phone);
        }
    public void clickSubmitAddress() {
        WebElement saveAddress = driver.findElement(By.xpath("//*[@id=\"content\"]/div/div/form/footer/button"));
        saveAddress.submit();
    }
}
    
