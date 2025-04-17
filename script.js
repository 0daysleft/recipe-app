

let meal_name = document.getElementsByClassName("meal-name")[0];
let meal_photo = document.querySelector("img");
let meal_intr = document.getElementsByClassName("meal-instructions")[0];
let search = document.getElementsByClassName("search-food")[0];
const api = `https://www.themealdb.com/api/json/v1/1/search.php?s=rice`;
food();
let meals;
async function food() {
          let r = await fetch(api)
          let d = await r.json();

          meals = d.meals[0]
          console.log(meals.strMeal)
          dispayFood()
}

function dispayFood() {
          meal_name.textContent = meals.strMeal;
          meal_photo.src = meals.strMealThumb;
          meal_intr.textContent = meals.strInstructions;
}