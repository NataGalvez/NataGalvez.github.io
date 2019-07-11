const data= window.RICKANDMORTY.results; 
window.workData = { 
	uniques: (property)=>{
		let allArr=[];
		for (let i = 0; i < data.length; i++) {
			allArr.push(data[i][property]);
		}
		return [...new window.Set(allArr)]
	},
	fillSelect: (uniquesArr, combobox)=>{
		
		for (let i = 0; i < uniquesArr.length; i++) {
			let valueSelect= document.getElementById(combobox);
			let list=document.createElement("option");
			list.text= uniquesArr[i];
			if (combobox==="formCharacter") {
				list.value= uniquesArr[i];
			}else{
				list.value= uniquesArr[i];
			}
			valueSelect.add(list);
		}
	},
	showCard: (valueSelect, propiedad)=>{
		let arr=["image","name","status","species","gender"];
		let arrSpanish=["Imagen","Nombre", "Estado", "Especie","Genero"];
		window.div.appendChild(window.fatherDiv);
		let filterCondition= data.filter((dato)=>dato[propiedad]===valueSelect);
			for (let a = 0; a < filterCondition.length; a++) {
				for (let i = 0; i <arr.length; i++) {
					if (arr[i]=="image") {
						let img=document.createElement("img");
						img.src=filterCondition[a][arr[i]];
						window.fatherDiv.appendChild(img);
					}else{
						let p=document.createElement("p");
						p.innerHTML=arrSpanish[i]+":"+filterCondition[a][arr[i]];
						fatherDiv.appendChild(p);
					}
				}
			}
	}
	
}
