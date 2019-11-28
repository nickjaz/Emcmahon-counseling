function initMap() {
  var clinic = {lat: 47.795412, lng: -122.211657};
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 15, center: clinic});
  var marker = new google.maps.Marker({position: clinic, map: map});
}

initMap();
