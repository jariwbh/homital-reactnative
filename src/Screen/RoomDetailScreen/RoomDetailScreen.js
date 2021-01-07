import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, } from 'react-native';
import BackButton from '../../Components/BackButton/BackButton';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { MaterialCommunityIcons, MaterialIcons, } from '@expo/vector-icons';

export default class RoomDetailScreen extends Component {
    constructor(props) {
        super(props);
        this.roomDetails = this.props.route.params.item;
        this.state = {
            roomID: this.roomDetails._id,
            roomDetails: this.roomDetails,
            roombookingtype: this.roomDetails.bookingtype,
            roomcharges: this.roomDetails.charges,
            roomtitle: this.roomDetails.title,
            roomamenities: null,
            roomdescription: this.roomDetails.description,
            roomImage: this.roomDetails.gallery[0].attachment,
        };
    }

    render() {
        const { roomDetails, roombookingtype, roomcharges, roomtitle, roomamenities, roomdescription, roomImage, roomID } = this.state;
        return (
            <View style={styles.container}>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: hp('7%'), flex: 1 }}>
                    <Image source={{ uri: roomImage }} style={{ width: wp('90%'), height: hp('30%') }} />
                    <View style={styles.listview}>
                        <View style={{ flexDirection: 'row', marginTop: hp('1%') }}>
                            <Text style={{ fontSize: hp('2.5%'), flex: 1, marginLeft: hp('1%') }}>{roomtitle}</Text>
                            <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('1%'), marginRight: '3%', }}>₹ {roomcharges} / {roombookingtype}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', }}>
                            <View style={{ flexDirection: 'row', marginTop: hp('1%') }}>
                                <MaterialCommunityIcons name="vector-square" size={24} color="#605C5C" style={{ paddingLeft: hp('1%'), }} />
                                <Text style={{ fontSize: hp('2.5%'), color: '#605C5C', paddingLeft: hp('1%'), }}>16mxm</Text>
                                <MaterialIcons name="single-bed" size={30} color="#605C5C" style={{ paddingLeft: hp('1%'), }} />
                                <Text style={{ fontSize: hp('2.5%'), color: '#605C5C', paddingLeft: hp('1%'), }}>1 Single Bed</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: hp('1%') }}>
                            <View style={styles.inputview}>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: hp('2%'), flex: 1, }}>Wifi</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.inputview}>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: hp('2%'), flex: 1, }}>TV</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.inputview}>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: hp('2%'), flex: 1, }}>Air Condition</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.inputview}>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: hp('2%'), flex: 1, }}>Attach Bathroom</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ marginTop: hp('2%'), marginLeft: hp('3%') }}>
                            <Text style={{ fontSize: hp('2.5%') }}>Details</Text>
                        </View>
                        <View style={{ marginTop: hp('2%'), marginLeft: hp('3%') }}>
                            <Text style={{ fontSize: hp('2%'), marginRight: hp('2%') }}>
                                {roomdescription}
                            </Text>
                        </View>
                        <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', }}>
                            <TouchableOpacity style={styles.bookBtn} onPress={() => { this.props.navigation.navigate('BookScreen', { roomID }) }} >
                                <Text style={styles.bookText}>Book Now</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    listview: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        width: wp('90%'),
        height: hp('50%'),
        marginTop: hp('-0.1%'),
    },
    inputview: {
        flex: 1,
        backgroundColor: "#FAB64B",
        borderRadius: wp('2%'),
        height: hp('5%'),
        margin: hp('1%'),
        alignItems: "center",
        justifyContent: 'center'
    },
    bookBtn: {
        flexDirection: 'row',
        width: wp('30%'),
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