import time
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from bs4 import BeautifulSoup
import openpyxl
from urllib.parse import urljoin

# Initialize an Excel workbook
workbook = openpyxl.Workbook()
sheet = workbook.active
sheet.title = "Scraped Content"
sheet.append(["Url", "Heading (H2)", "Subheading (P)"])  # Adding header row

# URL of the news portal
url = "https://ekantipur.com/news"

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

    # Open the webpage
    driver.get(url)
    time.sleep(5)  # Initial wait for the page to load

    # Scroll to load more content until we reach max entries
    last_height = driver.execute_script("return document.body.scrollHeight")
    extracted_data = 0
    max_data = 10000  # Limit the maximum data points to extract

    while extracted_data < max_data:
        # Scroll down to the bottom of the page
        driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
        time.sleep(5)  # Wait for content to load

        # Calculate new scroll height and compare with the last height
        new_height = driver.execute_script("return document.body.scrollHeight")
        if new_height == last_height:
            print("No more content to load, stopping scroll.")
            break  # Exit if no more content is loaded
        last_height = new_height

        # Extract the page source after scrolling
        soup = BeautifulSoup(driver.page_source, 'html.parser')

        # Find all <h2> tags and related <p> tags
        h2_tags = soup.find_all('h2')
        for h2 in h2_tags:
            if extracted_data >= max_data:
                break
            heading = h2.get_text(strip=True)
            subheading = ""
            next_sibling = h2.find_next_sibling('p')
            if next_sibling:
                subheading = next_sibling.get_text(strip=True)

            # Get the link from the <h2> tag
            anchor = h2.find('a', href=True)
            link = urljoin(url, anchor['href']) if anchor else "No link available"
            if not link=="No link available":
                # Append to Excel sheet
                sheet.append([link, heading, subheading])
                extracted_data += 1
                print(f"Extracted {extracted_data} items")

    # Adjust column widths
    for col in sheet.columns:
        max_length = 0
        col_letter = col[0].column_letter
        for cell in col:
            try:
                max_length = max(max_length, len(str(cell.value)))
            except:
                pass
        sheet.column_dimensions[col_letter].width = max_length + 2

    # Save the content to an Excel file
    workbook.save("scraped_eKantipur_all3.xlsx")
    print("Content has been successfully saved to 'scraped_eKantipur_all.xlsx'.")

except Exception as e:
    print(f"An error occurred: {e}")

finally:
    # Ensure driver.quit() is only called if driver was initialized
    try:
        driver.quit()
    except NameError:
        print("Driver was not initialized, skipping driver.quit()")
