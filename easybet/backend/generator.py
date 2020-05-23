import sys
from pymongo import MongoClient
import pymongo
import random
import re

connect = MongoClient()
db = connect.EasyBet

quota = int(sys.argv[1])
sport = sys.argv[2]
leagues = sys.argv[3]
if len(leagues)>0:
    leagues = leagues.split(',')
limit = int(sys.argv[4])

searchableMatches = []

if sport == "all":
    searchableMatches += db.footballMatches.find({})
    searchableMatches += db.basketballMatches.find({})
    searchableMatches += db.tennisMatches.find({})
elif sport == "football":
    if len(leagues) > 0:
        searchableMatches += db.footballMatches.find({"league": {"$in": leagues}})
    else: 
        searchableMatches += db.footballMatches.find({})
elif sport == "basketball":
    if len(leagues) > 0:
        searchableMatches += db.basketballMatches.find({"league": {"$in": leagues}})
    else: 
        searchableMatches += db.basketballMatches.find({})
elif sport == "tennis":
    if len(leagues) > 0:
        searchableMatches += db.tennisMatches.find({"league": {"$in": leagues}})
    else: 
        searchableMatches += db.tennisMatches.find({})


chosen = set()
matches = []
if limit < len(searchableMatches):
    while(len(chosen) < limit):
        chosen.add(random.randint(0,len(searchableMatches)-1))
    for ch in chosen:
        matches.append(searchableMatches[ch])
else:
    matches = searchableMatches

quotaEpsilon = pow(quota, 1.0/limit)
for match in matches:
    obj = {}
    obj["time"] = match["time"]
    obj["homeTeam"] = match["homeTeam"]
    obj["guestTeam"] = match["guestTeam"]
    bestType = ""
    bestValue = 0
    for key,value in match.items():
        if re.match(r'odd.+', key) and value != "-": 
            if abs(float(bestValue) - quotaEpsilon) > abs(float(value) - quotaEpsilon):
                bestValue = float(value)
                bestType = key[3:]
    obj["oddType"] = bestType
    obj["oddValue"] = bestValue
    print(obj)