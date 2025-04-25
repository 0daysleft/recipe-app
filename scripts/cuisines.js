

let cuisineApi = `https://https://www.themealdb.com/api/json/v1/1/list.php?a=list`

const fetchCuisines = async () => {
     let cuisineApiResponse = await fetch(cuisineApi);
     let cuisineApiResponseData = await cuisineApiResponse.json()
}

