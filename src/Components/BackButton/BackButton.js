import React from 'react';
import { TouchableOpacity, Image, Text, View, StyleSheet } from 'react-native';
import { MaterialIcons, } from '@expo/vector-icons';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'


export default function BackButton(props) {
    return (
        <TouchableOpacity style={styles.categoryIcon} onPress={props.onPress} >
            <MaterialIcons name="arrow-back" size={24} color="#F3AA35" />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    categoryIcon: {
        width: wp("7%"),
        height: wp("7%"),
        borderRadius: hp('6%'),
        marginLeft: wp('5%'),
        alignItems: 'center',
        justifyContent: 'center'
    },
});


