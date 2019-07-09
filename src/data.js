const data=RICKANDMORTY.results;
window.workData = {
	uniques: (property)=>{
		let allArr=[];
		for (let i = 0; i < data.length; i++) {
			allArr.push(data[i][property]);
		}
		return [...new Set(allArr)]
	},
	fillSelect: (uniquesArr, combobox)=>{
		for (let i = 0; i < uniquesArr.length; i++) {
			let valueSelect= document.getElementById(combobox);
			let list=document.createElement("option");
			list.text= uniquesArr[i];
			if (combobox==="formCharacter") {
				list.value= i;
			}else{
				list.value= uniquesArr[i];
			}
			valueSelect.add(list);
		}
	},
	cleanDiv: ()=>{
		document.getElementById("result").innerHTML="";
	},
	showCard: (valueSelect)=>{
		let arr=["image","name","status","species","gender"];
		let arrSpanish=["Imagen","Nombre", "Estado", "Especie","Genero"];
		div=document.getElementById("result");
		fatherDiv=document.createElement("div");
		fatherDiv.className="etiquet";
		div.appendChild(fatherDiv);
			for (let i = 0; i <arr.length; i++) {
				if (arr[i]=="image") {
					let img=document.createElement("img");
					img.src=data[valueSelect][arr[i]];
					fatherDiv.appendChild(img);
				}else{
					let p=document.createElement("p");
					p.innerHTML=arrSpanish[i]+":"+data[valueSelect][arr[i]];
					fatherDiv.appendChild(p);
				}
			}
	},
	showCardS: (valueSelect,propiedad)=>{
		workData.cleanDiv();
		for (let i = 0; i < data.length; i++) {
			if(valueSelect===data[i][propiedad]){
				workData.showCard(i);
			}
		}
	}
}