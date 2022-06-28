var elSelect = document.querySelector(".js-select")
var elList = document.querySelector(".pokemons__list");
var elForm = document.querySelector(".form");
var elList = document.querySelector(".pokemons__list");


function renderType(arr, element){

  let renderTypes = [];

  arr.forEach((p) => {

    p.type.forEach(type => {
      if(!renderTypes.includes(type)){
        renderTypes.push(type)
      }
    })
  })

  renderTypes.forEach(type => {
    const newOption = document.createElement("option");
    newOption.value = type;
    newOption.textContent = type;
    element.appendChild(newOption);
  })

}



function render(arr){
  elList.innerHTML = "";

  for (var pokemon of arr){

    var elItem =  document.createElement("li");
    var elImg =  document.createElement("img");
    var elBox =  document.createElement("div");
    var elName =  document.createElement("h2");
    var elType =  document.createElement("p");
    var elSublist =  document.createElement("ul");
    var elWeaknesses =  document.createElement("li");
 


    elImg.textContent = pokemon.img;
    elName.textContent = pokemon.name;
    elType.textContent = pokemon.type.join(", ");
    elWeaknesses.textContent = pokemon.weaknesses.join(", ");


    elItem.setAttribute("class", "card mb-3 bg-secondary bg-opacity-25 border-5 rounded");
    elItem.setAttribute("style", "width: 18rem");
    elImg.setAttribute("src", pokemon.img);
    elImg.setAttribute("height", 286);
    elImg.setAttribute("class", "card-img");
    elBox.setAttribute("class", "card-body text-center bg-light");
    elImg.setAttribute("class", "card-img-top");
    elName.setAttribute("class", "card-title");
    elType.setAttribute("class", "card-text");
    elSublist.setAttribute("class", "card-list list-unstyled");    


    elBox.appendChild(elName);
    elBox.appendChild(elType);
    elBox.appendChild(elSublist);
    elSublist.appendChild(elWeaknesses);
    elItem.appendChild(elImg);
    elItem.appendChild(elBox);
    elList.appendChild(elItem);
  }
}


elForm.addEventListener("change", evt => {

  evt.preventDefault();

  const elSelectVal = elSelect.value;

  let filterTypes = elSelectVal == "all types" ? pokemons : pokemons.filter(p => p.type.includes(elSelectVal));

  console.log(filterTypes);

  render(filterTypes, elList);
})

render(pokemons, elList)
renderType(pokemons, elSelect);