// data
var sides = [
  "Miso Glazed Carrots",
  "Coleslaw",
  "Garden Salad",
  "Crispy Potatoes",
  "Sweet Potato Tots",
  "Coconut Rice",
  "Caeser Salad",
  "Shrimp Summer Rolls",
  "Garlic Butter Mushrooms",
  "Hush Puppies",
];

var mainDishes = [
  "Spaghetti and Meatballs",
  "Pineapple Chicken",
  "Shakshuka",
  "Thai Yellow Curry",
  "Bibimbap",
  "Chicken Parmesean",
  "Butternut Squash Soup",
  "BBQ Chicken Burgers",
  "Ramen",
  "Empanadas",
  "Chicken Fried Rice",
  "Sheet Pan Fajitas",
  "Margarita Pizza",
];

var desserts = [
  "Apple Pie",
  "Lemon Meringue Pie",
  "Black Forest Cake",
  "Banana Bread",
  "Peach Cobbler",
  "Cheesecake",
  "Funfetti Cake",
  "Baklava",
  "Flan",
  "Macarons",
  "Macaroons",
  "Chocolate Cupcakes",
  "Pavlova",
  "Pumpkin Pie",
  "Key Lime Pie",
  "Tart Tatin",
  "Croissants",
  "Eclairs",
];
var currentRecipe;
var favoriteRecipes = [];
var list;

// query selectors
var sideRadio = document.querySelector("#side");
var mainDishRadio = document.querySelector("#main-dish");
var dessertRadio = document.querySelector("#dessert");
var hiddenRandomBox = document.querySelector(".random");
var svgImage = document.querySelector(".svg");
var required = document.querySelector(".required");
var favoritesPage = document.querySelector(".favorites-page");
var mainPage = document.querySelector(".flex-container");
var favoritesBox = document.querySelector(".favorites-box");


// buttons
var cookButton = document.querySelector(".cook");
var addToFavoritesButton = document.querySelector(".add-to-favorites");
var hiddenFavoritesButtons = document.querySelector(
  ".favoritesButtons-flex-container"
);
var viewFavoritesButton = document.querySelector(".view-favorites");
var backToMainButton = document.querySelector(".back-to-main");

// event listeners
cookButton.addEventListener("click", showRandomDish);
addToFavoritesButton.addEventListener("click", addToFavoriteRecipes);
viewFavoritesButton.addEventListener("click", showFavoritesPage);
backToMainButton.addEventListener("click", backToMain);

// functions
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function randomDish() {
  hiddenRandomBox.innerHTML = "";
  svgImage.classList.add("hidden");
  hiddenRandomBox.classList.remove("hidden");

  var randomSides = sides[getRandomIndex(sides)];
  var randomMainDishes = mainDishes[getRandomIndex(mainDishes)];
  var randomDesserts = desserts[getRandomIndex(desserts)];

  if (sideRadio.checked) {
    currentRecipe = randomSides;
  } else if (mainDishRadio.checked) {
    currentRecipe = randomMainDishes;
  } else if (dessertRadio.checked) {
    currentRecipe = randomDesserts;
  }
  return currentRecipe;
}

function showRandomDish() {
  if (!sideRadio.checked && !mainDishRadio.checked && !dessertRadio.checked) {
    required.classList.remove("hidden");
    return
  }
  
  hiddenFavoritesButtons.classList.remove("hidden")
  
  randomDish();
  
  hiddenRandomBox.innerHTML += `<section>
        <h4 id="you-should-make"><i>You should make:</i></h4>
        <p style="font-size:25px">${currentRecipe}</p>
    </section>`;
}

function addToFavoriteRecipes() {
  if (!favoriteRecipes.includes(currentRecipe)) {
    favoriteRecipes.push(currentRecipe);
  }
}

function toggleClass(element, className) {
  element.classList.toggle(className)
}

function showFavoritesPage() {
  favoritesBox.innerHTML = 
  `<div class="favorite-recipe-list">
    <ul id="list"></ul>
  </div>`;
  
  list = document.getElementById("list");      
  
  toggleClass(favoritesPage, 'hidden');
  toggleClass(mainPage, 'hidden');

  for (var i = 0; i < favoriteRecipes.length; i++) {
    list.innerHTML += 
    `<li>${favoriteRecipes[i]}
      <div>
        <button class="delete">Delete</button>
      </div>
    </li>`
  }

  var deleteButtons = document.querySelectorAll(".delete");
  
  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", function(e) {
      deleteRecipe(e);
    });
  }
}

function deleteRecipe(e) {
  for (var i = 0; i < favoriteRecipes.length; i++) {
    if (e.target.classList.contains("delete")) {
      list.removeChild(e.target.parentElement.parentElement)
      && favoriteRecipes.splice(i,1);
    } 
  }  
}

function backToMain() {
  toggleClass(favoritesPage, 'hidden');
  toggleClass(mainPage, 'hidden');;
}