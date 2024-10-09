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
  domainElement.innerHTML = "default_blank.url";
  newDomain();
};

function reset() {
  namesSniped = [];
  contElement.innerHTML = namesSniped.length + " / " + MAX_ODDS;
  domainElement.innerHTML = "default_blank.url";
}

function newDomain() {
  // Front end
  let newDomain = getDomain();

  // Backend
  if (newDomain === undefined) {
    alert("All the current domains are taken...");
    domainElement.innerHTML =
      "It seems that it is not available, please try again!";
  } else {
    // console.log("Search domain completed!");
    if (namesSniped.length !== 1) {
      contElement.innerHTML = namesSniped.length - 1 + " / " + MAX_ODDS;
    }
    domainElement.innerHTML = newDomain;
  }

  console.log("new domain created: " + newDomain);
}

// Main function of this script finality ~ 'Engine system' a.k.a. Acedpol
function getDomain() {
  // Initial red flag
  if (namesSniped.length === 0) {
    //console.log("Exit by zero! (First domain created)");
    let dom = "default_blank.url";
    contElement.innerHTML = namesSniped.length + " / " + MAX_ODDS;
    namesSniped.push(dom);
    return dom;
  }

  // Start point marker
  console.log("____Generator running____");

  // Main variables
  let d_,
    cont = 0;
  const MAX = 100;

  // Main loop
  do {
    cont++;
    console.log("cont = " + cont);
    d_ = generateDomain();
    console.log(d_);
  } while (takenDomain(d_) && cont < MAX); // CORREGIDO!! :)

  // Time limit
  if (cont === MAX) {
    return undefined;
  }

  // Response
  return d_;
}

function takenDomain(dom) {
  //console.log("Names actually in use: " + namesSniped.length);
  for (let i = 0; i < namesSniped.length; i++) {
    const e_ = namesSniped[i];
    // console.log(
    //   "Entra en el if() -- (Comprueba si el dominio generado se encuentra disponible)"
    // );
    if (namesSniped.some(e_ => e_ === dom)) {
      //console.log("Este dominio NO se encuentra disponible: " + e_);
      return true;
    } else {
      //console.log("DIRECCION DISPONIBLE");
      namesSniped.push(dom); // returns lenght
      return false;
    }
  }
}

function generateDomain() {
  return `${rndSlct(pronoun)}${rndSlct(adj)}${rndSlct(noun)}.${rndSlct(dom)}`;
}

function rndSlct(list) {
  // console.log("list = " + list);
  let ri = rndInt(list.length); // ERROR CATASFRAL: he cambiado de posiciones la 't' y la 'h' de la palabra 'length'
  // console.log("random int = " + ri);
  return list[ri];
}

function rndInt(max) {
  // console.log("max = " + max);
  let n = Math.floor(Math.random() * max);
  // console.log("random number = " + n);
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
