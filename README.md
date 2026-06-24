# 🍔 Food Court

A modern and responsive Food Court web application that allows users to search for food recipes using the Spoonacular API, view recipe details, and add items to a shopping cart.

## 📌 Features

- 🔍 Search food recipes by name
- 🍔 Default burger recipes on page load
- 🖼️ Display food images and recipe information
- 🛒 Add items to cart
- 💾 Cart data stored using Local Storage
- 📱 Responsive design for different screen sizes
- ⚡ Fast and simple user interface

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Font Awesome Icons
- Spoonacular API

---

## 📂 Project Structure
Food-Court/
│
├── index.html
├── styles.css
├── script.js
└── README.md


---

## 🚀 How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/food-court.git
2. Open Project Folder
cd food-court
3. Run the Application

Simply open the index.html file in your browser.

🔑 API Configuration

This project uses the Spoonacular API.

Replace your API key in script.js:

const API_KEY = "YOUR_API_KEY";

Get a free API key from:

https://spoonacular.com/food-api

🎯 Functionalities
Search Recipes

Users can search recipes by entering food names in the search box.

Default Recipes

When the page loads, burger recipes are displayed automatically.

Add To Cart

Users can add recipes to the cart and cart data is stored in Local Storage.

Cart Counter

The cart icon displays the total number of selected items.

📸 Screenshots
Home Page
Hero Section
Search Bar
Food Cards
Cart Icon
Search Results
Food Image
Recipe Name
Ready Time
Servings
Add To Cart Button
🔄 Future Improvements
User Authentication
Checkout Page
Remove Items From Cart
Recipe Details Modal
Favorites Section
Dark Mode
Payment Integration
🐞 Known Issues
Free Spoonacular API has daily request limits.
Invalid API keys may return 401 Unauthorized errors.
👨‍💻 Author

Hemanth Naidu

📧 Email: sesham.anirudh123@gmail.com

🔗 LinkedIn: https://www.linkedin.com/in/sesham-anirudh-39012732a

🐙 GitHub: https://github.com/hemanthnaidu1916-cell

📜 License

This project is developed for educational and learning purposes.

© 2026 Hemanth Naidu. All Rights Reserved.


### Console Output Examples

```javascript
console.log("Food Court Application Loaded");

console.log("Searching for:", searchText);

console.log("API Response:", data);

console.log("Food Added To Cart:", name);

console.log("Cart Items:", cart);

console.log("Cart Count:", cart.length);

console.log("Loading Default Burger Recipes...");