workData.fillSelect(workData.uniques("name"),"formCharacter");
workData.fillSelect(workData.uniques("status"),"formStatus");
workData.fillSelect(workData.uniques("species"),"formSpecies");
workData.fillSelect(workData.uniques("gender"),"formGender");
function cleanDiv(){
	document.getElementById("result").innerHTML="";
}
document.getElementById("btnSingle").addEventListener("click", ()=>{
	document.getElementById("single").style.display="block";
	document.getElementById("multiple").style.display="none";
})
document.getElementById("btnMultiple").addEventListener("click", ()=>{
	document.getElementById("single").style.display="none";
	document.getElementById("multiple").style.display="block";
})
document.getElementById("formCharacter").addEventListener("change", ()=>{
	//workData.cleanDiv();
	cleanDiv();
	let valueSelect=document.getElementById("formCharacter").value;
	workData.showCard(valueSelect,"name");
	document.getElementById("lastSearch").value="name";
	document.getElementById("lastValue").value=valueSelect;
})
document.getElementById("formStatus").addEventListener("change", ()=>{
	cleanDiv();
	let valueSelect=document.getElementById("formStatus").value;
	workData.showCard(valueSelect,"status");
	document.getElementById("lastSearch").value="status";
	document.getElementById("lastValue").value=valueSelect;
})
document.getElementById("formSpecies").addEventListener("change", ()=>{
	cleanDiv();
	let valueSelect=document.getElementById("formSpecies").value;
	workData.showCard(valueSelect,"species");
		document.getElementById("lastSearch").value="species";
		document.getElementById("lastValue").value=valueSelect;


})
document.getElementById("formGender").addEventListener("change", ()=>{
	cleanDiv();
	let valueSelect=document.getElementById("formGender").value;
	workData.showCard(valueSelect,"gender");
	document.getElementById("lastSearch").value="gender";
	document.getElementById("lastValue").value=valueSelect;


})

document.getElementById("a-z").addEventListener("click", ()=>{
	cleanDiv();
	let lastSearch= document.getElementById("lastSearch").value;
	let lastValue=document.getElementById("lastValue").value;
	workData.showCard(lastValue,lastSearch,"a");
})
document.getElementById("z-a").addEventListener("click" , ()=>{
	cleanDiv();
	let lastSearch= document.getElementById("lastSearch").value;
	let lastValue=document.getElementById("lastValue").value;
	workData.showCard(lastValue,lastSearch,"z");
})

/*function addDatesSelect(idElement, texto, valor)
{
    let character = document.getElementById(idElement);
    let listName = document.createElement("option");
    listName.text = texto;
    listName.value= valor;
    character.add(listName);
}*/

