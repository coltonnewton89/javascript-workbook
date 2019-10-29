window.onload = function () {
    console.log("jeez, we're getting started")
    getbrewery();
}

let getbrewery = function () {
    fetch("https://sandbox-api.brewerydb.com/v2/location/d25euF?key=YourKeyHere", {
        mode: "no-cors"
    })

        .then(function (res) {
            console.log("processing results of api fetch call", res);
            return res.json();
        })
        .then(function (payload) {
            console.log(payload);
            console.log("return anything", payload.results);
        })
}

/* var myLocation = document.getElementsById("bravo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(displayPosition);
    } else {
        myLocation.innerHTML = "Not available";
    }
}

function displayPosition(position) {
    var lat = position.coords.latitude;
    var lng = postion.coords.longitude;
    myLocation.innerHTML = lat + lng;
}




/*plan of attack
************
take pieces of api done in class and that should get you fetch/then part of the code
then use below to create two variables called longitude and latitude and have them equal
to position.coords.longitude and position.coords.latitude


what it looks like
******************
button that says find breweries
once button clicked it shows list of breweries in city of users location and where those
breweries are. create a heart button that will save those breweries into "my list of breweries"
*/

/* var myLocation = document.getElementById("my-coordinates");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(displayPosition);
    } else {
        myLocation.innerHTML = "Not available";
    }
}

function displayPosition(position) {
    myLocation.innerHTML =
        "Longitude: " +
        position.coords.longitude +
        " Latitude: " +
        position.coords.latitude;
} */