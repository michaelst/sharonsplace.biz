import Component from '@ember/component';

export default Component.extend({
  didRender() {
    this._super(...arguments)

    this.setupGoogleMaps()
  },

  setupGoogleMaps() {
    $.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDlYNNs7VBO71qiKFMNiD0R9sd8hOt0wD4", () => {
      let uluru = { lat: 40.3550386, lng: -111.7420784 }

      let map = new google.maps.Map(document.getElementById('map'), {
        zoomControlOptions: {
          position: google.maps.ControlPosition.TOP_LEFT
        },
        streetViewControl: false,
        overviewMapControl: false,
        mapTypeControl: false,
        panControl: false,
        scrollwheel: false,
        center: uluru,
        zoom: 15,
        styles: [
          {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#444444"
              }
            ]
          },
          {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
              {
                "color": "#f2f2f2"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
              {
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
            "stylers": [
              {
                "visibility": "simplified"
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
              {
                "color": "#c0e4f3"
              },
              {
                "visibility": "on"
              }
            ]
          }
        ]
      });

      let marker = new google.maps.Marker({ position: uluru, map: map });
    })
  }
});