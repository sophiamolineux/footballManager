const player = {};

player.name = "Jamie Vardy";
player.position = "ST";
player.hasBall = true;
// stats according to https://www.premierleague.com/players/8979/Jamie-Vardy/stats
player.shooting = 48

function shoot() {
  let rand = Math.round(Math.random() * 100);
  let action = player.name + " Shoots! ";
  if(rand > player.shooting) {
    action += "\n" + player.name + " Misses.";
  } else {
    action += "\n" + player.name + " Shoots on Target!";
  }
  return action;
}

function cycle() {
  let rand = Math.round(Math.random() * 100);
  let action = "";
  if(rand < 75) {
    action = shoot();
  } else {
    action = player.name + " Dribbles!";
  }
  console.log(action);
}

setInterval(cycle, 1000);
