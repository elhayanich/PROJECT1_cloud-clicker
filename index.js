//* Variables
// à voir si on s'en sort avec une seul variable pour le score quand les fonctions seront faites
let score = 0;
let scoreMultiplier = 1;
//? les bonus (à définir)
const bonusOne = document.querySelector("#bonus-1");
let isBonusOneActive = false;
let bonusOneNumber = 0;
const bonusTwo = document.querySelector("#bonus-2");
let isBonusTwoActive = false;
let bonusTwoNumber = 0;
const bonusThree = document.querySelector("#bonus-3");
let isBonusThreeActive = false;
let bonusThreeNumber = 0;
//? les paliers (à définir)
const stepOne = 100;
const stepTwo = 750;
const stepThree = 2500;
const stepFour = 10000;
// noeuds HTML
const backgroundImage = document.querySelector("main");
const scoreDisplay = document.querySelector("#score-display");
const cloud = document.querySelector("#clicker");
// const raindrop = document.querySelector(".raindrop"):
const burgerMenu = document.querySelector(".burger-menu");
const menuList = document.querySelector(".menu-list");

//* Fonctions, événements & affectations
// fonction qui va s'occuper de changer l'arrière-plan
function checkStep() {
    if (score >= stepTwo && score < stepThree) {
        backgroundImage.style.backgroundImage =
            "url(./assets/background-2.png)";
        scoreMultiplier = 2;
    }
    if (score >= stepThree && score < stepFour) {
        backgroundImage.style.backgroundImage =
            "url(./assets/background-3.png)";
        scoreMultiplier = 4;
    }
    if (score >= stepFour) {
        backgroundImage.style.backgroundImage =
            "url(./assets/background-4.png)";
        scoreMultiplier = 8;
    }
}
// le nom du joueur une fois entré sera stocké ici
// playerName.innerHTML = enteredName;

//Header : Your name 
const name = document.querySelector(".name");
const overlay = document.querySelector(".overlay");
const popup = document.querySelector(".popup");
const popupInput = document.querySelector(".popup-input");
const popupSubmit = document.querySelector(".popup-submit");

// Pour afficher notre popup : 
name.addEventListener("click", () => {
    overlay.classList.toggle("hidden");
    popup.classList.toggle("hidden");
  });

//Pour masquer notre popup: 
overlay.addEventListener("click", () => {
    overlay.classList.toggle("hidden");
    popup.classList.toggle("hidden");
  });

//Entrer le nom du joueur ( en cliquant sur entrer) : ( testée : ça fonctionne) 
popupInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const errors = [];
      if (popupInput.value === "" || popupInput.value == null) {
        errors.push(`Name is required`);
      }
      if (errors.length > 0) {
        e.preventDefault();
        alert(errors.join(","));
        return;
      } else {
        name.innerHTML = `${popupInput.value}`;
        overlay.classList.toggle("hidden");
        popup.classList.toggle("hidden");
      }
    }
  });

//Entrer le nom du joueur ( en cliquant sur la souris): 

popupSubmit.addEventListener("click", (e) => {
    const errors = [];
    if (popupInput.value === "" || popupInput.value == null) {
      errors.push(`Name is required`);
    }
    if (errors.length > 0) {
      e.preventDefault();
      alert(errors.join(","));
      return;
    } else {
      name.innerHTML = `${popupInput.value}`;
      overlay.classList.toggle("hidden");
      popup.classList.toggle("hidden");
    }
  });





// Raindrops si on clique sur le cloud
// const cloud = document.querySelector("#clicker"); ( Je la commente car elle est déja declarée)
cloud.addEventListener("click", () => {
    createRaindrops(cloud);
  });



























































// fonction qui gère l'augmentation du score
function augmentScore(a) {
    score = score + a * scoreMultiplier;
    scoreDisplay.innerHTML = score;
}
// événement qui augmente le score à chaque fois qu'on clicke sur le nuage
cloud.addEventListener("click", () => {
    augmentScore(1);
});
// fonctions pour les bonus
bonusOne.addEventListener("click", () => {
    bonusOneNumber++;
    if (!isBonusOneActive) {
        isBonusOneActive = true;
        setInterval(augmentScore(2) * bonusOneNumber, 1500);
    }
});
// fonction qui gère le menu burger
burgerMenu.addEventListener("click", function () {
    menuList.classList.toggle("active");
});
