
let cuisineApiResponseData;
let arrayToShuffle;
let shuffledCuisines;
let key;
let getKeyByValue;
let cuisineApi = `https://www.themealdb.com/api/json/v1/1/list.php?a=list`

const fetchCuisines = async () => {
     let cuisineApiResponse = await fetch(cuisineApi);
     cuisineApiResponseData = await cuisineApiResponse.json();
     let co = await fetch(`https://restcountries.com/v3.1/all`);
     let coh = await co.json();
     console.log(coh[0].name.common);


const foundObject = coh.find(obj => {
    // Check if any value in the object contains the search string
    return Object.values(obj).some(value => 
        typeof value === 'string' && value.includes('Kenya')
    );
});

console.log("Match: ", foundObject);


     //The four in the loop is to not show all the cuisine just a few and the user will be taken to all other cuisines if they click any cuisine
     arrayToShuffle = cuisineApiResponseData.meals;

     //console.log(arrayToShuffle)
     // console.log(arrayToShuffle.length)
      //console.log(arrayToShuffle)

     shuffledCuisines = (array) => {
          for (let i = array.length - 1; i > 0; i--) {
               let random = Math.floor(Math.random() * (i + 1)); 
               [array[i], array[random]] = [array[random], array[i]];
          }
     return array;
     }


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
          // async () => {
          //      let country = await fetch(`https://flagcdn.com/en/codes.json`);
          //      let countryData = await country.json();
               
          //      getKeyByValue = (object, value) => {
          //           for (let key in object) {
          //                if (object[key] === value) {
          //                     return key;
          //                }
          //           }    
          //           return 'Value Not Found';
          // }

          //      key = getKeyByValue(countryData, `${arrayToShuffle[i].strArea}`);
          //      console.log(`The Key Is : ${key}`);
          // }

          document.querySelector(".cuisine-container").innerHTML += 
                    `
                         <div class='cuisine-box' id='${arrayToShuffle[i].strArea}'>
                                   <p>${arrayToShuffle[i].strArea} <strong>${key}</strong> </p> 
                                   <img src="https://flagcdn.com/256x192/ae.png" width="256" height="192" alt="${arrayToShuffle[i].strArea}">
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
