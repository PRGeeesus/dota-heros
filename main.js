const div = document.querySelector("#app");
var imageDIV = document.getElementById("imageDIV");
const base_url = "http://cdn.dota2.com"

var g_g_herodata;
var g_keys;
var g_randomlist = []
var g_targets = []

fetch("heroes.json")
  .then(response => response.json())
  .then(json => display(json));


const chooseRandom = (arr, num = 1) => {
  const res = [];
  for(let i = 0; i < num; ){
     const random = Math.floor(Math.random() * arr.length);
     if(res.indexOf(arr[random]) !== -1){
        continue;
     };
     res.push(arr[random]);
     i++;
  };
  return res;
};


function display(herodata){
    g_herodata = herodata;
    var g_keys = Object.keys(g_herodata);
    var size = 6;
    g_randomlist = chooseRandom(g_keys, size*size)
    g_targets = chooseRandom(g_randomlist,3)

    target_area = document.createElement("div");
    //target_area.style = "display: inline-grid;";
    g_targets.forEach(key=>
      {
        hero_img = document.createElement("img");
        hero_img.src = base_url + g_herodata[key].icon
        hero_img.id = key + "target"
        target_area.appendChild(hero_img)
      })

    var counterr = 0;
    grid = document.createElement("div");
    range(0,size).forEach(rows=>{
      row = document.createElement("div");
      range(0,size).forEach(collums=>{
        //hero_img = document.createElement("img");
        console.log(((rows*size)+collums))
        var id = g_randomlist[((rows*size)+collums)]
        hero_img = document.createElement("input");
        hero_img.type = "image"
        hero_img.src = base_url + g_herodata[id].icon
        hero_img.id = id
        hero_img.value = "x";
        hero_img.onclick=function(){check(id,g_targets);};
        row.appendChild(hero_img)
      })
      grid.appendChild(row)
      grid.style = "display: inline-grid;";
    }  
    )
    imageDIV.appendChild(target_area)
    imageDIV.appendChild(grid)   
}

function check(id)
{
  g_targets.forEach(key=>{
    if (id == key){
      tempdiv = document.getElementById(id);
      tempdiv.style = " border-width:2px; border-style:solid;"
      tempdiv.value = "found";
    }
  })
  checkForEnd()
}

function checkForEnd()
{
  var counter = 0;
  g_randomlist.forEach(ids => {
    tempdiv = document.getElementById(ids);
    if(tempdiv.value == "found")
    {
      counter = counter+1
    }
  });
  if(counter == 3)
  {
    console.log("ALL FOUND");

  }

}

function range(start, end) {
  var ans = [];
  for (let i = start; i < end; i++) {
      ans.push(i);
  }
  return ans;
}
