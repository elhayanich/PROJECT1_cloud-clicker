//* Variables
// à voir si on s'en sort avec une seul variable pour le score quand les fonctions seront faites
let score = 0;
let scoreMultiplier = 1;
//? les bonus (à définir)
const bonus1 = {
  element: document.querySelector("#bonus-1"),
  isUnlocked: false,
  cost: 100,
  amount: 0,
};
const bonus2 = {
  element: document.querySelector("#bonus-2"),
  isUnlocked: false,
  cost: 250,
  amount: 0,
};
const bonus3 = {
  element: document.querySelector("#bonus-3"),
  isUnlocked: false,
  cost: 500,
  amount: 0,
};
let areBonusActive = false;
//? les paliers (à définir)
steps = [100, 250, 500, 1000];
let reachedStep1 = false;
let reachedStep2 = false;
let reachedStep3 = false;
let reachedStep4 = false;
//? noeuds HTML
//! --Body
const body = {
  backgroundImage: document.querySelector("main"),
  scoreDisplay: document.querySelector("#score-display"),
  cloud: document.querySelector("#clicker"),
};
//! --Header
const header = {
  userName: document.querySelector(".name"),
  overlay: document.querySelector(".overlay"),
  popup: document.querySelector(".popup"),
  popupInput: document.querySelector(".popup-input"),
  popupSubmit: document.querySelector(".popup-submit"),
  burgerMenu: document.querySelector(".burger-menu"),
  menuList: document.querySelector(".menu-list"),
};

//* Fonctions, événements & affectations
//? fonction qui va s'occuper de changer l'arrière-plan
// Fonction qui chnage la couleur du palier dés qu'il est atteint
function checkStep() {
  if (!reachedStep1) {
    if (
      (score >= steps[0] && score < steps[1]) ||
      reachedStep2 ||
      reachedStep3 ||
      reachedStep4
    ) {
      reachedStep1 = true;
      body.backgroundImage.style.backgroundImage =
        "url(./assets/background-2.png)";
      scoreMultiplier = 2;
      bonus1.isUnlocked = true;
      // document.querySelectorAll(".grid-item")[0].classList.add("reached");
    }
  }
  if (!reachedStep2) {
    if (
      (score >= steps[1] && score < steps[2]) ||
      reachedStep3 ||
      reachedStep4
    ) {
      reachedStep2 = true;
      body.backgroundImage.style.backgroundImage =
        "url(./assets/background-3.png)";
      scoreMultiplier = 4;
      bonus2.isUnlocked = true;
      // document.querySelectorAll(".grid-item")[1].classList.add("reached");
    }
  }
  if (!reachedStep3) {
    if ((score >= steps[2] && score < steps[3]) || reachedStep4) {
      reachedStep3 = true;
      body.backgroundImage.style.backgroundImage =
        "url(./assets/background-4.png)";
      scoreMultiplier = 8;
      bonus3.isUnlocked = true;
      // document.querySelectorAll(".grid-item")[2].classList.add("reached");
    }
  }
  if (!reachedStep4) {
    if (score >= steps[3]) {
      // Gérer le dernier palier
      reachedStep4;
      // document.querySelectorAll(".grid-item")[3].classList.add("reached");
    }
  }
  if (score >= steps[3]) {
    body.backgroundImage.classList.add("blur-background");
    const messageElement = document.createElement("div");
    messageElement.textContent =
      "You fulfilled your mission. Enjoy eternity in paradise!";
    messageElement.classList.add("message");
    document.body.appendChild(messageElement);
  } else {
    body.backgroundImage.classList.remove("blur-background");
  }
}

// fonction qui change l'affichage du score
function updateScore() {
  body.scoreDisplay.innerHTML = score;
  checkStep();
}

// fonction qui gère l'augmentation du score
function augmentScore(a = 1) {
  score = score + a * scoreMultiplier;
  updateScore();
}
function bonusAugmentScore() {
  augmentScore(bonus1.amount + bonus2.amount + bonus3.amount);
}
// événement qui augmente le score à chaque fois qu'on clicke sur le nuage
body.cloud.addEventListener("click", () => {
  augmentScore(1);
});
//? fonctions pour les bonus
function activeBonus() {
  if (areBonusActive != true) {
    setInterval(bonusAugmentScore, 1500);
    areBonusActive = true;
  }
}
// bonus#1
bonus1.element.addEventListener("click", () => {
  if (score >= bonus1.cost) {
    score -= bonus1.cost;
    updateScore();
    bonus1.amount++;
    activeBonus();
  }
});
// bonus#2
bonus2.element.addEventListener("click", () => {
  if (score >= bonus2.cost) {
    score -= bonus2.cost;
    updateScore();
    bonus2.amount++;
    activeBonus();
  }
});
// bonus#3
bonus3.element.addEventListener("click", () => {
  if (score >= bonus3.cost) {
    score -= bonus3.cost;
    updateScore();
    bonus3.amount++;
    activeBonus();
  }
});

//? Gestion du popup
// Pour afficher notre popup :
header.userName.addEventListener("click", () => {
  header.overlay.classList.toggle("hidden");
  header.popup.classList.toggle("hidden");
});
//Pour masquer notre popup:
header.overlay.addEventListener("click", () => {
  header.overlay.classList.toggle("hidden");
  header.popup.classList.toggle("hidden");
});
//Entrer le nom du joueur en cliquant sur entrer : testée : ça fonctionne - chay)
let playerName = "";
header.popupInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const errors = [];
    if (header.popupInput.value === "" || header.popupInput.value == null) {
      errors.push(`Name is required`);
    }
    if (errors.length > 0) {
      e.preventDefault();
      alert(errors.join(","));
      return;
    } else {
      playerName = header.popupInput.value;
      header.userName.innerHTML = `${playerName}`;
      header.overlay.classList.toggle("hidden");
      header.popup.classList.toggle("hidden");
    }
  }
});

//Entrer le nom du joueur ( en cliquant sur la souris :  : testée : ça fonctionne - chay)
header.popupSubmit.addEventListener("click", (e) => {
  const errors = [];
  if (header.popupInput.value === "" || header.popupInput.value == null) {
    errors.push(`Name is required`);
  }
  if (errors.length > 0) {
    e.preventDefault();
    alert(errors.join(","));
    return;
  } else {
    playerName = header.popupInput.value;
    header.userName.innerHTML = `${playerName}`;
    header.overlay.classList.toggle("hidden");
    header.popup.classList.toggle("hidden");
  }
});

// Vibration si on clique sur le cloud
body.cloud.addEventListener("click", () => {
  body.cloud.classList.add("clicked");

  setTimeout(() => {
    clicker.classList.remove("clicked");
  }, 500);
});

// Affichage instructions
const instructionsBtn = document.getElementById("instructions-btn");
const instructionsElement = document.querySelector(".instructions");
instructionsBtn.addEventListener("click", function () {
  instructionsElement.classList.toggle("hidden");
  instructionsElement.classList.toggle("visible");
  body.backgroundImage.classList.toggle("blur-background");
});

// fermer les instructions + le menu burger
const acceptMissionButton = document.querySelector(".accept-mission");

acceptMissionButton.addEventListener("click", function () {
  instructionsElement.classList.add("hidden");
  instructionsElement.classList.remove("visible");
  menuList.classList.remove("active");
  body.backgroundImage.classList.remove("blur-background");
});

// Menu Burger
const burgerMenu = document.querySelector(".burger-menu");
const menuList = document.querySelector(".menu-list");
burgerMenu.addEventListener("click", function () {
  menuList.classList.toggle("active");
});
