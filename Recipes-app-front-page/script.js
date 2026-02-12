const API_KEY = '6e9722d2fecd4c74a1c5faec557b0cb7'
const recipeListEl = document.getElementById("recipe-list");

function displayRecipes(recipes) {
    recipeListEl.innerHTML = "";
    recipes.forEach(recipe => {
        const recipeItemEl = document.createElement("li");
        recipeItemEl.classList.add("recipe-item");
        const recipeImageEl = document.createElement("img");
        recipeImageEl.src = recipe.image;
        recipeImageEl.alt = recipe.title;

        const recipeTitleEl = document.createElement("h2");
        recipeTitleEl.textContent = recipe.title;

        const recipeIngredientsEl = document.createElement("p");
        recipeIngredientsEl.innerHTML = `<strong>Ingredients:</strong> ${recipe.extendedIngredients.map(ingredient => ingredient.original).join(", ")}`;

        const recipeViewButtonEl = document.createElement("a");
        recipeViewButtonEl.href = recipe.sourceUrl;
        recipeViewButtonEl.innerHTML = "View Recipe";

        recipeItemEl.appendChild(recipeImageEl);
        recipeItemEl.appendChild(recipeTitleEl);
        recipeItemEl.appendChild(recipeIngredientsEl);
        recipeItemEl.appendChild(recipeViewButtonEl);
        recipeListEl.appendChild(recipeItemEl);
    })
}

async function getRecipes() {
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`);

    const data = await response.json();

    return data.recipes;
}

async function init() {
    const recipes = await getRecipes();
    displayRecipes(recipes);
}

init();