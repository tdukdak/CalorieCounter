let appetizerProtein = 0;
let appetizerCarbs = 0;
let appetizerFat = 0;
let appetizerCalories = 0;

let entreeProtein = 0;
let entreeCarbs = 0;
let entreeFat = 0;
let entreeCalories = 0;

let dessertProtein = 0;
let dessertCarbs = 0;
let dessertFat = 0;
let dessertCalories = 0;

function updateAppetizerDisplay() {
    document.getElementById("appetizerProtein").innerText = appetizerProtein;
    document.getElementById("appetizerCarbs").innerText = appetizerCarbs;
    document.getElementById("appetizerFat").innerText = appetizerFat;

    appetizerCalories = appetizerFat * 9 + appetizerCarbs * 4 + appetizerProtein * 4;
    document.getElementById("appetizerCalories").innerText = appetizerCalories;
    updateTotalCalories();
}

function updateEntreeDisplay() {
    document.getElementById("entreeProtein").innerText = entreeProtein;
    document.getElementById("entreeCarbs").innerText = entreeCarbs;
    document.getElementById("entreeFat").innerText = entreeFat;

    entreeCalories = entreeFat * 9 + entreeCarbs * 4 + entreeProtein * 4;
    document.getElementById("entreeCalories").innerText = entreeCalories;
    updateTotalCalories();
}

function updateDessertDisplay() {
    document.getElementById("dessertProtein").innerText = dessertProtein;
    document.getElementById("dessertCarbs").innerText = dessertCarbs;
    document.getElementById("dessertFat").innerText = dessertFat;

    dessertCalories = dessertFat * 9 + dessertCarbs * 4 + dessertProtein * 4;
    document.getElementById("dessertCalories").innerText = dessertCalories;
    updateTotalCalories();
}

function updateTotalCalories() {
    const totalCalories = appetizerCalories + entreeCalories + dessertCalories;
    document.getElementById("totalCaloriesCount").innerText = totalCalories;
}

document.getElementById("appetizerProteinPlus").addEventListener("click", function () {
  appetizerProtein++;
  updateAppetizerDisplay();
});

document.getElementById("appetizerProteinMinus").addEventListener("click", function () {
  if (appetizerProtein > 0) {
      appetizerProtein--;
      updateAppetizerDisplay();
  }
});

document.getElementById("appetizerCarbsPlus").addEventListener("click", function () {
  appetizerCarbs++;
  updateAppetizerDisplay();
});

document.getElementById("appetizerCarbsMinus").addEventListener("click", function () {
  if (appetizerCarbs > 0) {
      appetizerCarbs--;
      updateAppetizerDisplay();
  }
});

document.getElementById("appetizerFatPlus").addEventListener("click", function () {
  appetizerFat++;
  updateAppetizerDisplay();
});

document.getElementById("appetizerFatMinus").addEventListener("click", function () {
  if (appetizerFat > 0) {
      appetizerFat--;
      updateAppetizerDisplay();
  }
});

document.getElementById("entreeProteinPlus").addEventListener("click", function () {
  entreeProtein++;
  updateEntreeDisplay();
});

document.getElementById("entreeProteinMinus").addEventListener("click", function () {
  if (entreeProtein > 0) {
      entreeProtein--;
      updateEntreeDisplay();
  }
});

document.getElementById("entreeCarbsPlus").addEventListener("click", function () {
  entreeCarbs++;
  updateEntreeDisplay();
});

document.getElementById("entreeCarbsMinus").addEventListener("click", function () {
  if (entreeCarbs > 0) {
      entreeCarbs--;
      updateEntreeDisplay();
  }
});

document.getElementById("entreeFatPlus").addEventListener("click", function () {
  entreeFat++;
  updateEntreeDisplay();
});

document.getElementById("entreeFatMinus").addEventListener("click", function () {
  if (entreeFat > 0) {
      entreeFat--;
      updateEntreeDisplay();
  }
});

document.getElementById("dessertProteinPlus").addEventListener("click", function () {
  dessertProtein++;
  updateDessertDisplay();
});

document.getElementById("dessertProteinMinus").addEventListener("click", function () {
  if (dessertProtein > 0) {
      dessertProtein--;
      updateDessertDisplay();
  }
});

document.getElementById("dessertCarbsPlus").addEventListener("click", function () {
  dessertCarbs++;
  updateDessertDisplay();
});

document.getElementById("dessertCarbsMinus").addEventListener("click", function () {
  if (dessertCarbs > 0) {
      dessertCarbs--;
      updateDessertDisplay();
  }
});

document.getElementById("dessertFatPlus").addEventListener("click", function () {
  dessertFat++;
  updateDessertDisplay();
});

document.getElementById("dessertFatMinus").addEventListener("click", function () {
  if (dessertFat > 0) {
      dessertFat--;
      updateDessertDisplay();
  }
});