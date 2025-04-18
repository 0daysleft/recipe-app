
let mealId = null;

window.onload = () => {
 mealId = sessionStorage.getItem('mealId')
}
let getMealById = `www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`


let mealElementSection = document.querySelector('.meal-details');

async function showMealDetails(){
     let response = await fetch(getMealById);
     let data = await response.json()

     console.log(data)
}

showMealDetails()
