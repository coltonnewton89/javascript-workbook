var users = []
var u1 = {
    name: "jon",
    grades: [100, 70, 45],
};
var u2 = {
    name: "mike",
    grades: [50, 100, 20]
};

var u3 = {
    name: "magie",
    grades: [90, 55, 105]
};

users.push(u1);
users.push(u2);
users.push(u3);

//name and average grade
function calculateAverages(users){
    for (var index=0; index< users.length; i++){
        var user = users[index];
        console.log(user.name);
        console.log(user.grade);
    }

    
}