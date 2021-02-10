$(document).ready(function () {
  if($('.js-infrastructure').length) {
    $('.js-infrastructure').slick({
      mobileFirst: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToScroll: 4,
            slidesToShow: 4
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToScroll: 3,
            slidesToShow: 3
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToScroll: 2,
            slidesToShow: 2
          }
        }
      ]
    });
  }
});

var filtered = false;

$(document).on('change', '.js-filter', function () {
  var filter = $(this).val();
  console.log(filter);

  if(filter == 1) {
    $('.js-infrastructure').slick('slickUnfilter');
    filtered = false;
  } else {
    $('.js-infrastructure').slick('slickUnfilter').slick('slickFilter','[data-filter="'+filter+'"]');
    filtered = true;
  }
});

var map,
    marker,
    infowindow;

window.addEventListener("load", function() {
  setTimeout(function() {
    var elem = document.createElement('script');
    elem.type = 'text/javascript';
    elem.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDfgRF4t3ph-ZJSEXkxIJr-H08zNYQvqb4&callback=initInfrastructureMap';
    document.getElementById('infrastructure-map').appendChild(elem);

    var mapUpdaters = document.querySelectorAll('.js-map-update');
    mapUpdaters.forEach(function(item) {
      item.addEventListener('click', updateInfrastructureMap);
    });
  }, 2000);
});

function initInfrastructureMap() {
  var pointLatLng = {
    lat: 56.957116,
    lng: 65.468598
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

  map = new google.maps.Map(document.getElementById("infrastructure-map"), {
    zoom: 14,
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

  infowindow = new google.maps.InfoWindow({
    content: '<b style="font-weight: 700">Санаторий "Сибирь"</b>',
  });

  marker = new google.maps.Marker({
    position: pointLatLng,
    map: map,
    draggable: false,
    icon: icon
  });

  marker.addListener("click", () => {
    infowindow.open(map, marker);
  });
}

function updateInfrastructureMap(evt) {
  map.setCenter({lat: parseFloat(evt.target.dataset.lat), lng: parseFloat(evt.target.dataset.lng)});
  marker.setPosition({lat: parseFloat(evt.target.dataset.lat), lng: parseFloat(evt.target.dataset.lng)});

  infowindow.close();
  infowindow.setContent(evt.target.dataset.content);
  infowindow.open(map, marker);

  $('html, body').animate({
    scrollTop: $('.infrastructure-map').offset().top - $('.header').outerHeight()
  }, 400);
}
