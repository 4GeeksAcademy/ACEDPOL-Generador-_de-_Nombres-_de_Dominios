/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// variables para elementos html
let contElement = document.getElementById("creations");
let domainElement = document.getElementById("domain");
let btn = document.getElementById("btnNewDomain");
let btn2 = document.getElementById("btnReset");

// variables constantes
const pronoun = ["the", "our"];
const adj = ["great", "big"];
const noun = ["jogger", "racoon", "skates", "doscientosmil", "hummus"];
const dom = [
  "com", // Global
  "es" // Epaña
];
const domains = [
  "net", // Es una de las más antiguas y fue originalmente creada para sitios relacionados con redes (de ahí su nombre, “network”).
  "org", // Para organizaciones
  "biz", // Para negocios
  "name", // Para individuos
  "info", // Para información
  "pro", // Para profesionales acreditados
  "edu", // Educación
  "gov", // Gobierno
  "mil", // Militar
  "blog", // creación de contenido de manera continua
  "online", // Destacar la Presencia (otras extensiones ocupadas o deshabilitadas)
  "site", // Generica
  "es", // España
  "cn", // China
  "de", // Alemania
  "uk", // Reino Unido
  "br", // Brasil
  "us", // Estados Unidos
  "eu", // Europa
  "com" // Global
];
const MAIN_CLASSNAME = "col-2 mb-2 inline-block position-relative";
const BTN = "btn btn-custom-cursor";
const DOMAIN = "col-6 inline-block mx-auto display_domain";
const DOMAIN_ON = "text-black";
const DOMAIN_OFF = "text-secondary";
const ON_COLORS = "bg-success text-light";
const OFF_COLORS = "bg-body-secondary text-black";
const BTN_SPAN = `<span
                id="creations"
                class="fs-6 ms-2 text-light text-body-primary-emphasis position-absolute top-50 start-100 translate-middle-y badge rounded-pill bg-danger"
                >OB1+ <span class="visually-hidden">Stack overflow</span></span
              >`;
const MAX_HACKABLES = palabrasHackeables();
const MAX_ODDS =
  pronoun.length * adj.length * MAX_HACKABLES +
  pronoun.length * adj.length * (noun.length - MAX_HACKABLES) * dom.length;
const MAX_CHANCES = MAX_ODDS - 15; // nº de oportunidades

// variables que se actualizan en el tiempo
let namesSniped = [];

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  // Sets button GENERATE feature
  btn.addEventListener("click", () => {
    // HINT: Añadir disable para que no se pueda pulsar más el botón de generar dominio
    // al alcanzar el número MAX_ODDS en la lista namesSniped.
    if (namesSniped.length <= MAX_ODDS) {
      domainElement.className = DOMAIN + " " + DOMAIN_ON;
      // MAIN LOOP
      newDomain();
      if (namesSniped.length > MAX_ODDS) {
        desactivaBtn();
      }
    }
  });

  // Sets button RESET feature
  btn2.addEventListener("click", () => reset());

  // Creates and show the new domain generated that is not taken
  newDomain();
};

function desactivaBtn() {
  // DESACTIVA BTN
  btn.className = BTN + " " + MAIN_CLASSNAME + " disabled " + OFF_COLORS;
  btn.innerHTML = "Limit reached!!" + BTN_SPAN;
  contElement = document.getElementById("creations"); // vuelve de fabrica
  domainElement.className = DOMAIN + " " + DOMAIN_OFF;
  // FULL list
  contElement.innerHTML = namesSniped.length - 1 + " / " + MAX_ODDS;
}

function reset() {
  namesSniped = [];
  // ACTIVA BTN
  btn.className = BTN + " " + MAIN_CLASSNAME + " " + ON_COLORS;
  btn.innerHTML = "Create new domain" + BTN_SPAN;
  contElement = document.getElementById("creations"); // vuelve de cero
  domainElement.className = DOMAIN + " " + DOMAIN_OFF;
  // MAIN LOOP
  newDomain();
}

function newDomain() {
  console.clear();
  let newDomain = getDomain(); // LOGIC
  if (newDomain !== undefined) {
    // +01
    namesSniped.push(newDomain);
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
  } else {
    // if there is no more chances
    alert("All the current domains are taken..."); // WARNING STOP
    domainElement.className = DOMAIN + " " + DOMAIN_OFF;
    domainElement.innerHTML =
      "It seems that it is not available, please try again!";
    console.log("Couldn't create a new domain...");
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
  let DOM,
    cont = 0;

  // Main loop
  do {
    cont++;
    DOM = generateDomain(); // UNICO GENERATE
    console.log("#" + cont + " " + DOM);
  } while (takenDomain(DOM) && cont < MAX_CHANCES);

  // Time limit
  if (cont === MAX_CHANCES) {
    return undefined;
  }

  // Response
  return DOM;
}

function takenDomain(dom) {
  if (namesSniped.some(e_ => e_ === dom)) {
    return true;
  } else {
    return false;
  }
}

function generateDomain() {
  let domainName = `${rndSlct(pronoun)}${rndSlct(adj)}${rndSlct(noun)}`;
  let hackDomain = stringHacks(domainName);
  if (!hackDomain) return domainName + `.${rndSlct(dom)}`;
  else return hackDomain;
}

function rndSlct(list) {
  let ri = rndInt(list.length);
  return list[ri];
}

function rndInt(max) {
  let n = Math.floor(Math.random() * max);
  return Math.floor(Math.random() * max);
}

function stringHacks(string) {
  let str2 = string.substring(string.length - 2); // Obtiene las últimas 2 letras
  let str3 = string.substring(string.length - 3); // Obtiene las últimas 3 letras

  let h_ = false;
  domains.forEach(d_ => {
    if (d_ === str2) {
      console.log("match 2: " + string.slice(0, -2) + "." + str2);
      h_ = string.slice(0, -2) + "." + str2;
    } else if (d_ === str3) {
      console.log("match 3: " + string.slice(0, -3) + "." + str3);
      h_ = string.slice(0, -3) + "." + str3;
    }
  });
  return h_;
}

function palabrasHackeables() {
  let cont = 0;
  noun.forEach(n_ => {
    if (stringHacks(n_) !== false) {
      cont++;
    }
  });
  return cont;
}

// Todas las extensiones:
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
//   "es", // España
//   "cn", // China
//   "de", // Alemania
//   "uk", // Reino Unido
//   "br", // Brasil
//   "us", // Estados Unidos
//   "eu", // Europa
//   "com" // Global
