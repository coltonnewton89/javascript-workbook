//set function to make sure it's working
//& start the getBrewery function

window.onload = function () {
    console.log("jeez, we're getting started")
    getBrewery();
}
//create a function that pulls brewery's and
//display them. ^finding out if pull has pics^
let getBrewery = function () {
    fetch('https://api.openbrewerydb.org/breweries?by_state=texas')
        .then(function (res) {
            return res.json();
        })
        //we'll call the pulled array "payload"
        .then(function (payload) {
            console.log(payload);
            console.log("your array should be above me!");

            //for each result print name of brewery and display
            //button that when clicked it will find geo's and figure out how 
            //far apart each geo is from the other.

            //calling array brewery.
            payload.forEach(function (brewery, index) {
                let listItem = document.createElement("li");
                let span = document.createElement("span");
                let ul = document.getElementById("listOfBeers")
                //display array contents
                span.innerText = `Brewery name: ${brewery.name}\nBrewery type: ${brewery.brewery_type}\nBrewery website: ${brewery.website_url}\n`;
                //create and style button along with functions
                let howFar = document.createElement("button");
                howFar.innerText = "How far away is this brewery?";
                howFar.style.backgroundColor = "green";
                howFar.style.color = "white";
                howFar.addEventListener("click", function () {
                    console.log("lets fly!")
                    //get their geo's
                    var lat2 = brewery.latitude;
                    var lon2 = brewery.longitude;
                    console.log("their geo's are " + lat2 + " " + lon2);
                    //get my geo's
                    let myFunction = new function () {
                        if (navigator.geolocation) {
                            navigator.geolocation.getCurrentPosition(displayPosition);
                        } else {
                            myLocation.innerHTML = "Not available";
                        }
                    }
                    //creating let's that have my geo's in them
                    function displayPosition(position) {
                        let lon1 = position.coords.longitude;
                        let lat1 = position.coords.latitude;
                        console.log("and my coords are " + lon1 + " " + lat1);
                        //placing all geo's in haversine formula!
                        var R = 6371; // km
                        var dLat = toRad(lat2 - lat1);
                        var dLon = toRad(lon2 - lon1);


                        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                            Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
                        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                        var d = R * c;
                        return d;


                        // Converts numeric degrees to radians
                        function toRad(Value) {
                            let alotOfMath = Value * Math.PI / 180;
                            //check to make sure it works!
                            console.log("distance apart equals: " + alotOfMath);
                            let coordSpan = document.createElement("span");
                            coordSpan.innerText = "their coords are " + lat2 + lon2 + " and my coords are " + lat1 + lat2 + " and they are " + alotOfMath + " apart!"
                            coordSpan.style.color = "green";
                            listItem.appendChild(coordSpan);
                        }


                    }



                })
                listItem.appendChild(span);
                listItem.appendChild(howFar);

                ul.appendChild(listItem);
            })

        })
}

//NOTE: probably could of converted degrees into miles.


