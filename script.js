const API_KEY = "5e6bab2195ea4d9e8e44c8c3ece8a0cb";

const foodContainer =
document.getElementById("foodContainer");

const cartCount =
document.getElementById("cartCount");

let cart = JSON.parse(
localStorage.getItem("foodCart")
) || [];

updateCartCount();

// Load default recipes
window.onload = () => {

    searchDefaultFoods();

};

// Default Search
async function searchDefaultFoods(){

    const url =
    `https://api.spoonacular.com/recipes/complexSearch?query=burger&number=12&addRecipeInformation=true&apiKey=${API_KEY}`;

    loadFoods(url);

}

// Search Food
async function searchFood(){

    const searchText =
    document
    .getElementById("searchInput")
    .value
    .trim();

    if(!searchText){

        alert("Please Enter Food Name");

        return;

    }

    const url =
    `https://api.spoonacular.com/recipes/complexSearch?query=${searchText}&number=12&addRecipeInformation=true&apiKey=${API_KEY}`;

    loadFoods(url);

}

// Load Foods
async function loadFoods(url){

    try{

        foodContainer.innerHTML =
        `<div class="loading">
            Loading Foods...
        </div>`;

        const response =
        await fetch(url);

        const data =
        await response.json();

        displayFoods(data.results);

    }
    catch(error){

        console.error(error);

        foodContainer.innerHTML =
        `<div class="loading">
            Failed To Load Data
        </div>`;

    }

}

// Display Foods
function displayFoods(foods){

    foodContainer.innerHTML = "";

    if(!foods || foods.length === 0){

        foodContainer.innerHTML =
        `<div class="loading">
            No Food Found
        </div>`;

        return;

    }

    foods.forEach(food => {

        foodContainer.innerHTML += `

        <div class="food-card">

            <img
            src="${food.image}"
            alt="${food.title}">

            <div class="food-card-content">

                <h3>
                    ${food.title}
                </h3>

                <p>
                    Ready In:
                    ${food.readyInMinutes || "N/A"} mins
                </p>

                <p>
                    Servings:
                    ${food.servings || "N/A"}
                </p>

                <button
                onclick="addToCart(
                '${food.title.replace(/'/g,"")}',
                ${food.id}
                )">

                Add To Cart

                </button>

            </div>

        </div>

        `;

    });

}

// Add To Cart
function addToCart(name,id){

    cart.push({
        id,
        name
    });

    localStorage.setItem(
    "foodCart",
    JSON.stringify(cart)
    );

    updateCartCount();

    alert(`${name} Added To Cart`);

}

// Update Cart Count
function updateCartCount(){

    cartCount.textContent =
    cart.length;

}

// View Cart
function viewCart(){

    if(cart.length === 0){

        alert("Cart Is Empty");

        return;

    }

    let items = "";

    cart.forEach(item => {

        items +=
        `• ${item.name}\n`;

    });

    alert(
    `Cart Items:\n\n${items}`
    );

}

// Clear Cart
function clearCart(){

    if(confirm(
    "Clear Cart?"
    )){

        cart = [];

        localStorage.removeItem(
        "foodCart"
        );

        updateCartCount();

    }

}

// Enter Key Search
document
.getElementById("searchInput")
.addEventListener(
"keypress",
function(e){

    if(e.key === "Enter"){

        searchFood();

    }

});