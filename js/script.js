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
	];

var recipe = [	"Rybí prsty",
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



	];

var button = document.querySelector("button")


button.addEventListener("click", function(){
		var x = Math.floor(Math.random()*(eatOut.length));
		var y = Math.floor(Math.random()*(recipe.length));
		var cook = confirm("Do you want to cook something?");
		if (cook === true) {
			alert("Let's cook " + recipe[y]);
		}
		else{
			alert("Then we're getting " + eatOut[x]);
	}
});
