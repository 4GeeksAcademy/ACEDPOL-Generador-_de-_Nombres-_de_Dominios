/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

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

// variables que se mantienen en el tiempo
let namesSniped = [];
let contElement = document.getElementById("creations");
let domainElement = document.getElementById("domain");

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
  // Front end
  console.clear();
  let newDomain = getDomain();

  // Backend
  if (newDomain === undefined) {
    alert("All the current domains are taken...");
    domainElement.innerHTML =
      "It seems that it is not available, please try again!";
  } else {
    if (namesSniped.length !== 1) {
      contElement.innerHTML = namesSniped.length - 1 + " / " + MAX_ODDS;
    }
    domainElement.innerHTML = newDomain;
  }

  console.log("new domain created: " + newDomain);
}

// Main function of this script finality ~ 'Engine system' a.k.a. Acedpol
function getDomain() {
  // Default domain created from scratch
  if (namesSniped.length === 0) {
    let dom = "default_blank.url";
    contElement.innerHTML = namesSniped.length + " / " + MAX_ODDS;
    namesSniped.push(dom);
    return dom;
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
      namesSniped.push(dom); // returns lenght
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
