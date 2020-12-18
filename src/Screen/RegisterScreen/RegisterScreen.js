
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, TextInput, } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import theme from "../../Constants/theme";
import { FontAwesome5, AntDesign, Fontisto } from '@expo/vector-icons';
import BackButton from '../../Components/BackButton/BackButton';



const { COLORS, FONTS, SIZES } = theme;

class RegisterScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    render() {
        return (
            <ImageBackground source={require('../../../assets/Images/BG.png')} style={styles.backgroundImage}>
                <View style={styles.container}>
                    <View style={styles.sineupview}>
                        <Text style={{ fontSize: SIZES.body1, color: COLORS.black, }}>Create Account </Text>
                    </View>
                    <ScrollView>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <View style={styles.inputview}>
                                <AntDesign name="user" size={27} color="#000000" style={{ paddingLeft: hp('3%') }} />
                                <TextInput
                                    style={styles.TextInput}
                                    placeholder=" Name"
                                    type='clear'
                                    placeholderTextColor="#656565"
                                    returnKeyType="next"
                                // onChangeText={(fullname) => this.setFullName(fullname)}
                                />
                            </View>
                            <View style={styles.inputview}>
                                <Fontisto name="email" size={27} color="#000000" style={{ paddingLeft: hp('3%') }} />
                                <TextInput
                                    style={styles.TextInput}
                                    placeholder="Email"
                                    type='clear'
                                    placeholderTextColor="#656565"
                                    returnKeyType="next"
                                // onChangeText={(email) => this.setEmail(email)}
                                />

                            </View>
                            <View style={styles.inputview} >
                                <AntDesign name="unlock" size={27} color="#000000" style={{ paddingLeft: hp('3%') }} />
                                <TextInput
                                    style={styles.TextInput}
                                    placeholder="Password"
                                    type='clear'
                                    placeholderTextColor="#656565"
                                    secureTextEntry={true}
                                    returnKeyType="done"
                                // keyboardType="numeric"
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
                                // keyboardType="numeric"
                                // onChangeText={(mobilenumber) => this.setMobileNumber(mobilenumber)}
                                />
                            </View>
                        </View>

                        <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', }}>
                            <TouchableOpacity style={styles.sineBtn} onPress={() => { }} >
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
        resizeMode: 'cover'
    },
    sineupview: {
        marginLeft: hp('5%'),
        marginTop: SIZES.padding + 100
    },
    inputview: {
        flexDirection: 'row',
        backgroundColor: "#fff",
        borderRadius: wp('2%'),
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
        borderColor: '#fff',
        width: wp('80%'),
        height: hp('8%'),
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

