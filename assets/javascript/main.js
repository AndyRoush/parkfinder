function initMap(){
    var options = {
        zoom:8,
        center:{lat:36.7783,lng: -119.4179}
    }

    var map = new google.maps.Map(document.getElementById('map'), options)
}