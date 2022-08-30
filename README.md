# recipes_project
<!-- Make your project stand out look professional by at least including the following elements in your README:

Project Title: the name of your project
Description: This is an extremely important component of the README. You should describe the main purpose of your project. Answer questions like “why did you build this project?” and “what problem(s) does it solve?”. It also helps to include your motivations for the project and what you learned from it.
Features: If your project has multiple features, list them here. Don’t be afraid to brag if your project has unique features that make it stand out. You can even add screenshots and gifs to show off the features.
How to use: Here, you should write step-by-step instructions on how to install and use your project. Any software or package requirements should also be listed here.
Technologies: List all the technologies and/or frameworks you used and what purpose they serve in your project.
Collaborators: If others have contributed to your project in any way, it is important to give them credit for their work. Write your team members’ or collaborators’ names here along with a link to their GitHub profile.
License: It’s also important to list a license on your README so other developers can understand what they can and cannot do with your project. You can use this guide to help you choose a license. -->

**Project Title**: Automated shopping cart
**Description**: This small project builds a database of recipes and then builds a shopping cart with the *ingredients* of a selected list.
**Features**: 
- List of recipes can be queried and searched for based on wanted ingredient
- Quantities can be changed
- Unity consistency is important and checked for
- database can be populated with manual entry or OCR library
Objects:
    recipes {ingredients, quantities}[] - array of key-value pairs of ingredients and quantities
    recipe list = selection of recipes
    shopping cart: for loop that pulls out the ingredients and quantities pairs
        - should aggregate quantities of repeated ingredients
I would also like to be able to add new recipes in a non manual way
**How to use**:
**Technologies**: standard web development stack (HTML5 + CSS + JS)
**Collaborators**: None so far
**License**: TDB

