


let categoriesApi = 'https://www.themealdb.com/api/json/v1/1/categories.php'
 let categoriesResponseData;

document.querySelector('.navigate').innerHTML = `<h5> <a href="../index.html">Home</a> <i class="fa-solid fa-angle-right"></i>Recipes Categories</h5>`

async function fetchMealCategories(){

     try{
     let categoriesResponse = await fetch(categoriesApi);
     categoriesResponseData = await categoriesResponse.json();

     //console.log(categoriesResponseData.categories[0])

     displayMealCategories()
     }
     catch(err){
          document.querySelector('.meal-categories').innerHTML = err;
     }

}

fetchMealCategories()

function displayMealCategories(){

     categoriesResponseData.categories.forEach(
          (ele) => {
               document.querySelector('.meal-categories').innerHTML += `
     
                         <div class="meal-category" id="${ele.strCategory}">
                                   <h3>${ele.strCategory}</h3>
                                   <img src="${ele.strCategoryThumb}" alt="${ele.strCategory}" id="${ele.idCategory}">
                                   <p>${ele.strCategoryDescription}</p>
                         </div>


     `

     document.querySelectorAll(".meal-category").forEach(
          (ele) => {
               ele.addEventListener('click', () => {
                    sessionStorage.setItem('categoryName', ele.id)
                    location.href = '../html-files/recipes.html'
               })
          }
     )
          }
)

setTimeout(
     () => {
          document.querySelector('footer').style.display = 'flex';
     }, 2000
)
}

                                        
//Alert Message

document.querySelector('nav .logo').addEventListener(
     ('click'), () => {
          if(!document.querySelector('.home-page')){
          location.href = '../index.html'
          }
     }
)


document.querySelectorAll('nav ul a').forEach(
     (value) => {
          value.addEventListener('click', 
               () => {
                    alert('work in progress. Just wait')
               }
          )
     }
)


