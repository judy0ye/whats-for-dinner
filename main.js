// data
var sides = [
    'Miso Glazed Carrots',
    'Coleslaw',
    'Garden Salad',
    'Crispy Potatoes',
    'Sweet Potato Tots',
    'Coconut Rice',
    'Caeser Salad',
    'Shrimp Summer Rolls',
    'Garlic Butter Mushrooms',
    'Hush Puppies'
]

var mainDishes = [
    'Spaghetti and Meatballs',
    'Pineapple Chicken',
    'Shakshuka',
    'Thai Yellow Curry',
    'Bibimbap',
    'Chicken Parmesean',
    'Butternut Squash Soup',
    'BBQ Chicken Burgers',
    'Ramen',
    'Empanadas',
    'Chicken Fried Rice',
    'Sheet Pan Fajitas',
    'Margarita Pizza'
]

var desserts = [
    'Apple Pie',
    'Lemon Meringue Pie',
    'Black Forest Cake',
    'Banana Bread',
    'Peach Cobbler',
    'Cheesecake',
    'Funfetti Cake',
    'Baklava',
    'Flan',
    'Macarons',
    'Macaroons',
    'Chocolate Cupcakes',
    'Pavlova',
    'Pumpkin Pie',
    'Key Lime Pie',
    'Tart Tatin',
    'Croissants',
    'Eclairs'
]
var currentRecipe
var favoriteRecipes = []

// query selectors
var sideRadio = document.querySelector('#side')
var mainDishRadio = document.querySelector('#main-dish')
var dessertRadio = document.querySelector('#dessert')
var hiddenRandomBox = document.querySelector('.random')
var svgImage = document.querySelector('.svg')
var required = document.querySelector('.required')
var favoritesPage = document.querySelector('.favorites-page')
var mainPage = document.querySelector('.flex-container')
var favoritesBox = document.querySelector('.favorites-box')

// buttons
var cookButton = document.querySelector('.cook')
var addToFavoritesButton = document.getElementById('favorite')
var addToFavoritesButton = document.querySelector('.add-to-favorites')
var hiddenFavoritesButtons = document.querySelector('.favoritesButtons-flex-container')
var viewFavoritesButton = document.querySelector('.view-favorites')

// event listeners
cookButton.addEventListener('click', function() {
    showRandomDish()
    hiddenFavoritesButtons.classList.remove('hidden')
})

addToFavoritesButton.addEventListener('click', addToFavoriteRecipes)
viewFavoritesButton.addEventListener('click', showFavoritesPage)

// functions
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function randomDish() {
    hiddenRandomBox.innerHTML = ''
    svgImage.classList.add('hidden')
    hiddenRandomBox.classList.remove('hidden')

    var randomSides = sides[getRandomIndex(sides)]
    var randomMainDishes = mainDishes[getRandomIndex(mainDishes)]
    var randomDesserts = desserts[getRandomIndex(desserts)]

    if (document.getElementById('side').checked) {
        currentRecipe = randomSides
    } else if (document.getElementById('main-dish').checked) {
        currentRecipe = randomMainDishes
    } else if (document.getElementById('dessert').checked) {
        currentRecipe = randomDesserts
    }
    return currentRecipe
}

function showRandomDish() {
    if (!sideRadio.checked && !mainDishRadio.checked && !dessertRadio.checked) {
        required.classList.remove('hidden')
        e.preventDefault()   
    }
    randomDish()
    hiddenRandomBox.innerHTML +=
    `<section>
        <h4 id="you-should-make"><i>You should make:</i></h4>
        <p style="font-size:25px">${currentRecipe}</p>
    </section>` 
        
    //anotherOneButton.classList.remove('hidden')
}
{/* <section id="current-recipe"></section> */}

function addToFavoriteRecipes() {
    if (!favoriteRecipes.includes(currentRecipe)) {
        favoriteRecipes.push(currentRecipe) 
    }
}

function showFavoritesPage() {
    favoritesPage.classList.remove('hidden')
    mainPage.classList.add('hidden')

    for (var i = 0; i < favoriteRecipes.length; i++) {
        favoritesBox.innerHTML +=
        `<div class="favorite-recipe-list">
        <ul>
            <li>${favoriteRecipes[i]}</li>
        </ul>
        </div>`
    }
    

}