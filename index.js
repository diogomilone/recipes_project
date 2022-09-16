// I need to change this recipe declaration to a proper import/export clause to avoid pollution
// Also, ideally we would be accessing a database instead of declaring these recipes manually
const turkeyTabbouleh = [
    {
        ingredient: "Turkey Breast Portions",
        quantity: 680,
        unity: "g"
    },
    {
        ingredient: "Baby Spinach",
        quantity: 56,
        unity: "g"
    },
    {
        ingredient: "Feta Cheese",
        quantity: 0.5,
        unity: "cup"
    },
    {
        ingredient: "Garlic",
        quantity: 4,
        unity: "cloves"
    },
    {
        ingredient: "Bulgur Wheat",
        quantity: 1,
        unity: "cup"
    },
    {
        ingredient: "Roma Tomato",
        quantity: 320,
        unity: "g"
    },
    {
        ingredient: "Red Onion",
        quantity: 113,
        unity: "g"
    },
    {
        ingredient: "Red Wine Vinegar",
        quantity: 2,
        unity: "tbsp"
    },
    {
        ingredient: "Shawarma Spice Blend",
        quantity: 2,
        unity: "tbsp"
    },
    {
        ingredient: "Parsley",
        quantity: 7,
        unity: "g"
    },
    {
        ingredient: "Vegetable Broth Concentrate",
        quantity: 2,
        unity: "packs"
    },
    {
        ingredient: "Oil",
        quantity: 4,
        unity: "tbsp"
    },
]
const sunburstSalad = [
    {
        ingredient: "Turkey Scallopini",
        quantity: 680,
        unity: "g"
    },
    {
        ingredient: "Cajun Spice Blend",
        quantity: 2,
        unity: "tbsp"
    },
    {
        ingredient: "Spring Mix",
        quantity: 227,
        unity: "g"
    },
    {
        ingredient: "Dried Cranberries",
        quantity: 0.5,
        unity: "cup"
    },
    {
        ingredient: "Red Wine Vinegar",
        quantity: 2,
        unity: "tbsp"
    },
    {
        ingredient: "Honey",
        quantity: 2,
        unity: "tbsp"
    },
    {
        ingredient: "Hot Sauce",
        quantity: 2,
        unity: "tbsp"
    },
    {
        ingredient: "Almonds",
        quantity: 56,
        unity: "g"
    },
    {
        ingredient: "Feta Cheese",
        quantity: 0.5,
        unity: "cup"
    },
    {
        ingredient: "Mini Cucumber",
        quantity: 264,
        unity: "g"
    },
    {
        ingredient: "Oil",
        quantity: 4,
        unity: "tbsp"
    },
]
const chickenMilanese = [
    {
        ingredient: "Chicken Breasts",
        quantity: 500,
        unity: "g"
    },
    {
        ingredient: "Mayonnaise",
        quantity: 4,
        unity: "tbsp"
    },
    {
        ingredient: "Italian Breadcrumbs",
        quantity: 0.5,
        unity: "tbsp"
    },
    {
        ingredient: "Gala Apple",
        quantity: 2,
        unity: "pack"
    },
    {
        ingredient: "White Cheddar Cheese",
        quantity: 1,
        unity: "cup"
    },
    {
        ingredient: "White Wine Vinegar",
        quantity: 2,
        unity: "tbsp"
    },
    {
        ingredient: "Baby Spinach",
        quantity: 113,
        unity: "g"
    },
    {
        ingredient: "Dijon Mustard",
        quantity: 3,
        unity: "tsp"
    },
    {
        ingredient: "Roma Tomato",
        quantity: 160,
        unity: "g"
    },
    {
        ingredient: "Sugar",
        quantity: 2,
        unity: "tsp"
    },
    {
        ingredient: "Oil",
        quantity: 10,
        unity: "tbsp"
    },
]
const veggiePastaPrimavera =[
    {
        ingredient: "Rigatoni",
        quantity: 340,
        unity: "g"
    },
    {
        ingredient: "Shallot",
        quantity: 100,
        unity: "g"
    },
    {
        ingredient: "Broccoli",
        quantity: 454,
        unity: "g"
    },
    {
        ingredient: "Cream Cheese",
        quantity: 86,
        unity: "g"
    },
    {
        ingredient: "Parmesan Cheese",
        quantity: 0.5,
        unity: "cup"
    },
    {
        ingredient: "Garlic",
        quantity: 4,
        unity: "cloves"
    },
    {
        ingredient: "Vegetable Stock Reduction",
        quantity: 2,
        unity: "pack"
    },
    {
        ingredient: "Baby Tomatoes",
        quantity: 227,
        unity: "g"
    },
    {
        ingredient: "Italian Herb Spice Blend",
        quantity: 2,
        unity: "tbsp"
    },
    {
        ingredient: "Cream Sauce Spice Blend",
        quantity: 2,
        unity: "tbsp"
    },
    {
        ingredient: "Oil",
        quantity: 2,
        unity: "tbsp"
    },
]
const chickenTikka = [
    {
        ingredient: "Chicken Breasts",
        quantity: 500,
        unity: "g"
    },
    {
        ingredient: "Naan Bread",
        quantity: 4,
        unity: "pack"
    },
    {
        ingredient: "Sweet Bell Pepper",
        quantity: 320,
        unity: "g"
    },
    {
        ingredient: "Red Onion",
        quantity: 226,
        unity: "g"
    },
    {
        ingredient: "Cilantro",
        quantity: 7,
        unity: "g"
    },
    {
        ingredient: "Tikka Sauce",
        quantity: 1,
        unity: "cup"
    },
    {
        ingredient: "Greek Yogurt",
        quantity: 200,
        unity: "ml"
    },
    {
        ingredient: "Mild Curry Paste",
        quantity: 4,
        unity: "tbsp"
    },
    {
        ingredient: "Unsalted Butter",
        quantity: 2,
        unity: "tbsp"
    },
    {
        ingredient: "Sugar",
        quantity: 0.5,
        unity: "tsp"
    },
    {
        ingredient: "Oil",
        quantity: 1,
        unity: "tbsp"
    },
]
const honeyGarlicPork =[
    {
        ingredient: "Pork Chop",
        quantity: 570,
        unity: "g"
    },
    {
        ingredient: "Jasmine Rice",
        quantity: 1.5,
        unity: "cup"
    },
    {
        ingredient: "Honey-Garlic Sauce",
        quantity: 4,
        unity: "tbsp"
    },
    {
        ingredient: "Mayonnaise",
        quantity: 115,
        unity: "g"
    },
    {
        ingredient: "Sriracha",
        quantity: 4,
        unity: "tsp"
    },
    {
        ingredient: "Sesame Seeds",
        quantity: 1,
        unity: "tbsp"
    },
    {
        ingredient: "Shanghai Bok Choy",
        quantity: 452,
        unity: "g"
    },
    {
        ingredient: "Panko Spice Blend",
        quantity: 0.7,
        unity: "cup"
    },
    {
        ingredient: "Oil",
        quantity: 4,
        unity: "tbsp"
    },
]
const lambKoftas = [
    {
        ingredient: "Ground Lamb",
        quantity: 500,
        unity: "g"
    },
    {
        ingredient: "Shawarma Spice Blend",
        quantity: 2,
        unity: "tbsp"
    },
    {
        ingredient: "Panko Breadcrumbs",
        quantity: 0.5,
        unity: "cup"
    },
    {
        ingredient: "Feta Cheese",
        quantity: 0.5,
        unity: "cup"
    },
    {
        ingredient: "Cream Cheese",
        quantity: 86,
        unity: "g"
    },
    {
        ingredient: "Baby Spinach",
        quantity: 113,
        unity: "g"
    },
    {
        ingredient: "Roasted Red Peppers",
        quantity: 340,
        unity: "ml"
    },
    {
        ingredient: "Russet Potato",
        quantity: 920,
        unity: "g"
    },
    {
        ingredient: "White Wine Vinegar",
        quantity: 2,
        unity: "tbsp"
    },
    {
        ingredient: "Smoked Paprika",
        quantity: 2,
        unity: "tsp"
    },
    {
        ingredient: "Garlic Salt",
        quantity: 4,
        unity: "tsp"
    },
    {
        ingredient: "Milk",
        quantity: 4,
        unity: "tbsp"
    },
    {
        ingredient: "Sugar",
        quantity: 0.5,
        unity: "tsp"
    },
    {
        ingredient: "Oil",
        quantity: 4,
        unity: "tbsp"
    },
]
const lemonChicken = [
    {
        ingredient: "Chicken Breasts",
        quantity: 500,
        unity: "g"
    },
    {
        ingredient: "Zucchini",
        quantity: 400,
        unity: "g"
    },
    {
        ingredient: "Sweet Bell Pepper",
        quantity: 320,
        unity: "g"
    },
    {
        ingredient: "Shallot",
        quantity: 100,
        unity: "g"
    },
    {
        ingredient: "Feta Cheese",
        quantity: 0.5,
        unity: "cup"
    },
    {
        ingredient: "Dill-Garlic Spice Blenc",
        quantity: 2,
        unity: "tsp"
    },
    {
        ingredient: "Couscous",
        quantity: 1,
        unity: "cup"
    },
    {
        ingredient: "Chicken Broth Concentrate",
        quantity: 2,
        unity: "pack"
    },
    {
        ingredient: "Parsley",
        quantity: 14,
        unity: "g"
    },
    {
        ingredient: "Lemon",
        quantity: 1,
        unity: "pack"
    },
    {
        ingredient: "Oil",
        quantity: 2,
        unity: "tbsp"
    },
]
const porkWontonMeatballs = [
    {
        ingredient: "Ground Pork",
        quantity: 500,
        unity: "g"
    },
    {
        ingredient: "Broccoli",
        quantity: 454,
        unity: "g"
    },
    {
        ingredient: "Mushrooms",
        quantity: 227,
        unity: "g"
    },
    {
        ingredient: "Sugar Snap Peas",
        quantity: 227,
        unity: "g"
    },
    {
        ingredient: "Green Onion",
        quantity: 4,
        unity: "pack"
    },
    {
        ingredient: "Ginger",
        quantity: 30,
        unity: "g"
    },
    {
        ingredient: "Hoisin Sauce",
        quantity: 0.5,
        unity: "cup"
    },
    {
        ingredient: "Garlic Puree",
        quantity: 2,
        unity: "tbsp"
    },
    {
        ingredient: "Chili Garlic Sauce",
        quantity: 2,
        unity: "tbsp"
    },
    {
        ingredient: "Panko Breadcrumbs",
        quantity: 0.5,
        unity: "cup"
    },
    {
        ingredient: "Soy Sauce",
        quantity: 1,
        unity: "tbsp"
    },
    {
        ingredient: "Oil",
        quantity: 2,
        unity: "tbsp"
    },
]
const jalapenoPopperTurkeyBake = [
    {
        ingredient: "Turkey Breast",
        quantity: 680,
        unity: "g"
    },
    {
        ingredient: "Seasoned Salt",
        quantity: 1,
        unity: "tbsp"
    },
    {
        ingredient: "Jalapeno",
        quantity: 2,
        unity: "pack"
    },
    {
        ingredient: "Cream Cheese",
        quantity: 86,
        unity: "g"
    },
    {
        ingredient: "Cheddar Cheese",
        quantity: 0.5,
        unity: "cup"
    },
    {
        ingredient: "Zucchini",
        quantity: 400,
        unity: "g"
    },
    {
        ingredient: "Broccoli",
        quantity: 454,
        unity: "g"
    },
    {
        ingredient: "Green Onion",
        quantity: 4,
        unity: "pack"
    },
    {
        ingredient: "Cream",
        quantity: 113,
        unity: "ml"
    },
    {
        ingredient: "Oil",
        quantity: 3,
        unity: "tbsp"
    },
]
const portobelloGoatCheeseFlatbreads = [
    {
        ingredient: "Portobello Mushroom",
        quantity: 4,
        unity: "pack"
    },  
    {
        ingredient: "Flatbread",
        quantity: 4,
        unity: "pack"
    },    
    {
        ingredient: "Sweet Bell Pepper",
        quantity: 320,
        unity: "g"
    },  
    {
        ingredient: "Spring Mix",
        quantity: 113,
        unity: "g"
    },  
    {
        ingredient: "Basil",
        quantity: 14,
        unity: "g"
    },  
    {
        ingredient: "Mozzarella Cheese",
        quantity: 1.5,
        unity: "cup"
    },  
    {
        ingredient: "Goat Cheese",
        quantity: 56,
        unity: "g"
    },  
    {
        ingredient: "Tomato Sauce Base",
        quantity: 4,
        unity: "tbsp"
    },  
    {
        ingredient: "Italian Seasoning",
        quantity: 1,
        unity: "tbsp"
    },  
    {
        ingredient: "Balsamic Vinegar",
        quantity: 2,
        unity: "tbsp"
    },  
    {
        ingredient: "Sugar",
        quantity: 0.5,
        unity: "tsp"
    },  
    {
        ingredient: "Oil",
        quantity: 4,
        unity: "tbsp"
    },  
]
const harissaTurkey = [
    {
        ingredient: "Turkey Strips",
        quantity: 570,
        unity: "g"
    },      
    {
        ingredient: "Harissa Spice Blend",
        quantity: 2,
        unity: "tbsp"
    },  
    {
        ingredient: "Mini Cucumber",
        quantity: 264,
        unity: "g"
    },  
    {
        ingredient: "Roma Tomato",
        quantity: 320,
        unity: "g"
    },  
    {
        ingredient: "Mediterranean Spice Blend",
        quantity: 2,
        unity: "tbsp"
    },  
    {
        ingredient: "Red Wine Vinegar",
        quantity: 2,
        unity: "tbsp"
    },  
    {
        ingredient: "Feta Cheese",
        quantity: 0.5,
        unity: "cup"
    },  
    {
        ingredient: "Yellow Potato",
        quantity: 720,
        unity: "g"
    },  
    {
        ingredient: "Mayonnaise",
        quantity: 115,
        unity: "g"
    },  
    {
        ingredient: "Oil",
        quantity: 6,
        unity: "tbsp"
    },  
]
const caribbeanStyleBeef = [
    {
        ingredient: "Ground Beef",
        quantity: 454,
        unity: "g"
    },          
    {
        ingredient: "Basmati Rice",
        quantity: 1.5,
        unity: "cup"
    },      
    {
        ingredient: "Caribbean Spice Blend",
        quantity: 3,
        unity: "tbsp"
    },      
    {
        ingredient: "Golden Turmeric Spice Blend",
        quantity: 1,
        unity: "g"
    },      
    {
        ingredient: "Chicken Stock Reduction",
        quantity: 2,
        unity: "pack"
    },      
    {
        ingredient: "Sweet Bell Pepper",
        quantity: 320,
        unity: "g"
    },      
    {
        ingredient: "Garlic",
        quantity: 4,
        unity: "cloves"
    },      
    {
        ingredient: "Green Peas",
        quantity: 113,
        unity: "g"
    },      
    {
        ingredient: "Mayonnaise",
        quantity: 115,
        unity: "g"
    },      
]

let shoppingCart = []

let listOfRecipes = [portobelloGoatCheeseFlatbreads,harissaTurkey,caribbeanStyleBeef]

let unityIssues = []
function getShoppingCart(listOfRecipes){
    listOfRecipes.forEach(function (recipe) {
        recipe.forEach(function (recipeIngredient) {
            if(shoppingCart.findIndex(x => x.ingredient === recipeIngredient.ingredient) === -1){ //if ingredient doesn't exist in the list, add it. else, just add quantity.
                shoppingCart.push(
                    {
                        ingredient:recipeIngredient.ingredient,
                        quantity:recipeIngredient.quantity,
                        unity:recipeIngredient.unity,
                    }
                );
            } else if (shoppingCart.find(x => x.ingredient === recipeIngredient.ingredient).unity = recipeIngredient.unity) { //checking if the unities are the same in order to sum
                shoppingCart.find(x => x.ingredient === recipeIngredient.ingredient).quantity = shoppingCart.find(x => x.ingredient === recipeIngredient.ingredient).quantity + recipeIngredient.quantity
            } else {
                unityIssues.push(recipeIngredient.ingredient)
            }
        })
    });
}
// Here I want a new function that will help me find the recipe options if looking for a particular ingredient
// function getOptionsByIngredient(wantedIngredient,allRecipes){
//     return allRecipes.filter((recipe) => {
//         recipe.
//     })
// }
getShoppingCart(listOfRecipes);

console.log("Shopping Cart:");
console.log(shoppingCart);
console.log("Unity issues: (if bigger than one, troubleshoot as quantities won't be summed)");
console.log(unityIssues);
console.log(unityIssues.length);

