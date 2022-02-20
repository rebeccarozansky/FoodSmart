import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import { iOSColors } from 'react-native-typography';

const Task = (props) => {
    console.log(props);
    var tod = new Date();
    const fDate =  (tod.getMonth()+1) + '/' + tod.getDate()  +  '/' + tod.getFullYear();

    return (
        <View  style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}> {props.text}   </Text>
                {props.date < fDate ? 
                <Text style={styles.expiredDate}> {props.date} </Text>
                :
                <Text style={styles.itemDate}> {props.date} </Text>}
            </View>
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
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText:{
        maxWidth: '80%',
    },
    itemDate:{
        flex: 1,
        textAlign: 'right',
        //paddingRight: 5,
    },
    expiredDate:{
        flex: 1,
        textAlign: 'right',
        color: iOSColors.red,
    },
    circular:{
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
    },
    

})

export default Task;