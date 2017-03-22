//each item should be object
		//object: description, price, number in stock

//users: add item, delete item, search, modify number available, change description

//HELPER FUNCTIONS

var sget = require("sget");

var sleep = function(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
};

var wipeScreen = function () {
  return process.stdout.write('\033c');
};

var exit = function() {
  console.log("You have exited the program.");
  sleep(600);
};