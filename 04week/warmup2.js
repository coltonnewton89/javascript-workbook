var users = [];

var u1 = {
    name: "John",
    grades: [80, 40, 75]
}

var u2 = {
    name: "Mark",
    grades: [50, 63, 71]
}

var u3 = {
    name: "Maggie",
    grades: [90, 95, 100]
}

users.push(u1);
users.push(u2);
users.push(u3);

// Prints out the users name and their average grades
// @param {*} users list of users

function calculateAverages(users) {
    //looping through the users in the array
    for (var index = 0; index < users.length; index++) {
        // get the current user to process
        var user = users[index];
        //print their name
        console.log(user.name);
        //print their grade
        console.log(user.grades);
        //loop through the current user's grades, and sum them up
        var sumGrades = 0;
        for (gIndex = 0; gIndex < user.grades.length; gIndex++) {
            sumGrades += user.grades[gIndex];
        }
        // set the default average to 0
        var avgGrade = 0;
        //if they have at least 1 grade, compute the average by
        // deviding the ssum with the number of grades
        if (user.grades.length > 0) {
            avgGrade = sumGrades / user.grades.length;



        }
        console.log('avg = ' + avgGrade);
    }
}
calculateAverages(users);
