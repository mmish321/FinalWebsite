var pokemon = new XMLHttpRequest();
var url = "http://pokeapi.co/api/v2/evolution-chain/{1}";

pokemon.onreadystatechange = function(){
	if(pokemon.readyState == 4 && pokemon.status == 200){
		var myArr = JSON.parse(pokemon.responseText);
		myFunction(myArr);
	}
}
pokemon.open("GET", url, false);
pokemon.send();

function myFunction(arr){
	var out  = "";
	var i;
	for(i = 0; i < arr.length; i++){
		out += array[i].url;
		console.log(out);
	}
}


console.log(pokemon.status);
console.log(pokemon.statusText);