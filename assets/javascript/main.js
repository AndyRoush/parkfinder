//================NPS JS ==================================
// <!-- START of Javascript -->
// $(document).ready(function () {
// console.log(localStorage.getItem('name'))
    var markers = []
    // // console.log(markers)
    // // retrieve the JSON object for NPS
    // $("# ").on("click", function (event) {
    //     event.preventDefault()

    //     // variables
    //     var parkCode = $("#parkCode-input").val()
      
window.onload = function() {
        // start of longlat ajax calls
        var parkCode = localStorage.getItem('name')
        var queryURL = "https://developer.nps.gov/api/v1/parks?parkCode=" + parkCode + "&fields=images&api_key=BiJRAIaZNmBh3eBVfZDeONL4s34x07I2eTRCeCBf"
        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function (response) {
            // console.log(response.data)

            var parkDetails = $("<div class = 'parkDetails'>").appendTo("#detailsDiv")
            $("<div class = 'parkDetails'>").appendTo("#detailsDiv")

            for (var i = 0; i < response.data.length; i++) {

                var latLong = response.data[i].latLong
                var parkCode = response.data[i].parkCode
                var parkName = response.data[i].fullName

                // console.log(latLong)
                markers.push(
                    {
                        //pass any dynamic argument in the function when called. (lat lng from NPS)
                        coords: latLong, //NPS API Info
                        parkcode: parkCode, //NPS API info
                        parkname: parkName//NPS API info
                    }

                )

            // END of for loop function   
            // }
 
      
        };
    });
}
            
         
            
    //         // END of longlat ajax calls
    //     })



    //     // $.getScript("assets/javascript/app.js")
    //     // END of click button function
    // }); 
         
    

    // $.getScript("assets/javascript/nps.js")
           
//================ init map function ============
function initMap() {
    console.log('working')
    var options = {
      zoom: 4,
      center: { lat: 39.0997, lng: -94.5786 } //We can set this lat lng to change based on user input
    }
  
    //New map
    var map = new google.maps.Map(document.getElementById("map"), options) //New map object
    // // Add marker ==== This can dynamically change based on user input given lat, lng
    // var marker = new google.maps.Marker({
    //   position:{lat: 37.8651, lng: -119.5383}, //Set to yosemite as a placeholder
    //   map:map
    // });
    
    for (var i = 0; i < markers.length; i++) {

  
        // console.log(latLong)
        markers.push(
            {
                //pass any dynamic argument in the function when called. (lat lng from NPS)
                coords: latLong, //NPS API Info
                parkcode: parkCode, //NPS API info
                parkname: parkName//NPS API info
            }

        )

    // END of for loop function   
    }
  
  
    // Loop through markers. This can add all the markers for all the parks in a state
    for (var i = 0; i < markers.length; i++) {
      //add marker
      console.log('hi')
      addMarker(markers[i]); //pass 
  
    }
    console.log(markers)
  
    // // Add Marker function
    function addMarker(mark) {
      var marker = new google.maps.Marker({
        position: mark.coords,
        map: map,
        // content: '<h6>Hello World!</h6>'

      });
      console.log(mark.coords)
      //mouseover function for info window on marker.
      marker.addListener('mouseover', function () {
        infoWindow.open(map, marker);
      });
      marker.addListener('mouseout', function() {
        infoWindow.close();
    });
  
      //========= marker onClick to show info in div below. ===============
      marker.addListener('click', function() {
          $('#info-div').html("<h1> HELLO FULVOUS!</h1>");
      });
  
      //infowindow variable object. This info can change dynaically with the NPS API
      var infoWindow = new google.maps.InfoWindow({
        content: `<h6>Park Name: ${mark.parkname}
              <br />
                  Location: ${mark.location}
                  </h6>`
      });
    };
};

    
    //END of document.ready
// })

//========================= GOOGLE ===================