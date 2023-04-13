function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1
          }
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12
          }
        }
      }
    };
  }

  function numPointsScored(playerName) {
    let gameObj = gameObject();
    for (let teamKey in gameObj) {
      let teamObj = gameObj[teamKey];
      for (let playerKey in teamObj["players"]) {
        let playerObj = teamObj["players"][playerKey];
        if (playerObj["playerName"] === playerName) {
          return playerObj["points"];
        }
      }
    }
  }
  
  function shoeSize(playerName) {
    let gameObj = gameObject();
    for (let teamKey in gameObj) {
      let teamObj = gameObj[teamKey];
      for (let playerKey in teamObj["players"]) {
        let playerObj = teamObj["players"][playerKey];
        if (playerObj["playerName"] === playerName) {
          return playerObj["shoe"];
        }
      }
    }
  }
  
  function teamColors(teamName) {
    let gameObj = gameObject();
    for (let teamKey in gameObj) {
      let teamObj = gameObj[teamKey];
      if (teamObj["teamName"] === teamName) {
        return teamObj["colors"];
      }
    }
  }
  
  function teamNames() {
    let gameObj = gameObject();
    let teamNamesArr = [];
    for (let teamKey in gameObj) {
      let teamObj = gameObj[teamKey];
      teamNamesArr.push(teamObj["teamName"]);
    }
    return teamNamesArr;
  }
  
  function playerNumbers(teamName) {
    let gameObj = gameObject();
    let jerseyNumsArr = [];
    for (let teamKey in gameObj) {
      let teamObj = gameObj[teamKey];
      if (teamObj["teamName"] === teamName) {
        for (let playerKey in teamObj["players"]) {
          let playerObj = teamObj["players"][playerKey];
          jerseyNumsArr.push(playerObj["number"]);
        }
      }
    }
    return jerseyNumsArr;
  }
  
  function playerStats(playerName) {
    let gameObj = gameObject();
    for (let teamKey in gameObj) {
      let teamObj = gameObj[teamKey];
      for (let playerKey in teamObj["players"]) {
        let playerObj = teamObj["players"][playerKey];
        if (playerObj["playerName"] === playerName) {
          return {
            number: playerObj["number"],
            shoe: playerObj["shoe"],
            points: playerObj["points"],
            rebounds: playerObj["rebounds"],
            assists: playerObj["assists"],
            steals: playerObj["steals"],
            blocks: playerObj["blocks"],
            slamDunks: playerObj["slamDunks"]
          }
        }
      }
    }
  }
  
  function bigShoeRebounds() {
    let gameObj = gameObject();
    let largestShoeSize = 0;
    let rebounds = 0;
    for (let teamKey in gameObj) {
      let teamObj = gameObj[teamKey];
      for (let playerKey in teamObj["players"]) {
        let playerObj = teamObj["players"][playerKey];
        if (playerObj["shoe"] > largestShoeSize) {
          largestShoeSize = playerObj["shoe"];
          rebounds = playerObj["rebounds"];
        }
      }
    }
    return rebounds;
  }
  
  