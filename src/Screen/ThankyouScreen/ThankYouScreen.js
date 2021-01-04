import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

export default class ThankYouScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <ImageBackground source={require('../../../assets/Images/BG2.png')} style={styles.backgroundImage}>
                <View style={styles.container}>
                    <View style={styles.image}>
                        <Image source={require('../../../assets/Images/img.png')} style={{ width: wp('75%'), height: hp('30%') }} />
                    </View>
                    <View style={{ alignItems: 'center', marginTop: hp('6%'), }}>
                        <Text style={{ fontSize: hp('3.5%') }}>Thanks for choosing hotSpots</Text>
                    </View>
                    <View style={{ alignItems: 'center', marginTop: hp('3%'), }}>
                        <Text style={{ fontSize: hp('3%'), color: '#605C5C' }}>Your booking is confirmed</Text>
                    </View>
                    <View style={{ alignItems: 'center', marginTop: hp('3%'), }}>
                        <Text style={{ fontSize: hp('2.5%'), color: '#605C5C' }}>BookingID : AHJSJ34HY </Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                        <TouchableOpacity style={styles.Continueview} onPress={() => { this.props.navigation.navigate('NavigationsDrawer') }}>
                            <Text style={styles.ContinueText}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    image: {
        marginTop: hp('15%'),
        alignItems: "center"
    },
    Continueview: {
        flexDirection: 'row',
        width: wp('30%'),
        backgroundColor: "#F6C455",
        borderRadius: wp('7%'),
        height: hp('6%'),
        alignItems: "center",
        justifyContent: "center",
        marginTop: hp('10%'),

    },
    ContinueText: {
        color: '#FFFFFF',
        fontSize: hp('2.5%'),

    },
})