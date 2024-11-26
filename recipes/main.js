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


function generateTags(tags) {
//  * Do a for loop, looping over the recipe tags and append it to a string and return the string
    let html = '<div class=tags>'    

    for (let tag in tags){
        html += `<div =class="tags">${tags}</div>`
    }
    
    html += '</div>'
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


// working on below
// 

const form = document.querySelector('form')

form.addEventListener('submit', searchHandler);

const input = document.querySelector('input')

// Filters and sorts recipes
function filter(query) {
    const filtered = recipes.filter(recipe => filterFunction(recipe, query));
    const sorted = filtered.sort(sortFunction);
        return sorted;
}

// Filter function to match query
function filterFunction(recipe, query) {
    // Check if recipe name or description includes the query
    const lowerCaseQuery = query.toLowerCase();
    return (
        recipe.name.toLowerCase().includes(lowerCaseQuery) ||
        recipe.description.toLowerCase().includes(lowerCaseQuery)
    );
}

// Sort function to sort by name alphabetically
function sortFunction(a, b) {
    return a.name.localeCompare(b.name);
}

function searchHandler(e) {
	e.preventDefault()

    // Get the search query
    const query = input.value.trim().toLowerCase();

    // Filter and sort recipes
    const filteredRecipes = filter(query);

    // Display the filtered recipe or handle no matches
    if (filteredRecipes.length > 0) {
        console.log('Recipe Found:', filteredRecipes[0]);
        displayRecipes(filteredRecipes)
    } 
    else {
        console.log('No recipe matches your search.');
    }
}


// Working on above
// 



// Initialize
displayRecipes(recipes);