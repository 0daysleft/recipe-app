/*

IN THIS PAGE IS SHOULD FIX THE ISSUES OF ALL THE ELEMENTS FROM DISPLAYING HERE,

ONLY THE CATEGORY TYPE SHOULD DISPLAY

*/



//import { food, dispayFood, shuffleMealsFunction, allMealsData } from "./script.js";
//import { food, dispayFood, allMealsData } from "./script.js";

let mealCategoryTypeApi = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${sessionStorage.getItem('categoryName')}`

document.querySelector('.navigate').innerHTML = `<h5><a href="../index.html">Home</a> <i class="fa-solid fa-angle-right"></i> <a href="../html-files/meal-categories.htm">Categories</a> <i class="fa-solid fa-angle-right"></i> ${sessionStorage.getItem('categoryName')} </h5>`

//THIS FUNCTION BELOW HERE SHOWS YOU HOW MANY ELEMNTS ARE IN THE CATEGORY PART

let mealCategoryTypeApiResponseData;
let mealCategoryTypeArray;
let arrayLen;
fetchMealCategoryTypeData()

async function fetchMealCategoryTypeData(){
     try{
          let mealCategoryTypeApiResponse = await fetch(mealCategoryTypeApi)
          mealCategoryTypeApiResponseData = await mealCategoryTypeApiResponse.json()

          mealCategoryTypeArray = mealCategoryTypeApiResponseData.meals
          displayMealCategoriesByType();
     }
     catch(err){
          console.log("Error: ", err)
     }
     
}

function displayMealCategoriesByType(){

     try{
     for(let index = 0; index <= mealCategoryTypeArray.length; index++){
               document.querySelector('.all-meals-categories').innerHTML += 
                         `
                           <div class="show-meal" style="width: 300px;">
                              <p class="meal-name">${mealCategoryTypeArray[index].strMeal}</p>
                              <img src="${mealCategoryTypeArray[index].strMealThumb}" class="meal-img" id='${mealCategoryTypeArray[index].idMeal}'>   
                         `
     }     
}
catch(err){
     console.log("Display: ", err)
}

     document.querySelectorAll('img').forEach(
                    (ele)=> {
                         ele.addEventListener('click', () => {
                              sessionStorage.setItem('mealId', ele.id) 
                              location.href = '../html-files/meal-details.html' 
                              
   
                         })
                    }
               )

}

//if(!document.getElementById("searchBtn")) return
// shuffleMealsFunction = (allMealsObject) => {
//                for (let i = allMealsObject.length - 1; i > 0; i--) {
//                     let j = Math.floor(Math.random() * (i + 1));
//                     [allMealsObject[i], allMealsObject[j]] = [allMealsObject[j], allMealsObject[i]];
//                }
//                return allMealsObject;
//           }


// food(mealCategoryTypeApi)
// dispayFood()

setTimeout(
     () => {
          document.querySelector('footer').style.display = 'flex';
     }, 2000
)



