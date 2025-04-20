
let mealId = sessionStorage.getItem('mealId');

window.onload = () => {
 mealId = sessionStorage.getItem('mealId')
}
let getMealById = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`

//This function if for making sure there is an element in the session storage for category Name
let mealById = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
  m()
  async function m() {
  let v = await fetch(mealById);
  let r = await v.json();
  console.log("R is: ", r.meals[0].strCategory)
  sessionStorage.setItem('categoryName', r.meals[0].strCategory)
}

let mealElementSection = document.querySelector('.meal-details');
let singleMealData;
let displayIngredient;
let displayMeasure;
async function getMealDetails(){
     let response = await fetch(getMealById);
     singleMealData = await response.json()

    // console.log("Single: ", singleMealData.meals[0])

    const ingredientLength = Object.keys(singleMealData.meals[0]).filter(key => key.includes("strIngredient")).length;
    const measureLength = Object.keys(singleMealData.meals[0]).filter(key => key.includes("strMeasure")).length;

    console.log(singleMealData.meals[0])
 //console.log(singleMealData.meals[0])

//   displayIngredient = () => {
//     let list = "";
//     const meal = singleMealData.meals[0];

//     for(let i = 1; i <= ingredient; i++) {
        

//         if() {
//             list += `<li>${ingredient}</li>`;
//         }
//     }

//      return list;
//      }

displayMeasure = () => {
    let list = "";
    const meal = singleMealData.meals[0];
    
    for(let i = 1; i <= ingredientLength; i++) {
         let measure = meal[`strMeasure${i}`];
         let ingredient = meal[`strIngredient${i}`];
        // console.log("M: ", measure)
         console.log("I: ", ingredient)
         if(measure && measure.trim() !== "" || ingredient && ingredient.trim() !== ""){

            list += `<li style='border-bottom: 2px dashed grey; margin-bottom: 1rem' >${measure.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")} ${ingredient.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}</li>`;
        }
    }

     return list;
     }

showMealDetails();
}

getMealDetails()

function showMealDetails(){
     document.querySelector('.navigate').innerHTML = ` <h5><a href="../index.html">Home</a> > <a href="../html-files/meal-categories.htm">Categories</a> > <a href="../html-files/meal-category-type.html">${sessionStorage.getItem('categoryName')}</a> > ${singleMealData.meals[0].strMeal}</h5>`
     document.querySelector('.meal-details').innerHTML =
     `   
          <img src="${singleMealData.meals[0].strMealThumb}" alt="pancake-img"/>
          
                    <div class="meal-ingredients">
                         <h1>Ingredients & Measurements</h1>
                              <ul>
                                   ${displayMeasure()}
                              </ul>
                    </div>
                         <div class="meal-instructions">
                              <h1>Cooking Instructions</h1>
                              <p> ${singleMealData.meals[0].strInstructions.replace(/(\d+\))/g, '<strong>$1</strong>')}</p>
                         </div>
               </div>
     </section>
     `
}


setTimeout(
     () => {
          document.querySelector('footer').style.display = 'flex';
     }, 2000
)


