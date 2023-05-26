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

var currentRecipe

// query selectors
var sideRadio = document.querySelector('#side')
// var recipeBox = document.querySelector('.recipe')
var hiddenRandomBox = document.querySelector('.random')
var svgImage = document.querySelector('.svg')

// button listeners
var cookButton = document.querySelector('.cook')

// event listeners
cookButton.addEventListener('click', showRandomDish)
// receipeBox.addEventListener(, randomDish)

// functions
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function randomDish() {
    svgImage.classList.add('hidden')
    hiddenRandomBox.classList.remove('hidden')
    var randomSides = sides[getRandomIndex(sides)]
    currentRecipe = randomSides
    return currentRecipe
}

function showRandomDish() {
    randomDish()
    hiddenRandomBox.innerHTML +=
    `<div>
        <h4 id="you-should-make"><i>You should make:</i></h4>
        <div id="current-recipe"><h1>${currentRecipe}</h1></div>
    </div>` 
}