import sys
import os
from pymongo import MongoClient
import pymongo
import re

connect = MongoClient()
db = connect.EasyBet

quota = int(sys.argv[1])
sport = sys.argv[2]
leagues = sys.argv[3]
if len(leagues)>0:
    leagues = leagues.split(',')
    #Australia - Queensland Premier League , Australia 1 Play Off , Austria Regionalliga Ost ","limit":"3"}}}
limit = int(sys.argv[4])

query = ""
if len(leagues) > 0:
    query = "--query=" +  "\'{ \"league\":{ " + '\"$in\": ['
    i = -1
    for i in range(len(leagues)-1):
        query += '\"' + leagues[i].strip() + '\"' + ","
    query += '\"' + leagues[i+1].strip() + '\"]}}\' '
    
if sport == "all":
    #onemoguceno u formularu
    searchableMatches += db.footballMatches.find({})
    searchableMatches += db.basketballMatches.find({})
    searchableMatches += db.tennisMatches.find({})
elif sport == "football":
    os.system("mongoexport --db=EasyBet --collection=footballMatches --fields=time,homeTeam,guestTeam,odd1,oddX,odd2,odd1X,odd12,oddX2,odd0to2,odd3plus,odd4plus --type=csv --out=scripts/matches.csv " + query) 
elif sport == "basketball":
    os.system("mongoexport --db=EasyBet --collection=basketballMatches --fields=time,homeTeam,guestTeam,odd1,oddX,odd2,odd1X,oddX2,oddWinner1,oddWinner2  --type=csv --out=scripts/matches.csv " + query) 
elif sport == "tennis":
    os.system("mongoexport --db=EasyBet --collection=tennisMatches --fields=time,homeTeam,guestTeam,odd1,odd2,oddFirstSet1,oddFirstSet2,oddHen1,oddHen2  --type=csv --out=scripts/matches.csv " + query)

import pandas as pd
import csv 
import numpy
import time
import random

df_matches = pd.read_csv('scripts/matches.csv')
rows = df_matches.shape[0]
columns = df_matches.shape[1]

game_time = df_matches['time']
home_team = df_matches['homeTeam']
guest_team = df_matches['guestTeam']
d = []
idx = 0
for i in range(0,rows):
    for j in range(3,columns):
        name = df_matches.columns[j]
        value = df_matches.iloc[i][j]
        if value == '-':
            continue
        d.append({'game_id': idx, 'time':game_time[i], 'home_team': home_team[i], 'guest_team': guest_team[i], 'name': name, 'value': value})
    idx += 1
df = pd.DataFrame(d)
values = df.values

def combinations(values, limit, quota):
    old_time = time.time()
    eps = 0.2
    n = len(values)
    sh = random.sample(range(n),n)
    values = tuple([values[sh[i]] for i in range(len(df))])
    
    if limit > n: 
        return
      
    index = numpy.arange(limit)
    while True: 
        for i in reversed(range(limit)): 
            if index[i] != i + n - limit: 
                break
        else: 
            return
        index[i] += 1
        for j in range(i + 1, limit): 
            index[j] = index[j-1] + 1
        
        for_tuple = []
        game_id = []
        for i in index:
            if values[i][0] in game_id: 
                break
            for_tuple.append(values[i])
            game_id.append(values[i][0])
            
        comb = tuple(for_tuple)
        product = 1.0
        
        for game in comb:
            product *= float(game[5])
        if product <= (float(quota)+eps) and product >= (float(quota)-eps):
            result = comb
            return result
        if time.time() - old_time > 2:
            return None

result = None
timeout = time.time()
while result is None:
    if time.time() - timeout > 20:
        break
    result = combinations(values, limit, quota)

if result is not None:
    for match in result:
        obj = {}
        obj["time"] = match[1]
        obj["homeTeam"] = match[2]
        obj["guestTeam"] = match[3]
        obj["oddType"] = match[4]
        obj["oddValue"] = match[5]
        print(obj)