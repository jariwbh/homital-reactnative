import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, TextInput } from 'react-native';
import BackButton from '../../Components/BackButton/BackButton';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import theme from "../../Constants/theme";
import { FontAwesome, AntDesign, Fontisto, FontAwesome5 } from '@expo/vector-icons';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { ScrollView, } from 'react-native-gesture-handler';


const { COLORS, FONTS, SIZES } = theme;

class BookScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    showDatePicker = () => {
        this.setState({ isDatePickerVisible: true });
    };

    hideDatePicker = () => {
        this.setState({ isDatePickerVisible: false });
    };

    handleConfirmDate = (date) => {
        this.hideDatePicker();
    };
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', marginBottom: hp('2%') }}>
                    <BackButton />
                    <View style={{ marginTop: hp('6%'), justifyContent: 'center', alignItems: 'center', marginLeft: hp('10%') }}>
                        <Text style={{ fontSize: hp('3%'), marginLeft: hp('7%') }}> Book </Text>
                    </View>
                </View>
                <ScrollView>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: hp('2%') }}>
                        <View style={styles.inputview}>
                            <AntDesign name="user" size={27} color="#000000" style={{ paddingLeft: hp('3%') }} />
                            <TextInput
                                style={styles.TextInput}
                                placeholder=" Name"
                                type='clear'
                                placeholderTextColor="#656565"
                                returnKeyType="next"
                                underlineColorAndroid="#B9B9B9"
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
                                underlineColorAndroid="#B9B9B9"
                            // onChangeText={(email) => this.setEmail(email)}
                            />

                        </View>
                        <View style={styles.inputview} >
                            <FontAwesome name="mobile-phone" size={30} color="#000000" style={{ paddingLeft: hp('4.3%') }} />
                            <TextInput
                                style={styles.TextInput}
                                placeholder="Phone Number"
                                type='clear'
                                placeholderTextColor="#656565"
                                secureTextEntry={true}
                                returnKeyType="done"
                                underlineColorAndroid="#B9B9B9"
                            // keyboardType="numeric"
                            // onChangeText={(mobilenumber) => this.setMobileNumber(mobilenumber)}
                            />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: hp('1%'), }}>
                        <View>
                            <Text style={{ fontSize: hp('2%'), }}>Arrival</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: hp('2%'), }}>Departure</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', }}>
                        <View style={styles.date}>
                            <Fontisto name="date" size={27} color="#737373" style={{ paddingLeft: hp('1%') }} />
                            <TextInput
                                style={styles.dateInput}
                                placeholder="YYYY-MM-DD"
                                type='clear'
                                // defaultValue={serviceDate}
                                placeholderTextColor="#000000"
                                onTouchStart={this.showDatePicker}
                            // onChangeText={(serviceDate) => this.setServiceDate(serviceDate)}
                            >
                            </TextInput>
                            <DateTimePickerModal
                                isVisible={this.state.isDatePickerVisible}
                                mode="date"
                                onConfirm={this.handleConfirmDate}
                                onCancel={this.hideDatePicker}
                            />
                        </View>
                        <View style={styles.date}>
                            <Fontisto name="date" size={27} color="#737373" style={{ paddingLeft: hp('1%') }} />
                            <TextInput
                                style={styles.dateInput}
                                placeholder="YYYY-MM-DD"
                                type='clear'
                                // defaultValue={serviceDate}
                                placeholderTextColor="#000000"
                                onTouchStart={this.showDatePicker}
                            // onChangeText={(serviceDate) => this.setServiceDate(serviceDate)}
                            >
                            </TextInput>
                            <DateTimePickerModal
                                isVisible={this.state.isDatePickerVisible}
                                mode="date"
                                onConfirm={this.handleConfirmDate}
                                onCancel={this.hideDatePicker}
                            />
                        </View>
                    </View>

                    <View style={{ flexDirection: 'column', marginBottom: hp('5%') }}>
                        <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('5.5%'), marginBottom: hp('1%') }}>Luxurious Single Room</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', }}>
                            <Text style={{ fontSize: hp('2.5%'), color: '#605C5C' }}>$ 79 / night</Text>
                            <TouchableOpacity style={{ marginRight: '5%', flexDirection: 'row' }} onPress={() => { this.props.navigation.navigate('RoomDetailScreen') }}>
                                <Text style={{ fontSize: hp('2.5%'), color: '#FD9B02' }}>View Details</Text>
                                <FontAwesome5 name="arrow-right" size={24} color="#FD9B02" style={{ paddingLeft: hp('1%'), marginTop: hp('0.5%') }} />
                            </TouchableOpacity>

                        </View>
                    </View>
                    <View>
                        <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('5%'), marginBottom: hp('2%') }}> Payment </Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: hp('1%') }}>
                            <Text style={{ fontSize: hp('2.5%'), color: '#605C5C' }}>One Single Room * 2 night</Text>
                            <Text style={{ color: '#605C5C' }}>$158.00</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', }}>
                            <Text style={{ fontSize: hp('2.5%'), marginRight: hp('25%'), color: '#605C5C' }}>Tax</Text>
                            <Text style={{ color: '#605C5C', }}>$50.00</Text>
                        </View>
                        <TextInput
                            underlineColorAndroid="#B9B9B9"
                            style={{
                                width: '50%',
                                marginLeft: 'auto',
                                marginBottom: hp('1%')
                            }}
                        />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: hp('2%') }} >
                            <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('20%') }} >Totel</Text>
                            <Text style={{ fontSize: hp('2.5%'), color: "#FD9B02", }}>$208.00</Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: hp('3%'), }}>
                        <TouchableOpacity style={styles.bookBtn} onPress={() => { this.props.navigation.navigate('MyProfileScreen') }} >
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
        backgroundColor: "#F6C455",
        borderRadius: wp('1%'),
        width: wp('40%'),
        height: hp('5%'),
        marginBottom: hp('3%'),
        alignItems: "center",
    },
    dateInput: {
        fontSize: hp('2%'),
        padding: wp('1.5%'),
    },

})