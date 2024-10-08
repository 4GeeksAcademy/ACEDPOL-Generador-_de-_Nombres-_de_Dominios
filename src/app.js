/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let namesSniped = [];

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  // Front end
  let domainElement = document.getElementById("domain");
  let newDomain = getDomain();

  // Backend
  if ($(newDomain != undefined)) {
    domainElement.innerHTML = newDomain;
  } else if ($(newDomain === undefined)) {
    alert("All the current domains are taken...");
  }
};

function getDomain() {
  let d_,
    cont = 0;
  do {
    d_ = generateDomain();
    cont++;
    console.log("Contador = " + cont);
  } while (!checkDomain(d_) && cont < 100); // ATENCIÓN: Puede petar el PC ~ a.k.a. Acedpol
  return d_;
}

function checkDomain(url) {
  let length = namesSniped.push();
  for (let i = 0; i < length; i++) {
    const e_ = namesSniped[i];
    if (namesSniped.find(url)) {
      return false;
    } else {
      return true;
    }
  }
}

function generateDomain() {
  return `${rndSelect(pronoun)} + 
  ${rndSelect(adj)} +
  ${rndSelect(noun)} + 
  '.' + ${rndSelect(dom)}`;
}

function rndSelect(list) {
  return list[rndInt(list.lenght)];
}

function rndInt(max) {
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
