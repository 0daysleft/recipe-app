

let api = `https://www.themealdb.com/api/json/v1/1/search.php?s=`
let showAllMeals = document.getElementsByClassName("all-meals")[0];
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
          food(api);
          mealValue.value = "";
     }
)

let d;

let meals;


food(api);

async function food(api) {
     try{
          let r = await fetch(api)
          d = await r.json();

          dispayFood()
     }
     catch(err){
          console.log(err)
     }
}

function dispayFood() {

          try{
          for(let i = 0; i <= d.meals.length - 1; i++){
                showAllMeals.innerHTML += `
                         <div class="show-meal">
                         <p class="meal-name">${d.meals[i].strMeal}</p>
                         <img src="${d.meals[i].strMealThumb}" class="meal-img">
                         <div class="meal-instructions">${d.meals[i].strInstructions}</div>
                         <div>
               `
          }
          }
          catch(err){
                    showAllMeals.innerHTML = 'No Meal Found Here, Please Search a valid Meal <button onclick =" window.location.reload()" >Home</button> ';
               }
          
}


