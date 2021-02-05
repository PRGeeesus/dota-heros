// goal: enter enemy heros
// get good conters
var g_herodata;
var g_keys;
var g_randomlist = []
var g_targets = []

game_Running = 0;

fetch("heroes.json")
  .then(response => response.json())
  .then(json => {
    g_herodata = json
    console.log(g_herodata)
  });


console.log(g_herodata)