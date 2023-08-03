//SIDEBAR
// Set the width of the sidebar to 150px when opened
function openNav() {
  document.getElementById("sidebar").style.width = "150px";
}
// Set the width of the sidebar to 0 when closed
function closeNav() {
  document.getElementById("sidebar").style.width = "0";
}

//SEARCH BAR
function searchFunction() {
  // Declare variables
  var searchBar, enteredFilter, landscapeClass, portraitClass, getImage, i, altValue;
  searchBar = document.getElementById('search-bar');
  enteredFilter = searchBar.value.toUpperCase();
  landscapeClass = document.getElementsByClassName("landscapeContainer");
  portraitClass = document.getElementsByClassName('portraitContainer');

  // Loop through all landscape pictures, and hide those that don't match the search query
  for (i = 0; i < landscapeClass.length; i++) {
    getImage = landscapeClass[i].getElementsByTagName("img")[0];
    altValue = getImage.alt;
    if (altValue.toUpperCase().indexOf(enteredFilter) > -1) {
      landscapeClass[i].style.display = "";
    } else {
      landscapeClass[i].style.display = "none";
    }
  }

  //Loop through all portrait pictures, and hide those that don't match the search query
  for (i = 0; i < portraitClass.length; i++) {
    getImage = portraitClass[i].getElementsByTagName("img")[0];
    altValue = getImage.alt;
    if (altValue.toUpperCase().indexOf(enteredFilter) > -1) {
      portraitClass[i].style.display = "";
    } else {
      portraitClass[i].style.display = "none";
    }
  }
}

//LIST OF IMAGES ARRAY
const imageList = [
  {
    orientation: "portrait",
    type: "Nature",
    source: "Photos/Fall Street.jpg",
    tags: "Fall Colors Trees"
  },
  {
    orientation: "portrait",
    type: "City",
    source: "Photos/Basketball Court.jpg",
    tags: "Basketball Net Toronto"
  },
  {
    orientation: "portrait",
    type: "Nature",
    source: "Photos/Grand Canyon Right Cliff.jpg",
    tags: "Grand Canyon Desert"
  },
  {
    orientation: "portrait",
    type: "Nature",
    source: "Photos/White Moon 1.jpg",
    tags: "White Moon Sky Night"
  },
  {
    orientation: "landscape",
    type: "Nature",
    source: "Photos/3 Tree Colors.jpg",
    tags: "Fall Colors Trees"
  },
  {
    orientation: "landscape",
    type: "City",
    source: "Photos/Vegas Strip.jpeg",
    tags: "Las Vegas Strip Desert"
  },
  {
    orientation: "portrait",
    type: "Nature",
    source: "Photos/Agakhan Museum.jpeg",
    tags: "Museum Agakhan"
  },
  {
    orientation: "portrait",
    type: "Vehicles",
    source: "Photos/Air Canada Express 2.jpeg",
    tags: "Air Canada Plane"
  },
  {
    orientation: "portrait",
    type: "Vehicles",
    source: "Photos/Air Canada Express 3.jpeg",
    tags: "Air Canada Plane"
  },
  {
    orientation: "portrait",
    type: "Nature",
    source: "Photos/Dreamworks.jpeg",
    tags: "Moon Sky"
  },
  {
    orientation: "landscape",
    type: "Nature",
    source: "Photos/Orange Moon.jpg",
    tags: "Orange Moon"
  },
  {
    orientation: "landscape",
    type: "Nature",
    source: "Photos/Orange Moon 2.jpeg",
    tags: "Orange Moon"
  },
  {
    orientation: "landscape",
    type: "Nature",
    source: "Photos/Orange Moon 3.jpg",
    tags: "Orange Moon"
  },
  {
    orientation: "portrait",
    type: "Nature",
    source: "Photos/Basketball Net.JPG",
    tags: "Basketball Net Trees"
  },
  {
    orientation: "portrait",
    type: "Nature",
    source: "Photos/Tree Sunset.jpg",
    tags: "Sunset Trees"
  },
  {
    orientation: "portrait",
    type: "City",
    source: "Photos/Statue of Liberty.jpeg",
    tags: "Statue Liberty New York Las Vegas"
  },
  {
    orientation: "portrait",
    type: "City",
    source: "Photos/Hoover Dam River 2.jpeg",
    tags: "Hoover Dam Water Desert River"
  },
  {
    orientation: "portrait",
    type: "City",
    source: "Photos/Coca Cola Bottle.JPG",
    tags: "Coca Cola Bottle Las Vegas"
  },
  {
    orientation: "portrait",
    type: "Objects",
    source: "Photos/Galileo Thermometer 1.jpg",
    tags: "Galileo Thermometer"
  },
  {
    orientation: "portrait",
    type: "Objects",
    source: "Photos/Galileo Thermometer 2.jpg",
    tags: "Galileo Thermometer"
  },
  {
    orientation: "portrait",
    type: "Objects",
    source: "Photos/Galileo Thermometer 3.jpg",
    tags: "Galileo Thermometer"
  },
  {
    orientation: "portrait",
    type: "Animals",
    source: "Photos/Giraffe.jpg",
    tags: "Giraffe"
  },
  {
    orientation: "landscape",
    type: "Animals",
    source: "Photos/Rhinosaurus In Mud.jpg",
    tags: "Rhinoceros"
  },
  {
    orientation: "portrait",
    type: "Animals",
    source: "Photos/Giraffe 2.jpeg",
    tags: "Giraffe"
  },
  {
    orientation: "landscape",
    type: "Vehicles",
    source: "Photos/Air Canada 2.jpeg",
    tags: "Air Canada Plane"
  },
  {
    orientation: "landscape",
    type: "Vehicles",
    source: "Photos/Air Canada.jpeg",
    tags: "Air Canada Plane"
  },
  {
    orientation: "landscape",
    type: "Vehicles",
    source: "Photos/Air Canada Express.jpeg",
    tags: "Air Canada Plane"
  },
  {
    orientation: "landscape",
    type: "Vehicles",
    source: "Photos/Air Canada Rouge.jpeg",
    tags: "Air Canada Plane"
  },
  {
    orientation: "landscape",
    type: "City",
    source: "Photos/CN Tower 1.jpg",
    tags: "CN Tower Toronto"
  },
  {
    orientation: "landscape",
    type: "City",
    source: "Photos/CN Tower 2.jpg",
    tags: "CN Tower Toronto"
  },
  {
    orientation: "portrait",
    type: "Animals",
    source: "Photos/Brown Bird 1.jpg",
    tags: "Brown Bird"
  },
  {
    orientation: "landscape",
    type: "Animals",
    source: "Photos/Brown Bird 2.jpg",
    tags: "Brown Bird"
  },
  {
    orientation: "landscape",
    type: "Animals",
    source: "Photos/Brown Bird 3.jpg",
    tags: "Brown Bird"
  },
  {
    orientation: "portrait",
    type: "Nature",
    source: "Photos/Golden Tree.JPG",
    tags: "Golden Tree Fall Colors Yellow"
  },
  {
    orientation: "portrait",
    type: "Nature",
    source: "Photos/Hoover Dam River 3.JPG",
    tags: "Hoover Dam River Water Desert"
  },
  {
    orientation: "portrait",
    type: "Nature",
    source: "Photos/Red Leaves.JPG",
    tags: "Red Trees Fall Colors Leaves"
  },
  {
    orientation: "portrait",
    type: "Nature",
    source: "Photos/Red Leaves 2.jpeg",
    tags: "Red Trees Fall Colors Leaves"
  },
  {
    orientation: "landscape",
    type: "Objects",
    source: "Photos/Blue Lamp.JPG",
    tags: "Blue Lamp"
  },
  {
    orientation: "landscape",
    type: "City",
    source: "Photos/Blue Car Street.jpg",
    tags: "Street Blue Night Car"
  },
  {
    orientation: "landscape",
    type: "",
    source: "Photos/Fireworks 1.jpg",
    tags: "Fireworks Night"
  },
  {
    orientation: "landscape",
    type: "",
    source: "Photos/Fireworks 2.jpg",
    tags: "Fireworks Night"
  },
  {
    orientation: "portrait",
    type: "Animals",
    source: "Photos/Gold Finch 3.jpg",
    tags: "Bird Yellow Golden Finch"
  },
  {
    orientation: "landscape",
    type: "Animals",
    source: "Photos/Gold Finch 2.jpg",
    tags: "Bird Yellow Golden Finch"
  },
  {
    orientation: "portrait",
    type: "Animals",
    source: "Photos/Gold Finch 1.jpg",
    tags: "Bird Yellow Golden Finch"
  },
  {
    orientation: "portrait",
    type: "Nature",
    source: "Photos/Sedona 1.jpeg",
    tags: "Sedona Desert Mountain"
  },
  {
    orientation: "landscape",
    type: "Nature",
    source: "Photos/Sedona 3.jpg",
    tags: "Sedona Desert Mountain"
  },
  {
    orientation: "portrait",
    type: "Nature",
    source: "Photos/Sedona 2.jpeg",
    tags: "Sedona Desert Mountain"
  },
  {
    orientation: "landscape",
    type: "Nature",
    source: "Photos/Grand Canyon Dead Tree.jpg",
    tags: "Grand Canyon Desert Dead Trees"
  },
  {
    orientation: "landscape",
    type: "Nature",
    source: "Photos/Grand Canyon.jpeg",
    tags: "Grand Canyon Desert"
  },
  {
    orientation: "landscape",
    type: "Nature",
    source: "Photos/Grand Canyon Rock.JPG",
    tags: "Grand Canyon Desert"
  },
  {
    orientation: "landscape",
    type: "City",
    source: "Photos/LV Sign.jpeg",
    tags: "Las Vegas Sign"
  },
  {
    orientation: "landscape",
    type: "City",
    source: "Photos/NY City.jpeg",
    tags: "New York City Las Vegas"
  },
  {
    orientation: "landscape",
    type: "City",
    source: "Photos/NY Sign.JPG",
    tags: "New York City Sign Las Vegas"
  },
  {
    orientation: "landscape",
    type: "City",
    source: "Photos/NY Sign 2.JPG",
    tags: "New York City Sign Las Vegas"
  },
  {
    orientation: "landscape",
    type: "City",
    source: "Photos/Hoover Dam Sign.jpeg",
    tags: "Hoover Dam Sign Desert"
  },
  {
    orientation: "landscape",
    type: "Vehicles",
    source: "Photos/Goodyear Blimp.jpg",
    tags: "Goodyear Blimp"
  },
  {
    orientation: "landscape",
    type: "Objects",
    source: "Photos/Jack'O Lantern.jpeg",
    tags: "Pumpkin Jack'O Lantern Halloween"
  },
  {
    orientation: "landscape",
    type: "Objects",
    source: "Photos/LOTR Book.jpg",
    tags: "Lord of the Rings Book"
  },
  {
    orientation: "landscape",
    type: "Objects",
    source: "Photos/LOTR Book 2.JPG",
    tags: "Lord of the Rings Book"
  },
  {
    orientation: "landscape",
    type: "",
    source: "Photos/Light Fixture.jpg",
    tags: "Shiny Light Fixture Golden"
  },
  {
    orientation: "landscape",
    type: "Nature",
    source: "Photos/Pink Skies.jpg",
    tags: "Pink Sky Sunset"
  },
  {
    orientation: "landscape",
    type: "Objects",
    source: "Photos/Pocket Watch.jpg",
    tags: "Pocket Watch"
  },
  {
    orientation: "landscape",
    type: "Nature",
    source: "Photos/Stars.jpeg",
    tags: "Stars Night Sky"
  },
  {
    orientation: "landscape",
    type: "Nature",
    source: "Photos/Sunset.JPG",
    tags: "Sunset Sky"
  },
  {
    orientation: "landscape",
    type: "Animals",
    source: "Photos/Rhinosaurus.jpg",
    tags: "Rhinoceros"
  },
  {
    orientation: "landscape",
    type: "Animals",
    source: "Photos/Rocky Goats.jpg",
    tags: "Rocks Goats"
  },
  {
    orientation: "landscape",
    type: "Nature",
    source: "Photos/Sunset Street 2.JPG",
    tags: "Sunset Street"
  },
  {
    orientation: "landscape",
    type: "Nature",
    source: "Photos/Tree Outline 2.JPG",
    tags: "Sunset Tree Outline"
  },
  {
    orientation: "landscape",
    type: "Animals",
    source: "Photos/Woodpecker 1.jpeg",
    tags: "Woodpecker Bird"
  },
  {
    orientation: "landscape",
    type: "Animals",
    source: "Photos/Woodpecker 2.jpg",
    tags: "Woodpecker Bird"
  },
  {
    orientation: "portrait",
    type: "Nature",
    source: "Photos/Tree Outline.JPG",
    tags: "Sunset Tree Outline"
  },
  {
    orientation: "portrait",
    type: "Nature",
    source: "Photos/White Moon 1.jpg",
    tags: "White Moon Night"
  },
  {
    orientation: "portrait",
    type: "Nature",
    source: "Photos/White Moon 2.JPG",
    tags: "White Moon Night"
  },
  {
    orientation: "portrait",
    type: "Nature",
    source: "Photos/Sunset Street.JPG",
    tags: "Sunset Sky Street"
  },
  {
    orientation: "portrait",
    type: "Nature",
    source: "Photos/Winter 2.jpg",
    tags: "Snow Backyard Winter"
  },
  {
    orientation: "landscape",
    type: "Nature",
    source: "Photos/Winter 1.jpeg",
    tags: "Snow Backyard Winter"
  },
  {
    orientation: "portrait",
    type: "Nature",
    source: "Photos/Winter 3.jpeg",
    tags: "Snow Backyard Winter"
  },
  {
    orientation: "landscape",
    type: "Animals",
    source: "Photos/Zebras.jpg",
    tags: "Zebras"
  },
  {
    orientation: "landscape",
    type: "City",
    source: "Photos/Hoover Dam.jpg",
    tags: "Hoover Dam Desert"
  },
  {
    orientation: "panoramic",
    type: "Nature",
    source: "Photos/Algonquin Panoramic.jpg",
    tags: "Algonquin Panoramic Cliff Trees"
  },
  {
    orientation: "landscape",
    type: "Nature",
    source: "Photos/Sedona Valley Rock.jpg",
    tags: "Sedona Valley Rock Desert"
  },
  {
    orientation: "landscape",
    type: "Nature",
    source: "Photos/Sunset Over Harbor.jpg",
    tags: "Sunset Sky Harbor Water Lake"
  },
  {
    orientation: "portrait",
    type: "City",
    source: "Photos/Toronto 2 Buildings.jpg",
    tags: "Toronto Buildings"
  },
  {
    orientation: "portrait",
    type: "Nature",
    source: "Photos/Forest Road.jpeg",
    tags: "Forest Road"
  },
  {
    orientation: "portrait",
    type: "Vehicles City",
    source: "Photos/Orange Street.jpg",
    tags: "Orange Street Rain Sunset"
  },
  {
    orientation: "portrait",
    type: "Nature",
    source: "Photos/Yellow Leaves.JPG",
    tags: "Fall Leaves Yellow"
  },
  {
    orientation: "landscape",
    type: "",
    source: "Photos/Hoover Dam Wide-Angle River.jpg",
    tags: "Hoover Dam River Desert"
  },
  {
    orientation: "landscape",
    type: "City",
    source: "Photos/Hoover Dam POV.jpg",
    tags: "Hoover Dam"
  },
  {
    orientation: "landscape",
    type: "Nature",
    source: "Photos/Grand Canyon Zoomed Out Wide-Angle.jpg",
    tags: "Grand Canyon Desert Mountains"
  },
  {
    orientation: "landscape",
    type: "Objects",
    source: "Photos/5 Rings.JPG",
    tags: "Rings"
  },
  {
    orientation: "landscape",
    type: "Nature",
    source: "Photos/3 Color Water.jpg",
    tags: "Water Blue Lake"
  },
  {
    orientation: "portrait",
    type: "Animals",
    source: "Photos/Giraffe Painting.jpg",
    tags: "Giraffe Painting"
  },
  {
    orientation: "landscape",
    type: "City",
    source: "Photos/Sunset Bridge.jpg",
    tags: ""
  },
  {
    orientation: "landscape" ,
    type: "Nature",
    source: "Photos/Cloudy Sunset.jpg" ,
    tags: "Sunset Sky"
  },
  {
    orientation: "landscape" ,
    type: "Nature",
    source: "Photos/Creek.jpg" ,
    tags: "Creek Water"
  },
  {
    orientation: "portrait" ,
    type: "City",
    source: "Photos/Toronto Building.jpg" ,
    tags: "Toronto Building"
  },
  {
    orientation: "portrait" ,
    type: "Vehicles",
    source: "Photos/CRV Back Light.jpg" ,
    tags: "Car Back Light"
  },
  {
    orientation: "portrait" ,
    type: "Nature",
    source: "Photos/Grand Canyon Cliffs 2.jpg" ,
    tags: "Grand Canyon Cliffs Desert"
  },
  {
    orientation: "landscape" ,
    type: "Nature",
    source: "Photos/Grand Canyon Sunset.jpg" ,
    tags: "Grand Canyon Desert Sunset Sky"
  },
  {
    orientation: "landscape" ,
    type: "Nature",
    source: "Photos/Colorful Sky.jpg" ,
    tags: "Colorful Sky Sunset"
  },
  {
    orientation: "landscape" ,
    type: "Nature",
    source: "Photos/Water & Rocks.jpg" ,
    tags: "Water Lake Rocks Blue"
  },
  {
    orientation: "landscape" ,
    type: "Nature",
    source: "Photos/Golden Half-Moon.jpg" ,
    tags: "Golden Moon Night"
  },
  {
    orientation: "portrait" ,
    type: "Nature",
    source: "Photos/Yellow Canopy.jpg" ,
    tags: "Yellow Leaves Trees Fall"
  },
  {
    orientation: "portrait" ,
    type: "City",
    source: "Photos/Tunnel 1.jpg" ,
    tags: "Tunnel Lights Red Purple"
  },
  {
    orientation: "portrait" ,
    type: "City",
    source: "Photos/Tunnel 2.jpg" ,
    tags: "Tunnel Lights Red Purple"
  },
  {
    orientation: "portrait" ,
    type: "City",
    source: "Photos/Tunnel 2.jpg" ,
    tags: "Tunnel Lights Red Purple"
  },
  {
    orientation: "portrait" ,
    type: "City",
    source: "Photos/Tunnel 3.jpg" ,
    tags: "Tunnel Black White"
  },
  {
    orientation: "portrait" ,
    type: "Nature",
    source: "Photos/Fall Trees Algonquin.jpg" ,
    tags: "Fall Leaves Trees Yellow"
  },
  {
    orientation: "portrait" ,
    type: "Nature",
    source: "Photos/Blue and Gold Sky.jpg" ,
    tags: "Sky Clouds Blue"
  },
  {
    orientation: "portrait" ,
    type: "Nature",
    source: "Photos/Late Evening Sunset Sky.jpg" ,
    tags: "Sunset Sky Clouds Pink"
  },
  {
    orientation: "portrait" ,
    type: "Nature",
    source: "Photos/Pink Sky Scar.jpg" ,
    tags: "Pink Sky Sunset Clouds"
  },
  {
    orientation: "landscape" ,
    type: "Nature",
    source: "Photos/Pink Sky Scar 2.jpg" ,
    tags: "Pink Sky Sunset Clouds"
  },
  {
    orientation: "portrait" ,
    type: "Nature",
    source: "Photos/Cloud Outline Sky.jpg" ,
    tags: "Cloud Sunset Sky Pink"
  },
  {
    orientation: "portrait" ,
    type: "Nature",
    source: "Photos/Colorful Sky 2.jpg" ,
    tags: "Pink Sky Sunset Clouds"
  },
  {
    orientation: "portrait" ,
    type: "Nature",
    source: "Photos/Bubble Clouds.jpg" ,
    tags: "Sunset Gold Blue Sky"
  },
  {
    orientation: "landscape" ,
    type: "Nature",
    source: "Photos/Bubble Sky 2.jpg" ,
    tags: "Gold Purple Sky Sunset Clouds"
  },
  {
    orientation: "landscape" ,
    type: "Vehicles",
    source: "Photos/ALCI Plane.jpg" ,
    tags: "Plane Red Blue"
  },
  {
    orientation: "landscape" ,
    type: "Vehicles",
    source: "Photos/ALCI Plane 2.jpg" ,
    tags: "Plane Red Blue"
  },
  {
    orientation: "landscape" ,
    type: "Animals",
    source: "Photos/Big Raven.jpg" ,
    tags: "Raven Outline Black"
  },
  {
    orientation: "landscape" ,
    type: "Animals",
    source: "Photos/Bird Looking From Feeder.JPG" ,
    tags: "Bird Feeder Yellow"
  },
  {
    orientation: "landscape" ,
    type: "Animals",
    source: "Photos/Bird with Red Head.jpg" ,
    tags: "Bird Red Head"
  },
  {
    orientation: "landscape" ,
    type: "Animals",
    source: "Photos/Bird with Red Head 2.jpg" ,
    tags: "Bird Red Head"
  },
  {
    orientation: "portrait" ,
    type: "Nature",
    source: "Photos/Blue Skies With Cloud Lines.jpg" ,
    tags: "Blue Sky Clouds"
  },
  {
    orientation: "portrait" ,
    type: "Nature",
    source: "Photos/Dead Trees Grand Canyon.jpg" ,
    tags: "Desert Dead Tree Grand Canyon"
  },
  {
    orientation: "landscape" ,
    type: "Nature",
    source: "Photos/Fiery Sunset over Houses.jpg" ,
    tags: "Sunset Red Pink Sky"
  },
  {
    orientation: "portrait" ,
    type: "Animals",
    source: "Photos/Grackle 1.jpg" ,
    tags: "Blue Bird Black Fence Grackle"
  },
  {
    orientation: "landscape" ,
    type: "Animals",
    source: "Photos/Grackle 2.jpg" ,
    tags: "Blue Bird Black Fence Grackle"
  },
  {
    orientation: "landscape" ,
    type: "Animals",
    source: "Photos/Grackle 3.jpg" ,
    tags: "Blue Bird Black Fence Grackle"
  },
  {
    orientation: "landscape" ,
    type: "Nature",
    source: "Photos/Green Tree Leaves.jpg" ,
    tags: "Green Leaves Trees"
  },
  {
    orientation: "portrait" ,
    type: "Objects",
    source: "Photos/Himalayan Salt Rock Lamp.jpg" ,
    tags: "Glowing Rocks Lamp Salt Orange Himalayan"
  },
  {
    orientation: "landscape" ,
    type: "Nature",
    source: "Photos/Hoover Dam River.jpg" ,
    tags: "Desert River Hoover Dam Mountains"
  },
  {
    orientation: "landscape" ,
    type: "Objects",
    source: "Photos/Light Fixture 2.jpg" ,
    tags: "Shiny Light Fixture Golden"
  },
  {
    orientation: "portrait" ,
    type: "Animals",
    source: "Photos/Mourning Dove Sitting.jpg" ,
    tags: "Mourning Dove Bird"
  },
  {
    orientation: "landscape" ,
    type: "Objects",
    source: "Photos/PG3s.jpg" ,
    tags: "Shoes Paul George PG3s"
  },
  {
    orientation: "portrait" ,
    type: "Nature",
    source: "Photos/Pink Tree 1.jpg" ,
    tags: "Pink Trees Flowers"
  },
  {
    orientation: "portrait" ,
    type: "Nature",
    source: "Photos/Pink Tree 2.jpg" ,
    tags: "Pink Trees Flowers"
  },
  {
    orientation: "landscape" ,
    type: "Nature",
    source: "Photos/Pink Tree 3.jpg" ,
    tags: "Pink Trees Flowers"
  },
  {
    orientation: "landscape" ,
    type: "Nature",
    source: "Photos/Pink Tree 4.jpg" ,
    tags: "Pink Trees Flowers"
  },
  {
    orientation: "portrait" ,
    type: "Nature",
    source: "Photos/Pink Tree 6.jpg" ,
    tags: "Pink Trees Flowers"
  },
  {
    orientation: "landscape" ,
    type: "Animals",
    source: "Photos/Posing Redwing Bird.jpg" ,
    tags: "Redwing Bird"
  },
  {
    orientation: "landscape" ,
    type: "Animals",
    source: "Photos/Robin.jpg" ,
    tags: "Bird Robin"
  },
  {
    orientation: "landscape" ,
    type: "Animals",
    source: "Photos/Robin 2.jpg" ,
    tags: "Bird Robin"
  },
  {
    orientation: "landscape" ,
    type: "Animals",
    source: "Photos/Squirrel on Fence.jpg" ,
    tags: "Squirrel Fence"
  },
  {
    orientation: "landscape" ,
    type: "Animals",
    source: "Photos/Squirrel on Fence 2.jpg" ,
    tags: "Squirrel Fence"
  },
  {
    orientation: "landscape" ,
    type: "Nature",
    source: "Photos/White Tree 1.jpg" ,
    tags: "White Trees Flowers"
  },
  {
    orientation: "portrait" ,
    type: "Animals",
    source: "Photos/Black and White Raven.jpg" ,
    tags: "Raven Bird Black White Roof"
  },
  {
    orientation: "landscape" ,
    type: "Animals",
    source: "Photos/3 Ravens.jpg" ,
    tags: "Ravens Birds Roof"
  },
  {
    orientation: "landscape" ,
    type: "Animals",
    source: "Photos/Red & Purple Tree Raven.jpg" ,
    tags: "Raven Bird Roof"
  },
  {
    orientation: "portrait" ,
    type: "Animals",
    source: "Photos/Fluffy Raven.jpg" ,
    tags: "Raven Bird Roof"
  },
  {
    orientation: "landscape" ,
    type: "Animals",
    source: "Photos/Purple Sky Raven.jpg" ,
    tags: "Raven Bird Purple Roof"
  },
  {
    orientation: "landscape" ,
    type: "Animals",
    source: "Photos/Raven Solo Outline Right Roof.jpg" ,
    tags: "Raven Bird Blue Roof"
  },
  {
    orientation: "landscape" ,
    type: "Animals",
    source: "Photos/Posing Swan.jpg" ,
    tags: "Swan Water Bird"
  },
  {
    orientation: "landscape" ,
    type: "Animals",
    source: "Photos/Swimming Swan.jpg" ,
    tags: "Swan Water Bird"
  },
  {
    orientation: "landscape" ,
    type: "Animals",
    source: "Photos/Swimming Swan 2.jpg" ,
    tags: "Swan Water Bird"
  },
  {
    orientation: "landscape" ,
    type: "Animals",
    source: "Photos/Swan in Grass.jpg" ,
    tags: "Swan Water Bird"
  },
  {
    orientation: "landscape" ,
    type: "Animals",
    source: "Photos/Waterbird 2.jpg" ,
    tags: "Bird Water Brown"
  },
  {
    orientation: "landscape" ,
    type: "Animals",
    source: "Photos/Zoo Rhinoceros.jpg" ,
    tags: "Rhinoceros"
  },
  {
    orientation: "landscape" ,
    type: "Animals",
    source: "Photos/Deer 1.jpg" ,
    tags: "Deer Grass"
  },
  {
    orientation: "landscape" ,
    type: "Animals",
    source: "Photos/Deer 2.jpg" ,
    tags: "Deer Grass"
  },
  {
    orientation: "landscape" ,
    type: "Animals",
    source: "Photos/Deer 3.jpg" ,
    tags: "Deer Grass"
  },
  {
    orientation: "landscape" ,
    type: "Animals",
    source: "Photos/Deer 4.jpg" ,
    tags: "Deer Grass"
  },
  {
    orientation: "landscape" ,
    type: "Animals",
    source: "Photos/Classic Deer.jpg" ,
    tags: "Deer Grass"
  },
  {
    orientation: "landscape" ,
    type: "Nature",
    source: "Photos/Mountain Cloud.jpg" ,
    tags: "Clouds Blue Sky"
  },
  {
    orientation: "landscape" ,
    type: "Nature",
    source: "Photos/Fluffy Clouds.jpg" ,
    tags: "Clouds Blue Sky"
  },
  {
    orientation: "landscape" ,
    type: "Nature",
    source: "Photos/Fluffy Clouds 2.jpg" ,
    tags: "Clouds Blue Sky"
  },
  {
    orientation: "landscape" ,
    type: "Objects",
    source: "Photos/Jurassic Park Adventure Pack.jpg" ,
    tags: "Jurassic Park"
  }
];

//GENERATING IMAGES HTML
let imagesHTML = '';
let element = '';
for (let i = 0; i < imageList.length; i++) {
  element = imageList[i];
  if (i < 14) {
    imagesHTML +=
      `<div class="${element.orientation}Container filterDiv ${element.type}">
        <img src= "${element.source}" data-toggle="modal" alt="${element.tags}"
        data-target="#${element.orientation}ImageModal">
      </div>`;
  }
  else{
    imagesHTML += 
    `<div class="${element.orientation}Container filterDiv ${element.type}">
        <img class="lazy-load" data-src="${element.source}" data-toggle="modal"
        alt="${element.tags}" data-target="#${element.orientation}ImageModal">
    </div>`;
  }
}
document.querySelector('.divContainer').innerHTML = imagesHTML;

//ORGANIZATION FILTERS
//(W3 Schools 'How to filter divs' https://www.w3schools.com/howto/howto_js_filter_elements.asp)
filterSelection("all")
function filterSelection(c) {
  var x, i, mainText;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "showPics");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "showPics");
  }
}
// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}
// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

//IMAGE POP-UP MODALS  
// Function for portrait images - runs when the modal is displayed
$('#portraitImageModal').on('show.bs.modal', function (event) {
  //Get the src link of the respective image
  const respectiveImageSource = event.relatedTarget.src;
  //Create a variable that is assigned to the <img> tag in the html file.
  const outputImage = document.getElementById("portraitModalImageOutput");
  //Assign the src of the respective image to that <img> tag.
  outputImage.src = respectiveImageSource;
})
// Function for landscape images - runs when the modal is displayed
$('#landscapeImageModal').on('show.bs.modal', function (event) {
  const respectiveImageSource = event.relatedTarget.src; //Get the src of the respective image
  const outputImage = document.getElementById("landscapeModalImageOutput");
  outputImage.src = respectiveImageSource;
})