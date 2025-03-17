if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
      (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

          // Initialize Google Maps
          const map = new google.maps.Map(document.getElementById("map"), {
              center: { lat: latitude, lng: longitude },
              zoom: 15,
          });

          // Add marker to the map
          new google.maps.Marker({
              position: { lat: latitude, lng: longitude },
              map: map,
              title: "Your Location",
          });
      },
      (error) => {
          console.error(`Error getting location: ${error.message}`);
      }
  );
} else {
  console.error("Geolocation is not supported by this browser.");
}

// Add a div element to hold the map in your HTML file
// <div id="map" style="width: 100%; height: 400px;"></div>
// Include Google Maps API in your HTML: 
// <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDNEi-YZ4UKpBbalRbdPi80pS-5iOXNRbI"></script>
