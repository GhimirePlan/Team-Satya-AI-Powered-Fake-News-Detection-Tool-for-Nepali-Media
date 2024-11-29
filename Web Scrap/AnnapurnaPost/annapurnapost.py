import time
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from bs4 import BeautifulSoup
import openpyxl

# Initialize an Excel workbook
workbook = openpyxl.Workbook()
sheet = workbook.active
sheet.title = "Scraped News Data"
sheet.append(["URL", "Heading (H1)", "Subheading (P)"])  # Adding header row

# Path to the ChromeDriver 
driver_path = r"C:\Users\PLAN\chromedriver-win64\chromedriver-win64\chromedriver.exe"  

# Set up the ChromeDriver service
service = Service(driver_path)

# Set up Chrome options to avoid the browser window from popping up
options = Options()
options.add_argument("--headless")  # Optional: run in headless mode

try:
    # Initialize the WebDriver
    driver = webdriver.Chrome(service=service, options=options)

    # Start and end URL IDs
    start_id = 469175-1000
    end_id = 469175

    # Iterate through the range of story IDs
    for story_id in range(start_id, end_id + 1):
        url = f"https://www.annapurnapost.com/story/{story_id}/"
        print(f"Scraping URL: {url}")

        try:
            # Open the webpage
            driver.get(url)
            time.sleep(0.00001)  # Wait for the page to load

            # Extract the page source
            soup = BeautifulSoup(driver.page_source, 'html.parser')

            # Find the <h1> tag inside <div class="news__title">
            heading_tag = soup.find('h1', class_='news__title')
            heading = heading_tag.get_text(strip=True) if heading_tag else "No Heading Found"

            # Finding the <p> tags inside <div class="news__details">
            details_div = soup.find('div', class_='news__details')
            subheadings = [p.get_text(strip=True) for p in details_div.find_all('p')] if details_div else []
            subheading_text = "\n".join(subheadings) if subheadings else "No Subheadings Found"

            # Save the extracted data to the Excel sheet
            sheet.append([url, heading, subheading_text])
            print(f"Extracted data from: {url}")

        except Exception as e:
            print(f"An error occurred for URL {url}: {e}")

    # Save the content to an Excel file
    workbook.save("scraped_annapurna_post_data_all.xlsx")
    print("Content has been successfully saved to 'scraped_annapurnapost_data_all.xlsx'.")

except Exception as e:
    print(f"An error occurred: {e}")

finally:
   
    try:
        driver.quit()
    except NameError:
        print("Driver was not initialized, skipping driver.quit()")
