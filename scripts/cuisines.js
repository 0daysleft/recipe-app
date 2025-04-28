

let cuisineApi = `https://www.themealdb.com/api/json/v1/1/list.php?a=list`

const fetchCuisines = async () => {
     let cuisineApiResponse = await fetch(cuisineApi);
     let cuisineApiResponseData = await cuisineApiResponse.json();

     //The four in the loop is to not show all the cuisine just a few and the user will be taken to all other cuisines if they click any cuisine
     let arrayToShuffle = cuisineApiResponseData.meals;

     function shuffledCuisines(array) {
          for (let i = array.length - 1; i > 0; i--) {
               let random = Math.floor(Math.random() * (i + 1)); 
               [array[i], array[random]] = [array[random], array[i]];
     }
    return array;
}


     // console.log(shuffledCuisines(arrayToShuffle))
     // console.log(cuisineApiResponseData.meals)

      for(let i = 0; i <= 4; i++){
               //console.log(data.meals[i].strArea);
               //cuisinesArray.push(data.meals[i].strArea);
               
               document.querySelector('.cuisines').innerHTML += 
                              `
                                   <div class='cuisine'>
                                        <p>${shuffledCuisines(arrayToShuffle)[i].strArea}</p>
                                   <div>
                              `
      }

}

fetchCuisines()

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
