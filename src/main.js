const data = RICKANDMORTY.results;

function addDatesSelect(idElement, texto, valor)
{
    let character = document.getElementById(idElement);
    let listName = document.createElement("option");
    listName.text = texto;
    listName.value= valor;
    character.add(listName);
}


