

const fetchPoke = async () =>{

    for(i = 1 ; i <= 150 ; i++){
        getPokeData(i);
        

    }

    



};

const getPokeData = async id =>{

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await response.json();
    displayPokeData(data);
};

fetchPoke();

const pokeContainer = document.getElementById('poke-container');



const displayPokeData = data =>{
    console.log(data);
    let pokename = data.species.name;
    pokename = pokename.charAt(0).toUpperCase() + pokename.slice(1);

    let firstType = data.types[0].type.name;
    firstType = firstType.charAt(0).toUpperCase() + firstType.slice(1)


    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
    <div class="card h-100 bg">
            <img src="${data.sprites.front_default}" class="card-img-top poke-img">
            <div class="card-body">
              <h3 class="card-title fw-bold">${pokename}</h3>
              <p class="card-text pokeid">#0${data.id}</p>
              <p class="fw-bold">Type: <span class="poketype fw-normal">${firstType}</span></p>
            </div>
    `;

    if(firstType === 'Grass'){
        div.children[0].style.backgroundColor = '#38CC77';
    }else if(firstType === 'Fire'){
        div.children[0].style.backgroundColor = '#DE4839';
    }else if(firstType === 'Normal'){
        div.children[0].style.backgroundColor = '#EDBF69';
    }else if(firstType === 'Water'){
        div.children[0].style.backgroundColor = '#1B98F5';
    }else if(firstType === 'Flying'){
        div.children[0].style.backgroundColor = '#1C8D73';
    }else if(firstType === 'Bug'){
        div.children[0].style.backgroundColor = '#6EC72D';
    }else if(firstType === 'Dark'){
        div.children[0].style.backgroundColor = '#242B2E';
    }
    else if (firstType === 'Ice'){
        div.children[0].style.backgroundColor = '#51E1ED';
    }else if (firstType === 'Rock'){
        div.children[0].style.backgroundColor = '#AF9D5A';
    }
    
    else{
        div.children[0].style.backgroundColor = '#EDBF69';
    }

    pokeContainer.appendChild(div);


}




