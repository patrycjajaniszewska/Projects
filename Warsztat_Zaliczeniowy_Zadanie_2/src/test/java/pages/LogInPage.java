package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LogInPage {

    private WebDriver driver;

    @FindBy(name = "email")
    private WebElement signInEmail;
    @FindBy(name = "password")
    private WebElement password;
    @FindBy(id = "submit-login")
    private WebElement signInButton;

    public LogInPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    public void logInAs(String email, String passwd) {
        signInEmail.clear();
        signInEmail.sendKeys(email);
        password.clear();
        password.sendKeys(passwd);
        signInButton.click();
    }
}