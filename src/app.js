/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let namesSniped = [];

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  // Sets the generator button functionality
  let btn = document.getElementById("btnNewDomain");
  btn.addEventListener("click", () => newDomain());

  // Creates and show the new domain generated that is not taken
  newDomain();
};

function newDomain() {
  // Front end
  let domainElement = document.getElementById("domain");
  let newDomain = getDomain();

  // Backend
  if (newDomain === undefined) {
    alert("All the current domains are taken...");
    domainElement.innerHTML =
      "It seems that it is not available, please try again!";
  } else {
    // console.log("Search domain completed!");
    domainElement.innerHTML = newDomain;
  }

  console.log("new domain created: " + newDomain);
}

// Main function of this script finality ~ 'Engine system' a.k.a. Acedpol
function getDomain() {
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

function takenDomain(url) {
  //console.log("Names actually in use: " + namesSniped.length);

  if (namesSniped.length === 0) {
    //console.log("Exit by zero! (First domain created)");
    namesSniped.push(url); // returns lenght
    return false;
  }

  for (let i = 0; i < namesSniped.length; i++) {
    const e_ = namesSniped[i];
    // console.log(
    //   "Entra en el if() -- (Comprueba si el dominio generado se encuentra disponible)"
    // );
    if (namesSniped.some(e_ => e_ === url)) {
      //console.log("Este dominio NO se encuentra disponible: " + e_);
      return true;
    } else {
      //console.log("DIRECCION DISPONIBLE");
      namesSniped.push(url); // returns lenght
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

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let dom = [
  "com", // Global
  "es" // Epaña
];

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
