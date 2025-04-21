# 🍽️ Meal Explorer – Dynamic Meal Search App

A modern, responsive web app that lets users explore delicious meals via [TheMealDB API](https://www.themealdb.com/api.php). Built with **vanilla JavaScript, HTML5, and CSS3**, this application fetches meals dynamically based on user input or displays default meals when no search is performed.

---

## 🔍 Live Preview

> [Vercel](https://www.recipe-app-gamma-pied.vercel.app)

> [GitHub Pages](https://www.recipe-app.github.com/0daysleft)

---

## 🚀 Features

- 🔎 **Search for meals** using TheMealDB's API
- 🧠 **Displays default meals** on initial load (`b`-based meals as default)
- ❌ **Handles "no results" gracefully** with helpful suggestions
- 🎯 Responsive **CSS Flexbox layout** optimized for all screen sizes
- 🧼 Clean and modular UI with scrollable instructions
- 🛠️ Fully extendable for API expansion, like meal categories, random picks, or ingredient-based search
- ✅ Has different sections of meals
- 🧭 Good navigation sections

---

## 📁 Project Structure

```bash
.
├── index.html                  -                      # Main UI layout
├── html-files
              ├── meal-categories.html                 # All Meal Categories (eg, Beef, Chicken)
              ├── meal-category-type.html              # All Meal Categories Type(i.e If Meal category is Beef, All meals which are in beef type)
              ├── meal-details.html                    # Each Meal in details i.e measures, ingredients and cooking instructions;
├── styles
              ├── styles.css                           # Custom flexbox-based styling
├── script                                             # All JavaScript logic (API fetch, render, error handling)
              ├── meal-categories.js                   # each corresponding html files data
              ├── meal-category-type.js                # each corresponding html files data
              ├── script.js                            # most data is fetched from this script file;
```
---

## 🧑‍💻 Author

> Built by 0 Day

> ### Code until something cool happens.

## 🧪 Future Improvements (Ideas) Some will be added,removed, implemented and discerded, The future will tell

- Ingredient-based filtering (**🚧 In Progress**)

- Random meal generator button (**🚧 🚧 Almost Done**)

- Category-based filtering (e.g., Vegan, Seafood, etc.) (**🚧 🚧 Almost Done**)

- Add dark mode toggle (**🚧 In Progress**)

- Use localStorage to cache recent searches (**🚧 In Progress**)
  
- Filter by Area (**🚧 🚧 Almost Done**)
  
- Filter by main ingredient (**🚧 In Progress**)
  
- List all Categories, Area, Ingredients (**🚧 Almost Done**) 
  
- Lookup a single random meal (**🚧 Almost Done**)
  
- Lookup full meal details (**Done ✅**)
  
- List all meals by first letter (**🚧 Almost Done**)

## 🙏 **Acknowledgments**

- 🍲 [TheMealDB API](https://www.themealdb.com/api.php): For providing recipe data

- 👨‍💻 [Florion Pop](https://youtu.be/dtKciwk_si4?si=V_x6SMFN7_NvMelp&t=5002) Video Idea
  
- 📸 [Pixar Photos](https://ww.pixar.com/photos): For the beautiful recipe images;

- 💡 [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting): For comprehensive documentation and resources


