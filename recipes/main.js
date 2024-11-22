import recipes from "./recipes.mjs";

function generateRecipeHTML(recipe) {
    return `
    <div class="recipe-card">
        <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image">
        <div class="recipe-desc">
            <h2>${recipe.name}</h2>
            <p><strong>Tags:</strong> ${recipe.tags.join(', ')}</p>
            <p><strong>Author:</strong> ${recipe.author}</p>
            <p><strong>Description:</strong> ${recipe.description}</p>
            <p><strong>Cook Time:</strong> ${recipe.cookTime}</p>
            <p><strong>Rating:</strong> ${'⭐'.repeat(Math.round(recipe.rating))}${'☆'.repeat(5 - Math.round(recipe.rating))}</p>
        </div>
        <div class="ingredients">
            <h3>Ingredients:</h3>
            <ul>
            ${recipe.recipeIngredient.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
        </div>
        <div class="instruct">
            <h3>Instructions:</h3>
            <ol>
            ${recipe.recipeInstructions.map(step => `<li>${step}</li>`).join('')}
            </ol>
            <p><strong>Yield:</strong> ${recipe.recipeYield || 'N/A'}</p>
        </div>
    </div>
    `;
}


function generateTags() {
    /**
 * Generate the following where tags are generic:
 * 
 * Do a for loop, looping over the recipe tags and append it to a string and return the string
 * 
 * <div>
 *  <span>tag1</span>
 *  <span>tag1</span>
 * </div>
 */
}

function displayRecipes(recipes) {
    const container = document.getElementById('recipe-container');
    const random = randomNumber(recipes.length)
    // container.innerHTML = recipes.map(generateRecipeHTML).join('');
    container.innerHTML = generateRecipeHTML(recipes[random])
    console.log(container)
}

function randomNumber(total_recipes) {
    return Math.floor(Math.random()*total_recipes) // will give a number 0-4
}

/**
 * On the form element, add an event listener for submit, make sure it prevents default.
 * 
 * This is where you'll filter the list based on the users search query. (use toLowerCase())
 * 
 * Sort it by name
 * 
 * Then return the entire list, return only one recipe using that random number
 */

// Initialize
displayRecipes(recipes);