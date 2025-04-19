


let categoriesApi = 'https://www.themealdb.com/api/json/v1/1/categories.php'


async function fetchMealCategories(){

     try{
     let categoriesResponse = await fetch(categoriesApi);
     let categoriesResponseData = await categoriesResponse.json();

     console.log(categoriesResponseData.categories[0])
     }
     catch(err){
          document.querySelector('.meal-categories').innerHTML = err;
     }
}

fetchMealCategories()

function displayMealCategories(){
     document.querySelector('.meal-categories').innerHTML = ""
}

