//* Variables
// à voir si on s'en sort avec une seul variable pour le score quand les fonctions seront faites
let score = 0;
let scoreMultiplier = 1;
let enteredName = "undefined";
//? les bonus à définir (une fois que les fonctions qui les concernent ont été posées)
/* const bonusOne = null;
const bonusTwo = null;
const bonusThree = null; */
//? les paliers à définir
const stepOne = 100;
const stepTwo = 750;
const stepThree = 2500;
const stepFour = 10000;
//? noeuds HTML
const playerName = document.querySelector(".name");
const backgroundImage = document.querySelector("main");
const scoreDisplay = document.querySelector("#score-display");
const cloud = document.querySelector("#clicker");
// const raindrop = document.querySelector(".raindrop"):
const burgerMenu = document.querySelector(".burger-menu");
const menuList = document.querySelector(".menu-list");

//* Fonctions, événements & affectations
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
playerName.innerHTML = enteredName;
cloud.addEventListener("click", () => {
    score = score + 1 * scoreMultiplier;
    scoreDisplay.innerHTML = score;
});
burgerMenu.addEventListener("click", function () {
    menuList.classList.toggle("active");
});
