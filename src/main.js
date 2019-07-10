
const data = RICKANDMORTY.results;

function addDatesSelect(idElement, texto, valor)
{
    let character = document.getElementById(idElement);
    let listName = document.createElement("option");
    listName.text = texto;
    listName.value= valor;
    character.add(listName);
}

workData.fillSelect(workData.uniques("name"),"formCharacter");
workData.fillSelect(workData.uniques("status"),"formStatus");
workData.fillSelect(workData.uniques("species"),"formSpecies");
workData.fillSelect(workData.uniques("gender"),"formGender");
document.getElementById("formCharacter").addEventListener("change", ()=>{
	workData.cleanDiv();

	let valueSelect=document.getElementById("formCharacter").value;
	workData.showCard(valueSelect);
})
document.getElementById("formStatus").addEventListener("change", ()=>{
	let valueSelect=document.getElementById("formStatus").value;
	workData.showCardS(valueSelect,"status");
})
document.getElementById("formSpecies").addEventListener("change", ()=>{
	let valueSelect=document.getElementById("formSpecies").value;
	workData.showCardS(valueSelect,"species");
})
document.getElementById("formGender").addEventListener("change", ()=>{
	let valueSelect=document.getElementById("formGender").value;
	workData.showCardS(valueSelect,"gender");
})


