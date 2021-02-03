const div = document.querySelector("#app");
var imageDIV = document.getElementById("imageDIV");
const base_url = "http://cdn.dota2.com"


fetch("heroes.json")
  .then(response => response.json())
  .then(json => display(json));

  function checkHero(input){
    console.log(input)
  }


function display(herodata){
    var keys = Object.keys(herodata);
    keys.forEach(key => 
        {
        row = document.createElement("div");
        row.className = "one_square"
        row.style = "display: inline-grid;";

        hero_img = document.createElement("img");
        hero_name = document.createElement("p");
        hero_name.style = "display: inline-grid;";
        

        hero_img.src = base_url + herodata[key].img
        hero_name.innerHTML  = herodata[key].localized_name
        //imageDIV.appendChild(hero_img)
        //imageDIV.appendChild(hero_name)
        row.appendChild(hero_img)
        row.appendChild(hero_name)
        imageDIV.appendChild(row)

        //console.log(herodata[key].localized_name)
      })    
}