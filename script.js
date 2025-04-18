

let api = `https://www.themealdb.com/api/json/v1/1/search.php?s=`
//API FOR ONE RANDOM MEAL = https://www.themealdb.com/api/json/v1/1/random.php
let showAllMeals = document.getElementsByClassName("all-meals")[0];
// let meal_photo = document.querySelector("img");
// let meal_intr = document.getElementsByClassName("meal-instructions")[0];
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
let d;
let meals;
let shufflingmeals;
let shuffle;

food(api);

async function food(api) {
     showAllMeals.innerHTML = ""
     try{
          let response = await fetch(api)
          d = await response.json();

          
          //console.log(d)
          shuffledMeals = d.meals;
          console.log(d)
          console.log("Suff Elm 2: ", shuffledMeals[2])
          // console.log("suff.m: " + shufflingmeals.length)
          // console.log("d.meals: " + d.meals[2])
          // function shuffle(shufflingmeals) {
          //      for (let i = shufflingmeals.length - 1; i > 0; i--) {
          //           const j = Math.floor(Math.random() * (i + 1));
          //           [shufflingmeals[i], shufflingmeals[j]] = [shufflingmeals[j], shufflingmeals[i]];
          //      }
          //      return shufflingmeals;
          // }

          
          dispayFood()
     }
     catch(err){
          console.log(err)
     }
     //shuffledMeals = shuffle(d.meals)
}

//console.log(shuffle(d.meals)[3])
//console.log(shufflingmeals[2])
//console.log(shuffledMeals[3])

function dispayFood() {
     console.log("Suff Elm 2: ", shuffledMeals[2])
     //console.log("shuffled: ", shuffledMeals[1])
          try{
          for(let i = 0; i <= d.meals.length - 1; i++){
                showAllMeals.innerHTML += `
                         <div class="show-meal">
                         <p class="meal-name">${shuffledMeals[i].strMeal}</p>
                         <img src="${shuffledMeals[i].strMealThumb}" class="meal-img">
                         <div class="meal-instructions">${shuffledMeals[i].strInstructions}</div>
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


