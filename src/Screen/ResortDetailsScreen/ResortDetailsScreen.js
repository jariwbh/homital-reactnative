import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, InteractionManager } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

class ResortDetailsScreen extends Component {
    constructor(props) {
        super(props);
        this.resortlist = this.props.route.params.item;
        //  console.log('this.props.route.params.item', this.props.route.params)
        this.state = {
            resortname: this.resortlist.resortname,
            address: this.resortlist.property.address,
            amenities: this.resortlist.property.amenities,
            description: this.resortlist.property.description,
        };
    }

    render() {
        const { resortname, address, amenities, description } = this.state;
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
                                <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), }}>{resortname}</Text>
                                {/* <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), marginRight: hp('2%') }}>$79.00 </Text> */}
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%') }}>{address}</Text>
                                {/* <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), marginRight: hp('2%') }}>Per night </Text> */}
                            </View>
                            <View style={{ marginTop: hp('1%'), }}>
                                <Text style={{ fontSize: hp('3%') }}>Amenities</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: hp('1%') }}>
                                <View style={styles.inputview}>
                                    <TouchableOpacity>
                                        <Text style={{ fontSize: hp('2%'), flex: 1, }}>{amenities}</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.inputview}>
                                    <TouchableOpacity>
                                        <Text style={{ fontSize: hp('2%'), flex: 1, }}>{amenities}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                    </View>
                    <View style={{ marginTop: hp('20%'), marginRight: hp('40%') }}>
                        <Text style={{ fontSize: hp('3%') }}>Details</Text>
                    </View>
                    <View style={{ marginTop: hp('2%'), marginLeft: hp('3%') }}>

                        <Text style={{ fontSize: hp('2%'), marginLeft: hp('3%'), marginRight: hp('3%') }}>
                            {description}
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

export default ResortDetailsScreen;


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