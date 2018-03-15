// <!-- START of Javascript -->

// ============ GLOBAL VARIABLES =================
var markers = []
// console.log(markers)

//================ START of GOOGLE MAPS FUNCTION ============
function initMap() {
    
    var options = {
        zoom: 4,
        center: { lat: 39.0997, lng: -94.5786 } //We can set this lat lng to change based on user input
    }

    //New map
    var map = new google.maps.Map(document.getElementById("map"), options) //New map object
    // // Add marker ==== This can dynamically change based on user input given lat, lng

    // this function would plot the google marks in the map based on coordinates passed from NPS.
    // function addMarker(mark) {

        var parkCode = localStorage.getItem('name')
        var queryURL = "https://developer.nps.gov/api/v1/parks?parkCode=" + parkCode + "&fields=images&api_key=BiJRAIaZNmBh3eBVfZDeONL4s34x07I2eTRCeCBf"
    
        // AJAX call to retrieve NPS JSON
        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function (response) {
            // console.log(response.data)
    
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
                    content: dynamicParkName
                      
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

                    });
            
                  // ======= END OF FOR ONCLICK ADD LISTENER ========   
                })
            // ========= END OF RESPONSE FUNCTION ============
        })

    // ======= END OF FOR INITMAP FUNCTION ======== 
}



//========================= END of GOOGLE MAPS ===================
