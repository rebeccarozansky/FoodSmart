import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View, TextInput,KeyboardAvoidingView ,TouchableOpacity, Keyboard} from 'react-native';
import React, {useState} from 'react';
import Recipe from '../components/Recipe';

const FullRecipeScreen = ({route,navigation}) => {
    //const message = navigation.getParam('paramKey')
    const rec = route.params.paramKey;

    console.log(rec);
    return(<View >
        <Text style={styles.sectionTitle}> {rec.name}</Text>
        <Text> Prep Time: {rec.preptime/60} </Text>
        <Text> Wait Time: {rec.waittime/60} </Text>
        <Text> Servings: {rec.servings} </Text>
        <View>
        {
            rec.ingredients.map((item,index)=>{
              return (
                  <Text> {item}</Text>
            )})
  
          }
        </View>
        <Text>
            {rec.instructions}
        </Text>
    </View>)
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

export default FullRecipeScreen;