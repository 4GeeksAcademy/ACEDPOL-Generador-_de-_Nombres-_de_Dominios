/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let namesSniped = [];

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  let domainElement = document.getElementById("domain");
  let newDomain = getDomain();

  if ($(newDomain != undefined)) {
    domainElement.innerHTML = newDomain;
  } else if ($(newDomain === undefined)) {
    alert("All the current domains are taken...");
  }
};

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let dom = [
  "es",
  "en",
  "net",
  "com",
  "org",
  "eu",
  "biz" / "us",
  "info",
  "fr",
  "edu",
  "gov",
  "mil",
  "blog" / "online",
  "site",
  "name",
  "pro",
  "cn",
  "de",
  "uk",
  "br"
];

function getDomain() {
  let d_;
  do {
    d_ = generateDomain();
  } while (!checkDomain(d_));
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
