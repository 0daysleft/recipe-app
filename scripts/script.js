

let api = `https://www.themealdb.com/api/json/v1/1/search.php?s=`
//API FOR ONE RANDOM MEAL = https://www.themealdb.com/api/json/v1/1/random.php
let showAllMeals = document.getElementsByClassName("all-meals")[0];
let mealValue = document.getElementById("search-food");
let mealValue_text;
let search = document.getElementById("searchBtn").addEventListener('click', searchResultUpdate);



mealValue.addEventListener('keydown', (e) => {
     if(e.key == 'Enter'){
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

let shuffledMeals;
let allMealsData;
let allMealsObject;
let shuffleMealsFunction;

food(api);

async function food(api) {
     showAllMeals.innerHTML = ""
     try{
          let response = await fetch(api)
          allMealsData = await response.json();

          allMealsObject = allMealsData.meals;
          shuffleMealsFunction = (allMealsObject) => {
               for (let i = allMealsObject.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [allMealsObject[i], allMealsObject[j]] = [allMealsObject[j], allMealsObject[i]];
               }
               return allMealsObject;
          }
          dispayFood()
     }
     catch(err){
          console.log(err)
     }
}

// console.log(document.querySelectorAll('.show-meal'))


function dispayFood() {
     
     shuffledMeals = shuffleMealsFunction(allMealsObject)
          try{
          for(let i = 0; i <= shuffledMeals.length - 1; i++){
                showAllMeals.innerHTML += `
                         <div class="show-meal">
                         <p class="meal-name">${shuffledMeals[i].strMeal}</p>
                         <img src="${shuffledMeals[i].strMealThumb}" class="meal-img">
                         <!--
                         <div class="meal-instructions">${shuffledMeals[i].strInstructions}</div>
                         <div> -->
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
               
               document.querySelectorAll('.meal-img').forEach(
     (ele)=> {
          ele.addEventListener('click', () => {
               console.log(ele)
          })
     }
)
               
          
}




