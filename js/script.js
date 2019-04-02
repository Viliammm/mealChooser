var eatOut = [	"\nBun Bo Nam Bo Dejvice",
				"\nBun Bo Nam Bo Letná", 
				"\nBun Bo Nam Bo Anděl",
				"\nBun Bo Nam Bo Hradčanská",
				"\nČína", 
				"\nPanda", 
				"\nFresh Point",
				"\n360 Pizza",
				"\nBageterie",
				"\nKFC",
				"\nKebab Hradčanská",
				"\nBurrito Loco",
				"\nMexická restaurace Hradčanská",
				"\nPotrefená Husa",
				"\nMcDonalds",
				"\nCanttina",
				"\nBurger King",
			];

var recipes = [	"\nRybí prsty",
				"\nRybí filé",
				"\nPan Gasius",
				"\nBryndzové halušky",
				"\nAbomination",
				"\nStandardní špagety",
				"\nŠpagety s párkem",
				"\nTagliatelle Carbonara",
				"\nPečené kuřecí křídla",
				"\nStroganoff",
				"\nRizoto",
				"\nPlněná paprika",
				"\nTěstoviny se sýrovo-smetanovou omáčkou",
				"\nHovězí s nudlemi a zeleninou",
				"\nKuřecí maso s ananasem",
				"\nŠPÍZY!",
				"\nTacossss",

			];

var pickBtn = document.querySelector(".picker");
var addBtn = document.querySelector(".adder");
var showBtn = document.querySelector(".shower")


function choose(){
	pickBtn.addEventListener("click", function(){
			var x = Math.floor(Math.random()*(eatOut.length));
			var y = Math.floor(Math.random()*(recipes.length));
			var cook = confirm("Do you want to cook something?");
			if (cook === true) {
				alert("Let's cook " + recipes[y]);
			}
			else{
				alert("Then we're getting " + eatOut[x]);
		}
	});
};

choose();

//I would like this button to be more beautiful, maybe print the options on a website directly, but this will do for now
function show(){
	showBtn.addEventListener("click", function(){
		alert("Our take out options are: \n" + eatOut);
		alert("Or we can cook something from this \n" + recipes);
	})
};

show();



// This is obviously not a permanent solution, as I will need to make a backend solution to be able to add permanent new options to the arrays

function add(){
	addBtn.addEventListener("click", function(){
		var addRecipe = confirm("Do you want to add a recipe?");
		
		
		if(addRecipe === true) {
			var newRecipe = prompt("What recipe are we adding?");
			recipes.push(newRecipe);
			alert(newRecipe + " added!");
		}
		else if(addRecipe === false) {
			var addTakeOut = confirm("Do you want to add an take out option then?");
			
			if(addTakeOut === true) {
				var newTakeOut = prompt("What take out are we adding?");
				eatOut.push(newTakeOut);
				alert(newTakeOut + " added!");
			};
		};
	});
}

add();
