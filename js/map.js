const mapStyles = [{
  "elementType": "geometry",
  "stylers": [{
    "color": "#f5f5f5"
  }]
},
{
  "elementType": "labels.icon",
  "stylers": [{
    "visibility": "off"
  }]
},
{
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#616161"
  }]
},
{
  "elementType": "labels.text.stroke",
  "stylers": [{
    "color": "#f5f5f5"
  }]
},
{
  "featureType": "administrative.country",
  "elementType": "geometry.stroke",
  "stylers": [{
    "color": "#ac6c6c"
  }]
},
{
  "featureType": "administrative.land_parcel",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#bdbdbd"
  }]
},
{
  "featureType": "poi",
  "elementType": "geometry",
  "stylers": [{
    "color": "#eeeeee"
  }]
},
{
  "featureType": "poi",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#757575"
  }]
},
{
  "featureType": "poi.park",
  "elementType": "geometry",
  "stylers": [{
    "color": "#e5e5e5"
  }]
},
{
  "featureType": "poi.park",
  "elementType": "geometry.fill",
  "stylers": [{
    "color": "#dedede"
  }]
},
{
  "featureType": "poi.park",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#9e9e9e"
  }]
},
{
  "featureType": "road",
  "elementType": "geometry",
  "stylers": [{
    "color": "#ffffff"
  }]
},
{
  "featureType": "road.arterial",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#757575"
  }]
},
{
  "featureType": "road.highway",
  "elementType": "geometry",
  "stylers": [{
    "color": "#dadada"
  }]
},
{
  "featureType": "road.highway",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#616161"
  }]
},
{
  "featureType": "road.local",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#9e9e9e"
  }]
},
{
  "featureType": "transit.line",
  "elementType": "geometry",
  "stylers": [{
    "color": "#e5e5e5"
  }]
},
{
  "featureType": "transit.station",
  "elementType": "geometry",
  "stylers": [{
    "color": "#eeeeee"
  }]
},
{
  "featureType": "water",
  "elementType": "geometry",
  "stylers": [{
    "color": "#c9c9c9"
  }]
},
{
  "featureType": "water",
  "elementType": "geometry.fill",
  "stylers": [{
    "color": "#c7c7c7"
  }]
},
{
  "featureType": "water",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#9e9e9e"
  }]
}
];

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 40.673687773726684,
      lng: -73.91125155538914
    },
    zoom: 14,
    styles: mapStyles,
  });

  const marker = "img/icons/Pin.svg";

  new google.maps.Marker({
    position: {
      lat: 40.673687773726684,
      lng: -73.91125155538914
    },
    map,
    title: "OUR LOCATION",
    icon: marker
  });
}

window.initMap = initMap;