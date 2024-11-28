import time
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from bs4 import BeautifulSoup
import openpyxl

# Initialize an Excel workbook
workbook = openpyxl.Workbook()
sheet = workbook.active
sheet.title = "Scraped Content"
sheet.append(["Url","Heading (H3)", "Subheading (P)"])  # Adding header row

# URL of the news portal
url = "https://kathmandupost.com/national"

# Path to the ChromeDriver
driver_path = r"C:\Users\PLAN\chromedriver-win64\chromedriver-win64\chromedriver.exe" 

# Set up the ChromeDriver service
service = Service(driver_path)

# Set up Chrome options to avoid the browser window from popping up
options = Options()
options.add_argument("--headless")  # run in headless mode

try:
    # Initialize the WebDriver
    driver = webdriver.Chrome(service=service, options=options)

    # Open the webpage
    driver.get(url)
    time.sleep(3)  # Wait for the page to load initially

    # Click the "Load More" button 100 times
    for _ in range(1):
        try:
            # Find the "Load More" span element by its class name using XPath
            load_more_button = driver.find_element(By.XPATH, "//span[contains(@class, 'load-more-btn')]")
            load_more_button.click()  # Click the button
            time.sleep(3)  # Wait for the new content to load
            print(f"Clicked 'Load More' {_ + 1} times")
        except Exception as e:
            print(f"Could not click 'Load More' button: {e}")
            break  # Exit if the button is not found or clickable

    # Extract the page source after loading more content
    soup = BeautifulSoup(driver.page_source, 'html.parser')

    # Find all <h3> and <p> tags
    articles = soup.find_all('article')

    # Extract headings and subheadings
    for article in articles:
        h3=article.find("h3")
        p=article.find("p")
        a=article.find("a")
        if a and p and h3:
            heading = h3.get_text(strip=True)
            subheading = p.get_text(strip=True)
            sheet.append([a['href'],heading, subheading])  # Add to Excel file
            print(f"Extracted: {heading}, {subheading}")

    # Save the content to an Excel file
    workbook.save("scraped_kathmandupost_dataaaa_gg.xlsx")
    print("Content has been successfully saved to 'scraped_kathmandupost_data_h3.xlsx'.")

except Exception as e:
    print(f"An error occurred: {e}")

finally:
    # Ensure driver.quit() is only called if driver was initialized
    try:
        driver.quit()
    except NameError:
        print("Driver was not initialized, skipping driver.quit()")
