// This Kata is intended as a small challenge for my students

// All Star Code Challenge #23

// There is a certain multiplayer game where players are assessed at the end of the game for merit. Players are ranked according to an internal scoring system that players don't see.

// You've discovered the formula for the scoring system!

// Create a function called scoring() that takes an array of Player objects and returns an array of player names, in order of descending score (highest score is index 0, 2nd highest is index 1, etc.).

// Each player's score is calculated as follows:

// 1 Each normal kill is worth 100 points
// 2 Each assist is worth 50 points
// 3 Each point of damage done is worth 0.5 points
// 4 Each point of healing done is worth 1 point
// 5 The longest kill streak is worth 2^N, where N is the number of kills of the streak
// 6 Environmental kills are worth 500 points (These are counted separately from normal kills)

// For each of the above statistic, a Player object contains a respective "key:value" pairing. All values except the 'name' are integers.

function scoring(arr) {
  let players = [];
  let objPlayers = [];
  arr.map((player) => {
    const playerName = player.name;
    const pointsNormKills = player.normKill * 100;
    const pointsAssist = player.assist * 50;
    const pointsDamage = player.damage * 0.5;
    const pointsHealing = player.healing;
    const pointsStreak = Math.pow(2, player.streak);
    const pointsEnv = player.envKill * 500;

    const pointsSumPlayer =
      pointsNormKills +
      pointsAssist +
      pointsDamage +
      pointsHealing +
      pointsStreak +
      pointsEnv;

    objPlayers.push({ name: playerName, points: pointsSumPlayer });
  });
  objPlayers.sort((a, b) => b.points - a.points);

  objPlayers.map((p) => {
    players.push(p.name);
  });

  console.log(players);

  return players;
}

var player1 = {
  name: 'JuanPablo',
  normKill: 5,
  assist: 12,
  damage: 3200,
  healing: 0,
  streak: 4,
  envKill: 1,
};
var player2 = {
  name: 'ProfX',
  normKill: 2,
  assist: 14,
  damage: 600,
  healing: 1500,
  streak: 0,
  envKill: 0,
};

console.log(scoring([player1, player2]), ['JuanPablo', 'ProfX']);


// Clever
function scoring(array) {
  var score = player => 
    player.normKill * 100
    + player.assist * 50
    + player.damage * 0.5
    + player.healing
    + Math.pow(2, player.streak)
    + player.envKill * 500;
  
  return array
    .map(player => [ player.name, score(player) ])
    .sort((a, b) => b[1] - a[1])
    .map(pair => pair[0]);
}