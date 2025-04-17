

let api = `https://www.themealdb.com/api/json/v1/1/search.php?s=`
let showAllMeals = document.getElementsByClassName("all-meals")[0];
// let meal_photo = document.querySelector("img");
// let meal_intr = document.getElementsByClassName("meal-instructions")[0];
let mealValue = document.getElementById("search-food");
let mealValue_text;
let search = document.getElementById("searchBtn").addEventListener('click', searchResultUpdate);

mealValue.addEventListener('keydown', (e) => {
     if(e.key == 'Enter'){
          console.log(e.key)
          searchResultUpdate()
     }
})

mealValue.addEventListener('keydown', () => {

     setTimeout(
          () => {
               searchResultUpdate()
          },3000
     )
});

function searchResultUpdate(){
          if(!mealValue.value) return
          mealValue_text =  mealValue.value
          let api = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealValue_text}`
          showAllMeals.innerHTML = ""
          food(api);
          mealValue.value = "";
}

let d;

let meals;


food(api);

async function food(api) {
     showAllMeals.innerHTML = ""
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
               showAllMeals.innerHTML = `
               <div style="width: 100vw; height: 60vh; display: flex;
                         align-items: center; flex-direction: column;
                         text-align: center; justify-content: center;
               ">

                    
               We could't find <span style="text-transform: uppercase; font-weight: bolder; font-size: 2rem; color: red" >${mealValue_text}</span> 
               Please Search for another type of Meal </br> CHECK THESE OUT </br> <a href="#"> <p onclick='food("https://www.themealdb.com/api/json/v1/1/search.php?s=rice")'> CHECK RICE </p> </a> </br>
               <a href="#"> <p onclick='food("https://www.themealdb.com/api/json/v1/1/search.php?s=pancakes")'> CHECK PANCAKES </p> </a> </br>
               <a href="#"> <p onclick='food("https://www.themealdb.com/api/json/v1/1/search.php?s=pizza")'> CHECK PIZZA </p> </a>
               <button onclick =" window.location.reload()" >Home</button>
               </div>
               `

               }
          
}


