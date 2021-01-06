import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, TextInput, ToastAndroid } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import theme from "../../Constants/theme";
import { FontAwesome5, AntDesign, Fontisto } from '@expo/vector-icons';
import BackButton from '../../Components/BackButton/BackButton';
import { RegisterService } from '../../Services/RegisterService/RegisterService';
const { COLORS, FONTS, SIZES } = theme;

class RegisterScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: null,
            fullnameError: null,
            username: null,
            usernameError: null,
            mobilenumber: null,
            mobilenumberError: null,
            loading: false,
        }
        this.setFullName = this.setFullName.bind(this);
        this.setUserName = this.setUserName.bind(this);
        this.setMobileNumber = this.setMobileNumber.bind(this);
        this.onPressSubmit = this.onPressSubmit.bind(this);
    }

    setFullName(fullname) {
        if (!fullname || fullname.length <= 0) {
            return this.setState({ fullnameError: 'User Name cannot be empty' });
        }
        return this.setState({ fullname: fullname, fullnameError: null })
    }

    setUserName(email) {
        const re = /\S+@\S+\.\S+/;
        if (!email || email.length <= 0) {
            return this.setState({ usernameError: 'Email Id can not be empty' });
        }
        if (!re.test(email)) {

            return this.setState({ usernameError: 'Ooops! We need a valid email address' });
        }
        return this.setState({ username: email, usernameError: null })
    }

    setMobileNumber(mobilenumber) {
        const reg = /^[0]?[789]\d{9}$/;
        if (!mobilenumber || mobilenumber.length <= 0) {
            return this.setState({ mobilenumberError: 'Mobile Number cannot be empty' });
        }
        if (!reg.test(mobilenumber)) {
            return this.setState({ mobilenumberError: 'Ooops! We need a valid Mobile Number' });
        }
        return this.setState({ mobilenumber: mobilenumber, mobilenumberError: null })
    }

    resetScreen() {
        this.setState({
            fullname: null,
            fullnameError: null,
            username: null,
            usernameError: null,
            mobilenumber: null,
            mobilenumberError: null,
            loading: false,
        })
    }

    onPressSubmit = async () => {
        // const { fullname, username, mobilenumber } = this.state;
        // if (!fullname || !username || !mobilenumber) {
        //     this.setFullName(fullname)
        //     this.setUserName(username)
        //     this.setMobileNumber(mobilenumber)
        //     return;
        // }

        // const body = {
        //     property: {
        //         fullname: fullname,
        //         email: username,
        //         mobile_number: mobilenumber,
        //     }
        // }

        // this.setState({ loading: true })
        // await RegisterService(body).then(response => {
        //     if (response != null) {
        ToastAndroid.show("SignUp Success!", ToastAndroid.LONG);
        this.props.navigation.navigate('LoginScreen')
        //         this.resetScreen()
        //     }
        // })
    }

    render() {
        return (
            <ImageBackground source={require('../../../assets/Images/BG.png')} style={styles.backgroundImage}>
                <View style={styles.container}>
                    <View style={styles.sineupview}>
                        <Text style={{ fontSize: SIZES.body1, color: COLORS.black, }}>Create Account </Text>
                    </View>
                    <ScrollView
                        showsVerticalScrollIndicator={false}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <View style={styles.inputview}>
                                <AntDesign name="user" size={27} color="#000000" style={{ paddingLeft: hp('3%') }} />
                                <TextInput
                                    style={styles.TextInput}
                                    placeholder="Full Name"
                                    type='clear'
                                    placeholderTextColor="#656565"
                                    underlineColorAndroid="#B9B9B9"
                                    returnKeyType="next"
                                    onChangeText={(fullname) => this.setFullName(fullname)}
                                />
                            </View>
                            <Text style={{ marginTop: hp('-4%'), marginLeft: wp('7%'), color: '#ff0000', marginBottom: hp('2%') }}>{this.state.fullnameError && this.state.fullnameError}</Text>
                            <View style={styles.inputview}>
                                <Fontisto name="email" size={27} color="#000000" style={{ paddingLeft: hp('3%') }} />
                                <TextInput
                                    style={styles.TextInput}
                                    defaultValue={this.state.username}
                                    placeholder="Email Id"
                                    type='clear'
                                    placeholderTextColor="#656565"
                                    underlineColorAndroid="#B9B9B9"
                                    returnKeyType="next"
                                    autoCapitalize="none"
                                    autoCompleteType="email"
                                    textContentType="emailAddress"
                                    keyboardType="email-address"
                                    onChangeText={(username) => this.setUserName(username)}
                                />
                            </View>
                            <Text style={{ marginTop: hp('-4%'), marginLeft: wp('7%'), color: '#ff0000', marginBottom: hp('2%') }}>{this.state.usernameError && this.state.usernameError}</Text>
                            <View style={styles.inputview} >
                                <AntDesign name="unlock" size={27} color="#000000" style={{ paddingLeft: hp('3%') }} />
                                <TextInput
                                    style={styles.TextInput}
                                    defaultValue={this.state.mobilenumber}
                                    placeholder="Mobile Number"
                                    type='clear'
                                    placeholderTextColor="#656565"
                                    secureTextEntry={true}
                                    returnKeyType="done"
                                    underlineColorAndroid="#B9B9B9"
                                    returnKeyType="done"
                                    onSubmitEditing={() => this.onPressSubmit()}
                                    onChangeText={(mobilenumber) => this.setMobileNumber(mobilenumber)}
                                />
                            </View>
                        </View>
                        <Text style={{ marginTop: hp('-4%'), marginLeft: wp('7%'), color: '#ff0000', marginBottom: hp('1%') }}>{this.state.mobilenumberError && this.state.mobilenumberError}</Text>
                        <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', }}>
                            <TouchableOpacity style={styles.sineBtn} onPress={() => this.onPressSubmit()}>
                                <Text style={styles.sineText}>Sign Up</Text>
                                <FontAwesome5 name="arrow-right" size={24} color="#000000" style={{ paddingLeft: hp('1%'), marginTop: hp('0.5%') }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: hp('7%'), justifyContent: 'center', flexDirection: 'row' }} >
                            <Text style={styles.innerText}> Don't have an account? </Text>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('LoginScreen') }} >
                                <Text style={styles.baseText}>Signin</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </ImageBackground>
        );
    }
}

export default RegisterScreen;

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
    sineupview: {
        marginLeft: hp('5%'),
        marginTop: SIZES.padding + 100
    },
    inputview: {
        flexDirection: 'row',
        width: wp('80%'),
        marginLeft: 'auto',
        marginRight: 'auto',
        margin: hp('3%'),
        alignItems: "center",
    },
    TextInput: {
        fontSize: hp('2%'),
        flex: 1,
        padding: hp('2%'),
    },
    sineBtn: {
        flexDirection: 'row',
        width: wp('30%'),
        backgroundColor: "#F6C455",
        borderRadius: wp('7%'),
        height: hp('6%'),
        alignItems: "center",
        justifyContent: "center",
        marginRight: hp('4%')

    },
    sineText: {
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

