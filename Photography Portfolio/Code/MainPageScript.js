//Function for portrait images - runs when the modal is displayed
$('#portraitImageModal').on('show.bs.modal', function (event) {
    //Get the src link of the respective image
    const respectiveImageSource = event.relatedTarget.src; 

    //Create a variable that is assigned to the <img> tag in the html file.
    const outputImage = document.getElementById("portraitModalImageOutput");

    //Assign the src of the respective image to that <img> tag.
    outputImage.src = respectiveImageSource;
  })

//Function for landscape images - runs when the modal is displayed
$('#landscapeImageModal').on('show.bs.modal', function (event) {
    const respectiveImageSource = event.relatedTarget.src; //Get the src of the respective image
    const outputImage = document.getElementById("landscapeModalImageOutput");
    outputImage.src = respectiveImageSource;
  })



//W3 Schools 'How to filter divs' https://www.w3schools.com/howto/howto_js_filter_elements.asp
filterSelection("all")

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
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

//Problem is when All is selected, everything already has the show class, so no animation occurs when choosing a filter, since all those images already have the show class.