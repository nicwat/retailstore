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
  console.log(userMessages.exit);
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
	if (price.length <1 || isFinite(price)===false) {
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
};



//***********************************

var removeMerchandise = function() {
};
var searchMerchandise = function() {

};
var modifyMerchandise = function() {

};

//************************************
 var printMenu = function() {
    for (var key in mainMenuPrompts) {
      console.log(mainMenuPrompts[key]);
    }
};



var userMessages = {
	
                 exit: "\n You are now logged out",
                 badInput:"\n Please make a valid entry."
               };                     



var mainMenuPrompts = { 
                        welcome:            "|********************************************************************************|\n" + 
                                            "|                           Inventory Management                                 |\n" +
                                            "|********************************************************************************|\n"  
                                 ,
                                 
                        add: "Enter 'Add' or '1' to add inventory to store",
                        remove: "Enter 'Remove' or '2' to remove inventory",
                        search: "Enter 'Search' or '3' to search inventory",
                        modify: "Enter 'Modify' or '4' to view current zoo animals",
                        exit: "Enter 'Exit' or '5' to exit the Zoo\n"
                      };
//MAIN MENU LOGIC
var mainMenu = function() {
  wipeScreen();
  sleep(400);
  printMenu();
  sleep(400);
    var userSelection = sget("What would you like to do?").trim();
    
    if(userSelection.toLowerCase() == "add" || userSelection == 1) {
        addMerchandise();
    } else if(userSelection.toLowerCase() == "remove" || userSelection == 2) {
        removeMerchandise();
    } else if(userSelection.toLowerCase() == "search" || userSelection == 3) {
        searchMerchandise();
    } else if(userSelection.toLowerCase() == "modify" || userSelection == 4) {
        modifyMerchandise();
    } else if(userSelection.toLowerCase() == "exit" || userSelection == 5) {
        exit();
    } else {
      console.log(userMessages.badInput);
      mainMenu();
    }
}();




