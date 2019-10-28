window.onload = function () {
    console.log("hello world");
    populateUsers();
};

let populateUsers = function () {
    fetch("https://randomuser.me/api?results=10")
        .then(function (res) {
            console.log("processing results of api fetch call", res);
            return res.json();
        })
        .then(function (payload) {
            console.log(payload);
            console.log("list of users", payload.results);
            payload.results.forEach(function (user, index) {
                let li = document.createElement("li");
                let img = document.createElement("img");
                let span = document.createElement("span");
                let ul = document.getElementById("listOfUsers");
                img.setAttribute("src", user.picture.large);
                span.innerText = `${user.name.title} ${user.name.first} ${user.name.last}`;
                let button = document.createElement("button");
                li.appendChild(img);
                li.appendChild(span);
                li.appendChild(button);
                button.innerText = "show my email";
                button.setAttribute("data-email", user.email);
                button.addEventListener("click", function (event) {
                    var clickedButton = event.target;

                    var email = clickedButton.getAttribute("data-email");
                    console.log('the email is', email);
                    console.log(user);
                    var clickedLi = clickedButton.parentElement;
                    let emailSpan = document.createElement("span");
                    emailSpan.innerText = email;
                    clickedLi.appendChild(emailSpan);
                    clickedLi.removeChild(clickedButton);

                });
                ul.appendChild(li);
            });
        });
};