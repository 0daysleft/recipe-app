
let cuisineApiResponseData;
let arrayToShuffle;
let shuffledCuisines;
let cuisineApi = `https://www.themealdb.com/api/json/v1/1/list.php?a=list`

const fetchCuisines = async () => {
     let cuisineApiResponse = await fetch(cuisineApi);
     cuisineApiResponseData = await cuisineApiResponse.json();

     //The four in the loop is to not show all the cuisine just a few and the user will be taken to all other cuisines if they click any cuisine
     arrayToShuffle = cuisineApiResponseData.meals;

     //console.log(arrayToShuffle)
     // console.log(arrayToShuffle.length)
      console.log(arrayToShuffle)

     shuffledCuisines = (array) => {
          for (let i = array.length - 1; i > 0; i--) {
               let random = Math.floor(Math.random() * (i + 1)); 
               [array[i], array[random]] = [array[random], array[i]];
          }
     return array;
     }


     // console.log(shuffledCuisines(arrayToShuffle))
     // console.log(cuisineApiResponseData.meals)

     //if(document.querySelector('.cuisine-container')){
     //      for(let i = 0; i <= 4; i++){
     //           //console.log(data.meals[i].strArea);
     //           //cuisinesArray.push(data.meals[i].strArea);
     //           document.querySelector('.cuisines').innerHTML += 
     //                          `
     //                               <div class='cuisine'>
     //                                    <p>${arrayToShuffle[i].strArea}</p>
     //                               <div>
     //                          `
     //      }
     // }

     let country = await fetch(`https://flagcdn.com/en/codes.json`);
     let name = await country.json();
     console.log(name['ae'])
     console.log(Object.values(name).find((s) => s['United Arab Emirates']))

      displayCuisines()

     document.querySelectorAll(".cuisine-box").forEach(
          (cuisine) => {
                    cuisine.addEventListener('click', 
                    () => {
                         
                    }
               )
     })
//console.log(document.querySelector('.cuisine-container'))
}

fetchCuisines()

function displayCuisines(){
     for(let i = 0; i <= arrayToShuffle.length -1; i++){
          document.querySelector(".cuisine-container").innerHTML += 
                    `
                         <div class='cuisine-box' id='${arrayToShuffle[i].strArea}'>
                                   <p>${arrayToShuffle[i].strArea}</p>
                         </div>
                    `
     }
     
}

// Alert the user work in progress

document.querySelectorAll('nav ul a').forEach(
     (value) => {
          value.addEventListener('click', 
               () => {
                    alert('work in progress. Just wait')
               }
          )
     }
)
