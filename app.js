//Document ready
// $(document).ready(function(){
 

	//Define Supplant
	if (!String.prototype.supplant) {
		String.prototype.supplant = function (o) {
			return this.replace(
				/\{([^{}]*)\}/g,
				function (a, b) {
				var r = o[b];
				return typeof r === 'string' || typeof r === 'number' ? r : a;
				}
			);
		};
	}

	//=================== Constructors ===================
	
	//Food item  =================
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

		FoodItem.prototype.create = function () {
			var myFoodItem = this;
			return $('<div class="food-item">{name}</div>'.supplant(myFoodItem));	
		};

	//Drink  =================
	var Drink = function (name, description, price, ingredientsArr) {
		this.name = name;
		this.description = description;
		this.price = price.toFixed(2);
		this.ingredientsArr = ingredientsArr;	
	};
		Drink.prototype.toString = function () {
			return "Name: "	+ this.name + 
			"\nDescription: " + this.description +
			"\nPrice: " + this.price +
			"\nIngredients: " + this.ingredientsArr.join(", ");
		};

		Drink.prototype.create = function () {
			var myDrink = this;
			return $('<div class="drink">{name}</div>'.supplant(myDrink));	
		};

		Drink.prototype.isVegan = function () {
			return this.ingredientsArr.every(function(element) {
				return element.vegan;
					}
				);
		};

		Drink.prototype.isGlutenFree = function () {
			return this.ingredientsArr.every(function(element) {
				return element.glutenFree;
					}
				);
		};

		Drink.prototype.isCitrusFree = function () {
			return this.ingredientsArr.every(function(element) {
				return element.citrusFree;
					}
				);
		};

	//Plate  =================
	var Plate = function (name, description, price, ingredientsArr) {
		this.name = name;
		this.description = description;
		this.price = price.toFixed(2);
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

		Plate.prototype.create = function () {
			var myPlate = this;
			return $('<div class="plate">{name}</div>'.supplant(myPlate));	
		};

	//Menu  =================
	var Menu = function (name, platesArr) {
		this.name = name;
		this.platesArr = platesArr;
	};
		
		Menu.prototype.toString = function () {
			return "Plates: " + this.platesArr.join("\n");
		};

		Menu.prototype.create = function () {
			var myMenu = [];
			for (var i = 0; i < this.platesArr.length; i++) {
				myMenu.push('<div class="menu-item" data-id="'+this.platesArr[i].name+'" data-price="'+this.platesArr[i].price+'"><strong>' + this.platesArr[i].name + '</strong>' + '<br><em>' + this.platesArr[i].description + '</em><div class="price">$' + this.platesArr[i].price + '</div><button class="btn btn-add" type="button">Add to Order</button></div>');
			}
			return $('<div class="menu"><h2>' + this.name + '</h2> <ul><li>' + myMenu.join("<li>") + '</ul></div>');	
		};

	//Order  =================
	var Order = function (platesArr) {
		this.platesArr = platesArr;
	};
		
		Order.prototype.toString = function () {
			return "Plates: " + this.platesArr.join("\n");
		};

		Order.prototype.create = function () {
			var myOrder = this;
			return $('<div class="order">{name}</div>'.supplant(myOrder));	
		};

	//Restaurant  =================
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

		Restr.prototype.create = function () {
			var myRestr = this;
			return $('<div class="restaurant"><h1>Welcome to {name}</h1></div>'.supplant(myRestr));	
		};

	//Customer =================
	var Customer = function (pref) {
		this.dietaryPrefence = pref;
	};

		Customer.prototype.toString = function () {
			return "Dietary Preference: " + this.dietaryPrefence;
		};

		Customer.prototype.create = function () {
			var myCustomer = this;
			return $('<div class="customer">{name}</div>'.supplant(myCustomer));	
		};

	//================ Instances =================

	//Ingredients  =================
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


	//Plates  =================
	var Guacamole = new Plate("Guacamole", "Sloppy green stuff", 7.50, [tomato, avocado, onion, lime]);

	var Burrito = new Plate("Burrito", "Tortilla wrapped thing", 6.50, [beef, tortilla, beans, lettuce, rice]);

	var Margarita = new Drink("Margarita", "Fancy cocktail drink", 6.50, [lime, tequila, salt, triplesec]);

	var mainMenu = new Menu("Our Menu", [Guacamole, Burrito, Margarita]);

	var burritoKing = new Restr("Burrito King", "Weird Mexican food", mainMenu);

	burritoKing.toString();

	//================ Global Variables =================
	var foodTotal = 0;

	//================ Event Handlers =================
	$(document).on('click', '.menu-item', function(){
			$(this).find('.btn-add').fadeToggle('fast');
	});


	$(document).on('click', '.btn-add', function(event){
		event.stopPropagation();
		var foodInfo = $(this).closest('.menu-item').data();
		var addedFood = $('<div class="order-item"><p>' + foodInfo.id + ' <span class="order-item-price">'+ foodInfo.price +'</span></p></div>');
		addedFood.appendTo('.added-items');
		foodTotal += (+foodInfo.price);
		$('#grand-total').text('$' + foodTotal.toFixed(2));
	});

	$(document).on('click', '#btn-vegan', function() {
		// $('.btn-pref').removeClass('btn-toggled');
		$(this).toggleClass('btn-toggled').siblings().removeClass('btn-toggled');
		$('.menu-item').removeClass('highlight');
		if ($(this).hasClass('btn-toggled')){
			for (var i = 0; i < mainMenu.platesArr.length; i++) {
				if (mainMenu.platesArr[i].isVegan()) {
					var name = mainMenu.platesArr[i].name;
					$('[data-id = '+ name +']').addClass("highlight");
				}
			}
		}
	});

	$(document).on('click', '#btn-gluten', function() {
		// $('.btn-pref').removeClass('btn-toggled');
		$(this).toggleClass('btn-toggled').siblings().removeClass('btn-toggled');
		$('.menu-item').removeClass('highlight');
		if ($(this).hasClass('btn-toggled')){
			for (var i = 0; i < mainMenu.platesArr.length; i++) {
				if (mainMenu.platesArr[i].isGlutenFree()) {
					var name = mainMenu.platesArr[i].name;
					$('[data-id = '+ name +']').addClass("highlight");
				}
			}
		}
	});

	$(document).on('click', '#btn-citrus', function() {
		// $('.btn-pref').removeClass('btn-toggled');
		$(this).toggleClass('btn-toggled').siblings().removeClass('btn-toggled');
		$('.menu-item').removeClass('highlight');
		if ($(this).hasClass('btn-toggled')){
			for (var i = 0; i < mainMenu.platesArr.length; i++) {
				if (mainMenu.platesArr[i].isCitrusFree()) {
					var name = mainMenu.platesArr[i].name;
					$('[data-id = '+ name +']').addClass("highlight");
				}
			}
		}
	});

	//================ Create Preference Menu =================


	//================ Main =================

	$('#main-container').append(burritoKing.create());
	$('#main-container').append(mainMenu.create());
	$('.menu').append('<div class="btn-container"><button class="btn btn-pref" id="btn-vegan" type="button">Vegan</button><button class="btn btn-pref" id="btn-gluten" type="button">Gluten Free</button><button class="btn btn-pref" id="btn-citrus" type="button">Citrus Free</button></div>');

// } );