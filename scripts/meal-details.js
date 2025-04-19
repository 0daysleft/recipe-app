
let mealId = sessionStorage.getItem('mealId');

window.onload = () => {
 mealId = sessionStorage.getItem('mealId')
}
let getMealById = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`


let mealElementSection = document.querySelector('.meal-details');
let singleMealData;
let displayIngredient;
let displayMeasure;
async function getMealDetails(){
     let response = await fetch(getMealById);
     singleMealData = await response.json()

    // console.log("Single: ", singleMealData.meals[0])

    const ingredient = Object.keys(singleMealData.meals[0]).filter(key => key.includes("strIngredient")).length;
    const measure = Object.keys(singleMealData.meals[0]).filter(key => key.includes("strMeasure")).length;
 //console.log(singleMealData.meals[0])

  displayIngredient = () => {
    let list = "";
    const meal = singleMealData.meals[0];

    for(let i = 1; i <= ingredient; i++) {
        let ingredient = meal[`strIngredient${i}`];

        if(ingredient && ingredient.trim() !== "") {
            list += `<li>${ingredient}</li>`;
        }
    }

     return list;
     }

displayMeasure = () => {
    let list = "";
    const meal = singleMealData.meals[0];

    for(let i = 1; i <= measure; i++) {
        let measure = meal[`strMeasure${i}`];

        if(measure && measure.trim() !== "") {
            list += `<li>${measure}</li>`;
        }
    }

     return list;
     }

showMealDetails();
}

getMealDetails()

function showMealDetails(){
     document.querySelector('.meal-details').innerHTML =
     `
          <div class='navigation' > <a href="./index.html"><h1>Home</h1></a>/
          <a href="./html-files/meal-categories.htm"><h1>${singleMealData.meals[0].strCategory}</h1></a> </div>
          <h1>${singleMealData.meals[0].strMeal}</h1>
          <img src="${singleMealData.meals[0].strMealThumb}" alt="pancake-img"/>

          <div class="meal-ingredients">
               <h1>Meal Ingredients</h1>
               <ul>
                         ${ displayIngredient()}
               </ul>
          </div>

          <div class="meal-measures">
               <h1>Meal Measures</h1>
               <ul>
                    ${displayMeasure()}</ul>
          </div>
         <div class="meal-instructions">
          <h1>Cooking Instructions</h1>
          <p> ${singleMealData.meals[0].strInstructions}</p>
     </section>
     `
}



