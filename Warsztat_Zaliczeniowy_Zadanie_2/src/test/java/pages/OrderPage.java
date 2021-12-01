package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import java.util.concurrent.TimeUnit;

public class OrderPage {

    private WebDriver driver;

    @FindBy(id = "group_1")
    private WebElement sizeSelect;

    @FindBy(name = "qty")
    private WebElement qty;

    @FindBy(css = "#add-to-cart-or-refresh > div.product-add-to-cart > div > div.add > button")
    private WebElement addToCardButton;


    public OrderPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    public void addNewOrder(String size, String quantity) {

        Select sizeField = new Select(sizeSelect);
        sizeField.selectByVisibleText(size);
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        qty.click();
        qty.clear();
        qty.sendKeys(quantity);
        qty.click();

        addToCardButton.click();
    }

}
