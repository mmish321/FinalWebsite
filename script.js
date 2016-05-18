if (myArr.chain.species.name == name) {
	console.log(true);
}
for (i = 0; i < myArr.chain.evolves_to.length; i++) {
	if (myArr.chain.evolves_to[i].species.name == name && myArr.chain.evolves_to[i].evolves_to.length > 0) {
		console.log(true);
	}
	if (myArr.chain.evolves_to[i].evolves_to.length == 0 && myArr.chain.evolves_to[i].species.name == name) {
		console.log(false);
	}
	if (myArr.chain.evolves_to[i].evolves_to.length > 0) {
		for (j = 0; j < myArr.chain.evolves_to[i].evolves_to.length; j++) {
			if (myArr.chain.evolves_to[i].evolves_to[j].species.name == name && myArr.chain.evolves_to[i].evolves_to[j].evolves_to.length == 0) {
				console.log(false);
			}
		}
	}
}
