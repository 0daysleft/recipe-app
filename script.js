

let showAllMeals = document.getElementsByClassName("show-meal")[0];
let meal_photo = document.querySelector("img");
let meal_intr = document.getElementsByClassName("meal-instructions")[0];
let mealValue = document.getElementById("search-food") || "";
let search = document.getElementById("searchBtn").addEventListener('click', 
     () => {
          food();
          console.log("Meal Value is: " + mealValue.value)
     }
)

let api = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealValue || ""}`
let d;
food();
let meals;
async function food() {
          let r = await fetch(api)
          d = await r.json();
          dispayFood()
     }

function dispayFood() {

          console.log("There are : " + d.meals.length)
          for(let i = 0; i <= d.meals.length - 1; i++){
                showAllMeals.innerHTML += `
                         <p class="meal-name">${d.meals[i].strMeal}</p>
                         <img src="${d.meals[i].strMealThumb}" class="meal-img">
                         <div class="meal-instructions">${d.meals[i].strInstructions}</div>
               `
          }
}
