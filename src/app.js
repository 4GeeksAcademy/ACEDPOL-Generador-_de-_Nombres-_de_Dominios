/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// variables para elementos html
let contElement = document.getElementById("creations");
let domainElement = document.getElementById("domain");

// variables constantes
let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let dom = [
  "com", // Global
  "es", // Epaña
  "eu" // Europa
];
const MAX_ODDS = pronoun.length * adj.length * noun.length * dom.length;

// variables que se actualizan en el tiempo
let namesSniped = [];

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  // Sets generator button feature
  let btn = document.getElementById("btnNewDomain");
  btn.addEventListener("click", () => newDomain());

  // Sets reset button feature
  let btn2 = document.getElementById("btnReset");
  btn2.addEventListener("click", () => reset());

  // Creates and show the new domain generated that is not taken
  newDomain();
};

function reset() {
  namesSniped = [];
  newDomain();
}

function newDomain() {
  // Backend
  console.clear();
  let newDomain = getDomain();
  namesSniped.push(newDomain);

  // Front end
  if (newDomain === undefined) {
    // if there is no more chances
    alert("All the current domains are taken..."); // WARNING STOP
    domainElement.innerHTML =
      "It seems that it is not available, please try again!";
    console.log("Couldn't create a new domain...");
  } else {
    // if success generation is create
    domainElement.innerHTML = newDomain;
    console.log("New domain created: < " + newDomain + " >");
    // refresh counter
    if (namesSniped.length !== 1) {
      // NO EMPTY list
      contElement.innerHTML = namesSniped.length - 1 + " / " + MAX_ODDS;
    } else {
      // if the list is EMPTY (this is for the start or reset)
      contElement.innerHTML = "0 / " + MAX_ODDS;
    }
  }
}

// Main function of this script finality ~ 'Engine system' a.k.a. Acedpol
function getDomain() {
  // Default generation
  if (namesSniped.length === 0) {
    let defaultDOM = "default_blank.url";
    return defaultDOM;
  }

  // Main variables
  let d_,
    cont = 0;
  const MAX = MAX_ODDS * 10; // number of oportunities

  // Main loop
  do {
    cont++;
    d_ = generateDomain();
    console.log(d_);
  } while (takenDomain(d_) && cont < MAX);

  // Time limit
  if (cont === MAX) {
    return undefined;
  }

  // Response
  return d_;
}

function takenDomain(dom) {
  for (let i = 0; i < namesSniped.length; i++) {
    const e_ = namesSniped[i];
    if (namesSniped.some(e_ => e_ === dom)) {
      return true;
    } else {
      return false;
    }
  }
}

function generateDomain() {
  return `${rndSlct(pronoun)}${rndSlct(adj)}${rndSlct(noun)}.${rndSlct(dom)}`;
}

function rndSlct(list) {
  let ri = rndInt(list.length);
  return list[ri];
}

function rndInt(max) {
  let n = Math.floor(Math.random() * max);
  return Math.floor(Math.random() * max);
}

// Otras extensiones:
//   "net", // Es una de las más antiguas y fue originalmente creada para sitios relacionados con redes (de ahí su nombre, “network”).
//   "org", // Para organizaciones
//   "biz", // Para negocios
//   "name", // Para individuos
//   "info", // Para información
//   "pro", // Para profesionales acreditados
//   "edu", // Educación
//   "gov", // Gobierno
//   "mil", // Militar
//   "blog", // creación de contenido de manera continua
//   "online", // Destacar la Presencia (otras extensiones ocupadas o deshabilitadas)
//   "site", // Generica
//   "cn", // China
//   "de", // Alemania
//   "uk", // Reino Unido
//   "br", // Brasil
//   "us" // Estados Unidos
//   "eu" // Europa
