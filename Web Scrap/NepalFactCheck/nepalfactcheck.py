from selenium import webdriver
from selenium.webdriver.common.by import By
import pandas as pd
import time

# Selenium WebDriver setup
options = webdriver.ChromeOptions()
options.add_argument("--no-sandbox")
options.add_argument("--disable-gpu")
driver = webdriver.Chrome(options=options)

# Base URL
sitemap_url = "https://nepalfactcheck.org/post-sitemap2.xml"

# Function to extract all URLs from <tbody> <tr><td><a> tags in the sitemap
def get_all_article_links(sitemap_url):
    try:
        driver.get(sitemap_url)
        time.sleep(0.00001)  # Allow the page to load

        # Locate the <tbody> and extract all <a> tags inside <tr><td>
        tbody = driver.find_element(By.TAG_NAME, "tbody")
        a_tags = tbody.find_elements(By.TAG_NAME, "a")

        # Extract href attributes
        urls = [a.get_attribute("href") for a in a_tags if a.get_attribute("href")]
        return urls

    except Exception as e:
        print(f"Error extracting article links: {e}")
        return []

# Function to scrape data from individual articles
def scrape_article_data(article_url):
    headings, subheadings = [], []
    try:
        driver.get(article_url)
        time.sleep(2)  # Allow the page to load

        # Extract headings from <h4> and <h2>
        h4_tags = driver.find_elements(By.TAG_NAME, "h4")
        h2_tags = driver.find_elements(By.TAG_NAME, "h2")
        headings = [tag.text.strip() for tag in h4_tags + h2_tags]

        # Extract subheadings from <p>
        p_tags = driver.find_elements(By.TAG_NAME, "p")
        subheadings = [tag.text.strip() for tag in p_tags]

    except Exception as e:
        print(f"Error scraping {article_url}: {e}")
    return headings, subheadings

# Main execution
article_urls = get_all_article_links(sitemap_url)
print(f"Found {len(article_urls)} article links.")

# Scrape data from each article
news_data = []
for idx, article_url in enumerate(article_urls):
    print(f"Scraping article {idx + 1}/{len(article_urls)}: {article_url}")
    headings, subheadings = scrape_article_data(article_url)
    news_data.append({
        "Article URL": article_url,
        "Headings": " | ".join(headings),
        "Subheadings": " | ".join(subheadings)
    })

# Save the extracted data into an Excel file
df = pd.DataFrame(news_data)
df.to_excel("sitemap_news_data2.xlsx", index=False)

print("Scraping complete. Data saved to 'sitemap_news_data2.xlsx'.")
driver.quit()
