// add console.log to check to see if code is working
console.log('working')

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([34.0522, -118.2437], 4);

// An array containing each city's location, state, and population.
//get the data from cities.js
let cityData=cities;


// loop through the cities array and create one marker for each city
// cityData.forEach(function(city){
//     console.log(city)
//     L.marker(city.location).bindPopup('<h2>'+city.city+", "+"</h2><hr><h3>Population "+city.population.toLocaleString()+"</h3>")
//     .addTo(map);
// })

// loop through the cities array and create one circle for each city according to their population
cityData.forEach(function(city){
    console.log(city)
    L.circleMarker(city.location,{
        radius:city.population/100000
    })
    .bindPopup('<h2>'+city.city+", "+"</h2><hr><h3>Population "+city.population.toLocaleString()+"</h3>")
    .addTo(map);
})

//  Add a marker to the map for Los Angeles, California.
//let marker = L.marker([34.0522, -118.2437]).addTo(map);

// L.circle([34.0522, -118.2437], {
//     radius: 100
//     }).addTo(map);

// L.circleMarker([34.0522, -118.2437],{
//     radius:300,
//     color:"black",
//     fillcolor:'#ffffa1'
// }).addTo(map);


// We create the tile layer that will be the background of our map.
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

//add a marker to the map

