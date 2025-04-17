

let meal_name = document.getElementsByClassName("meal-name")[0];
let showAllMeals = document.getElementsByClassName("show-meal")[0];
let meal_photo = document.querySelector("img");
let meal_intr = document.getElementsByClassName("meal-instructions")[0];
let search = document.getElementsByClassName("search-food")[0];
const api = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search|| ""}`;
 let d;
food();
let meals;
async function food() {
          let r = await fetch(api)
          d = await r.json();

          meals = d.meals[0]
          dispayFood()
          console.log(d.meals.length)
     }

function dispayFood() {

          
          for(let i = 0; i <= d.meals.length - 1; i++){
               console.log(d.meals[i].strMeal);
                showAllMeals.innerHTML += `
                         <p class="meal-name">${d.meals[i].strMeal}</p>
                         <img src="${d.meals[i].strMealThumb}" class="meal-img">
                         <div class="meal-instructions">${d.meals[i].strInstructions}</div>
               `
          }
}
