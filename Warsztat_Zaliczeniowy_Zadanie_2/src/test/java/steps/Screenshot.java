package steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import ru.yandex.qatools.ashot.AShot;
import ru.yandex.qatools.ashot.shooting.ShootingStrategies;

import javax.imageio.ImageIO;
import java.awt.image.RenderedImage;
import java.io.File;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.concurrent.TimeUnit;

public class Screenshot {
    public Screenshot(WebDriver driver) {
    }


    public static void main(String args[]) throws Exception {
        System.setProperty("webdriver.chrome.driver",
                "src/main/resources/drivers/chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        driver.manage().window().maximize();
        driver.get("https://mystore-testlab.coderslab.pl/index.php?controller=order-confirmation&id_cart=61038&id_module=11&id_order=6687&key=8dc1da50e2fdcf9585f4e37931e507d0");
        Thread.sleep(2000);
        ru.yandex.qatools.ashot.Screenshot screenshot = new AShot().shootingStrategy(ShootingStrategies.viewportPasting(1000)).takeScreenshot(driver);
        ImageIO.write(screenshot.getImage(), "PNG", new File("C:\\Users\\patja\\Desktop\\zadanie2\\FullPageScreenshot.png"));
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd h-m-s a");
        Date date = new Date();
    }

}
