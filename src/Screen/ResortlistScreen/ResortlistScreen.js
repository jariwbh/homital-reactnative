import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

class ResortlistScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text> ResortlistScreen </Text>

                <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', }}>
                    <TouchableOpacity style={styles.bookBtn} onPress={() => { this.props.navigation.navigate('RoomlistScreen') }} >
                        <Text style={styles.bookText}>Book Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default ResortlistScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        //  marginBottom: hp('5%')
    },
    bookBtn: {
        flexDirection: 'row',
        width: wp('30%'),
        backgroundColor: "#F6C455",
        borderRadius: wp('7%'),
        height: hp('6%'),
        alignItems: "center",
        justifyContent: "center",
        marginRight: hp('4%'),
        marginTop: hp('2%')

    },
    bookText: {
        color: '#000000',

        fontSize: hp('2.5%'),
    },
})