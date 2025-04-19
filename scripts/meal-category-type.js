import { food, dispayFood } from "./script.js";

let mealCategoryTypeApi = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'
let mealCategoryTypeApiResponseData;

async function fetchMealCategoryTypeData(){
     let mealCategoryTypeApiResponse = await fetch(mealCategoryTypeApi)
     mealCategoryTypeApiResponseData = await mealCategoryTypeApiResponse.json()

     console.log( mealCategoryTypeApiResponseData.meals[0])

     
}
//if(!document.getElementById("searchBtn")) return

food(mealCategoryTypeApi)
dispayFood()

fetchMealCategoryTypeData()



