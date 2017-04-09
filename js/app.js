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


function pullFilmList() {
 const requestData = JSON.parse(this.responseText);
 const film = requestData.results[4].title;
 const films = document.querySelector('#filmList');
 films.innerHTML = 'My name is ' + film;
}

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





