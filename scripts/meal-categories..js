


let categoriesApi = 'https://www.themealdb.com/api/json/v1/1/categories.php'
 let categoriesResponseData;

async function fetchMealCategories(){

     try{
     let categoriesResponse = await fetch(categoriesApi);
     categoriesResponseData = await categoriesResponse.json();

     //console.log(categoriesResponseData.categories[0])

     }
     catch(err){
          document.querySelector('.meal-categories').innerHTML = err;
     }
}

fetchMealCategories()

function displayMealCategories(){

     categoriesResponseData.categories.forEach(
          (ele) => {
               console.log(ele)
          }
     )

     document.querySelector('.meal-categories').innerHTML = `
     
          <div class="meal-category">
                    <h3>Beef</h3>
                    <img src="https://www.themealdb.com/images/category/beef.png" alt="beef" id="1">
                    <p>Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times. Beef is a source of high-quality protein and essential nutrients.</p>
          </div>


     `
}
/*
{
    "idCategory": "1",
    "strCategory": "Beef",
    "strCategoryThumb": "https://www.themealdb.com/images/category/beef.png",
    "strCategoryDescription": "Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]"
}

*/

