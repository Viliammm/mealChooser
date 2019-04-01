var eatOut = [	"Bun Bo Nam Bo Dejvice",
				"Bun Bo Nam Bo Letná", 
				"Bun Bo Nam Bo Anděl",
				"Bun Bo Nam Bo Hradčanská",
				"Čína", 
				"Panda", 
				"Fresh Point",
				"360 Pizza",
				"Bageterie",
				"KFC",
				"Kebab Hradčanská",
				"Burrito Loco",
				"Mexická restaurace Hradčanská",
				"Potrefená Husa",
				"McDonalds",
				"Canttina",
				"Burger King",
			];

var recipes = [	"Rybí prsty",
				"Rybí filé",
				"Pan Gasius",
				"Bryndzové halušky",
				"Abomination",
				"Standardní špagety",
				"Špagety s párkem",
				"Tagliatelle Carbonara",
				"Pečené kuřecí křídla",
				"Stroganoff",
				"Rizoto",
				"Plněná paprika",
				"Těstoviny se sýrovo-smetanovou omáčkou",
				"Hovězí s nudlemi a zeleninou",
				"Kuřecí maso s ananasem",
				"ŠPÍZY!",
				"Tacossss",

			];

var pickBtn = document.querySelector(".picker");
var addBtn = document.querySelector(".adder");


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
