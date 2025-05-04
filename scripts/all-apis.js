// Search meal by name
// www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata

// List all meals by first letter
// www.themealdb.com/api/json/v1/1/search.php?f=a

// Lookup full meal details by id
// www.themealdb.com/api/json/v1/1/lookup.php?i=52772

// Lookup a single random meal
// www.themealdb.com/api/json/v1/1/random.php

// List all meal categories
// www.themealdb.com/api/json/v1/1/categories.php

// List all Categories, Area, Ingredients
// www.themealdb.com/api/json/v1/1/list.php?c=list
// www.themealdb.com/api/json/v1/1/list.php?a=list
// www.themealdb.com/api/json/v1/1/list.php?i=list

// Filter by main ingredient
// www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast

// Filter by Category
// www.themealdb.com/api/json/v1/1/filter.php?c=Seafood

// Filter by Area
// www.themealdb.com/api/json/v1/1/filter.php?a=Canadian

// Meal Thumbnail Images
// Add /preview to the end of the meal image URL
// /images/media/meals/llcbn01574260722.jpg/small
// /images/media/meals/llcbn01574260722.jpg/medium
// /images/media/meals/llcbn01574260722.jpg/large

// Ingredient Thumbnail Images
// *URL's match the ingredient name with an underscore for any spaces.

// www.themealdb.com/images/ingredients/lime.png

let api_cuisine =  `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
let api_cuisine_meal =  `https://www.themealdb.com/api/json/v1/1/filter.php?a=kenyan`
let cuisinesArray = []
async function allData(){
     let response = await fetch(api_cuisine);
     let data = await response.json()

     for(let i = 0; i <= data.meals.length - 1; i++){
     console.log(data.meals[i].strArea);
     cuisinesArray.push(data.meals[i].strArea);
     }

}


allData();
setTimeout( () => {
console.log(cuisinesArray)
}, 5000);
