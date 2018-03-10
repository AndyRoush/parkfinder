//================ init map function ============
function initMap() {
  var options = {
    zoom: 4,
    center: { lat: 39.0997, lng: -94.5786 } //We can set this lat lng to change based on user input
  }

  //New map
  var map = new google.maps.Map(document.getElementById('map'), options) //New map object

  // // Add marker ==== This can dynamically change based on user input given lat, lng
  // var marker = new google.maps.Marker({
  //   position:{lat: 37.8651, lng: -119.5383}, //Set to yosemite as a placeholder
  //   map:map
  // });




  // array of markers.
  var markers = [
    {
      //pass any dynamic argument in the function when called. (lat lng from NPS)
      coords: { lat: 37.8651, lng: -119.5383 }, //NPS API Info
      parkcode: 'yose', //NPS API info
      parkname: 'Yosemite'//NPS API info
    },
    {
      //pass any dynamic argument in the function when called. (lat lng from NPS)
      coords: { lat: 44.4280, lng: -110.5885 }, //NPS API Info
      parkcode: 'xxxx', //NPS API info
      parkname: 'Yellowstone'//NPS API info
    },
    {
      //pass any dynamic argument in the function when called. (lat lng from NPS)
      coords: { lat: 36.1070, lng: -112.1130 }, //NPS API Info
      parkcode: 'xxxx', //NPS API info
      parkname: 'Grand Canyon'//NPS API info
    },

  ];


  //Loop through markers. This can add all the markers for all the parks in a state
  for (var i = 0; i < markers.length; i++) {
    //add marker
    console.log('hi')
    addMarker(markers[i]); //pass 

  }


  // Add Marker function
  function addMarker(mark) {
    var marker = new google.maps.Marker({
      position: mark.coords,
      map: map,
      // content: '<h6>Hello World!</h6>'

    });

    //mouseover function for info window on marker.
    marker.addListener('mouseover', function () {
      infoWindow.open(map, marker);
    });
    marker.addListener('mouseleave', function () {
      infoWindow.hide();
    });

    //infowindow variable object. This info can change dynaically with the NPS API
    var infoWindow = new google.maps.InfoWindow({
      content: `<h6>Park Name: ${mark.parkname}
            <br />
                Location: ${mark.location}
                </h6>`
    });
  }
};




// // onclick function to open new window from mainpage
// $('#searchbtn').on('click', function(){
//     window.open("index.html", "_self");
// })







// // ======================= DROPDOWN SELECT ============================================
// function autocomplete(inp, arr) {
//     /*the autocomplete function takes two arguments,
//     the text field element and an array of possible autocompleted values:*/
//     var currentFocus;
//     /*execute a function when someone writes in the text field:*/
//     inp.addEventListener("input", function(e) {
//         var a, b, i, val = this.value;
//         /*close any already open lists of autocompleted values*/
//         closeAllLists();
//         if (!val) { return false;}
//         currentFocus = -1;
//         /*create a DIV element that will contain the items (values):*/
//         a = document.createElement("DIV");
//         a.setAttribute("id", this.id + "autocomplete-list");
//         a.setAttribute("class", "autocomplete-items");
//         /*append the DIV element as a child of the autocomplete container:*/
//         this.parentNode.appendChild(a);
//         /*for each item in the array...*/
//         for (i = 0; i < arr.length; i++) {
//           /*check if the item starts with the same letters as the text field value:*/
//           if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
//             /*create a DIV element for each matching element:*/
//             b = document.createElement("DIV");
//             /*make the matching letters bold:*/
//             b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
//             b.innerHTML += arr[i].substr(val.length);
//             /*insert a input field that will hold the current array item's value:*/
//             b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
//             /*execute a function when someone clicks on the item value (DIV element):*/
//             b.addEventListener("click", function(e) {
//                 /*insert the value for the autocomplete text field:*/
//                 inp.value = this.getElementsByTagName("input")[0].value;
//                 /*close the list of autocompleted values,
//                 (or any other open lists of autocompleted values:*/
//                 closeAllLists();
//             });
//             a.appendChild(b);
//           }
//         }
//     });
//     /*execute a function presses a key on the keyboard:*/
//     inp.addEventListener("keydown", function(e) {
//         var x = document.getElementById(this.id + "autocomplete-list");
//         if (x) x = x.getElementsByTagName("div");
//         if (e.keyCode == 40) {
//           /*If the arrow DOWN key is pressed,
//           increase the currentFocus variable:*/
//           currentFocus++;
//           /*and and make the current item more visible:*/
//           addActive(x);
//         } else if (e.keyCode == 38) { //up
//           /*If the arrow UP key is pressed,
//           decrease the currentFocus variable:*/
//           currentFocus--;
//           /*and and make the current item more visible:*/
//           addActive(x);
//         } else if (e.keyCode == 13) {
//           /*If the ENTER key is pressed, prevent the form from being submitted,*/
//           e.preventDefault();
//           if (currentFocus > -1) {
//             /*and simulate a click on the "active" item:*/
//             if (x) x[currentFocus].click();
//           }
//         }
//     });
//     function addActive(x) {
//       /*a function to classify an item as "active":*/
//       if (!x) return false;
//       /*start by removing the "active" class on all items:*/
//       removeActive(x);
//       if (currentFocus >= x.length) currentFocus = 0;
//       if (currentFocus < 0) currentFocus = (x.length - 1);
//       /*add class "autocomplete-active":*/
//       x[currentFocus].classList.add("autocomplete-active");
//     }
//     function removeActive(x) {
//       /*a function to remove the "active" class from all autocomplete items:*/
//       for (var i = 0; i < x.length; i++) {
//         x[i].classList.remove("autocomplete-active");
//       }
//     }
//     function closeAllLists(elmnt) {
//       /*close all autocomplete lists in the document,
//       except the one passed as an argument:*/
//       var x = document.getElementsByClassName("autocomplete-items");
//       for (var i = 0; i < x.length; i++) {
//         if (elmnt != x[i] && elmnt != inp) {
//           x[i].parentNode.removeChild(x[i]);
//         }
//       }
//     }
//     /*execute a function when someone clicks in the document:*/
//     document.addEventListener("click", function (e) {
//         closeAllLists(e.target);
//         });
//   }

//   /*An array containing all the country names in the world:*/
//   var states = ["Alabama", "Alaska", "American Samoa", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District Of Columbia", "Federated States Of Micronesia", "Florida", "Georgia", "Guam", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Marshall Islands", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Northern Mariana Islands", "Ohio", "Oklahoma", "Oregon", "Palau", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virgin Islands", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];

//   /*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
//   autocomplete(document.getElementById("myInput"), states);

