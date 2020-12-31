import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import { FontAwesome5, Foundation, AntDesign, Fontisto } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';


class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerview}>
                    <TouchableOpacity >
                        <Foundation name="list" size={30} color="#000000" style={{ marginLeft: hp('2%') }} />

                    </TouchableOpacity>
                    <TouchableOpacity >
                        <FontAwesome5 name="search" size={24} color='#000000' style={{ marginRight: hp('2%') }} />
                    </TouchableOpacity>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ marginLeft: hp('3%'), marginTop: hp('2%') }}>
                        <Text style={{ fontSize: hp('3%') }}> Location</Text>
                    </View>
                    <View style={styles.inputview}>

                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            <View >
                                <TouchableOpacity style={styles.slider} onPress={() => { this.props.navigation.navigate('ResortlistScreen') }}>
                                    <Image source={require('../../../assets/Images/1.png')} style={{ alignItems: 'center', height: hp('20%'), width: wp('50%'), marginTop: hp('1%'), borderRadius: hp('2%') }}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: hp('2.5%'), color: '#43434C' }}>Goa</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.slider} onPress={() => { }}>
                                    <Image source={require('../../../assets/Images/3.png')} style={{ alignItems: 'center', height: hp('20%'), width: wp('50%'), marginTop: hp('1%'), borderRadius: hp('2%') }}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: hp('2.5%'), color: '#43434C' }}>Mahabaleshwar</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.slider} onPress={() => { }}>
                                    <Image source={require('../../../assets/Images/2.png')} style={{ alignItems: 'center', height: hp('20%'), width: wp('50%'), marginTop: hp('1%'), borderRadius: hp('2%') }}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: hp('2.5%'), color: '#43434C' }}>Mumbai</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={{ marginLeft: hp('3%'), marginTop: hp('2%') }}>
                        <Text style={{ fontSize: hp('3%') }}>Tops Resort</Text>
                    </View>
                    <View style={{ alignItems: 'center', marginTop: hp('3%'), flex: 1, }}>
                        <TouchableOpacity style={styles.listview}>
                            <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%') }}>Rosewood Resort</Text>
                            <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%') }}>124,Maub Street,Goa</Text>
                            <TouchableOpacity style={{ marginLeft: hp('2%') }} onPress={() => { }}>
                                <Image source={require('../../../assets/Images/3.png')} style={{ alignItems: 'center', height: hp('20%'), width: wp('70%'), marginTop: hp('1%'), borderRadius: hp('2%') }}
                                />
                            </TouchableOpacity>
                            <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%') }}>$79 / night onwards </Text>

                        </TouchableOpacity>

                    </View>
                    <View style={{ alignItems: 'center', marginTop: hp('3%'), }}>
                        <View style={styles.listview}>
                            <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%') }}>Rosewood Resort</Text>
                            <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%') }}>124,Maub Street,Goa</Text>
                            <TouchableOpacity style={{ marginLeft: hp('2%') }} onPress={() => { }}>
                                <Image source={require('../../../assets/Images/3.png')} style={{ alignItems: 'center', height: hp('20%'), width: wp('70%'), marginTop: hp('1%'), borderRadius: hp('2%') }}
                                />
                            </TouchableOpacity>
                            <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%') }}>$79 / night onwards </Text>

                        </View>

                    </View>
                    <View style={{ alignItems: 'center', marginTop: hp('3%'), }}>
                        <View style={styles.listview}>
                            <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%') }}>Rosewood Resort</Text>
                            <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%') }}>124,Maub Street,Goa</Text>
                            <TouchableOpacity style={{ marginLeft: hp('2%') }} onPress={() => { }}>
                                <Image source={require('../../../assets/Images/3.png')} style={{ alignItems: 'center', height: hp('20%'), width: wp('70%'), marginTop: hp('1%'), borderRadius: hp('2%') }}
                                />
                            </TouchableOpacity>
                            <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%') }}>$79 / night onwards </Text>

                        </View>

                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: hp('5%')
    },
    headerview: {
        flexDirection: 'row',
        backgroundColor: "#F6C455",
        width: wp('90%'),
        height: hp('8%'),
        marginTop: hp('5%'),
        margin: hp('3%'),
        justifyContent: "space-between",
        alignItems: 'center',

    },
    inputview: {
        flexDirection: 'row',
        marginLeft: hp('1%'),
    },
    slider: {
        margin: hp('2%'),
    },
    listview: {
        flex: 1,
        flexDirection: 'column',
        borderRadius: hp('2%'),
        backgroundColor: "pink",
        width: wp('90%'),
        height: hp('35%'),


    },
})