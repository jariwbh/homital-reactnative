import React, { Component } from 'react';
import {
    StyleSheet, Text, View, Image, TouchableOpacity,
    TextInput, ToastAndroid, ScrollView, ActivityIndicator
} from 'react-native';
import { FontAwesome, AntDesign, Fontisto } from '@expo/vector-icons';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { UpdateUserService } from '../../Services/UserService/UserService';
import AsyncStorage from '@react-native-community/async-storage'
import Loading from '../../Components/Loader/Loading'
import Loader from '../../Components/Loader/Loader';

class MyProfileScreen extends Component {
    constructor(props) {
        super(props)
        this.userData = null;
        this.state = {
            _id: null,
            fullname: null,
            fullnameError: null,
            username: null,
            usernameError: null,
            mobilenumber: null,
            mobilenumberError: null,
            userProfile: null,
            profileName: null,
            loading: false,
        }

        this.setFullName = this.setFullName.bind(this);
        this.setUserName = this.setUserName.bind(this);
        this.setMobileNumber = this.setMobileNumber.bind(this);
        this.onPressSubmit = this.onPressSubmit.bind(this);
        this.secondTextInputRef = React.createRef();
        this.thirdTextInputRef = React.createRef();
    }

    setFullName(fullname) {
        if (!fullname || fullname.length <= 0) {
            return this.setState({ fullnameError: 'User Name cannot be empty', fullname: null });
        }
        return this.setState({ fullname: fullname, fullnameError: null })
    }

    setUserName(email) {
        const re = /\S+@\S+\.\S+/;
        if (!email || email.length <= 0) {
            return this.setState({ usernameError: 'Email cannot be empty', username: null });
        }
        if (!re.test(email)) {
            return this.setState({ usernameError: 'Ooops! We need a valid email address' });
        }
        return this.setState({ username: email, usernameError: null })
    }

    setMobileNumber(mobilenumber) {
        const reg = /^[0]?[789]\d{9}$/;
        if (!mobilenumber || mobilenumber.length <= 0) {
            return this.setState({ mobilenumberError: 'Mobile Number cannot be empty', mobilenumber: null });
        }
        if (!reg.test(mobilenumber)) {
            return this.setState({ mobilenumberError: 'Ooops! We need a valid Mobile Number' });
        }
        return this.setState({ mobilenumber: mobilenumber, mobilenumberError: null })
    }

    componentDidMount() {
        this.getdata()
    }

    onPressSubmit = async () => {
        const { fullname, username, mobilenumber, _id } = this.state;
        if (!fullname || !username || !mobilenumber) {
            this.setFullName(fullname)
            this.setUserName(username)
            this.setMobileNumber(mobilenumber)
            return;
        }
        this.setState({ loading: true })

        const body = {
            _id: _id,
            status: "active",
            property: {
                fullname: fullname,
                email: username,
                mobile_number: mobilenumber,
            }
        }

        try {
            await UpdateUserService(body).then(response => {
                if (response != null) {
                    this.setState({ loading: false })
                    ToastAndroid.show("Your Profile Update!", ToastAndroid.LONG);
                    this.props.navigation.navigate('HomeScreen')
                }
            })
        }
        catch (error) {
            this.setState({ loading: false })
            ToastAndroid.show("Your Profile Not Update!", ToastAndroid.LONG)
        }
    }

    getdata = async () => {
        var getUser = await AsyncStorage.getItem('@authuser')
        if (getUser == null || getUser && getUser.length == 0) {
            setTimeout(() => {
                this.props.navigation.replace('LoginScreen')
            }, 5000);
        } else {
            this.userData = JSON.parse(getUser)
            this.setState({
                _id: this.userData._id,
                fullname: this.userData.property.fullname,
                username: this.userData.property.email,
                mobilenumber: this.userData.property.mobile_number,
                profileName: this.userData.fullname,
                userProfile: this.userData.profilepic
            })
        }
    }

    render() {
        const { fullname, username, mobilenumber, profileName, userProfile } = this.state;
        return (
            <View style={styles.container}>
                {this.userData === null ?
                    <Loading />
                    :
                    <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={'always'}><View style={{ marginTop: hp('5%') }}>
                        <Image style={styles.avatar} source={{ uri: userProfile && userProfile !== null ? userProfile : 'https://res.cloudinary.com/dnogrvbs2/image/upload/v1610428971/userimage_qif8wv.jpg' }} />
                        <View style={styles.body}>
                            <View style={styles.bodyContent}>
                                <Text style={styles.name}>{profileName}</Text>
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
                                        blurOnSubmit={false}
                                        onSubmitEditing={() => { this.secondTextInputRef.current.focus() }}
                                        onChangeText={(fullname) => this.setFullName(fullname)}
                                    />
                                </View>
                                <Text style={{ marginTop: hp('-3%'), marginLeft: wp('-14%'), color: '#ff0000' }}>{this.state.fullnameError && this.state.fullnameError}</Text>
                                <View style={styles.inputView}>
                                    <Fontisto name="email" size={27} color="#000000" style={{ paddingLeft: hp('2%') }} />
                                    <TextInput
                                        defaultValue={username}
                                        style={styles.TextInput}
                                        placeholder="Email Id"
                                        type='clear'
                                        placeholderTextColor="#737373"
                                        autoCapitalize="none"
                                        textContentType="emailAddress"
                                        keyboardType="email-address"
                                        returnKeyType="next"
                                        underlineColorAndroid="#B9B9B9"
                                        ref={this.secondTextInputRef}
                                        blurOnSubmit={false}
                                        onSubmitEditing={() => { this.thirdTextInputRef.current.focus() }}
                                        onChangeText={(username) => this.setUserName(username)}
                                    />
                                </View>
                                <Text style={{ marginTop: hp('-3%'), marginLeft: wp('-22%'), color: '#ff0000' }}>{this.state.usernameError && this.state.usernameError}</Text>
                                <View style={styles.inputView} >
                                    <FontAwesome name="mobile-phone" size={30} color="#000000" style={{ paddingLeft: hp('3%') }} />
                                    <TextInput
                                        defaultValue={mobilenumber}
                                        style={styles.TextInput}
                                        placeholder="Mobile Number"
                                        type='clear'
                                        placeholderTextColor="#737373"
                                        keyboardType="numeric"
                                        keyboardType="number-pad"
                                        underlineColorAndroid="#B9B9B9"
                                        ref={this.thirdTextInputRef}
                                        onSubmitEditing={() => this.onPressSubmit()}
                                        onChangeText={(mobilenumber) => this.setMobileNumber(mobilenumber)}
                                    />
                                </View>
                                <Text style={{ marginTop: hp('-3%'), marginLeft: wp('-12%'), color: '#ff0000' }}>{this.state.mobilenumberError && this.state.mobilenumberError}</Text>
                                <TouchableOpacity style={styles.update_Btn} onPress={() => this.onPressSubmit()}>
                                    {this.state.loading === true ? <Loader /> :
                                        <Text style={styles.update_text} >Update Profile</Text>
                                    }
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    </ScrollView>
                }
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
        fontSize: hp('2.5%'),
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


