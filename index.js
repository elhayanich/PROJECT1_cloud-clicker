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
  cost: 750,
  amount: 0,
};
const bonus3 = {
  element: document.querySelector("#bonus-3"),
  isUnlocked: false,
  cost: 2500,
  amount: 0,
};
let areBonusActive = false;
//? les paliers (à définir)
steps = [100, 750, 2500, 10000];
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
function checkStep() {
  if (score >= steps[1] && score < steps[2]) {
    body.backgroundImage.style.backgroundImage =
      "url(./assets/background-2.png)";
    scoreMultiplier = 2;
    bonus1.isUnlocked = true;
  }
  if (score >= steps[2] && score < steps[3]) {
    body.backgroundImage.style.backgroundImage =
      "url(./assets/background-3.png)";
    scoreMultiplier = 4;
    bonus2.isUnlocked = true;
  }
  if (score >= steps[3]) {
    body.backgroundImage.style.backgroundImage =
      "url(./assets/background-4.png)";
    scoreMultiplier = 8;
    bonus3.isUnlocked = true;
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
  // ajouter une animation (CSS?) quand on clicke sur le nuage
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
//Entrer le nom du joueur ( en cliquant sur entrer) : ( testée : ça fonctionne)
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
      header.userName.innerHTML = `${header.popupInput.value}`;
      header.overlay.classList.toggle("hidden");
      header.popup.classList.toggle("hidden");
    }
  }
});
//Entrer le nom du joueur ( en cliquant sur la souris):
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
    header.userName.innerHTML = `${header.popupInput.value}`;
    header.overlay.classList.toggle("hidden");
    header.popup.classList.toggle("hidden");
  }
});

// Raindrops si on clique sur le cloud
body.cloud.addEventListener("click", () => {
  createRaindrops(body.cloud);
});

// fonction qui gère le menu burger
header.burgerMenu.addEventListener("click", function () {
  header.menuList.classList.toggle("active");
});
