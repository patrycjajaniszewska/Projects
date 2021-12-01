package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;
import org.w3c.dom.html.HTMLInputElement;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;



public class AddressPage {

    private WebDriver driver;

    @FindBy(css = "[title=\"Add an address\"]")
    private WebElement addAddressButton;

    @FindBy(className = "bloc_adresses")
    private WebElement addresses;

    @FindBy(className= "address-item selected")
    private List<WebElement> addressNames;

    private List foundElements;

    public AddressPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
    }

     public WebElement getFirstAddress() {
        return addressNames.get(0);
    }

    public WebElement getAddress(String alias) {
        return addresses.findElement(By.className("address-item selected" + alias));
    }
        public List<WebElement> getAddressFromList (String alias){
            List<WebElement> foundElements = new ArrayList<>();
            for (WebElement address : addressNames) {
                if (address.getText().equals(alias)) {
                    foundElements.add(address);
                }
            }
            return foundElements;
        }
    }




