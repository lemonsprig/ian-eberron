---
title: "Interactive Map of Khorvaire"
---
# True and Accurate Map of Khorvaire

<div id="eberron-map" style="height: 800px; width: 85%; border: 1px solid #ccc; margin: 20px auto;"></div> <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" /> <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script> <script> // Simple test first console.log('Testing if scripts work at all'); // Wait for everything to load, then initialize setTimeout(function() { console.log('Checking for Leaflet...'); if (typeof L === 'undefined') { console.error('Leaflet not loaded'); return; } console.log('Leaflet loaded, initializing map...'); // Initialize the map var map = L.map('eberron-map', { crs: L.CRS.Simple, minZoom: -2.5, maxZoom: 10, zoomDelta: 0.5 }); console.log('Map object created'); // Define bounds var bounds = [[0, 0], [4837, 7680]]; // Add the image var imageUrl = '/static/images/True and Accurate Map of Khorvaire - Eberron - DM vers sv.jpg'; console.log('Adding image overlay...'); L.imageOverlay(imageUrl, bounds).addTo(map); // Set view map.fitBounds(bounds); map.setView([2417, 3840], -1); console.log('Map setup complete'); // Add markers L.marker([1200, 2000]).addTo(map).bindPopup('<b>Sharn</b><br>City of Towers'); L.marker([2400, 3500]).addTo(map).bindPopup('<b>The Mournland</b><br>Former Cyre'); }, 1000); // Wait 1 second for Leaflet to load </script>

## Troubleshooting

If the map doesn't appear, try:

1. Check if you can see "Testing if scripts work at all" in the browser console
2. Refresh the page
3. Make sure JavaScript is enabled in your browser

---

_Alternative: If JavaScript doesn't work in Quartz, you can also display the static image:_

![Khorvaire Map](/static/images/True and Accurate Map of Khorvaire - Eberron - DM vers sv.jpg)