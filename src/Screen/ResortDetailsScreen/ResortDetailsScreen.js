import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, InteractionManager } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

class ResortDetailsScreen extends Component {
    constructor(props) {
        super(props);
        this.resortlist = this.props.route.params.item;
        this.state = {
            resortDetails: this.resortlist,
            resortname: this.resortlist.resortname,
            address: this.resortlist.property.address,
            amenities: this.resortlist.property.amenities,
            description: this.resortlist.property.description,
            resortImage: this.resortlist.property.images[0].attachment
        };
    }

    render() {
        const { resortname, address, amenities, description, resortImage, resortDetails } = this.state;
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', marginBottom: hp('2%') }}>
                    <View >
                        <Image source={{ uri: resortImage }} style={{ width: wp('100%'), height: hp('40%') }} />
                        <TouchableOpacity style={styles.backIcon} onPress={() => this.props.navigation.goBack()} >
                            <MaterialIcons name="arrow-back" size={24} color="#FFFFFF" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: hp('-10%'), }}>
                    <View style={{ position: 'absolute', flex: 1 }}>
                        <View style={styles.listview}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: hp('1%') }}>
                                <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), }}>{resortname}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%') }}>{address}</Text>
                            </View>
                            <View style={{ marginTop: hp('1%'), }}>
                                <Text style={{ fontSize: hp('3%') }}>Amenities</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: hp('1%') }}>
                                {amenities.map((item, index) => (
                                    <View style={styles.inputview}>
                                        <View>
                                            <Text key={index} style={{ fontSize: hp('2%'), flex: 1, textAlign: 'center' }}>
                                                {item}
                                            </Text>
                                        </View>
                                    </View>
                                ))}
                            </View>

                            <View style={{ marginTop: hp('0%'), marginRight: hp('0%'), }}>
                                <Text style={{ fontSize: hp('3%') }}>Details</Text>
                            </View>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <View style={{ marginTop: hp('2%'), marginLeft: hp('3%') }}>
                                    <Text style={{ fontSize: hp('2%'), marginLeft: hp('3%'), marginRight: hp('3%') }}>
                                        {description}
                                    </Text>
                                </View>
                            </ScrollView>
                            <View style={{ marginLeft: hp('20%'), marginTop: hp('0%'), marginBottom: hp('2%') }}>
                                <TouchableOpacity style={styles.bookBtn} onPress={() => { this.props.navigation.navigate('RoomlistScreen', { resortDetails }) }} >
                                    <Text style={styles.bookText}>Choose Room</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default ResortDetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    backIcon: {
        marginTop: hp('4.5%'),
        marginLeft: wp('5%'),
        position: 'absolute'
    },
    listview: {
        flex: 1,
        width: wp("90%"),
        height: hp("60%"),
        borderRadius: wp('2%'),
        marginTop: wp('130%'),
        alignContent: 'center',
        backgroundColor: '#fff',
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 7,
        marginBottom: hp('15%')
    },
    inputview: {
        flex: 1,
        backgroundColor: "#FAB64B",
        borderRadius: wp('1%'),
        height: hp('5%'),
        margin: hp('1%'),
        alignItems: "center",
        justifyContent: 'center',

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