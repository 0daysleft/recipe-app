
let mealId = sessionStorage.getItem('mealId');

window.onload = () => {
 mealId = sessionStorage.getItem('mealId')
}
let getMealById = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`


let mealElementSection = document.querySelector('.meal-details');

async function showMealDetails(){
     let response = await fetch(getMealById);
     let data = await response.json()

    // console.log("Single: ", data.meals[0])

    const ingredient = Object.keys(data.meals[0]).filter(key => key.includes("Ing")).length;
    const measure = Object.keys(data.meals[0]).filter(key => key.includes("Ing")).length;

    console.log(count)
    console.log("Meal: ", data.meals[0])
}

showMealDetails()

