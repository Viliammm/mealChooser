var options = [	"Bun Bo Nam Bo Dejvice",
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


				]
var button = document.querySelector("button")



function choose(){
	var x = Math.floor(Math.random()*(options.length));
	alert("We are eating " + options[x]);
};

button.addEventListener("click", choose);