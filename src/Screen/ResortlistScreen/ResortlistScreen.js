import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

class ResortlistScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', marginBottom: hp('2%') }}>
                    <View >
                        <Image source={require('../../../assets/Images/1.png')} style={{ width: wp('100%'), height: hp('50%') }} />
                        <TouchableOpacity style={styles.backIcon} onPress={() => this.props.navigation.goBack()} >
                            <MaterialIcons name="arrow-back" size={24} color="#FFFFFF" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: hp('-10%'), }}>
                    <View style={{ position: 'absolute', flex: 1 }}>
                        <View style={styles.listview}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), }}>Rosewood Resort</Text>
                                <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), marginRight: hp('2%') }}>$79.00 </Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%') }}>124,Maub Street,Goa</Text>
                                <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), marginRight: hp('2%') }}>Per night </Text>
                            </View>
                            <View style={{ marginTop: hp('1%'), }}>
                                <Text style={{ fontSize: hp('3%') }}>Amenities</Text>
                            </View>
                            <View style={{ marginTop: hp('1%'), flex: 1, flexDirection: 'row', justifyContent: 'space-around', }}>
                                <TouchableOpacity>
                                    <MaterialIcons name="wifi" size={24} color="#000000" style={{ alignItems: 'center', justifyContent: 'center', marginLeft: hp('1%') }} />
                                    <Text style={{ fontSize: hp('2.5%'), }}> wifi</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <FontAwesome5 name="dumbbell" size={24} color="#000000" style={{ marginLeft: hp('1%') }} />
                                    <Text style={{ fontSize: hp('2.5%'), }}>Gym</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <MaterialIcons name="pool" size={24} color="#000000" style={{ marginLeft: hp('1%') }} />
                                    <Text style={{ fontSize: hp('2.5%'), }}>Pool</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <MaterialIcons name="restaurant-menu" size={24} color="#000000" style={{ marginLeft: hp('3.5%') }} />
                                    <Text style={{ fontSize: hp('2.5%'), }}>Resturant</Text>
                                </TouchableOpacity>
                                <TouchableOpacity >
                                    <FontAwesome5 name="car-side" size={24} color="#000000" style={{ marginLeft: hp('2%') }} />
                                    <Text style={{ fontSize: hp('2.5%'), }}>Parking</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                    <View style={{ marginTop: hp('20%'), marginRight: hp('40%') }}>
                        <Text style={{ fontSize: hp('3%') }}>Details</Text>
                    </View>
                    <View style={{ marginTop: hp('2%'), marginLeft: hp('3%') }}>

                        <Text style={{ fontSize: hp('2%'), marginLeft: hp('3%'), marginRight: hp('3%') }}>
                            Located in Mahabaleshwar near the market,
                            Laxmi Residency offers 12 well-designed rooms
                            (Deluxe , Super Deluxe and Family rooms) with modern amenities.
                            The hotel is close to main tourist spots like Wilson Point, Venna Lake,
                            Pratapgadh Fort and Arthurs Seat. The property has a shared
                            kitchen and it offers cars on rental basis.
                            </Text>

                    </View>
                    <View style={{ marginLeft: hp('25%') }}>
                        <TouchableOpacity style={styles.bookBtn} onPress={() => { this.props.navigation.navigate('RoomlistScreen') }} >
                            <Text style={styles.bookText}>Choose Room</Text>
                        </TouchableOpacity>
                    </View>
                </View>


            </View>
        );
    }
}

export default ResortlistScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: hp('5%')
    },
    backIcon: {
        marginTop: hp('4.5%'),
        marginLeft: wp('5%'),
        position: 'absolute'
    },
    listview: {
        flex: 1,
        flexDirection: 'column',
        borderRadius: hp('2%'),
        backgroundColor: "#FFFFFF",
        width: wp('90%'),
        height: hp('60%'),

    },
    bookBtn: {
        flexDirection: 'row',
        width: wp('40%'),
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