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
  landscapeClass = document.getElementsByClassName('landscapeContainer');
  portraitClass = document.getElementsByClassName('portraitContainer');
  panoramicClass = document.getElementsByClassName('panoramicContainer');

  function loopContainer(containerType){
    for (i = 0; i < containerType.length; i++) {
      getImage = containerType[i].getElementsByTagName("img")[0];
      altValue = getImage.alt;
      if (altValue.toUpperCase().indexOf(enteredFilter) > -1) {
        containerType[i].style.display = "";
      } else {
        containerType[i].style.display = "none";
      }
    }
  }

  // Loop through all landscape pictures, and hide those that don't match the search query
  loopContainer(landscapeClass);
  //Loop through all portrait pictures, and hide those that don't match the search query
  loopContainer(portraitClass);
  // Loop through all panoramic pictures, and hide those that don't match the search query
  loopContainer(panoramicClass);
}

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