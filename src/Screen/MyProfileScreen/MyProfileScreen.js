import React, { Component } from 'react';
import {
    StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground,
    TextInput, ToastAndroid, ScrollView, ActivityIndicator
} from 'react-native';
import { FontAwesome, AntDesign, Fontisto } from '@expo/vector-icons';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { UserService } from '../../Services/UserService/UserService';
import AsyncStorage from '@react-native-community/async-storage'

class MyProfileScreen extends Component {
    constructor(props) {
        super(props)
        this.userData = null;
        this.state = {
            // _id: this.userData._id,
            // fullname: this.userData.property.fullname,
            // fullnameError: null,
            // username: this.userData.property.email,
            // usernameError: null,
            // mobilenumber: this.userData.property.mobile_number,
            // mobilenumberError: null,
            // userProfile: null,
            // profileName: this.userData.fullname

            _id: null,
            fullname: null,
            fullnameError: null,
            username: null,
            usernameError: null,
            mobilenumber: null,
            mobilenumberError: null,
            userProfile: null,
            profileName: null

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
            return this.setState({ usernameError: 'Email cannot be empty' });
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

    componentDidMount() {
        //this.getdata()
    }

    onPressSubmit = async () => {
        const { fullname, username, mobilenumber, _id } = this.state;
        // if (!fullname || !username || !mobilenumber) {
        //     this.setFullName(fullname)
        //     this.setUserName(username)
        //     this.setMobileNumber(mobilenumber)
        //     return;
        // }

        const body = {
            _id: _id,
            status: "active",
            property: {
                fullname: fullname,
                email: username,
                mobile_number: mobilenumber,
            }
        }

        // await UserService(body).then(response => {
        //     if (response != null) {
        ToastAndroid.show("Your Profile Update!", ToastAndroid.LONG);
        this.props.navigation.navigate('HomeScreen')
        //     }
        // })
    }

    getdata = async () => {
        var getUser = await AsyncStorage.getItem('@authuser')
        if (getUser == null || getUser && getUser.length == 0) {
            setTimeout(() => {
                this.props.navigation.replace('LoginScreen')
            }, 5000);
        } else {
            this.userData = JSON.parse(getUser)
        }
    }

    render() {
        const { fullname, username, mobilenumber } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.text_header}>Update Profile</Text>
                </View>
                <ScrollView>
                    {/* {this.userData === null ?
                        <ActivityIndicator size="large" color="#000000" />
                        : <> */}
                    <Image style={styles.avatar} source={require('../../../assets/Images/userimage.jpg')} />
                    <View style={styles.body}>
                        <View style={styles.bodyContent}>
                            <Text style={styles.name}>jon</Text>
                        </View>
                        <View
                            style={{
                                flex: 1, flexDirection: 'column', alignItems: 'center'
                            }} >
                            <View style={styles.inputView}>
                                <AntDesign name="user" size={27} color="#000000" style={{ paddingLeft: hp('2%') }} />
                                <TextInput
                                    label="Name"
                                    defaultValue={fullname}
                                    style={styles.TextInput}
                                    placeholder="User Name"
                                    type='clear'
                                    placeholderTextColor="#737373"
                                    returnKeyType="next"
                                    underlineColorAndroid="#B9B9B9"
                                    onChangeText={(fullname) => this.setFullName(fullname)}
                                />
                            </View>
                            <Text style={{ marginTop: hp('-3%'), marginLeft: wp('-20%'), color: '#ff0000' }}>{this.state.fullnameError && this.state.fullnameError}</Text>
                            <View style={styles.inputView}>
                                <Fontisto name="email" size={27} color="#000000" style={{ paddingLeft: hp('2%') }} />
                                <TextInput
                                    defaultValue={username}
                                    style={styles.TextInput}
                                    placeholder="Email Id"
                                    type='clear'
                                    placeholderTextColor="#737373"
                                    autoCapitalize="none"
                                    autoCompleteType="email"
                                    textContentType="emailAddress"
                                    keyboardType="email-address"
                                    returnKeyType="next"
                                    underlineColorAndroid="#B9B9B9"
                                    onChangeText={(username) => this.setUserName(username)}
                                />
                            </View>
                            <Text style={{ marginTop: hp('-3%'), marginLeft: wp('-15%'), color: '#ff0000' }}>{this.state.usernameError && this.state.usernameError}</Text>
                            <View style={styles.inputView} >
                                <FontAwesome name="mobile-phone" size={30} color="#000000" style={{ paddingLeft: hp('3%') }} />
                                <TextInput
                                    defaultValue={mobilenumber}
                                    style={styles.TextInput}
                                    placeholder="Mobile Number"
                                    type='clear'
                                    placeholderTextColor="#737373"
                                    keyboardType="numeric"
                                    underlineColorAndroid="#B9B9B9"
                                    onChangeText={(mobilenumber) => this.setMobileNumber(mobilenumber)}
                                />
                            </View>
                            <Text style={{ marginTop: hp('-3%'), marginLeft: wp('-14%'), color: '#ff0000' }}>{this.state.mobilenumberError && this.state.mobilenumberError}</Text>
                            <TouchableOpacity style={styles.update_Btn} onPress={() => this.onPressSubmit()}>
                                <Text style={styles.update_text} >Update Profile</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* </>} */}
                </ScrollView>
            </View>

        );
    }
}

export default MyProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },

    text_header: {
        marginTop: wp('15%'),
        color: '#000',
        fontSize: hp('4%'),
        textAlign: 'center',

    },
    avatar: {
        width: hp('15%'),
        height: hp('15%'),
        borderRadius: wp('20%'),
        alignSelf: 'center',
        marginTop: wp('1%')
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: hp('3%')
    },
    name: {
        fontSize: hp('4%'),
        color: "#737373",
        fontWeight: 'bold',
        textTransform: 'capitalize'
    },
    inputView: {
        flexDirection: 'row',
        width: wp('80%'),
        margin: hp('2%'),
        alignItems: "center",

    },
    TextInput: {
        fontSize: hp('2%'),
        flex: 1,
        padding: hp('1%'),
    },
    update_Btn: {
        width: wp('40%'),
        backgroundColor: "#FFBA00",
        borderRadius: wp('7%'),
        height: hp('6%'),
        alignItems: "center",
        justifyContent: "center",
        marginTop: hp('5%'),
        marginBottom: hp('15%')
    },
    update_text: {
        color: "#000000",
        fontSize: hp('3%'),
    },
});


