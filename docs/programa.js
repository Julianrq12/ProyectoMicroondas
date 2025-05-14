var map = L.map('map').setView([4.628076480837979, -74.06592097104559], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([4.628076480837979, -74.06592097104559]).addTo(map);