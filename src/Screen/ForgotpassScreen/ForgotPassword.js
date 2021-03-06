import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import theme from "../../Constants/theme";
import BackButton from '../../Components/BackButton/BackButton';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import { FontAwesome5, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';


const { COLORS, FONTS, SIZES } = theme;


class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <ImageBackground source={require('../../../assets/Images/BG.png')} style={styles.backgroundImage}>
                <View style={styles.container}>
                    <View style={styles.forgotview}>
                        <Text style={{ fontSize: SIZES.body1, color: COLORS.black, }}> Forgot Password </Text>
                    </View>
                    <View style={{ marginTop: hp('2%'), marginLeft: hp('7%'), flexDirection: 'row' }} >
                        <Text style={styles.sineText}>Enter new password below</Text>
                    </View>
                    <View style={{ marginTop: hp('2%'), justifyContent: 'center', alignItems: 'center' }} >
                        <MaterialCommunityIcons name="shield-key-outline" size={60} color="#000000" style={{ paddingLeft: hp('3%') }} />
                    </View>
                    <ScrollView
                        showsVerticalScrollIndicator={false}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <View style={styles.inputview} >
                                <AntDesign name="unlock" size={27} color="#000000" style={{ paddingLeft: hp('3%') }} />
                                <TextInput
                                    style={styles.TextInput}
                                    placeholder="Password"
                                    type='clear'
                                    placeholderTextColor="#656565"
                                    secureTextEntry={true}
                                    returnKeyType="done"
                                    underlineColorAndroid="#B9B9B9"
                                    keyboardType="numeric"
                                // onChangeText={(mobilenumber) => this.setMobileNumber(mobilenumber)}
                                />
                            </View>
                            <View style={styles.inputview} >
                                <AntDesign name="unlock" size={27} color="#000000" style={{ paddingLeft: hp('3%') }} />
                                <TextInput
                                    style={styles.TextInput}
                                    placeholder="Confrim Password"
                                    type='clear'
                                    placeholderTextColor="#656565"
                                    secureTextEntry={true}
                                    returnKeyType="done"
                                    underlineColorAndroid="#B9B9B9"
                                    keyboardType="numeric"
                                // onChangeText={(mobilenumber) => this.setMobileNumber(mobilenumber)}
                                />
                            </View>

                        </View>
                        <View style={{ marginTop: hp('1%'), flexDirection: 'row', marginLeft: hp('6%') }} >
                            <Text style={styles.innerText}> Back to </Text>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('LoginScreen') }} >
                                <Text style={styles.baseText}>Login</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                            <TouchableOpacity style={styles.forBtn} onPress={() => { }}>
                                <Text style={styles.forText}>Save</Text>
                                <FontAwesome5 name="arrow-right" size={24} color="#000000" style={{ paddingLeft: hp('1%'), marginTop: hp('0.5%') }} />
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </ImageBackground>
        );
    }
}

export default ForgotPassword;


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        height: hp('100%'),
        width: wp('100%')
    },
    forgotview: {
        marginLeft: hp('6%'),
        marginTop: SIZES.padding + 100

    },
    innerText: {
        color: '#605C5C',
        fontSize: hp('2%'),
    },
    baseText: {
        fontWeight: 'normal',
        color: '#183BAE',
        fontSize: hp('2%'),
    },
    inputview: {
        flexDirection: 'row',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: wp('80%'),
        margin: hp('3%'),
        alignItems: "center",

    },
    TextInput: {
        fontSize: hp('2%'),
        flex: 1,
        padding: hp('2%'),
    },
    forBtn: {
        flexDirection: 'row',
        width: wp('30%'),
        backgroundColor: "#F6C455",
        borderRadius: wp('7%'),
        height: hp('6%'),
        alignItems: "center",
        justifyContent: "center",
        marginRight: hp('4%')

    },
    forText: {
        color: COLORS.black,
        fontSize: hp('2.5%'),
    },
    baseText: {
        fontWeight: 'normal',
        color: '#F4AE3A',
        fontSize: hp('2%'),
    },
    innerText: {
        color: '#737373',
        fontSize: hp('2%'),
    },
})