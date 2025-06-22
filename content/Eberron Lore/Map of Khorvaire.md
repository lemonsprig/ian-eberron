---
title: "Interactive Map of Khorvaire"
---

# True and Accurate Map of Khorvaire

<div id="eberron-map" style="height: 800px; width: 85%; border: 1px solid #ccc; margin: 20px auto;"></div> <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" /> <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script> <script> // Initialize the map with your exact settings var map = L.map('eberron-map', { crs: L.CRS.Simple, minZoom: -2.5, maxZoom: 10, zoomDelta: 0.5 }); // Define the image bounds based on your map dimensions var bounds = [[0, 0], [4837, 7680]]; // Add your Eberron map image as an overlay // Note: You'll need to place your image file in the public folder of your Quartz site var imageUrl = './assets/True and Accurate Map of Khorvaire - Eberron - DM vers sv.jpg'; var imageOverlay = L.imageOverlay(imageUrl, bounds).addTo(map); // Set the map view to center (matching your lat/long settings) map.fitBounds(bounds); map.setView([2417, 3840], -1); // Optional: Add some example markers for major locations // You can add these based on pixel coordinates from your original map L.marker([1200, 2000]).addTo(map) .bindPopup('<b>Sharn</b><br>City of Towers'); L.marker([2400, 3500]).addTo(map) .bindPopup('<b>The Mournland</b><br>Former Cyre'); L.marker([800, 1500]).addTo(map) .bindPopup('<b>Fairhaven</b><br>Capital of Aundair'); // Optional: Add a scale control L.control.scale({ metric: false, imperial: true, maxWidth: 200 }).addTo(map); </script>

## Map Instructions

1. **Zoom**: Use mouse wheel or +/- controls to zoom in/out
2. **Pan**: Click and drag to move around the map
3. **Markers**: Click on location markers for information
4. **Scale**: Bottom left shows distance measurements

---

_This interactive map uses your original Eberron map image with the same dimensions and scale settings from your Obsidian vault._