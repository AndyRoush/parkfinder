// <!-- START of Javascript -->
// $(document).ready(function () {

    var markers = []
    var thing = 'hi'
    var parkCode = ''
    // retrieve the JSON object for NPS
    $("#enterbtn").on("click", function (event) {
        event.preventDefault()
        parkCode = $("#parkCode-input option:selected")
        console.log(parkCode[0].value)
        
        // variables
        // var queryURL = "https://developer.nps.gov/api/v1/parks?parkCode=" + parkCode + "&fields=images&api_key=BiJRAIaZNmBh3eBVfZDeONL4s34x07I2eTRCeCBf"

        localStorage.setItem('name', parkCode[0].value)
        // sessionStorage.setItem('name', parkCode[0].value)
        // start of longlat ajax calls
        // $.ajax({
        //     url: queryURL,
        //     method: "GET",
        // }).then(function (response) {
        //     // console.log(response.data)

        //     var parkDetails = $("<div class = 'parkDetails'>").appendTo("#detailsDiv")
        //     $("<div class = 'parkDetails'>").appendTo("#detailsDiv")

        //     for (var i = 0; i < response.data.length; i++) {

        //         var latLong = response.data[i].latLong
        //         var parkCode = response.data[i].parkCode
        //         var parkName = response.data[i].fullName

        //         // console.log(latLong)
        //         markers.push(
        //             {
        //                 //pass any dynamic argument in the function when called. (lat lng from NPS)
        //                 coords: latLong, //NPS API Info
        //                 parkcode: parkCode, //NPS API info
        //                 parkname: parkName//NPS API info
        //             }

        //         )

        //     // END of for loop function   
        //     }
        //     // console.log(markers);
            window.location = "index2.0.html"
            
        //     // END of longlat ajax calls
        // })

        // $.getScript("assets/javascript/app.js")
        // END of click button function
    })

    
    //END of document.ready
// })
