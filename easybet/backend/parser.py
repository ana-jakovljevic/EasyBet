from selenium import webdriver
from selenium.webdriver.firefox.options import Options
import codecs
from bs4 import BeautifulSoup
from selenium.webdriver.common.action_chains import ActionChains
from time import sleep
from pymongo import MongoClient

options = Options()
options.headless = True
driver = webdriver.Firefox(options=options)

driver.get('https://www.mozzartbet.com/sr#/date/all?sid=1')
driver.execute_script("document.getElementById('focus').style.overflow='visible'; document.getElementById('vbarCentral').style.overflow='visible';")
driver.find_elements_by_class_name('accept-button')[0].click()
driver.find_elements_by_class_name('buttonLoad')[3].click()
sleep(2)
#driver.execute_script("return document.getElementByClassName('sportsoffer');");
html_football = driver.page_source

# kosarka
driver.find_elements_by_class_name('main-item')[5].click()
#driver.find_elements_by_class_name('buttonLoad')[3].click()
sleep(1)
html_basketball = driver.page_source

# tenis
driver.find_elements_by_class_name('main-item')[6].click()
#driver.find_elements_by_class_name('buttonLoad')[3].click()
sleep(1)
html_tenis = driver.page_source

driver.close()
''''''''''''''''''''''''''''''''''''''''''''

try:
    connect = MongoClient()
    print("Connected successfully!")
    db = connect.EasyBet
    db.FootballMatches.drop()
    db.BasketballMatches.drop()
    db.TennisMatches.drop()
except:
    print("Could not connect to MongoDB")


# fudbal
soup = BeautifulSoup(html_football, 'lxml')
wrapper = soup.select('.sportsoffer')
soup = BeautifulSoup(str(wrapper), 'lxml')
football_matches = soup.select('.match.botFlex')

collection = db.FootballMatches
for game in football_matches:
    soup = BeautifulSoup(str(game), 'lxml')
    time = soup.find('div', 'time').text
    league = soup.find('span','leagueName').text.encode('utf-8')
    pairs = soup.find('a','pairs').find_all('span')
    home_team = pairs[0].text.encode('utf-8')
    guest_team = pairs[1].text.encode('utf-8')
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

#kosarka
soup = BeautifulSoup(html_basketball, 'lxml')
wrapper = soup.select('.sportsoffer')
soup = BeautifulSoup(str(wrapper), 'lxml')
basketball_matches = soup.select('.match.botFlex')

collection = db.BasketballMatches
for game in basketball_matches:
    soup = BeautifulSoup(str(game), 'lxml')
    time = soup.find('div', 'time').text
    league = soup.find('span','leagueName').text.encode('utf-8')
    pairs = soup.find('a','pairs').find_all('span')
    home_team = pairs[0].text.encode('utf-8')
    guest_team = pairs[1].text.encode('utf-8')
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

#tenis
soup = BeautifulSoup(html_tenis, 'lxml')
wrapper = soup.select('.sportsoffer')
soup = BeautifulSoup(str(wrapper), 'lxml')
tenis_matches = soup.select('.match.botFlex')

collection = db.TennisMatches
for game in tenis_matches:
    soup = BeautifulSoup(str(game), 'lxml')
    time = soup.find('div', 'time').text
    league = soup.find('span','leagueName').text.encode('utf-8')
    pairs = soup.find('a','pairs').find_all('span')
    home_team = pairs[0].text.encode('utf-8')
    guest_team = pairs[1].text.encode('utf-8')
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
    
    