const getName = new XMLHttpRequest();
getName.addEventListener('load', pullName);
getName.open('GET' , 'http://swapi.co/api/people/4/');
getName.send();

const getName14 = new XMLHttpRequest();
getName14.addEventListener('load', pullName2);
getName14.open('GET' , 'http://swapi.co/api/people/14/');
getName14.send();

const getHomeWorld = new XMLHttpRequest();
getHomeWorld.addEventListener('load', pullData);
getHomeWorld.open('GET' , 'http://swapi.co/api/planets/1/');
getHomeWorld.send();

const getSpecies = new XMLHttpRequest();
getSpecies.addEventListener('load', pullDataSpecies);
getSpecies.open('GET' , 'http://swapi.co/api/species/1/');
getSpecies.send();

const getFilm = new XMLHttpRequest();
getFilm.addEventListener('load', pullFilmList);
getFilm.open('GET' , 'http://swapi.co/api/films/');
getFilm.send();

//a function that will execute when the list of films are loaded, it will
//populate the newly created ul, called film planet, with planet names as listed items.

function loadPlanets(ul, planetName){
  const li2 = document.createElement("li");
  const planetTextNode = document.createTextNode(planetName);
  li2.appendChild(planetTextNode);
  ul.appendChild(li2);
}


function pullFilmList() {
 const requestData = JSON.parse(this.responseText);

 for( let i = 0;i<requestData.results.length;i++){
   const li = document.createElement("li");
   const film = requestData.results[i].title;
   const filmTitle = document.createTextNode(film);
   li.appendChild(filmTitle);
   const filmList = document.querySelector('#filmList');
  filmList.appendChild(li);
  //Adding the list of film Planets
    //adds the film planet title
    const ul = document.createElement("ul");
    const filmPlanetLabel = document.createTextNode("Film Planet");
    ul.appendChild(filmPlanetLabel);
    filmList.appendChild(ul);

    //add the film planets
    for(let j = 0; j <requestData.results[i].planets.length;j++){
      const Oplanets = requestData.results[i].planets[j];
      const getPlanet = new XMLHttpRequest();

      getPlanet.addEventListener('load', function() {
         const requestData = JSON.parse(this.responseText);
         loadPlanets(ul,requestData.name);
      });

      getPlanet.open('GET' , Oplanets);
      getPlanet.send();


      console.log(Oplanets);
    }
  }
}

// function pullPlanetList

function pullName() {
 const requestData = JSON.parse(this.responseText);
 const name = requestData.name;
 // console.log(requestData);
 const personName = document.querySelector('#person4Name');
 personName.innerHTML = 'My name is ' + name;
}

function pullName2() {
 const requestData = JSON.parse(this.responseText);
 const name2 = requestData.name;
 // console.log(requestData);
 const personName2 = document.querySelector('#person14Name');
 personName2.innerHTML = 'My name is ' + name2;
}

function pullData() {
 const requestData = JSON.parse(this.responseText);
 const name = requestData.name;
 // console.log(requestData);
 const homeWorld = document.querySelector('#person4HomeWorld');
 homeWorld.innerHTML = 'I come from ' + name;

}

function pullDataSpecies() {
 const requestData = JSON.parse(this.responseText);
 const name = requestData.name;
 // console.log(requestData);
 const species = document.querySelector('#person14Species');
 species.innerHTML = `I am a ${name} being`;
}





