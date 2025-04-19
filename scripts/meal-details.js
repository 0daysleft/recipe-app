
let mealId = sessionStorage.getItem('mealId');

window.onload = () => {
 mealId = sessionStorage.getItem('mealId')
}
let getMealById = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`


let mealElementSection = document.querySelector('.meal-details');
let singleMealData;

async function getMealDetails(){
     let response = await fetch(getMealById);
     singleMealData = await response.json()

    // console.log("Single: ", singleMealData.meals[0])

    const ingredient = Object.keys(singleMealData.meals[0]).filter(key => key.includes("strIngredient")).length;
    const measure = Object.keys(singleMealData.meals[0]).filter(key => key.includes("strMeasure")).length;
 console.log(singleMealData.meals[0])

function c(){
    let list = "";
    const meal = singleMealData.meals[0];

    for(let i = 1; i <= 20; i++) {
        let ingredient = meal[`strIngredient${i}`];

        if(ingredient && ingredient.trim() !== "") {
            list += `<li>${ingredient}</li>`;
        }
    }

    return list;
}


document.querySelector('#demo').innerHTML +=

`
  <ul>
${c()}
 </ul>

`

showMealDetails();
}

getMealDetails()

function showMealDetails(){
     document.querySelector('.meal-details').innerHTML =
     `
          <a href="#"><h1>Dessert</h1></a>
          <h1>Pancakes</h1>
          <img src="${singleMealData.meals[0].strMealThumb}" alt="pancake-img"/>

          <div class="meal-ingredients">
               <h1>Meal Ingredients</h1>
               <ul>
                         <li>Flour</li>
                         <li>Eggs</li>
                         <li>Milk</li>
                         <li>Sunflower Oil</li>
                         <li>Sugar</li>
                         <li>Raspberries</li>
                         <li>Blueberries</li>
               </ul>
          </div>

          <div class="meal-measures">
               <h1>Meal Measures</h1>
               <ul>
                    <li>100g</li>
                    <li>2 large</li>
                    <li>300ml</li>
                    <li>1 tbls</li>
                    <li>to serve</li>
                    <li>to serve</li>
                    <li>to serve</li>
               </ul>
          </div>
         <div class="meal-instructions">
          <h1>Cooking Instructions</h1>
          <p>  ingredients </p>
     </section>
     `
}



