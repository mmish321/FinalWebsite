var pokemon = new XMLHttpRequest();

//var name = prompt("Whats the name of the pokemon you have?");
var url = "http://pokeapi.co/api/v2/evolution-chain/33";
 //  findName = function(name) {
 //      var count = 1;
 // 	while (count > 0) {
 //  		var pokemon2 = new XMLHttpRequest();
 // 		var url2 = "http://pokeapi.co/api/v2/evolution-chain/" + count;
 //  		if (pokemon2.status == 400) {
 //  			return false;
 //  		}
 //        var arr = JSON.parse(pokemon2.responseText);
 //        if (arr.chain.species.name == name) {
 //        	return count; 
 //        }
 //        if (arr.chain.evolves_to[0].species.name == name) {
 //        	return count;
 //        }
 		
 //  		process the return to find if the name exists in the chain then break
 //  		count++
 		
 //  	}

 // }

pokemon.onreadystatechange = function(){
	if(pokemon.readyState == 4 && pokemon.status == 200){
		var myArr = JSON.parse(pokemon.responseText);
		console.log(myArr);
		console.log(myArr.chain.species.name);
		console.log(myArr.chain.evolves_to[0].species.name);
		console.log(myArr.chain.evolves_to[1].species.name);
		myFunction(myArr);
	}
}

pokemon.open("GET", url, true);
pokemon.send();

function myFunction(arr){
	var out  = "";
	var i;
	for(i = 0; i < arr.length; i++){
		out += array.chain.evolves_to[i].species.name;
		console.log(out);
	}
}
