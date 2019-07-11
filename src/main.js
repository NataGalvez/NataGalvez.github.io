
workData.fillSelect(workData.uniques("name"),"formCharacter");
workData.fillSelect(workData.uniques("status"),"formStatus");
workData.fillSelect(workData.uniques("species"),"formSpecies");
workData.fillSelect(workData.uniques("gender"),"formGender");
function cleanDiv(){
	document.getElementById("result").innerHTML="";
}
function dinamics(){
	div=document.getElementById("result");
		fatherDiv=document.createElement("div");
		fatherDiv.className="etiquet";
}
document.getElementById("formCharacter").addEventListener("change", ()=>{
	//workData.cleanDiv();
	cleanDiv();
	dinamics();
	let valueSelect=document.getElementById("formCharacter").value;
	workData.showCard(valueSelect,"name");
})
document.getElementById("formStatus").addEventListener("change", ()=>{
	cleanDiv();
	dinamics();
	let valueSelect=document.getElementById("formStatus").value;
	workData.showCard(valueSelect,"status");
	
})
document.getElementById("formSpecies").addEventListener("change", ()=>{
	cleanDiv();
	dinamics();
	let valueSelect=document.getElementById("formSpecies").value;
	workData.showCard(valueSelect,"species");
	
})
document.getElementById("formGender").addEventListener("change", ()=>{
	cleanDiv();
	dinamics();
	let valueSelect=document.getElementById("formGender").value;
	workData.showCard(valueSelect,"gender");
	
})


dinamics();
/*function addDatesSelect(idElement, texto, valor)
{
    let character = document.getElementById(idElement);
    let listName = document.createElement("option");
    listName.text = texto;
    listName.value= valor;
    character.add(listName);
}*/

