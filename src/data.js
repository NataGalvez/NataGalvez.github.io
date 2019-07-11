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

/*crear funcion para llenar status
function llenarStatus(idSelect)
{
	//Crear variable vacia en formato array.
	let status=[];

	//Recorriendo los datos.
	for (let i = 0; i< data.length; i++)
	{
		//Obtieniendo todos los status que existen y los agregas a la variable vacia.
		status.push(data[i].status);
	}

	//Creando una nueva variable y la llenas con los status unicos.
	let nuevoStatus= [...new Set(status)];

	//Recorro los datos unicos.
	for (let i = 0; i < nuevoStatus.length; i++) 
	{
		//Le envio los datos a la funcion.
		addDatesSelect(idSelect, nuevoStatus[i], i);
	}
}

function llenarGenero(idGenero)
{
	//crear variable vacia para agregar elementos
	let genero =[];

	//hacer un for que rcorra los datos y tome todos los generos
	for (let i = 0; i < data.length; i++) 
	{ 
		//usar la variable con push(llenar con generos)
		genero.push(data[i].gender);
	}
	let nuevoGenero = [...new Set(genero)]

	for (let i = 0; i < nuevoGenero.length; i++) {
		addDatesSelect(idGenero, nuevoGenero[i], i);
	}
		
	
}


function llenarEspecies(idEspecies)
{
	let especie =[];

	for (let i = 0; i < data.length; i++) 
	{
		especie.push(data[i].species);
	}

	let nuevoEspecie = [...new Set (especie)]

	for (let i = 0; i < nuevoEspecie.length; i++) {
		addDatesSelect(idEspecies,nuevoEspecie[i],i);
		
	}

}

function addImg()
{
	let todosLosSelect = document.getElementsByTagName("select")
	let e;
	let datosPersonajes =[];
	let getPersonaje;
	for (let i = 0; i < todosLosSelect.length; i++) 
	{
		e = todosLosSelect[i];
		datosPersonajes.push(e.options[e.selectedIndex].text);
	}

	for (let i = 0; i < data.length; i++) 
	{
		if(datosPersonajes[0] == data[i].name && datosPersonajes[1] == data[i].status && datosPersonajes[2] == data[i].species && datosPersonajes[3] == data[i].gender)
		{
			getPersonaje = data[i];
		}
	}
	let idTarjeta = document.getElementById("tarjeta");
	let img = document.createElement("img");
	img.src = getPersonaje.image;
	let  nombre = getPersonaje.name;
	console.log(nombre);
	idTarjeta.appendChild(img)
}
*/