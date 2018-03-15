// <!-- START of Javascript -->

// ============ GLOBAL VARIABLES =================
var markers = []
// console.log(markers)

// ============ START OF ONLOAD FUNCTION ==============
window.onload = function () {

    // WINDOWS ONLOAD VARIABLES 
    var parkCode = localStorage.getItem('name')
    var queryURL = "https://developer.nps.gov/api/v1/parks?parkCode=" + parkCode + "&fields=images&api_key=BiJRAIaZNmBh3eBVfZDeONL4s34x07I2eTRCeCBf"

    // AJAX call to retrieve NPS JSON
    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        // console.log(response.data)

        // var parkDetails = $("<div class = 'parkDetails'>").appendTo("#detailsDiv")
        // $("<div class = 'parkDetails'>").appendTo("#detailsDiv")

        for (var i = 0; i < response.data.length; i++) {

            var latLong =  response.data[i].latLong
            var parkName = response.data[i].fullName

            // pass this object to the global variable array markers
            markers.push(
                {
                    // lat: latLong.split(",")[0],
                    // long: latLong.split(", ")[1],
                    latLong: latLong,
                    parkname: parkName //NPS API info
                }
            )

            // =========== END of for loop function ============
        } 
        // console.log(markers[0].coords)
        // ========= END OF RESPONSE FUNCTION ============
    })

    // ============ END OF ONLOAD FUNCTION ==============
}


//================ START of GOOGLE MAPS FUNCTION ============
function initMap() {
  console.log(markers)
 
    // var myLatLong = {lat: 44.30777545, lng: -68.30063316}
    var myLatLong = parseInt(markers[0])
    var options = {
        zoom: 4,
        center: { lat: 39.0997, lng: -94.5786 } //We can set this lat lng to change based on user input
    }
console.log(myLatLong)
    //New map
    var map = new google.maps.Map(document.getElementById("map"), options) //New map object
    // // Add marker ==== This can dynamically change based on user input given lat, lng

    // Loop through markers. This can add all the markers for all the parks in a state
    // for (var i = 0; i < markers.length; i++) {
    //     //add marker
    //     console.log('hi')
    //     addMarker(markers[i]); //pass 

    // }


    // ======= START OF ADDMARKER FUNCTION ======== 
    // this function would plot the google marks in the map based on coordinates passed from NPS.
    // function addMarker(mark) {
        var marker = new google.maps.Marker({
            // position: markers[0].coords,
            position: myLatLong,
            map: map,

        });
        
        //mouseover function for info window on marker.
        marker.addListener('mouseover', function () {
            infoWindow.open(map, marker);
        });
        marker.addListener('mouseout', function () {
            infoWindow.close();
        });
    
        //========= marker onClick to show info in div below. ===============
        marker.addListener('click', function () {
            $('#info-div').html("<h1> HELLO FULVOUS!</h1>");
        });
    
        // infowindow variable object. This info can change dynaically with the NPS API
        // var infoWindow = new google.maps.InfoWindow({
        //     content: `<h6>Park Name: ${marker.parkname}
        //       <br />
        //           Location: ${marker.location}
        //           </h6>`
        // });
    
        // ======= END OF FOR ADDMARKER FUNCTION ======== 
    // }
    
    
    // ======= END OF FOR INITMAP FUNCTION ======== 
}


//========================= END of GOOGLE MAPS ===================