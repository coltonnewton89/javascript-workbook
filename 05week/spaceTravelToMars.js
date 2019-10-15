'use strict';

let assert = require('assert');

let jobTypes = {
  pilot: 'MAV',
  mechanic: 'Repair Ship',
  commander: 'Main Ship',
  programmer: 'Any Ship!'
};
//create class of crewmember and tell it what needs to describe our crewmember
class CrewMember {
  constructor(iname, ijob, ispecialSkill) {
    this.name = iname;
    this.job = ijob;
    this.specialSkill = ispecialSkill;
  }
  //create a function that pushes the crewmemeber into the ship
  enterShip(theShip) {
    this.ship = theShip;
    theShip.crew.push(this)

  }
}
//create class of ship and tell it what needs to describe our ship
class Ship {
  constructor(isname, istype, isability) {
    this.name = isname;
    this.type = istype;
    this.ability = isability;
  }
  /*create function that when ship has 1 or more crewmembers it will return the ability
  of that ship aka, what the ship needs to do!*/
  missionStatement() {
    if (this.crew.length >= 1) {
      return this.ability
    } else {
      return "Can't perform a mission yet.";
    }
  }
}



let crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
let crewMember2 = new CrewMember('Commander Lewis', 'commander', 'geology');

let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');



//tests
if (typeof describe === 'function') {
  describe('CrewMember', function () {
    it('should have a name, a job, a specialSkill and ship upon instantiation', function () {
      var crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      assert.equal(crewMember1.name, 'Rick Martinez');
      assert.equal(crewMember1.job, 'pilot');
      assert.equal(crewMember1.specialSkill, 'chemistry');
      assert.equal(crewMember1.ship, null);
    });

    it('can enter a ship', function () {
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      let crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      crewMember1.enterShip(mav);
      assert.equal(crewMember1.ship, mav);
      assert.equal(mav.crew.length, 1);
      assert.equal(mav.crew[0], crewMember1);
    });
  });

  describe('Ship', function () {
    it('should have a name, a type, an ability and an empty crew upon instantiation', function () {
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      assert.equal(mav.name, 'Mars Ascent Vehicle');
      assert.equal(mav.type, 'MAV');
      assert.equal(mav.ability, 'Ascend into low orbit');
      assert.equal(mav.crew.length, 0);
    });

    it('can return a mission statement correctly', function () {
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      let crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      let hermes = new Ship('Hermes', 'Main Ship', 'Interplanetary Space Travel');
      let crewMember2 = new CrewMember('Commander Lewis', 'commander', 'geology');
      assert.equal(mav.missionStatement(), "Can't perform a mission yet.");
      assert.equal(hermes.missionStatement(), "Can't perform a mission yet.");

      crewMember1.enterShip(mav);
      assert.equal(mav.missionStatement(), "Ascend into low orbit");

      crewMember2.enterShip(hermes);
      assert.equal(hermes.missionStatement(), "Interplanetary Space Travel");
    });
  });
}
