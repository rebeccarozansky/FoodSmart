import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';

const Recipe = (props) => {
    console.log(props.info.name);
    console.log("here");
    return (
        <View  style={styles.item}>
            <View style={styles.itemLeft}>
                <Text style={styles.square}> {props.info.waittime/60}min</Text>
                <Text style={styles.itemText}> {props.info.name} {props.info.preptime} </Text>

            </View>
            <View style={styles.circular}></View>
        </View>

    )
}

const styles = StyleSheet.create({

    item:{
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square:{
        width: 36,
        height: 36,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 8,
        marginRight: 15,
        textAlign: 'center',
        fontSize: 14,
    },
    itemText:{
        maxWidth: '80%',
    },
    circular:{
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
    },
    

})

export default Recipe;