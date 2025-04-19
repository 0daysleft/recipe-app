
let mealCategoryTypeApi = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'
let mealCategoryTypeApiResponseData;

async function fetchMealCategoryTypeData(){
     let mealCategoryTypeApiResponse = fetch(mealCategoryTypeApi)
     mealCategoryTypeApiResponseData = (await mealCategoryTypeApiResponse).json()

     console.log(mealCategoryTypeApiResponseData)

}

fetchMealCategoryTypeData()

