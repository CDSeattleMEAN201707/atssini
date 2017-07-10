function Ninja(name,health = 100){
  var privateSpeedVar =  3
  var privateStrengthVar = 3
  this.name =  name;
  this.health =  health;
  this.sayName =  function(){
    console.log("Hey my name is " + this.name);
  }
  this.showStats = function(){
    console.log("Name: " + this.name +", Health:"+ this.health +", Speed: " + privateSpeedVar + ", Strength: " + privateStrengthVar );
  }
  this.drinkSake = function(){
    this.health += 10;
    console.log(this.health);
  }
  this.punch = function(otherNinja){
      if (otherNinja.constructor === Ninja){
      otherNinja.health -= 5;
      console.log(otherNinja.name + "was punched by " + this.name + "and lost 5 health");
    }
  }
    this.kick = function(otherNinja){
        if (otherNinja.constructor === Ninja){
        otherNinja.health = privateStrengthVar * 5;
        console.log(otherNinja.name + " was kicked by " + this.name + " and lost " + (privateStrengthVar*5) + " health");
      }
    }

}
// var ninja1 = new Ninja("Hyabusa");
// ninja1.sayName();
// // -> "My ninja name is Hayabusa!"
//
// ninja1.showStats();
// // -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"
//
// ninja1.drinkSake();

var blue_ninja = new Ninja("Goemon");
var red_ninja = new Ninja("Bill Gates");

red_ninja.punch(blue_ninja);
// -> "Goemon was punched by Bill Gates and lost 5 Health!

blue_ninja.kick(red_ninja);
// -> "Bill Gates was kicked by Goemon and lost 15 Health!"
