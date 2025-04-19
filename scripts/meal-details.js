
let mealId = sessionStorage.getItem('mealId');

window.onload = () => {
 mealId = sessionStorage.getItem('mealId')
}
let getMealById = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`


let mealElementSection = document.querySelector('.meal-details');

async function getMealDetails(){
     let response = await fetch(getMealById);
     let singleMealData = await response.json()

    // console.log("Single: ", singleMealData.meals[0])

    const ingredient = Object.keys(singleMealData.meals[0]).filter(key => key.includes("strIngredient")).length;
    const measure = Object.keys(singleMealData.meals[0]).filter(key => key.includes("strMeasure")).length;

    console.log("Meal: ", singleMealData.meals[0].strIngredient11)

    console.log("Ingredient: ", ingredient,"Measure: ", measure)

    
function c(){
     let list = "";
      for(let i = 0; i <= ingredient; i++ ){
          list += `<li>${singleMealData.meals[0].strIngredient}${i.toString()}</li>`
          console.log(singleMealData.meals[0].strIngredient+i.toString())
     }

     return list;
}

document.querySelector('#demo').innerHTML +=

`
  <ul>
${c()}
 </ul>

`
}

getMealDetails()

function showMealDetails(){
     document.querySelector('meal-details').innerHTML
     `
          <a href="#"><h1>Dessert</h1></a>
          <h1>Pancakes</h1>
          <img src="https://www.themealdb.com/images/media/meals/rwuyqx1511383174.jpg" alt="pancake-img"/>

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



