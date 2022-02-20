import React, {useEffect, useState, useRef} from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Animated,
  Easing,
  ActivityIndicator,
} from 'react-native';

import Svg, {
  Path,
  G,
} from 'react-native-svg';

import db from './App/Assets/recipes.js';

function custom_sort(a, b) {
  return new Date(a.expiration).getTime() - new Date(b.expiration).getTime();
}


export default function App() {
  // if (!firebase.apps.length) {
  //   console.log('Connected with Firebase')
  //   firebase.initializeApp(apiKeys.firebaseConfig);
  // }

  const [recipes, setRecipes] = useState([]);
  const [expireName, setExpireName] = useState('');
  const groceries = [
    
    {"id": "1",
    "name": "tomato",
    "expiration": new Date(2022, 2, 29)},

    {"id": "2",
    "name": "potato",
    "expiration": new Date(2022,3,1)},

    {"id": "3",
    "name": "chicken",
    "expiration": new Date(2022,2,19)},

    {"id": "4",
    "name": "beef",
    "expiration": new Date(2022,2,19)}
  ];
  const animatedShowValue = useRef(new Animated.Value(20)).current;
  const animatedOpacityValue = useRef(new Animated.Value(100)).current;

  useEffect(() => {
    console.log(groceries);
    console.log("now, we sort");
    console.log(groceries.sort(custom_sort));
    console.log("first to expire " + groceries.sort(custom_sort)[0].name);

    setExpireName(groceries.sort(custom_sort)[0].name);
    const name = groceries.sort(custom_sort)[0].name;

    db.forEach(item => {
      for (var key in item){
        if (item.hasOwnProperty(key)) {
          var val = item[key];
          for (var i = 0; i < val.ingredients.length; i++){
            if (val.ingredients[i].toLowerCase().indexOf(name.toLowerCase()) != -1){
              if (recipes.length <= 7) {
                recipes.push(val);
              } else {
                console.log("Too large, Ignore");
              }
            }
          }
        }
      }
    })
    console.log(recipes);

    Animated.stagger(70, [
      Animated.timing(animatedShowValue, {
        toValue: 0,
        duration: 500,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
      Animated.timing(animatedOpacityValue, {
        toValue: 200,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
    ]).start();
    
},[])

  const animatedShow = {
    transform: [{
      translateY: animatedShowValue,
    }],
    opacity: animatedOpacityValue,
  };

  const addFirestore = (event) => {
    console.log("You have selected recipe: " + event)
    setDoc(doc(firestore, "Groceries", event), {
      name: event,
    });
  }
  

  return (
    <View style={styles.container}>
      {expireName === '' ? null:
        <Text style={styles.itemDescription}>You have {expireName} in your pantry that is about to expire!</Text>}
      <ScrollView
        style={styles.container}
        automaticallyAdjustContentInsets={false}>
      {recipes==[] ? <Text>null</Text>:
        recipes.map(item => (
          <TouchableHighlight
            style={styles.item}
            underlayColor='#33346a'
            onPress={() => addFirestore(item.name)}
            key={item.name}
            >
              <View>
                <Animated.View style={[styles.durationContent, animatedShow]}>
                  {item.cooktime ?
                    <View style={styles.timeContainer}>
                      <Svg style={styles.iconContainer} viewbox='0 0 32 32'>
                        <G style={styles.icon}>
                          <Path
                            scale='0.5'
                            fill='#fff'
                            d='M16,0 C7.177658,0 0,7.177652 0,16 C0,24.82232 7.177658,32 16,32 C24.822342,32 32,24.82232 32,16 C32,7.177652 24.822342,0 16,0 Z M16,2.4 C23.525286,2.4 29.6,8.474708 29.6,16 C29.6,23.52528 23.525286,29.6 16,29.6 C8.4747144,29.6 2.4,23.52528 2.4,16 C2.4,8.474708 8.4747144,2.4 16,2.4 Z M15.9875,3.575 C15.6670444,3.57830074 15.36122,3.70963219 15.138161,3.93973514 C14.915102,4.16983809 14.7933392,4.47959664 14.8,4.8 L14.8,14.8 L7.2,14.8 C6.7672369,14.7938797 6.36470236,15.0212504 6.14653473,15.3950474 C5.92836711,15.7688445 5.92836711,16.2311555 6.14653473,16.6049526 C6.36470236,16.9787496 6.7672369,17.2061203 7.2,17.2 L16,17.2 C16.6627143,17.1999337 17.1999337,16.6627143 17.2,16 L17.2,4.8 C17.2067517,4.47526094 17.0815869,4.16165301 16.8530929,3.93080341 C16.624599,3.69995381 16.3122912,3.57157921 15.9875,3.575 Z'
                          />
                        </G>
                      </Svg>
                      <Text style={styles.duration}>{(item.cooktime / 60)} Minutes</Text>
                    </View>
                  : null}
                </Animated.View>
                <View >
                  <Text style={styles.itemDescription}>{item.source.toUpperCase()}</Text>
                  {console.log("This is great"+item.source)}
                  <Text style={styles.itemTitle}>{item.name}</Text>
                </View>
              </View>
          </TouchableHighlight>
        ))}
      </ScrollView>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: 85,
    backgroundColor:'#33346a',
    height: '100%',
    width: '100%',
  },
  image: {
    flex: 1,
    height: 250,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    position: 'relative',
  },
  overlay: {
    flex: 1,
    backgroundColor: '#ffffff',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  },
  itemContent: {
    justifyContent: 'flex-end',
    flex: 1,
    paddingBottom: 20,
    paddingLeft: 15,
  },
  itemTitle: {
    color: '#fff',
    fontSize: 26,
    lineHeight: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingTop: 10,
    maxWidth: '60%',
  },
  itemDescription: {
    color: '#f9f9f9c7',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.5,
  },
  durationContent: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 15,
    right: 15,
  },
  duration: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  iconContainer: {
    width: 16,
    height: 16,
    marginRight: 7,
  },
  icon: {
    width: 16,
    height: 16,
  },
});
