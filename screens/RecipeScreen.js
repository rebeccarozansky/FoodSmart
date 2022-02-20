import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View, TextInput,KeyboardAvoidingView ,TouchableOpacity, Keyboard} from 'react-native';
import React, {useState} from 'react';
import Recipe from '../components/Recipe';

const RecipeScreen = ({navigation}) => {

var recipeItems = [
{
    "calories": 0,
    "carbs": 0,
    "comments": "",
    "cooktime": 900,
    "fat": 0,
    "fiber": 0,
    "id": "id30",
    "ingredients":[
    "4 (6 to 7-ounce) boneless skinless chicken breasts",    
    "10 grinds black pepper",    
    "1/2 tsp salt",    
    "2 tablespoon extra-virgin olive oil",    
    "1 teaspoon dried oregano",
    "1 lemon, juiced",
    ],
    "instructions": "To marinate the chicken: In a non-reactive dish, combine the lemon juice, olive oil, oregano, salt, and pepper and mix together. Add the chicken breasts to the dish and rub both sides in the mixture. Cover the dish with plastic wrap and let marinate in the refrigerator for at least 30 minutes and up to 4 hours. To cook the chicken: Heat a nonstick skillet or grill pan over high heat. Add the chicken breasts and cook, turning once, until well browned, about 4 to 5 minutes on each side or until cooked through. Let the chicken rest on a cutting board for a few minutes before slicing it into thin strips.",
    "name": "Oregano Marinated Chicken",
    "preptime": 1800,
    "protein": 0,
    "satfat": 0,
    "servings": 6,
    "source": "http://www.foodnetwork.com/recipes/dave-lieberman/greek-salad-with-oregano-marinated-chicken-recipe2/index.html",
    "sugar": 0,
    "tags":[
      "main",
      "chicken",
    ],
    "waittime": 14400,
},
{
    "id": "2",
    "name": "Baked Shrimp Scampi",
    "source": "Ina Garten: Barefoot Contessa Back to Basics",
    "preptime": 0,
    "waittime": 0,
    "cooktime": 0,
    "servings": 6,
    "comments": "Modified by reducing butter and salt.  Substituted frozen shrimp instead of fresh 12-15 count (butterflied, tails on).",
    "calories": 2565,
    "fat": 159,
    "satfat": 67,
    "carbs": 76,
    "fiber": 4,
    "sugar": 6,
    "protein": 200,
    "instructions": "Preheat the oven to 425 degrees F.\r\n\r\nDefrost shrimp by putting in cold water, then drain and toss with wine, oil, salt, and pepper. Place in oven-safe dish and allow to sit at room temperature while you make the butter and garlic mixture.\r\n\r\nIn a small bowl, mash the softened butter with the rest of the ingredients and some salt and pepper.\r\n\r\nSpread the butter mixture evenly over the shrimp. Bake for 10 to 12 minutes until hot and bubbly. If you like the top browned, place under a broiler for 1-3 minutes (keep an eye on it). Serve with lemon wedges and French bread.\r\n\r\nNote: if using fresh shrimp, arrange for presentation. Starting from the outer edge of a 14-inch oval gratin dish, arrange the shrimp in a single layer cut side down with the tails curling up and towards the center of the dish. Pour the remaining marinade over the shrimp. ",
    "ingredients": [
        "2\/3 cup panko\r",
        "1\/4 teaspoon red pepper flakes\r",
        "1\/2 lemon, zested and juiced\r",
        "1 extra-large egg yolk\r",
        "1 teaspoon rosemary, minced\r",
        "3 tablespoon parsley, minced\r",
        "4 clove garlic, minced\r",
        "1\/4 cup shallots, minced\r",
        "8 tablespoon unsalted butter, softened at room temperature\r",
        "<hr>",
        "2 tablespoon dry white wine\r",
        "Freshly ground black pepper\r",
        "Kosher salt\r",
        "3 tablespoon olive oil\r",
        "2 pound frozen shrimp"
    ],
    "tags": [
        "seafood",
        "shrimp",
        "main"
    ]
},

]
return(
    <View style={styles.container}>
  
    <View style={styles.tasksWrapper}>
    <Text style={styles.sectionTitle}>Recipes</Text>
    <View style={styles.items}>
    {
            recipeItems.map((item,index)=>{
              return (
              <TouchableOpacity key={index} onPress={() => navigation.navigate('FullRecipe',{
                paramKey: item,
              })}
              /*onPress={() =>
                navigation.navigate('SecondPage', {
                  paramKey: userName,
                })
                
              }*/ > 
                    <Recipe info={item}/>
              </TouchableOpacity>
            )})
  
          }
      
    </View>
    </View>
    </View>

)

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E8EAED',
  
    },
    tasksWrapper: {
      paddingTop: 80,
      paddingHorizontal: 20,
  
    },
    sectionTitle:{
      fontSize: 24,
      fontWeight: 'bold',
    },
    items: {
      marginTop: 30,
    },
    writeTaskWrapper:{
      position: 'absolute',
      bottom: 60,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    input:{
      paddingVertical: 15,
      paddingHorizontal: 15,
      backgroundColor: '#FFF',
      borderRadius: 60,
      borderColor: '#C0C0C0',
      borderWidth: 1,
      width: 250,
    },
    addWrapper:{
      width: 60,
      height: 60,
      backgroundColor: '#FFF',
      borderRadius: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#C0C0C0',
      borderWidth: 1,
    },
    addText:{}
  });

export default RecipeScreen;