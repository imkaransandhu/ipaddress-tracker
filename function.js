// https://geo.ipify.org/api/v1?apiKey=at_GqPwmlRjtP9K5amHSZR6gkoCnraun
const CURRENT_LOCATION_URL = "https://geo.ipify.org/api/v1?apiKey=at_GqPwmlRjtP9K5amHSZR6gkoCnraun";
let currentAddresslatnlong = [37.38605, -122.08385];

fetch(CURRENT_LOCATION_URL)
    .then(response => response.json())
    .then(data => {
        currentAddresslatnlong = [data.location.lat, data.location.lng];
        document.querySelectorAll(".small-heading").forEach((headig, index) => {
            switch (index) {
                case 0:
                    document.querySelectorAll(".heading")[index].innerHTML =
                        `${data.ip}`;
                    break;
                case 1:
                    document.querySelectorAll(".heading")[index].innerHTML =
                        `${data.location.city}, ${data.location.country} ${data.location.postalCode}`;
                    break;
                case 2:
                    document.querySelectorAll(".heading")[index].innerHTML =
                        `${data.location.timezone}`;
                    break;
                case 3:
                    document.querySelectorAll(".heading")[index].innerHTML =
                        `${data.isp}`;
                    break;
                default:
                    console.log("Something bad happens");
                    break;
            }
        })
    });







setTimeout(() => {
    var map = L.map('map', {
        center: currentAddresslatnlong,
        zoom: 13
    });
    var marker = L.marker(currentAddresslatnlong).addTo(map);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoidGhla2FyYW4iLCJhIjoiY2wxN3NzNDh4MWdmMTNwb2RqZWRxeXNsbyJ9.yRFBXmbIIoi217ChSU_yjA'
    }).addTo(map);

}, 1000);

