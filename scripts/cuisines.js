

let cuisineApi = `https://https://www.themealdb.com/api/json/v1/1/list.php?a=list`

const fetchCuisines = async () => {
     let cuisineApiResponse = await fetch(cuisineApi);
     let cuisineApiResponseData = await cuisineApiResponse.json();


      for(let i = 0; i <= cuisineApiResponseData.meals.length - 1; i++){
               //console.log(data.meals[i].strArea);
               //cuisinesArray.push(data.meals[i].strArea);
               
               document.querySelector('.cuisines').innerHTML += 
                              `
                                   <div class='show-meal'>
                                        <p>${cuisineApiResponseData.meals[i].strArea}</p>
                                   <div>
                              `
      }

}

