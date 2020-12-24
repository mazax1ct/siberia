window.addEventListener("load", function() {
  setTimeout(function() {
    var elem = document.createElement('script');
    elem.type = 'text/javascript';
    elem.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDfgRF4t3ph-ZJSEXkxIJr-H08zNYQvqb4&callback=initContactsMap';
    document.getElementById('map').appendChild(elem);
  }, 2000);
});

function initContactsMap() {
  var pointLatLng = {
    lat: 57.152985,
    lng: 65.541227
  };

  var stylesArray = [
    {
      "featureType": "administrative",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#444444"
      }]
    },
    {
      "featureType": "landscape",
      "elementType": "all",
      "stylers": [{
        "color": "#f2f2f2"
      }]
    },
    {
      "featureType": "poi",
      "elementType": "all",
      "stylers": [{
        "visibility": "off"
      }]
    },
    {
      "featureType": "road",
      "elementType": "all",
      "stylers": [{
          "saturation": -100
        },
        {
          "lightness": 45
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "all",
      "stylers": [{
        "visibility": "simplified"
      }]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels.icon",
      "stylers": [{
        "visibility": "off"
      }]
    },
    {
      "featureType": "transit",
      "elementType": "all",
      "stylers": [{
        "visibility": "off"
      }]
    },
    {
      "featureType": "water",
      "elementType": "all",
      "stylers": [{
          "color": "#dedee4"
        },
        {
          "visibility": "on"
        }
      ]
    }
  ];

  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: pointLatLng,
    scrollwheel: false,
    zoomControl: false,
    scaleControl: false,
    mapTypeControl: false,
    streetViewControl: false,
    styles: stylesArray
  });

  var icon = {
    path: "M14,0C8.6,0,4.3,4.4,4.3,9.7C4.3,16.5,14,28,14,28s9.7-11.9,9.7-18.3C23.7,4.4,19.4,0,14,0z M16.9,12.6c-1.6,1.6-4.3,1.6-5.9,0s-1.6-4.3,0-5.9s4.3-1.6,5.9,0c0,0,0,0,0,0C18.6,8.3,18.6,10.9,16.9,12.6C16.9,12.6,16.9,12.6,16.9,12.6z",
    fillColor: '#E23A3A',
    fillOpacity: 1,
    anchor: new google.maps.Point(10, 28),
    strokeWeight: 0,
    scale: 1
  };

  var infowindow = new google.maps.InfoWindow({
    content: '<b style="font-weight: 700">Санаторий "Сибирь"</b>',
  });

  var marker = new google.maps.Marker({
    position: pointLatLng,
    map: map,
    draggable: false,
    icon: icon
  });

  marker.addListener("click", () => {
    infowindow.open(map, marker);
  });
}
