from selenium import webdriver
from selenium.webdriver.firefox.options import Options
from bs4 import BeautifulSoup
from time import sleep
from pymongo import MongoClient
import sys

options = Options()
options.headless = True
driver = webdriver.Firefox(options=options)

driver.get('https://www.mozzartbet.com/en#/date/all?sid=1')
driver.execute_script("document.getElementById('focus').style.overflow='visible'; document.getElementById('vbarCentral').style.overflow='visible';")
driver.find_elements_by_class_name('accept-button')[0].click()
driver.find_elements_by_class_name('buttonLoad')[3].click()

sleep(5)

html_football = driver.page_source

try:
    driver.find_element_by_xpath("//span[contains(@class, 'name') and contains(@class, 'main') and contains(text(), 'Basketball')]").click()
    sleep(1)
    html_basketball = driver.page_source
    basketball_exist = True
except: 
    basketball_exist = False

try:
    driver.find_element_by_xpath("//span[contains(@class, 'name') and contains(@class, 'main') and contains(text(), 'Tennis')]").click() 
    sleep(1)
    html_tenis = driver.page_source
    tennis_exist = True
except: 
    tennis_exist = False

driver.close()
''''''''''''''''''''''''''''''''''''''''''''

try:
    connect = MongoClient()
    print("Connected successfully!")
    db = connect.EasyBet
    db.footballMatches.drop()
    db.basketballMatches.drop()
    db.tennisMatches.drop()
except:
    print("Could not connect to MongoDB")


# football
collection = db.footballMatches

soup = BeautifulSoup(html_football, 'lxml')
wrapper = soup.select('.sportsoffer')
soup = BeautifulSoup(str(wrapper), 'lxml')
football_matches = soup.select('.match.botFlex')

for game in football_matches:
    soup = BeautifulSoup(str(game), 'lxml')
    time = soup.find('div', 'time').text
    league = soup.find('span','leagueName').text
    pairs = soup.find('a','pairs').find_all('span')
    home_team = pairs[0].text
    guest_team = pairs[1].text 
    odds = soup.find_all('div', class_='partvar odds')
    sleep(0.2)
    odds = [odd.text for odd in odds]
    document = {
        "league": league,
        "time" : time,
        "homeTeam": home_team,
        "guestTeam" : guest_team,
        "odd1": odds[0],
        "oddX": odds[1],
        "odd2": odds[2],
        "odd1X": odds[3],
        "odd12": odds[4],
        "oddX2": odds[5],
        "odd0to2": odds[6],
        "odd3plus": odds[7],
        "odd4plus": odds[8]
    }
    collection.insert_one(document)

#basketball
collection = db.create_collection("basketballMatches")

if basketball_exist:
    soup = BeautifulSoup(html_basketball, 'lxml')
    wrapper = soup.select('.sportsoffer')
    soup = BeautifulSoup(str(wrapper), 'lxml')
    basketball_matches = soup.select('.match.botFlex')
    for game in basketball_matches:
        soup = BeautifulSoup(str(game), 'lxml')
        time = soup.find('div', 'time').text
        league = soup.find('span','leagueName').text
        pairs = soup.find('a','pairs').find_all('span')
        home_team = pairs[0].text
        guest_team = pairs[1].text
        odds = soup.find_all('div', class_='partvar odds')
        odds = [odd.text for odd in odds]
        document = {
            "league": league,
            "time" : time,
            "homeTeam": home_team,
            "guestTeam" : guest_team,
            "odd1": odds[0],
            "oddX": odds[1],
            "odd2": odds[2],
            "odd1X": odds[3],
            "oddX2": odds[4],
            "oddWinner1": odds[5],
            "oddWinner2": odds[6]
        }
        collection.insert_one(document)
       

#tennis
collection = db.create_collection("tennisMatches")

if tennis_exist:
    soup = BeautifulSoup(html_tenis, 'lxml')
    wrapper = soup.select('.sportsoffer')
    soup = BeautifulSoup(str(wrapper), 'lxml')
    tenis_matches = soup.select('.match.botFlex')

    for game in tenis_matches:
        soup = BeautifulSoup(str(game), 'lxml')
        time = soup.find('div', 'time').text
        league = soup.find('span','leagueName').text
        pairs = soup.find('a','pairs').find_all('span')
        home_team = pairs[0].text
        guest_team = pairs[1].text
        odds = soup.find_all('div', class_='partvar odds')
        odds = [odd.text for odd in odds]
        document = {
            "league": league,
            "time" : time,
            "homeTeam": home_team,
            "guestTeam" : guest_team,
            "odd1": odds[0],
            "odd2": odds[1],
            "oddFirstSet1": odds[2],
            "oddFirstSet2": odds[3],
            "oddHen1": odds[4],
            "oddHen2": odds[5]     
        }
        collection.insert_one(document)
