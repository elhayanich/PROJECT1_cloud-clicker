//* Variables
// à voir si on s'en sort avec une seul variable pour le score quand les fonctions seront faites
let score = 0;
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
const backgroundImage = document.querySelector("#background-img");
const scoreDisplay = document.querySelector(".score-display");
// scoreDisplay.innerHTML = score;
const cloud = document.querySelector("#cloud");
// const raindrop = document.querySelector(".raindrop"):

//* Fonctions
function checkStep() {
    if (score >= stepTwo && score < stepThree) {
        backgroundImage.src = "./assets/background-2.png";
    }
    if (score >= stepThree && score < stepFour) {
        backgroundImage.src = "./assets/background-3.png";
    }
    if (score >= stepFour) {
        backgroundImage.src = "./assets/background-4.png";
    }
}
function incrementScore() {}
// function bonusOneBehaviour() {}
// function bonusTwoBehaviour() {}
// function bonusThreeBehaviour() {}
