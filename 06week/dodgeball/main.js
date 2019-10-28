//create an array of people to draw from
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
    }
  ];
  
  const listOfPlayers = [];
  const blueTeam = [];
  const redTeam = [];
  
  class Player {
    constructor(
      id, 
      name,
      age,
      skillSet, 
      placeBorn
    ) {
      this.id = id;
      this.name = name;
      this.age = age;
      this.skillSet = skillSet;
      this.placeBorn = placeBorn;
    }
    joinRedTeam(redTeam) {
      this.redTeam = redTeam;
      player.redTeam.push(this);
    }
    joinBlueTeam(blueTeam) {
      this.blueTeam = blueTeam;
      player.blueTeam.push(this);
    }
  }
  class Teammate  extends Player{
    constructor(
      id, 
      name,
      age, 
      skillSet,
      placeBorn,
      canThrowBall,
      canDodgeBall, 
      hasPaid,
      isHealthy,
      yearsExperience,
      mascot,
      teamColor
    ) {
    super(
        id,
        name,
        age,
        skillSet,
        placeBorn
    )
      this.canThrowBall = canThrowBall;
      this.canDodgeBall = canDodgeBall;
      this.hasPaid = hasPaid;
      this.isHealthy = isHealthy, 
      this.yearsExperience = yearsExperience, 
      this.mascot = mascot;
      this.teamColor = teamColor;
    }
  }
  
  const listPeopleChoices = () => {
    //calling out the "people" UL cause we're about to manipulate it!
    const listElement = document.getElementById("people");
    //and we gonna jack the people from "arrOfPeople!" and start 'person'
    arrOfPeople.map(person => {
      //create list item in UL
      const li = document.createElement("li");
      //create button to "makePlayer" adding text and an event listener as well.
      const button = document.createElement("button");
      button.innerHTML = "Make Player";
      button.addEventListener("click", function() {
        makePlayer(person.id);
      });
      //append the set items into the DOM
      li.appendChild(button);
      li.appendChild(
        document.createTextNode(person.name + " - " + person.skillSet)
      );
      //append set item into UL
      listElement.append(li);
    });
  };
  
  //lets code makePlayer!
  const makePlayer = id => {
    //calling UL "players" from DOM
    const players = document.getElementById("players");
    //make "findplayer" tangible of selection but we'll call it entry.
    const findPlayer = arrOfPeople.find((entry) => {
      //and we'll call entry to equal 'class player.id'
      return entry.id == id
    });
    console.log(findPlayer);
    //create object called playerIndex and make it = arrOfPeople.indexOf what ever findPlayer is.
    const playerIndex = arrOfPeople.indexOf(findPlayer);
    console.log(
      `player index ${playerIndex}. Push to "Player list". Remove from "list of Players`
    );
    //create object newPlayer and let it be a new player with constructor attributes of
    //findPlayer. whatever we want and let the other constructor attributes be true and we'll
    //add 4 years of experience *given to us by 'Player'*  
    const newPlayer = new Player(
      findPlayer.id, 
      findPlayer.name,
      findPlayer.age,
      findPlayer.skillSet,
      findPlayer.placeBorn,
      true,
      true,
      true, 
      true, 
      4
    );
    //yep, so now we'll push our 'newPlayer' to listOfPlayers
    listOfPlayers.push(newPlayer);
    //now lets steal from arrOfPeople and lets place that stollen thing into 
    //playerIndex
    arrOfPeople.splice(playerIndex, 1);
    //this will add people to the list item of players to DOM with name and -
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(newPlayer.name + " - "));
  
    const blueButton = document.createElement("button");
    blueButton.innerHTML = "Blue Team"
    blueButton.addEventListener("click", function(){
      makeBluePlayer(newPlayer.id);
      players.removeChild(li);
    });
    li.appendChild(blueButton);
    const redButton = document.createElement('button');
    redButton.innerHTML = "Red Team"
    redButton.addEventListener("click", function(){
      makeRedPlayer(newPlayer.id);
      players.removeChild(li);
    });
    li.appendChild(redButton);
      players.append(li);}

  

  const makeBluePlayer = id => {
    const bluePlayer = document.getElementById("blue");
    const selectBlue = listOfPlayers.find(function(pick){
        return pick.id == id;
    })
    const blueIndex = listOfPlayers.indexOf(selectBlue)
    const newBlue = new Teammate(
        selectBlue.id,
        selectBlue.name, 
        selectBlue.age,
        selectBlue.skillSet,
        selectBlue.placeBorn,
        true,
        true,
        true,
        true,
        45,
        "blue baracudas",
        "blue"

    );
    blueTeam.push(newBlue);
    listOfPlayers.splice(blueIndex, 1);

    const li = document.createElement("li");
    li.appendChild(
        document.createTextNode(newBlue.name + "- Mascot = " + newBlue.mascot + " and team color is " + newBlue.color)
    );
    bluePlayer.append(li);
  }

  const makeRedPlayer = id => {
    const redPlayer = document.getElementById("red");
    const selectRed = listOfPlayers.find(function(pick){
        return pick.id == id;
    })
    const redIndex = listOfPlayers.indexOf(selectRed)
    const newRed = new Teammate(
        selectRed.id,
        selectRed.name, 
        selectRed.age,
        selectRed.skillSet,
        selectRed.placeBorn,
        true,
        true,
        true,
        true,
        45,
        "Red Jaguars",
        "Red"

    );
    redTeam.push(newRed);
    listOfPlayers.splice(redIndex, 1);

    const li = document.createElement("li");
    li.appendChild(
        document.createTextNode(newRed.name + "- Mascot = " + newRed.mascot + " and team color is " + newRed.color)
    );
    redPlayer.append(li);
  }

  //tests
let assert = require('assert');

if (typeof describe === 'function'){
  describe('Player', function(){
    it('should be able to become a red Player', function(){
      if (listOfPlayers.id == 2 && redTeam.id == 2) {
        return true;
      }
    });
  });
  it('should be able to become a player', function(){
    if (arrOfPeople.id == 2 && listOfPlayer.id == 2) {
      return true;
    }
  });
  it('should be able to become a blue Player', function(){
    if (listOfPlayers.id == 2 && blueTeam.id == 2) {
      return true;
    }
  });
  
}

  
  
  //create a higher order function that "removes" player from "list of people"
  //and places them in "dodgeball players"
  /*****problemos - we have it to where it moves the people and creates the actual text
  issue is all players are moving instead of individual and red player button is not button
  instead redplayer is being texted */
  // const makePlayer = (id) => {
  //   const dodgeBallPlayer = document.getElementById("players");
  //   arrOfPeople.map(thePlayer => {
  //     const li = document.createElement("li");
  //     const redButton = document.createElement("button");
  //     redButton.innerHTML = "Red Team";
  //     redButton.addEventListener("clicked", function() {
  //       chosenOne(thePlayer.id);
  //     });
  //     li.appendChild(redButton);
  //     li.appendChild(
  //         document.createTextNode(thePlayer.name + " - " + thePlayer.skillSet))
  //     dodgeBallPlayer.append(li);
  
  //     const blueButton = document.createElement("button");
  //     blueButton.innerHTML = "Blue Team";
  //     blueButton.addEventListener('clicked', function() {
  //       chosenOne(thePlayer.id);
  //     });
  //     li.appendChild(blueButton);
  //     li.appendChild(
  //       document.createTextNode(thePlayer.name + " - " + thePlayer.skillSet))
  //     dodgeBallPlayer.append(li);
  //   });
  //   console.log(`li ${id} was clicked!`);
  // };
  
  
  
  //copy and paste below items for whiteboard and coding plan
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
  
  ***EXTRA******
  we also plan on being terds and also completing the bonus points practice.
  
  we can also math.random to choose teams for us
  
  we can also create an "undo button*/
  