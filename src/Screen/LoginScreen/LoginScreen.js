import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import theme from "../../Constants/theme";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import { FontAwesome5, AntDesign } from '@expo/vector-icons';
import Fontisto from 'react-native-vector-icons/Fontisto';

const { COLORS, FONTS, SIZES } = theme;

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = {
        };
    }


    render() {
        return (
            <ImageBackground source={require('../../../assets/Images/BG.png')} style={styles.backgroundImage}>
                <View style={styles.container}>
                    <View style={styles.loginview}>
                        <Text style={{ fontSize: SIZES.body1, color: COLORS.black, }}> Login </Text>
                    </View>
                    <View style={{ marginTop: hp('2%'), marginLeft: hp('7%'), flexDirection: 'row' }} >
                        <Text style={styles.sineText}>Please sign in to Continue</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <View style={styles.inputView}>
                            <Fontisto name="email" size={27} color="#000000" style={{ paddingLeft: hp('3%') }} />
                            <TextInput
                                style={styles.TextInput}
                                placeholder="Email"
                                defaultValue={this.state.username}
                                type='clear'
                                returnKeyType="next"
                                placeholderTextColor="#656565"
                                underlineColorAndroid="#B9B9B9"
                                onChangeText={(email) => this.setEmail(email)}
                            />
                        </View>
                        <Text style={{ marginTop: hp('-3%'), marginLeft: wp('10%'), color: '#ff0000' }}>{this.state.usererror && this.state.usererror}</Text>
                        <View style={styles.inputView}>
                            <AntDesign name="unlock" size={27} color="#000000" style={{ paddingLeft: hp('3%') }} />
                            <TextInput
                                style={styles.TextInput}
                                placeholder="Password"
                                type='clear'
                                defaultValue={this.state.password}
                                placeholderTextColor="#656565"
                                secureTextEntry={true}
                                returnKeyType="done"
                                underlineColorAndroid="#B9B9B9"
                                onSubmitEditing={() => this.onPressSubmit()}
                                onChangeText={(password) => this.setPassword(password)}
                            />
                        </View>
                        <Text style={{ marginTop: hp('-3%'), marginLeft: wp('10%'), color: '#ff0000' }}>{this.state.passworderror && this.state.passworderror}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: hp('6%'), marginTop: hp('1%'), marginRight: hp('5%') }}>

                        <View >
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('ForgotPassword') }}>
                                <Text style={{ fontSize: SIZES.body3, color: '#F4AE3A', marginTop: hp('0.5%') }}>Forgot password?</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', }}>
                        <TouchableOpacity style={styles.loginBtn} onPress={() => { this.props.navigation.navigate('HomeScreen') }}>
                            <Text style={styles.loginText}>Sign In</Text>
                            <FontAwesome5 name="arrow-right" size={24} color="#000000" style={{ paddingLeft: hp('1%'), marginTop: hp('0.5%') }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: hp('20%'), justifyContent: 'center', flexDirection: 'row' }} >
                        <Text style={styles.innerText}> Don't have an account? </Text>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('RegisterScreen') }} >
                            <Text style={styles.baseText}>Signup</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ImageBackground>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover'
    },
    loginview: {
        marginLeft: hp('7%'),
        marginTop: SIZES.padding + 100
    },
    sineText: {
        color: '#605C5C',
        fontSize: hp('2%'),
    },

    inputView: {
        flexDirection: 'row',
        width: wp('80%'),
        margin: hp('3%'),
        alignItems: "center",
        marginLeft: 'auto',
        marginRight: 'auto',

    },
    TextInput: {
        fontSize: hp('2%'),
        flex: 1,
        padding: hp('2%'),
    },
    loginBtn: {
        flexDirection: 'row',
        width: wp('30%'),
        backgroundColor: "#F6C455",
        borderRadius: wp('7%'),
        height: hp('6%'),
        alignItems: "center",
        justifyContent: "center",
        marginRight: hp('4%')

    },
    loginText: {
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