var pokemon = new XMLHttpRequest();
var url = "http://pokeapi.co/api/v2/evolution-chain/3";

pokemon.onreadystatechange = function(){
	console.log(pokemon.readyState);
	console.log(pokemon.status);
	if(pokemon.readyState == 4 && pokemon.status == 200){
		var myArr = JSON.parse(pokemon.responseText);
		console.log(myArr);
		console.log(myArr.id);
		console.log(myArr.chain.evolves_to[0].species.name);
		myFunction(myArr);
	}
}

pokemon.open("GET", url, true);
pokemon.send();

function myFunction(arr){
	var out  = "";
	var i;
	for(i = 0; i < arr.length; i++){
		out += array[i].url;
		console.log(out);
	}
}