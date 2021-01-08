import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Pressable } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { RoomListService } from "../../Services/RoomService/RoomService";

class RoomlistScreen extends Component {
    constructor(props) {
        super(props);
        this.resortID = this.props.route.params.resortDetails._id;
        this.state = {
            RoomList: []
        };
    }

    componentDidMount() {
        this.getRoomList()
    }

    getRoomList() {
        RoomListService(this.resortID).then(response => {
            console.log('response', response)
            this.setState({ RoomList: response })
        })
    }

    renderRoomList = ({ item }) => (
        <Pressable style={{ justifyContent: 'center', alignItems: 'center', marginBottom: hp('5%') }} onPress={() => this.props.navigation.navigate('RoomDetailScreen', { item })}>
            <Image source={{ uri: item.gallery[0].attachment ? item.gallery[0].attachment : 'https://www.icon0.com/static2/preview2/stock-photo-photo-icon-illustration-design-70325.jpg' }}
                style={{ width: wp('90%'), height: hp('30%') }} />
            <View style={styles.listview}>
                <Text style={{ fontSize: hp('2.5%'), flex: 0.7, marginLeft: hp('1%') }}>{item.title}</Text>
                <View style={{ flexDirection: 'row', }}>
                    <Text style={{ fontSize: hp('2.5%'), flex: 1, marginLeft: hp('1%') }}>₹ {item.charges}</Text>
                    <TouchableOpacity style={{ marginRight: '5%', flexDirection: 'row' }} onPress={() => { this.props.navigation.navigate('RoomDetailScreen', { item }) }}>
                        <Text style={{ fontSize: hp('2.5%'), color: '#FD9B02' }}>View Details</Text>
                        <Ionicons name="md-arrow-forward" size={24} color="black" color="#FD9B02" style={{ paddingLeft: hp('1%'), marginTop: hp('0.5%') }} />
                    </TouchableOpacity>
                </View>
            </View>
        </Pressable>
    )

    render() {
        const { RoomList } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.inputview}></View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {(RoomList == null) || (RoomList && RoomList.length == 0)
                        ?
                        <Text style={{ textAlign: 'center', fontSize: hp('3%'), }}>Not Room Available</Text>
                        : <FlatList
                            style={{ flexDirection: 'column' }}
                            data={RoomList}
                            renderItem={this.renderRoomList}
                            keyExtractor={item => `${item._id}`}
                        />
                    }
                </ScrollView>
            </View>
        );
    }
}


export default RoomlistScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
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
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
    }
})