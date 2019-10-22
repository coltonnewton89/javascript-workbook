const arrOfPeople = [
    {
        id: 2,
        name: "Charles Young",
        age: 55,
        skillSet: "welding",
        placeBorn: "Omaha, Nebraska"
    },
    {
        id: 3,
        name: "Judy Twilight",
        age: 35,
        skillSet: "fishing",
        placeBorn: "Louisville, Kentucky"
    },
    {
        id: 4,
        name: "Cynthia Doolittle",
        age: 20,
        skillSet: "tic tac toe",
        placeBorn: "Pawnee, Texas"
    },
    {
        id: 5,
        name: "John Willouby",
        age: 28,
        skillSet: "pipe fitting",
        placeBorn: "New York, New York"
    },
    {
        id: 6,
        name: "Stan Honest",
        age: 20,
        skillSet: "boom-a-rang throwing",
        placeBorn: "Perth, Australia"
    },
    {
        id: 7,
        name: "Mia Watu",
        age: 17,
        skillSet: "acrobatics",
        placeBorn: "Los Angeles, California"
    },
    {
        id: 8,
        name: "Walter Cole",
        age: 32,
        skillSet: "jump rope",
        placeBorn: "New Orleans, Louisiana"
    },
]

const listOfPlayers = []
const blueTeam = []
const redTeam = []

class player {
    constructor(id, name, age, skillSet, placeBorn) {
        this.id = id,
            this.name = name,
            this.age = age,
            this.skillSet = skillSet,
            this.placeBorn = placeBorn


    }

}
class blueTeammate {
    constructor() { }
}
class redTeammate {
    constructor() { }
}

const listPeopleChoices = () => {
    const listElement = document.getElementById('people')
    arrOfPeople.map(person => {
        var li = document.createElement("li")
        const button = document.createElement("button")
        button.innerHTML = "Make Player"
        button.addEventListener('click', function () { makePlayer(person.id) })
        li.appendChild(button)
        li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
        listElement.append(li)
    })
}
/*Problem ************
it's automatically chosing the first index and we want it to 
 move each index and also the other button.
 WHY*******
 because blue button is screwed up
 Solution********
 we want it to show both buttons with selected name
 */
const makePlayer = id => {
    const dodgeBallPlayer = document.getElementById("players");
    arrOfPeople.map(thePlayer => {
        const li = document.createElement("li");
        const redButton = document.createElement("button");
        redButton.innerHTML = "Red Team";
        redButton.addEventListener("clicked", function () {
            chosenOne(thePlayer.id);
        });
        li.appendChild(redButton);
        li.appendChild(
            document.createTextNode(thePlayer.name + " - " + thePlayer.skillSet)
        );
        dodgeBallPlayer.append(li);
        //this is blue button
        const blueButton = document.createElement("button");
        blueButton.innerHTML = "Blue Team";
        blueButton.addEventListener('clicked', function () {
            chosenOne(thePlayer.id);
        });
        li.appendChild(buleButton);
        li.appendChild(
            document.createTextNode(thePlayer.name + " - " + thePlayer.skillSet)
        );
        dodgeBallPlayer.append(li);
    });
    console.log(`li ${id} was clicked!`);
};


/* step one- need to make people move from "list of people"
to dodge ball player list.
step two- upon move to player list, two buttons need to appear to
select whether player can go to red or blue team. this will be done by
css/javascript to display none until onclick of "listpeoplechoices function" on
which the red/blue team buttons will appear.
step three- once "teamSelect function" is clicked, selected player moves to respective team
list, they will drop a "skill set" value and will add an age value. this will be done by removing
display of a constructor value and replacing with view of "age" constructor value from class to class.
step four- Also once player is moved to a specific team, that teams mascot and color will extend into
that players group. this could be done several ways but we think it would be most effective to .push
the keys "color"/"mascot".
step five- make sure to use classes vs hack job. Also make sure to include ATLEAST three tests using mocha
or chai.
*****************
plan of attack-
we plan on creating two buttons that can be called upon by every player once moved to the
list of players section vs trying to create a bunch of speghetti code.

*****EXTRA********
we also plan on being terds and also completing the bonus points practice.

we can also math.random to choose teams for us

we can also create an "undo button*/