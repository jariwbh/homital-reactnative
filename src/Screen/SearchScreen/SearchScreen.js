import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import { FontAwesome5, Foundation, AntDesign, Fontisto } from '@expo/vector-icons';

class SearchScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.statusbar}>
                    <TextInput
                        style={styles.statInput}
                        placeholder="Type here to search"
                        type='clear'
                        placeholderTextColor="#D3D4DA"
                        returnKeyType="next"
                    />
                    <FontAwesome5 name="search" size={24} color='#000000' style={{ alignItems: "flex-end", justifyContent: 'flex-end', marginRight: hp('2%') }} />
                </View>
            </View>
        );
    }
}

export default SearchScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    statusbar: {
        flexDirection: 'row',
        backgroundColor: "#fff",
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
        marginTop: hp('5%'),
        width: wp('90%'),
        height: hp('6.5%'),
        marginLeft: hp('2.5%'),
        justifyContent: "flex-end",
        alignItems: "center"
    },
    statInput: {
        fontSize: hp('2.5%'),
        flex: 1,
        padding: hp('2%'),
        alignItems: "center",
    },
})