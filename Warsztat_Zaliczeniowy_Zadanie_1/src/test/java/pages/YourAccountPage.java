package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class YourAccountPage {
    private WebDriver driver;

    @FindBy(css = "[title=\"Addresses\"]")
    private WebElement Addresses;

    public YourAccountPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(this.driver, this);
    }

    public void clickAddresses() {
        Addresses.click();
    }
}
