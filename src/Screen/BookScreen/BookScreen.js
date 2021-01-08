import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ToastAndroid, TextInput } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import theme from "../../Constants/theme";
import { FontAwesome, AntDesign, Fontisto, FontAwesome5 } from '@expo/vector-icons';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { ScrollView, } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import { BookService } from '../../Services/BookService/BookService'
import moment from 'moment';
const { COLORS, FONTS, SIZES } = theme;

class BookScreen extends Component {
    constructor(props) {
        super(props);
        this.roomDetails = this.props.route.params.roomID;
        this.state = {
            userID: null,
            fullname: null,
            fullnameError: null,
            username: null,
            usernameError: null,
            mobilenumber: null,
            mobilenumberError: null,
            CheckDate: null,
            CheckDateError: null,
            CheckOutDate: null,
            CheckOutDateError: null,
            isCheckDatePickerVisible: false,
            isCheckOutDatePickerVisible: false
        }
        this.setFullName = this.setFullName.bind(this);
        this.setUserName = this.setUserName.bind(this);
        this.setMobileNumber = this.setMobileNumber.bind(this);
        this.setCheckDate = this.setCheckDate.bind(this);
        this.setCheckOutDate = this.setCheckOutDate.bind(this);
        this.onPressSubmit = this.onPressSubmit.bind(this);
    }

    showCheckDatePicker = () => {
        this.setState({ isCheckDatePickerVisible: true });
    };
    hideCheckDatePicker = () => {
        this.setState({ isCheckDatePickerVisible: false });
    };
    handleConfirmCheckDate = (date) => {
        this.setState({ CheckDate: moment(date).format('YYYY-MM-DD') });
        this.hideCheckDatePicker();
    };

    showOutDateDatePicker = () => {
        this.setState({ isCheckOutDatePickerVisible: true });
    };
    hideOutDateDatePicker = () => {
        this.setState({ isCheckOutDatePickerVisible: false });
    };
    handleConfirmCheckOutDate = (date) => {
        this.setState({ CheckOutDate: moment(date).format('YYYY-MM-DD') });
        this.hideOutDateDatePicker();
    };

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

    setCheckDate(checkDate) {
        if (!checkDate || checkDate.length <= 0) {
            return this.setState({ CheckDateError: 'Arrival Date cannot be empty' });
        }
        return this.setState({ CheckDate: checkDate, CheckDateError: null })
    }

    setCheckOutDate(checkOutDate) {
        if (!checkOutDate || checkOutDate.length <= 0) {
            return this.setState({ CheckOutDateError: 'Departure Date cannot be empty' });
        }
        return this.setState({ CheckOutDate: checkOutDate, CheckOutDateError: null })
    }

    componentDidMount() {
        this.getdata()
    }

    onPressSubmit = () => {
        const { fullname, username, mobilenumber, userID, CheckDate, CheckOutDate } = this.state;
        if (!fullname || !username || !mobilenumber || !CheckDate || !CheckOutDate) {
            this.setFullName(fullname)
            this.setUserName(username)
            this.setMobileNumber(mobilenumber)
            this.setCheckDate(CheckDate)
            this.setCheckOutDate(CheckOutDate)
            return;
        }

        const body = {
            bookingdate: moment().format('YYYY-MM-DD'),
            customerid: userID,
            onModel: "Member",
            refid: this.roomDetails,
            checkin: CheckDate,
            checkout: CheckOutDate
        }

        BookService(body).then(response => {
            if (response != null) {
                ToastAndroid.show("Booking Sucess!", ToastAndroid.LONG);
                this.props.navigation.navigate('ThankYouScreen', { response })
            }
        })
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
                userID: this.userData._id,
                fullname: this.userData.property.fullname,
                username: this.userData.property.email,
                mobilenumber: this.userData.property.mobile_number,
            })
        }
    }

    render() {
        const { fullname, fullnameError, username, usernameError, mobilenumber, mobilenumberError, CheckOutDate, CheckOutDateError, CheckDate, CheckDateError } = this.state;
        return (
            <View style={styles.container}>
                <ScrollView Vertical showsVerticalScrollIndicator={false}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: hp('2%') }}>
                        <View style={styles.inputview}>
                            <AntDesign name="user" size={27} color="#000000" style={{ paddingLeft: hp('3%') }} />
                            <TextInput
                                style={styles.TextInput}
                                placeholder="Full Name"
                                type='clear'
                                placeholderTextColor="#656565"
                                returnKeyType="next"
                                underlineColorAndroid="#B9B9B9"
                                defaultValue={fullname}
                                onChangeText={(fullname) => this.setFullName(fullname)}
                            />
                        </View>
                        <Text style={{ marginTop: hp('-2%'), marginRight: wp('27%'), color: '#ff0000' }}>{fullnameError && fullnameError}</Text>
                        <View style={styles.inputview}>
                            <Fontisto name="email" size={27} color="#000000" style={{ paddingLeft: hp('3%') }} />
                            <TextInput
                                style={styles.TextInput}
                                placeholder="Email"
                                type='clear'
                                placeholderTextColor="#656565"
                                returnKeyType="next"
                                underlineColorAndroid="#B9B9B9"
                                defaultValue={username}
                                onChangeText={(email) => this.setUserName(email)}
                            />
                        </View>
                        <Text style={{ marginTop: hp('-2%'), marginRight: wp('21%'), color: '#ff0000' }}>{usernameError && usernameError}</Text>
                        <View style={styles.inputview} >
                            <FontAwesome name="mobile-phone" size={30} color="#000000" style={{ paddingLeft: hp('4.3%') }} />
                            <TextInput
                                style={styles.TextInput}
                                placeholder="Phone Number"
                                type='clear'
                                placeholderTextColor="#656565"
                                returnKeyType="done"
                                underlineColorAndroid="#B9B9B9"
                                keyboardType="numeric"
                                defaultValue={mobilenumber}
                                onChangeText={(mobilenumber) => this.setMobileNumber(mobilenumber)}
                            />
                        </View>
                        <Text style={{ marginTop: hp('-2%'), marginRight: wp('21%'), color: '#ff0000' }}>{mobilenumberError && mobilenumberError}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: hp('9%') }}>
                        <Text style={{ fontSize: hp('2%'), }}>Arrival :</Text>
                        <View style={styles.date}>
                            <Fontisto name="date" size={27} color="#737373" style={{ paddingLeft: hp('1%') }} />
                            <TextInput
                                style={styles.dateInput}
                                placeholder="YYYY-MM-DD"
                                type='clear'
                                defaultValue={CheckDate}
                                placeholderTextColor="#000000"
                                underlineColorAndroid="#B9B9B9"
                                onTouchStart={this.showCheckDatePicker}
                                onChangeText={(CheckDate) => this.setCheckDate(CheckDate)}
                            >
                            </TextInput>
                            <DateTimePickerModal
                                isVisible={this.state.isCheckDatePickerVisible}
                                mode="date"
                                onDateChange={(CheckDate) => this.setCheckDate(CheckDate)}
                                onConfirm={this.handleConfirmCheckDate}
                                onCancel={this.hideCheckDatePicker}
                            />
                        </View>
                    </View>
                    <Text style={{ marginLeft: hp('17%'), marginTop: hp('-2%'), marginBottom: hp('2%'), color: '#ff0000' }}>{CheckDateError && CheckDateError}</Text>
                    <View style={{ flexDirection: 'row', marginLeft: hp('9%') }}>
                        <Text style={{ fontSize: hp('2%'), }}>Departure :</Text>
                        <View style={styles.date}>
                            <Fontisto name="date" size={27} color="#737373" style={{ paddingLeft: hp('1%') }} />
                            <TextInput
                                style={styles.dateInput}
                                placeholder="YYYY-MM-DD"
                                type='clear'
                                defaultValue={CheckOutDate}
                                underlineColorAndroid="#B9B9B9"
                                placeholderTextColor="#000000"
                                onTouchStart={this.showOutDateDatePicker}
                                onChangeText={(CheckOutDate) => this.setCheckOutDate(CheckOutDate)}
                            >
                            </TextInput>
                            <DateTimePickerModal
                                isVisible={this.state.isCheckOutDatePickerVisible}
                                mode="date"
                                onDateChange={(CheckOutDate) => this.setCheckDate(CheckOutDate)}
                                onConfirm={this.handleConfirmCheckOutDate}
                                onCancel={this.hideOutDateDatePicker}
                            />
                        </View>
                    </View>
                    <Text style={{ marginLeft: hp('17%'), marginTop: hp('-2%'), color: '#ff0000' }}>{CheckOutDateError && CheckOutDateError}</Text>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('5%'), marginBottom: hp('5%'), }}>
                        <TouchableOpacity style={styles.bookBtn} onPress={() => this.onPressSubmit()} >
                            <Text style={styles.bookText}>Book Now </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default BookScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    inputview: {
        flexDirection: 'row',
        width: wp('80%'),
        marginLeft: 'auto',
        marginRight: 'auto',
        margin: hp('1%'),
        alignItems: "center",
    },
    TextInput: {
        fontSize: hp('2%'),
        flex: 1,
        padding: hp('2%'),
    },
    bookBtn: {
        flexDirection: 'row',
        width: wp('30%'),
        backgroundColor: "#F6C455",
        borderRadius: wp('7%'),
        height: hp('6%'),
        alignItems: "center",
        justifyContent: "center",
    },
    bookText: {
        color: COLORS.black,
        fontSize: hp('2.5%'),
    },
    date: {
        flexDirection: 'row',
        margin: hp('1%'),
        marginTop: hp('-1%'),
        alignItems: "center",
    },
    dateInput: {
        fontSize: hp('2%'),
        padding: wp('1.5%'),
    },

})