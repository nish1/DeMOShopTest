package newpackage;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.PageLoadStrategy;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.io.*;
import static javax.swing.JOptionPane.showMessageDialog;

public class TestDemoshop {
	public static WebDriver driver;
	private static final String chromeDriverPath ="..\\chromedriver.exe";
	private static final String userName ="nishmithab3gs@gmail.com";
	private static final String password ="Test123";
	private static final String demoToolURL ="http://demoshop24.com/";
	
		
	public static void main(String args[])
	{
		//chrome Driver path to check for driver presence
		String currentDirectory = System.getProperty("user.dir");
		String [] spltArray = currentDirectory.split("\\\\");
		String chrmDirectory ="";
		for( int i=0;i<spltArray.length-1;i++)
		{
			chrmDirectory+=spltArray[i]+"\\";
			
		}
		
		// Get the file
        File f = new File(chromeDriverPath);
  
       
        // Driver Exists
        if (f.exists())
        {
            System.out.println("Exists");
            //calling method to start the process
            loginStarts();
            
        }
        // Driver doesn't Exists
        else
        {
        	// System.out.println("chromeDriver is NOT present in path:"+chrmDirectory);
        	showMessageDialog(null, "chromeDriver is NOT present in path:"+chrmDirectory);
        }
                             
	}

	public static void loginStarts() {
		//Setting path
		 System.setProperty("webdriver.chrome.driver",chromeDriverPath);
		 ChromeOptions chromeOptions = new ChromeOptions();
	     chromeOptions.setPageLoadStrategy(PageLoadStrategy.NONE);
	    	 
         //chrome instance
	      driver = new ChromeDriver(chromeOptions);
	     // driver = new ChromeDriver();
         //Jst for better work. Not required currently
         //clearCache();
         
	      //Wait time for All elements
	       WebDriverWait wait = new WebDriverWait(driver, 240);
	      
	      
         //Work starts
         driver.get(demoToolURL);
         driver.manage().window().maximize();
        // System.out.println("Page loaded1");
         
         // waitForPageLoad(driver);
         
         try {
			
		 	//Navigate to login now		 	 	
		 	wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id='top-links']/ul/li[2]/a/i")));
		 	driver.findElement(By.linkText("My Account")).click();
		 	wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id='top-links']/ul/li[2]/ul/li[2]/a")));
		 	driver.findElement(By.xpath("//*[@id='top-links']/ul/li[2]/ul/li[2]/a")).click();
		 	System.out.println("Done till login");
		 	
		 	
		 	//Login Details
		 	wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("input-email"))).sendKeys(userName);
		 	driver.findElement(By.id("input-password")).sendKeys(password);
		 	
		 	//driver.findElement(By.xpath("//input[@type='submit' and @value='Login' and @class='btn btn-primary']")).click();
		 	driver.findElement(By.xpath("//input[@type='submit' and @value='Login' and @class='btn btn-primary']")).click();

  
		 	System.out.println("Submitted login page");
		 	
//		 	Search Item
		 	wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id='search']/input"))).sendKeys("Mac");
		 	driver.findElement(By.xpath("//*[@id='search']/span/button")).click();
		 	System.out.println("Search complete");
		 	
		 	//Adding to cart
		 	wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id='content']/div[3]/div[1]/div/div[2]/div[2]/button[1]/span"))).click();
		 	System.out.println("added to cart");
		 	
		 	//Checkout
		 	//wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("//*[@id='cart']/button"))).click();//click on cart
		 	//wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id='cart']/ul/li[2]/div/p/a[2]/strong"))).click();//click on checkout 
		 	wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id='top-links']/ul/li[5]/a/span"))).click();//Checkout button upper right
		 	
		 			 	
		 	System.out.println("Checkout complete");
		 	
		 	//Billing Address details
		 	//First name :N   ,Last name :B , Address : Delhi ,  City :Delhi, country : India ,state Karnataka . Click on Continue  (Any Indian address)
		 	wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id='collapse-payment-address']/div/form/div[3]/label"))).click();//New Address
		 	driver.findElement(By.id("input-payment-firstname")).sendKeys("N");
		 	driver.findElement(By.id("input-payment-lastname")).sendKeys("B");
		 	driver.findElement(By.id("input-payment-address-1")).sendKeys("Delhi");
		 	driver.findElement(By.id("input-payment-city")).sendKeys("Delhi");
		 	driver.findElement(By.id("input-payment-postcode")).sendKeys("560067");
		 	//Selecting India from Drop down.
		 	Select country = new Select(driver.findElement(By.id("input-payment-country")));
		 	country.selectByValue("99");
		 	Thread.sleep(2000);//Waiting for the list to update
		 	//Selecting Karnataka from Drop down
		 	Select state = new Select(driver.findElement(By.id("input-payment-zone")));
		 	state.selectByValue("1489");
		 	driver.findElement(By.xpath("//*[@id='button-payment-address']")).click();//Clicking continue
		 	driver.findElement(By.id("button-payment-address")).click();//Clicking continue
		 	System.out.println("Billing Address Done");
		 	
		 	//Delivery Address details
		 	//First name :N   ,Last name :B , Address : Delhi ,  City :Delhi, country : India ,state Karnataka . Click on Continue  (Any Indian address)
		 	wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id='collapse-shipping-address']/div/form/div[3]/label/input"))).click();//New Address
		 	driver.findElement(By.id("input-shipping-firstname")).sendKeys("N");
		 	driver.findElement(By.id("input-shipping-lastname")).sendKeys("B");
		 	driver.findElement(By.id("input-shipping-address-1")).sendKeys("Delhi");
		 	driver.findElement(By.id("input-shipping-city")).sendKeys("Delhi");
		 	//Selecting India from Drop down. Commenting now as its default selected
		 	//Select Dcountry = new Select(driver.findElement(By.id("input-shipping-country")));
		 	//Dcountry.selectByValue("99");
		 	//Selecting Karnataka from Drop down
		 	//Select Dstate = new Select(driver.findElement(By.id("input-shipping-zone")));
		 	//Dstate.selectByValue("1489");
		 	driver.findElement(By.id("button-shipping-address")).click();//Clicking continue
		 	System.out.println("Delivery Address Done");
		 			 	
		 	//Delivery Method
		 	wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("button-shipping-method"))).click();//Delivery 
		 	System.out.println("Delivery Method Done");
		 	//Payment method
		 	wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id='collapse-payment-method']/div/div[2]/div/input[1]"))).click();//Terms&Conditions
		 	driver.findElement(By.id("button-payment-method")).click();
		 	System.out.println("Payment Method Done");
		 	//Confirm Order
		 	wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("button-confirm"))).click();//Terms&Conditions
		 	System.out.println("Order  Done");
		 	//Order placed & Home
		 	wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id='content']/div/div/a")));//Waiting for the prder confirmation
		 	System.out.println("Order  confirmed");
		 	//Home 
		 	driver.findElement(By.xpath("//*[@id='common-success']/ul/li[1]/a/i")).click();
		 	System.out.println("Home Page");
		 	
		} catch (Exception e) {
			
			System.out.println("Error:"+e);		
	}
         
 		//All Steps completed
 		System.out.println("All Task Done");
 		
 		//Closing the browser
 		//closeBrowser();
 		
	}

	public static void closeBrowser() {
		showMessageDialog(null, "Browser Will close after 10 seconds");
		try {
			Thread.sleep(10000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		driver.close();
			}
	
	//State never getting satisfied in usual case so going for element search
	public static void waitForPageLoad(WebDriver d)
	{
		 
		        ExpectedCondition<Boolean> expectation = new
		                ExpectedCondition<Boolean>() {
		                    public Boolean apply(WebDriver driver) {
		                        return ((JavascriptExecutor) driver).executeScript("return document.readyState").toString().equals("complete");
		                    }
		                };
		        try {
		            WebDriverWait wait = new WebDriverWait(driver, 10);
		            wait.until(expectation);
		        } catch (Throwable error) {
		            System.out.println("Error"+error);
		        }
	
}
	//Delete browser cache
	public static void clearCache()
	{
	    driver.manage().deleteAllCookies(); 
     	try {
			Thread.sleep(5000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
}
