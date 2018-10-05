console.log('Yet another Hello world')

var map = null

placesOfInterest = [
    { name: 'Charme da paulista', lat: -23.562172, lng: -46.655794 },
    { name: 'The Blue Pub', lat: -23.563112, lng: -46.650338 },
    { name: 'Veloso', lat: -23.585107, lng: -46.635219 },
    { name: 'Let\'s Beer', lat: -23.586508, lng: -46.641739 },
    { name: 'O\'Malley\'s', lat: -23.558296, lng: -46.665923 },
    { name: 'Finnegan\'s', lat: -23.559547, lng: -46.676794 },
    { name: 'Partisans', lat: -23.561049, lng: -46.682555 },
    { name: 'Morrison', lat: -23.555106, lng: -46.690883 },
    { name: 'Cão Véio', lat: -23.558130, lng: -46.679508 },
    { name: 'Cervejaria Nacional', lat: -23.564740, lng: -46.690641 },
    { name: 'Brewdog', lat: -23.561309, lng: -46.693935 },
    { name: 'Rei das Batidas', lat: -23.570613, lng: -46.705977 }
]

const customIcon = {
    path: 'M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z',
    fillColor: '#F7B217',
    fillOpacity: 0.98,
    scale: 0.98,
    strokeColor: '#666666',
    strokeWeight: 3
}

const customIcon2 = {
    path: 'M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z',
    fillColor: '#FFF',
    fillOpacity: 0.98,
    scale: 0.98,
    strokeColor: '#666666',
    strokeWeight: 3
}

var markersArray = []

function windowToggle(marker, infoWindow) {
    google.maps.event.addListener(infoWindow, 'closeclick', function () {
        marker.setIcon(customIcon)
    })
    infoWindow.open(map, marker)
}

function addMarker(marker) {
    var marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(marker.lat, marker.lng),
        icon: customIcon,
        title: marker.name
    })

    return marker

}

function markerClick(marker, infoWindow) {
    // Eventos ao clicar
    google.maps.event.addListener(marker, 'click', (function (marker) {
        return function () {
            infoWindow.setContent('<strong>' + marker.title + '</strong>')
            windowToggle(marker, infoWindow)

            for (var j = 0; j < markersArray.length; j++) {
                markersArray[j].setIcon(customIcon)
            }

            marker.setIcon(customIcon2)

        }
    })(marker))
    markersArray.push(marker)
}

function CenterControl(controlDiv, map, infoWindow) {
    // Set CSS for the control border.
    var controlUI = document.createElement('div')
    controlUI.style.backgroundColor = '#fff'
    controlUI.style.border = '2px solid #fff'
    controlUI.style.borderRadius = '3px'
    controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)'
    controlUI.style.cursor = 'pointer'
    controlUI.style.marginBottom = '22px'
    controlUI.style.textAlign = 'center'
    controlUI.title = 'Click to show your position'
    controlDiv.appendChild(controlUI)

    // Set CSS for the control interior.
    var controlText = document.createElement('div')
    controlText.style.color = 'rgb(25,25,25)'
    controlText.style.fontFamily = 'Roboto,Arial,sans-serif'
    controlText.style.fontSize = '16px'
    controlText.style.lineHeight = '38px'
    controlText.style.paddingLeft = '5px'
    controlText.style.paddingRight = '5px'
    controlText.innerHTML = 'Find Me'
    controlUI.appendChild(controlText)

    controlClick(controlUI, map, infoWindow)
}

function controlClick(controlUI, map, infoWindow) {
     // Setup the click event listeners: set the map to user location.
     controlUI.addEventListener('click', function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var userLocation = {
                    name: 'You\'re Here',
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                }

                var marker = addMarker(userLocation)
                markerClick(marker, infoWindow)
                map.setCenter(userLocation)
            }, function () {
                handleLocationError(true, infoWindow, map.getCenter())
            })
        } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter())
        }
})
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos)
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.')
    infoWindow.open(map)
}

function initMap() {

    var mapOptions = {
        center: new google.maps.LatLng(-23.562172, -46.655794),
        gestureHandling: 'greedy',
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP]
        },
        disableDefaultUI: true,
        scaleControl: true,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.DEFAULT,
        }
    }

    var infoWindow = new google.maps.InfoWindow()

    map = new google.maps.Map(document.getElementById('map'), mapOptions)

    //Adicionando todos os marcadores
    placesOfInterest.forEach(function (place) {
        var marker = addMarker(place)
        markerClick(marker, infoWindow)
    })

    // Create the DIV to hold the control and call the CenterControl()
    // constructor passing in this DIV.
    var centerControlDiv = document.createElement('div')
    var centerControl = new CenterControl(centerControlDiv, map, infoWindow)

    centerControlDiv.index = 1
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv)
}