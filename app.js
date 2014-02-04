//=================== Constructors ===================
var FoodItem = function (name, calories, vegan, glutenFree, citrusFree) {
	this.name = name;
	this.calories = calories;
	this.vegan = vegan || false;
	this.glutenFree = glutenFree || false;
	this.citrusFree = citrusFree || false;	
};

	FoodItem.prototype.toString = function () {
		return "Name: "	+ this.name + 
		"\nCalories: " + this.calories +
		"\nVegan: " + this.vegan +
		"\nGluten Free: " + this.glutenFree +
		"\nCitrus Free: " + this.citrusFree;
	};

var Drink = function (name, description, price, ingredientsArr) {
	this.name = name;
	this.description = description;
	this.price = price;
	this.ingredientsArr = ingredientsArr;	
};
	Drink.prototype.toString = function () {
		return "Name: "	+ this.name + 
		"\nDescription: " + this.description +
		"\nPrice: " + this.price +
		"\nIngredients: " + this.ingredientsArr.join(", ");
	};

var Plate = function (name, description, price, ingredientsArr) {
	this.name = name;
	this.description = description;
	this.price = price;
	this.ingredientsArr = ingredientsArr;	
};

	Plate.prototype.toString = function () {
		return "Name: "	+ this.name + 
		"\nDescription: " + this.description +
		"\nPrice: " + this.price +
		"\nIngredients: " + this.ingredientsArr.join(", ");
	};

	Plate.prototype.isVegan = function () {
		return this.ingredientsArr.every(function(element) {
			return element.vegan;
				}
			);
	};

	Plate.prototype.isGlutenFree = function () {
		return this.ingredientsArr.every(function(element) {
			return element.glutenFree;
				}
			);
	};

	Plate.prototype.isCitrusFree = function () {
		return this.ingredientsArr.every(function(element) {
			return element.citrusFree;
				}
			);
	};


var Order = function (platesArr) {
	this.platesArr = platesArr;
};
	
	Order.prototype.toString = function () {
		return "Plates: " + this.platesArr.join("\n");
	};

var Menu = function (platesArr) {
	this.platesArr = platesArr;
};
	
	Menu.prototype.toString = function () {
		return "Plates: " + this.platesArr.join("\n");
	};

var Restr = function (name, description, menu) {
	this.name = name;
	this.description = description;
	this.menu = menu;
};

	Restr.prototype.toString = function () {
		return "Name: "	+ this.name + 
		"\nDescription: " + this.description +
		"\nMenu: " + this.menu;
	};

var Customer = function (pref) {
	this.dietaryPrefence = pref;
};

	Customer.prototype.toString = function () {
		return "Dietary Preference: " + this.dietaryPrefence;
	};

//================ Instances =================

//Ingredients
var tomato = new FoodItem("Tomato", 22, true, true, true);
var avocado = new FoodItem("Avocado", 322, true, true, true);
var onion = new FoodItem("Onion", 44, true, true, true);
var lime = new FoodItem("Lime", 20, true, true, false);
var beef = new FoodItem("Beef", 500, false, true, true);
var tortilla = new FoodItem("Tortilla", 90, true, false, true);
var beans = new FoodItem("Beans", 100, true, true, true);
var lettuce = new FoodItem("Lettuce", 50, true, true, true);
var rice = new FoodItem("Rice", 120, true, true, true);
var tequila = new FoodItem("Tequila", 100, true, true, true);
var salt = new FoodItem("Salt", 0, true, true, true);
var triplesec = new FoodItem("Triple Sec", 100, true, true, false);


//Plates
var guac = new Plate("Guacamole", "Green stuff", 7.50, [tomato, avocado, onion, lime]);

var burrito = new Plate("Burito", "Tortilla wrapped thing", 6.50, [beef, tortilla, beans, lettuce, rice]);

var margarita = new Drink("Margarita", "Fancy drink", 6.50, [lime, tequila, salt, triplesec]);

var mainMenu = new Menu([guac, burrito, margarita]);

var burritoKing = new Restr("Burrito King", "Weird Mexican food", mainMenu);

burritoKing.toString();