/*

IN THIS PAGE IS SHOULD FIX THE ISSUES OF ALL THE ELEMENTS FROM DISPLAYING HERE,

ONLY THE CATEGORY TYPE SHOULD DISPLAY

*/



import { food, dispayFood } from "./script.js";

let mealCategoryTypeApi = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${sessionStorage.getItem('categoryName')}`

document.querySelector('.navigate').innerHTML = `<h5><a href="../index.html">Home</a>><a href="../html-files/meal-categories.htm">Categories</a>>${sessionStorage.getItem('categoryName')} </h5>`

//THIS FUNCTION BELOW HERE SHOWS YOU HOW MANY ELEMNTS ARE IN THE CATEGORY PART

// let mealCategoryTypeApiResponseData;

// async function fetchMealCategoryTypeData(){
//      let mealCategoryTypeApiResponse = await fetch(mealCategoryTypeApi)
//      mealCategoryTypeApiResponseData = await mealCategoryTypeApiResponse.json()

//      console.log( mealCategoryTypeApiResponseData.meals)

     
// }

// fetchMealCategoryTypeData()

//if(!document.getElementById("searchBtn")) return


food(mealCategoryTypeApi)
dispayFood()

setTimeout(
     () => {
          document.querySelector('footer').style.display = 'flex';
     }, 2000
)



