import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import { FontAwesome5, AntDesign, Fontisto } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { RoomListService } from '../../Services/RoomService/RoomService';

class RoomlistScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            RoomList: []
        };
    }
    getRoomtList() {
        RoomListService().then(response => {
            // console.log({ RoomList: response });
            this.setState({ RoomList: response })
        })
    }
    componentDidMount() {
        this.getRoomtList();
    }

    renderRoomList = ({ item }) => (
        <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: hp('5%') }}>
            <Image source={{ uri: item.gallery[0].attachment ? item.gallery[0].attachment : 'https://www.icon0.com/static2/preview2/stock-photo-photo-icon-illustration-design-70325.jpg' }} style={{
                width: wp('90%'),
                height: hp('50%'),
            }} />
            <View style={styles.listview}>
                <Text style={{ fontSize: hp('2.5%'), flex: 0.7, marginLeft: hp('1%') }}>{item.title}</Text>
                <View style={{ flexDirection: 'row', }}>
                    <Text style={{ fontSize: hp('2.5%'), flex: 1, marginLeft: hp('1%') }}>{item.charges}</Text>
                    <TouchableOpacity style={{ marginRight: '5%', flexDirection: 'row' }} onPress={() => { this.props.navigation.navigate('RoomDetailScreen', { item }) }}>
                        <Text style={{ fontSize: hp('2.5%'), color: '#FD9B02' }}>View Details</Text>
                        <FontAwesome5 name="arrow-right" size={24} color="#FD9B02" style={{ paddingLeft: hp('1%'), marginTop: hp('0.5%') }} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
    render() {
        const { RoomList } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.inputview}></View>
                <ScrollView
                    Vertical
                    showsVerticalScrollIndicator={false}
                >
                    <FlatList
                        style={{ flexDirection: 'column' }}
                        // numColumns={10000}
                        data={RoomList}
                        renderItem={this.renderRoomList}
                        keyExtractor={item => `${item._id}`}
                    />
                    {/* <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: hp('5%') }}>
                        <Image source={require('../../../assets/Images/1.png')} style={{ width: wp('90') }} />
                        <View style={styles.listview}>
                            <Text style={{ fontSize: hp('2.5%'), flex: 0.7, marginLeft: hp('1%') }}>Luxurious Single Room</Text>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={{ fontSize: hp('2.5%'), flex: 1, marginLeft: hp('1%') }}>$ 79 / night</Text>
                                <TouchableOpacity style={{ marginRight: '5%', flexDirection: 'row' }} onPress={() => { this.props.navigation.navigate('RoomDetailScreen') }}>
                                    <Text style={{ fontSize: hp('2.5%'), color: '#FD9B02' }}>View Details</Text>
                                    <FontAwesome5 name="arrow-right" size={24} color="#FD9B02" style={{ paddingLeft: hp('1%'), marginTop: hp('0.5%') }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: hp('5%') }}>
                        <Image source={require('../../../assets/Images/2.png')} style={{ width: wp('90') }} />
                        <View style={styles.listview}>
                            <Text style={{ fontSize: hp('2.5%'), flex: 0.7, marginLeft: hp('1%') }}>Luxurious Double Room</Text>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={{ fontSize: hp('2.5%'), flex: 1, marginLeft: hp('1%') }}>$ 119 / night</Text>
                                <TouchableOpacity style={{ marginRight: '5%', flexDirection: 'row' }}>
                                    <Text style={{ fontSize: hp('2.5%'), color: '#FD9B02' }}>View Details</Text>
                                    <FontAwesome5 name="arrow-right" size={24} color="#FD9B02" style={{ paddingLeft: hp('1%'), marginTop: hp('0.5%') }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: hp('5%') }}>
                        <Image source={require('../../../assets/Images/3.png')} style={{ width: wp('90') }} />
                        <View style={styles.listview}>
                            <Text style={{ fontSize: hp('2.5%'), flex: 0.7, marginLeft: hp('1%') }}>Luxurious Single Room</Text>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={{ fontSize: hp('2.5%'), flex: 1, marginLeft: hp('1%') }}>$ 80 / night</Text>
                                <TouchableOpacity style={{ marginRight: '5%', flexDirection: 'row' }}>
                                    <Text style={{ fontSize: hp('2.5%'), color: '#FD9B02' }}>View Details</Text>
                                    <FontAwesome5 name="arrow-right" size={24} color="#FD9B02" style={{ paddingLeft: hp('1%'), marginTop: hp('0.5%') }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: hp('5%') }}>
                        <Image source={require('../../../assets/Images/4.png')} style={{ width: wp('90') }} />
                        <View style={styles.listview}>
                            <Text style={{ fontSize: hp('2.5%'), flex: 0.7, marginLeft: hp('1%') }}>Luxurious Double Room</Text>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={{ fontSize: hp('2.5%'), flex: 1, marginLeft: hp('1%') }}>$ 120 / night</Text>
                                <TouchableOpacity style={{ marginRight: '5%', flexDirection: 'row' }}>
                                    <Text style={{ fontSize: hp('2.5%'), color: '#FD9B02' }}>View Details</Text>
                                    <FontAwesome5 name="arrow-right" size={24} color="#FD9B02" style={{ paddingLeft: hp('1%'), marginTop: hp('0.5%') }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View> */}
                </ScrollView>
            </View>
        );
    }
}


export default RoomlistScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: hp('-1%')
    },
    inputview: {
        marginTop: hp('3%'),
    },
    listview: {
        flexDirection: 'column',
        backgroundColor: "#FFFFFF",
        width: wp('90%'),
        height: hp('10%'),
        marginTop: hp('-0.1%'),
    }
})