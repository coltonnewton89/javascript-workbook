/*var re = new RegExp('ab', 'g');
var results1 = re.exec('abcdefg');
var results2 =  re.exec('defgabdefg');
var results3 = re.exec('ABCD');
var results4 = re.exec('fortab');*/

let user1 = {
    name: "mike",
    age: 17,
    hi: function () {
        return "hi my name is " + this.name;
    }
}

let user2 = {
    name: "karen",
    age: 22,
}

class user {
    constructor(initialName, initialAge) {
        this.name = initialName;
        this.age = initialAge;
    }
}

hi(){
    return "hi my name is" + this.name;
}

let mike = new user("Mike", 12);
let jane = new user("Jane", 24);

console.log('${mike.name} is ${mike.age}');