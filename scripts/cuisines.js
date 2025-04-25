

let cuisineApi = `https://www.themealdb.com/api/json/v1/1/list.php?a=list`

const fetchCuisines = async () => {
     let cuisineApiResponse = await fetch(cuisineApi);
     let cuisineApiResponseData = await cuisineApiResponse.json();

     //console.log(cuisineApiResponseData)

     //The four in the loop is to not show all the cuisine just a few and the user will be taken to all other cuisines if they click any cuisine
     
      for(let i = 0; i <= 4; i++){
               //console.log(data.meals[i].strArea);
               //cuisinesArray.push(data.meals[i].strArea);
               
               document.querySelector('.cuisines').innerHTML += 
                              `
                                   <div class='cuisine'>
                                        <p>${cuisineApiResponseData.meals[i].strArea}</p>
                                   <div>
                              `
      }

}

fetchCuisines()

