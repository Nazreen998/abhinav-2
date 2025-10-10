function initMap() {
  const location = { lat: 9.8489, lng: 78.0869 }; // your coordinates

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: location,
  });

  const customIcon = {
    url: "logo.png", // 🔹 your image file here
    scaledSize: new google.maps.Size(60, 60), // resize as needed
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(30, 60),
  };

  new google.maps.Marker({
    position: location,
    map: map,
    icon: customIcon,
  });
}
