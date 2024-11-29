import time
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from bs4 import BeautifulSoup,Tag
from  typing import List
import difflib
def matchNews(a,b):
    seq = difflib.SequenceMatcher()
    seq.set_seqs(a.lower(), b.lower())
    d = seq.ratio()
    return d
class Data:
    title:str 
    description:str 
    source:str
MAx_LIMIT_TODAY_DATA=30
class Kantipur:
    lists:List[Data]=[]
    def __init__(self,url="https://ekantipur.com/news"):
        # Path to the ChromeDriver (update the path to your ChromeDriver executable)
        driver_path = r"C:\Users\pranj\scraping\chromedriver-win64\chromedriver.exe"  # Correct path to your driver

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
            time.sleep(3)  # Wait for the page to load

            # Scroll to load more content until we reach 500 entries
            last_height = driver.execute_script("return document.body.scrollHeight")
            extracted_data = 0  # Counter for extracted data
            max_data = MAx_LIMIT_TODAY_DATA # Limit to 500 items
            while extracted_data < max_data:
                # Scroll down to the bottom of the page
                driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
                time.sleep(3)  # Wait for new content to load

                # Calculate new scroll height and compare with the last height
                new_height = driver.execute_script("return document.body.scrollHeight")
                if new_height == last_height:
                    print("No more content to load, stopping scroll.")
                    break  # Exit if no more content is loaded
                last_height = new_height

                # Extract the page source after scrolling
                soup = BeautifulSoup(driver.page_source, 'html.parser')

                # Find all <h2> and <p> tags
                h2_tags = soup.find_all('h2')
                p_tags = soup.find_all('p')

                # Iterate over the collected <h2> and <p> tags
                h2:Tag
                p:Tag 
                for h2, p in zip(h2_tags, p_tags):
                    if extracted_data >= max_data:
                        break  # Stop if we have reached 500 data points
                    heading = h2.get_text(strip=True)
                    link=url+h2.find("a")['href']
                    subheading = p.get_text(strip=True)
                    data=Data()
                    data.title=heading 
                    data.description=subheading
                    data.source=link 
                    self.lists.append(data)
                    extracted_data += 1
        except Exception as e:
            print(f"An error occurred: {e}")

        finally:
            # Ensure driver.quit() is only called if driver was initialized
            try:
                driver.quit()
            except NameError:
                print("Driver was not initialized, skipping driver.quit()")
    def gettodaynews(self):
        return self.lists
class Annapurna:
    lists:List[Data]=[]
    def __init__(self,url="https://www.annapurnapost.com/"):
        # Path to the ChromeDriver (update the path to your ChromeDriver executable)
        driver_path = r"C:\Users\pranj\scraping\chromedriver-win64\chromedriver.exe"  # Correct path to your driver
        # Set up the ChromeDriver service
        options = Options()
        options.add_argument("--headless")  # Optional: run in headless mode
        service = Service(driver_path)
        driver = webdriver.Chrome(service=service, options=options)
        # Set up Chrome options to avoid the browser window from popping up
        end_id = 469175
        try:
            driver.get(url)
            time.sleep(0.00001)
            soup = BeautifulSoup(driver.page_source, 'html.parser')
            first=soup.find("div",attrs={"class":"breaking__news"}).find("a")
            end_id=int(first["href"].split("/")[2])
        except:
            pass

        start_id = end_id-MAx_LIMIT_TODAY_DATA
        # Iterate through the range of story IDs
        for story_id in range(start_id, end_id + 1):
            url = f"https://www.annapurnapost.com/story/{story_id}/"
            try:
                # Open the webpage
                driver.get(url)
                time.sleep(0.00001)  # Wait for the page to load

                # Extract the page source
                soup = BeautifulSoup(driver.page_source, 'html.parser')

                heading_tag = soup.find('h1', class_='news__title')
                heading = heading_tag.get_text(strip=True) if heading_tag else "No Heading Found"

                details_div = soup.find('div', class_='news__details')
                subheadings = [p.get_text(strip=True) for p in details_div.find_all('p')] if details_div else []
                subheading_text = "\n".join(subheadings) if subheadings else "No Subheadings Found"
                data=Data()
                data.source=url 
                data.title=heading
                data.description=subheading_text
                # Save the extracted data to the Excel sheet
                self.lists.append(data)

            except Exception as e:
                print(f"An error occurred for URL {url}: {e}")
    def gettodaynews(self):
        return self.lists
class WebScrapper:
    lists:list[Data]=[]
    def __init__(self) -> None:
        annapurnapost=Annapurna()
        kantipurpost=Kantipur()
        for data in kantipurpost.lists:
            for anna in annapurnapost.lists:
                if matchNews(anna.title,data.title)>=0.5:
                    self.lists.append(data)
                    break
        for data in Kantipur.lists:
            for anna in annapurnapost.lists:
                if matchNews(anna.title,data.title)>=0.5:
                    self.lists.append(data)
                    break