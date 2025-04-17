

let api = `https://www.themealdb.com/api/json/v1/1/search.php?s=`
let showAllMeals = document.getElementsByClassName("show-meal")[0];
// let meal_photo = document.querySelector("img");
// let meal_intr = document.getElementsByClassName("meal-instructions")[0];
let mealValue = document.getElementById("search-food");
let mealValue_text;
let search = document.getElementById("searchBtn").addEventListener('click', 
     () => {

          if(!mealValue.value) return
          mealValue_text =  mealValue.value
          let api = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealValue_text}`
          showAllMeals.innerHTML = ""
          food();
async function food() {
          let r = await fetch(api)
          d = await r.json();

          dispayFood()
}

function dispayFood() {

          for(let i = 0; i <= d.meals.length - 1; i++){
                showAllMeals.innerHTML += `
                         <p class="meal-name">${d.meals[i].strMeal}</p>
                         <img src="${d.meals[i].strMealThumb}" class="meal-img">
                         <div class="meal-instructions">${d.meals[i].strInstructions}</div>
               `
          }
}

     }
)

let d;

let meals;

window.onload = () => {
food();
async function food() {
          let r = await fetch(api)
          d = await r.json();

          dispayFood()
}

function dispayFood() {

          for(let i = 0; i <= d.meals.length - 1; i++){
                showAllMeals.innerHTML += `
                         <p class="meal-name">${d.meals[i].strMeal}</p>
                         <img src="${d.meals[i].strMealThumb}" class="meal-img">
                         <div class="meal-instructions">${d.meals[i].strInstructions}</div>
               `
          }
}

}

