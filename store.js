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


function inventory(description, price, numInStock) {
  this.description = description;
  this.price = price;
  this.numInStock =  numInStock;
}


var totalMerchandise = [];

//*********************************//


var descriptionAdd = function(){
	var itemDescription = sget("Enter description").trim();
	description = itemDescription;
	if (itemDescription.length === 0){
		console.log("Please enter a valid description");
	}
};

var priceAdd = function (){
	var itemPrice = sget("Enter price").trim();
	price= itemPrice;
	if (priceAdd.length <1 || isFinite(health)===false) {
		console.log("Please enter a valid price.");
	}
};

// var inStockAdd = function(){};




var addMerchandise = function() { 
		descriptionAdd();
		priceAdd();
		// inStockAdd();
    


var newInventory = new inventory(description, price);
//include numInStock      
            totalMerchandise.push(newInventory);
           console.log("good");
           console.log(totalMerchandise)


}();


