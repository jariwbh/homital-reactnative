import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { MaterialCommunityIcons, MaterialIcons, } from '@expo/vector-icons';
import HTML from 'react-native-render-html';
import Loading from '../../Components/Loader/Loading'

export default class RoomDetailScreen extends Component {
    constructor(props) {
        super(props);
        this.roomDetails = this.props.route.params.item;
        this.state = {
            roomID: this.roomDetails == null ? null : this.roomDetails._id,
            roomDetails: this.roomDetails == null ? null : this.roomDetails,
            roombookingtype: this.roomDetails == null ? null : this.roomDetails.bookingtype,
            roomcharges: this.roomDetails == null ? null : this.roomDetails.charges,
            roomtitle: this.roomDetails == null ? null : this.roomDetails.title,
            roomamenities: this.roomDetails == null ? null : this.roomDetails.property && this.roomDetails.property.amenities,
            roomdescription: this.roomDetails == null ? null : this.roomDetails.description,
            roomImage: this.roomDetails == null ? null : this.roomDetails.gallery[0].attachment,
        };
    }

    render() {
        const { roomDetails, roombookingtype, roomcharges, roomtitle, roomamenities, roomdescription, roomImage, roomID } = this.state;
        return (
            <View style={styles.container}>
                {roomDetails !== null ?
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: hp('7%'), flex: 1 }}>
                        <Image source={{ uri: roomImage }} style={{ width: wp('92%'), height: hp('30%'), borderTopLeftRadius: hp('1%'), borderTopRightRadius: hp('1%') }} />
                        <View style={styles.listview}>
                            <View style={{ flexDirection: 'row', marginTop: hp('1%'), marginLeft: hp('1%') }}>
                                <Text style={{ fontSize: hp('3%'), flex: 1, marginLeft: hp('1%'), textTransform: 'capitalize' }}>{roomtitle}</Text>
                                <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('1%'), marginRight: '3%', color: '#605C5C' }}>₹ {roomcharges} / {roombookingtype}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginLeft: hp('1%') }}>
                                <View style={{ flexDirection: 'row', marginTop: hp('1%') }}>
                                    <MaterialCommunityIcons name="vector-square" size={24} color="#605C5C" style={{ paddingLeft: hp('1%'), }} />
                                    <Text style={{ fontSize: hp('2.5%'), color: '#605C5C', paddingLeft: hp('1%'), }}>16mxm</Text>
                                    <MaterialIcons name="single-bed" size={30} color="#605C5C" style={{ paddingLeft: hp('1%'), }} />
                                    <Text style={{ fontSize: hp('2.5%'), color: '#605C5C', paddingLeft: hp('1%'), }}>Bed</Text>
                                </View>
                            </View>
                            <View style={{ marginTop: hp('1%'), marginLeft: hp('2%') }}>
                                <Text style={{ fontSize: hp('2.5%') }}>Amenities</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: hp('1%') }}>
                                {(roomamenities == null) || (roomamenities && roomamenities.length == 0) ?
                                    <Text style={{ textAlign: 'center', fontSize: hp('2%'), color: '#605C5C', marginLeft: hp('2%') }}>No Amenities</Text>
                                    :
                                    <FlatList
                                        data={roomamenities}
                                        renderItem={({ item }) =>
                                            <View style={styles.inputview}>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text style={{ marginRight: hp('0.5%') }}>✓</Text>
                                                    <Text style={{ fontSize: hp('2%'), color: '#605C5C', padding: hp('0.2%') }}>
                                                        {item}
                                                    </Text>
                                                </View>
                                            </View>
                                        }
                                        keyExtractor={(item, index) => index}
                                    />
                                }
                            </View>
                            <View style={{ marginTop: hp('2%'), marginLeft: hp('2%') }}>
                                <Text style={{ fontSize: hp('2.5%') }}>Details</Text>
                            </View>
                            <ScrollView showsVerticalScrollIndicator={false} >
                                <View style={{ marginTop: hp('2%'), marginLeft: hp('2%'), flex: 1 }}>
                                    <HTML source={{ html: roomdescription }} />
                                </View>
                            </ScrollView>
                            <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', }}>
                                <TouchableOpacity style={styles.bookBtn} onPress={() => { this.props.navigation.navigate('BookScreen', { roomID }) }} >
                                    <Text style={styles.bookText}>Book Now</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    : <Loading />
                }
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    htmlStyles: {
        backgroundColor: '#FF0000',
        fontFamily: 'Arial',
    },
    listview: {
        flex: 1,
        borderBottomLeftRadius: hp('1%'),
        borderBottomRightRadius: hp('1%'),
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        width: wp('92%'),
        height: hp('50%'),
        marginTop: hp('-0.1%'),
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
    },
    inputview: {
        flex: 1,
        alignItems: "flex-start",
        marginLeft: hp('2%'),
    },
    bookBtn: {
        flexDirection: 'row',
        width: wp('40%'),
        backgroundColor: "#FAB64B",
        borderRadius: wp('7%'),
        height: hp('6%'),
        alignItems: "center",
        justifyContent: "center",
        marginRight: hp('2%'),
        marginTop: hp('2%'),
        marginBottom: hp('2%')
    },
    bookText: {
        color: '#000000',
        fontSize: hp('2.5%'),
    },

})