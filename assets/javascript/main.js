// <!-- START of Javascript -->

// QUESTION: I have a global variable array of markers. I want to be able to call this inside the initMap function to pull the objects inside the array. 

// ============ GLOBAL VARIABLES =================
var markers = []
// console.log(markers)

// ============ START OF ONLOAD FUNCTION ==============
// window.onload = function () {

    // WINDOWS ONLOAD VARIABLES 
<<<<<<< HEAD
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
=======
    // var parkCode = localStorage.getItem('name')
    // var queryURL = "https://developer.nps.gov/api/v1/parks?parkCode=" + parkCode + "&fields=images&api_key=BiJRAIaZNmBh3eBVfZDeONL4s34x07I2eTRCeCBf"

    // // AJAX call to retrieve NPS JSON
    // $.ajax({
    //     url: queryURL,
    //     method: "GET",
    // }).then(function (response) {
    //     // console.log(response.data)

    //     // var parkDetails = $("<div class = 'parkDetails'>").appendTo("#detailsDiv")
    //     // $("<div class = 'parkDetails'>").appendTo("#detailsDiv")

    //     for (var i = 0; i < response.data.length; i++) {

    //         var latLong =  response.data[i].latLong
    //         var parkName = response.data[i].fullName

    //         // pass this object to the global variable array markers
    //         markers.push(
    //             {
    //                 lat: latLong.split(",")[0],
    //                 long: latLong.split(", ")[1],
    //                 parkname: parkName //NPS API info
    //             }
    //         )

    //         // =========== END of for loop function ============
    //     } 
    //     // console.log(markers[0].coords)
    //     // ========= END OF RESPONSE FUNCTION ============
    // })
>>>>>>> 77a5a9df0976925ab6ad9e3e9fd84d70f17b9531

    // ============ END OF ONLOAD FUNCTION ==============
// }


//================ START of GOOGLE MAPS FUNCTION ============
function initMap() {
<<<<<<< HEAD
  console.log(markers)
 
    // var myLatLong = {lat: 44.30777545, lng: -68.30063316}
    var myLatLong = parseInt(markers[0])
=======
    
>>>>>>> 77a5a9df0976925ab6ad9e3e9fd84d70f17b9531
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

    // this function would plot the google marks in the map based on coordinates passed from NPS.
    // function addMarker(mark) {

<<<<<<< HEAD
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
=======
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
>>>>>>> 77a5a9df0976925ab6ad9e3e9fd84d70f17b9531
    
            for (var i = 0; i < response.data.length; i++) {
    
                var latLong =  response.data[i].latLong
                var parkName = response.data[i].fullName
    
                // pass this object to the global variable array markers
                markers.push(
                    {
                        lat: latLong.split(",")[0],
                        long: latLong.split(", ")[1],
                        parkname: parkName //NPS API info
                    }
                )
    
                // =========== END of for loop function ============
            } 
            var dynamicLat = markers[0].lat
            var dynamicLong = markers[0].long
            var dynamicParkName = markers[0].parkname

            var trimmedLat = Number(dynamicLat.replace(/lat:/g, "")) 
            var trimmedLong = Number(dynamicLong.replace(/long:/g, ""))

            console.log(trimmedLat)
            console.log(trimmedLong)
            
            var marker = new google.maps.Marker({
                
                position: { lat: trimmedLat, lng: trimmedLong },
                map: map,
    
            });
            
            //mouseover function for info window on marker.
                marker.addListener('mouseover', function () {
                    infoWindow.open(map, marker);
                });
                marker.addListener('mouseout', function () {
                    infoWindow.close();
                });

                // infowindow variable object. This info can change dynaically with the NPS API
                var infoWindow = new google.maps.InfoWindow({
                    content: `<h6>Park Name: dynamicParkName</h6>`
                      
                    //   <br />
                    //       Location: ${mark.location}
                    //       </h6>
                });
                //========= marker onClick to show info in div below. ===============
                marker.addListener('click', function () {
        
                // variables
                var parkCode = localStorage.getItem('name')
                var queryURL = "https://developer.nps.gov/api/v1/parks?parkCode=" + parkCode + "&fields=images&api_key=BiJRAIaZNmBh3eBVfZDeONL4s34x07I2eTRCeCBf"
                var alertsURL = "https://developer.nps.gov/api/v1/alerts?parkCode=" + parkCode + "&fields=images&api_key=BiJRAIaZNmBh3eBVfZDeONL4s34x07I2eTRCeCBf"
                var visitorCenterURL = "https://developer.nps.gov/api/v1/visitorcenters?parkCode=" + parkCode + "&fields=images&api_key=BiJRAIaZNmBh3eBVfZDeONL4s34x07I2eTRCeCBf"
        
                // start of PARK DETAILS ajax calls
                $.ajax({
                    url: queryURL,
                    method: "GET",
                }).then(function (response) {
                    // console.log(response.data)
        
                    for (var i = 0; i < response.data.length; i++) {
        
                        var fullName = response.data[i].fullName
                        var description = response.data[i].description
                        var url = response.data[i].url
                        
                    $("#info-div").append("<p>Park Name: " + response.data[i].fullName + "</p>")
                    $("#info-div").append("<p>Description: " + response.data[i].description + "</p>")
                    $("#info-div").append("<p>Website: " + response.data[i].url + "</p>")
                    // $("#info-div").html("<p>Weather Info: " + response.data[i].weatherInfo + "</p>")
                    // $("#info-div").html("<p>State: " + response.data[i].states + "</p>")
                    // parkDetails.append("<p>Alert Category: "+response.data[i].category+ "</p>")
                        
                    
                    }

                        // $('#info-div').html("<h1> HELLO FULVOUS!</h1>");
                    });
                
                // variables
                // var parkCode = localStorage.getItem('name')
                // var queryURL = "https://developer.nps.gov/api/v1/parks?parkCode=" + parkCode + "&fields=images&api_key=BiJRAIaZNmBh3eBVfZDeONL4s34x07I2eTRCeCBf"
                // var alertsURL = "https://developer.nps.gov/api/v1/alerts?parkCode=" + parkCode + "&fields=images&api_key=BiJRAIaZNmBh3eBVfZDeONL4s34x07I2eTRCeCBf"
                // var visitorCenterURL = "https://developer.nps.gov/api/v1/visitorcenters?parkCode=" + parkCode + "&fields=images&api_key=BiJRAIaZNmBh3eBVfZDeONL4s34x07I2eTRCeCBf"
                    
                console.log(alertsURL)
                // start of PARK DETAILS ajax calls
                $.ajax({
                    url: alertsURL,
                    method: "GET",
                }).then(function (response) {
                    console.log(response.data)
        
                    for (var i = 0; i < response.data.length; i++) {
        
                        var fullName = response.data[i].fullName
                        var description = response.data[i].description
                        var url = response.data[i].url
                        
                    // $("#info-div").append("<p>Park Name: " + response.data[i].fullName + "</p>")
                    // $("#info-div").append("<p>Description: " + response.data[i].description + "</p>")
                    // $("#info-div").append("<p>Website: " + response.data[i].url + "</p>")
                    // $("#info-div").html("<p>Weather Info: " + response.data[i].weatherInfo + "</p>")
                    // $("#info-div").html("<p>State: " + response.data[i].states + "</p>")
                    // parkDetails.append("<p>Alert Category: "+response.data[i].category+ "</p>")
                        
                    console.log(url)
                    }

                        // $('#info-div').html("<h1> HELLO FULVOUS!</h1>");
                    });
            
                  // ======= END OF FOR ONCLICK ADD LISTENER ========   
                })
            // ========= END OF RESPONSE FUNCTION ============
        })

    // ======= END OF FOR INITMAP FUNCTION ======== 
}



//========================= END of GOOGLE MAPS ===================