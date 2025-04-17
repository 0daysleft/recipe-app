

let meal_name = document.getElementsByClassName("search-food")[0];
let meal_photo = document.getElementsByClassName("search-food")[0];
let meal_intr = document.getElementsByClassName("meal-instruction")[0];
let search = document.getElementsByClassName("search-food")[0];
const api = `https://www.themealdb.com/api/json/v1/1/search.php?s=rice`;

async function food() {
          let r = await fetch(api)
          let d = await r.json();

          console.log(d.meals[0])
}

food();