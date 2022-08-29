# recipes_project
Goal: user will select the recipes and quantities 
    wanted (input) and the app will output the shopping cart list
Objects:
    recipes {ingredients, quantities}[] - array of key-value pairs of ingredients and quantities
    recipe list = selection of recipes
    shopping cart: for loop that pulls out the ingredients and quantities pairs
        - should aggregate quantities of repeated ingredients
I would also like to be able to add new recipes in a non manual way
- recipes should be stored in database
- database can be populated with manual entry or OCR library 
Stack: web framework sounds like a good idea, maybe javascript?
