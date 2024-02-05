import { View, Text } from "react-native";
import React from "react";
import {getHeaderTitle} from '@react-navigation/elements'
import { StyleSheet } from "react-native";
import {Picker} from '@react-native-picker/picker';
import {useState} from 'react';


export default function Settings(props){
    const [selectedType, setSelectedType] = useState(props.mapType);
    return(
        <View style ={styles.settingArea}>
            <Text style= {[styles.heading,{color:props.backgroundColor}]}>Map type</Text>
            <Picker selectedValue={selectedType} onValueChange={(itemValue)=>
            {
                setSelectedType(itemValue);
                props.setMapType(itemValue);
            
            }}>
                <Picker.Item label="Standard" value="standard"/>
                <Picker.Item label="Terrain" value="terrain"/>
                <Picker.Item label="Satellite" value="satellite"/>
                </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
    settingsArea:{
        margintop:32,
        marginleft:16,
    },
    heading:{
      textTransform: 'uppercase',
    }

});