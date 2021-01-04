import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
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
                <ScrollView showsVerticalScrollIndicator={false}>
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

export default ResortlistScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: hp('2%'),
        backgroundColor: '#FFFFFF'
    },
    listview: {
        flex: 1,
        flexDirection: 'column',
        borderRadius: hp('2%'),
        backgroundColor: "#FFFFFF",
        width: wp('90%'),
        height: hp('35%'),
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
    }
})