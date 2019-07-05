
const data = RICKANDMORTY.results
function formRickAndMorty(){
	for (let i = 0; i < data.length; i++) {
		//name+= data[i].name;
		let character = document.getElementById("formCharacter");
		let listName = document.createElement("option");
		listName.text = data[i].name;
		listName.value= i;
		character.add(listName);
	}
	let status=[];
	for (let i = 0; i< data.length; i++){
		data[i].status;
		status.push(data[i].status);
	}
	let nuevoStatus= [...new Set(status)];

	for (let i = 0; i<nuevoStatus.length; i++) {
		let status=document.getElementById("formStatus");
		let listStatus= document.createElement("option");
		listStatus.text=nuevoStatus[i];
		listStatus.value=i;
		status.add(listStatus);
	}

	let species=[];
	for (let i = 0; i< data.length; i++) {
		data[i].species;
		species.push(data[i].species);
	}
	let nuevoSpecies= [...new Set(species)];

	for (let i = 0; i< nuevoSpecies.length; i++) {
		let species=document.getElementById("formSpecies");
		let listSpecies= document.createElement("option");
		listSpecies.text=nuevoSpecies[i];
		listSpecies.value=i;
		species.add(listSpecies);
	}
	console.log(nuevoSpecies)

	let gender=[];
	for (let i = 0; i< data.length; i++) {
		data[i].gender;
		gender.push(data[i].gender);
	}
	let nuevoGender= [...new Set(gender)];

	for (let i = 0; i< nuevoGender.length; i++) {
		let gender=document.getElementById("formGender");
		let listGender= document.createElement("option");
		listGender.text=nuevoGender[i];
		listGender.value=i;
		gender.add(listGender);
	}
	console.log(nuevoGender)

};
formRickAndMorty(data);
/*window.character = character;
var data = RICKANDMORTY.results
const character = () => {
	for (let i = 0; i < data.length; i++) 
	{
		let x = document.getElementById("formCharacter");
		let option = document.createElement("option");
		option.text = data[i].name;
		option.value = i;
		x.add(option);
			
	}
  };
*/
