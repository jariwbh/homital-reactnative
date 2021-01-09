import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Pressable } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { RoomListService } from "../../Services/RoomService/RoomService";
import Loading from '../../Components/Loader/Loading'

class RoomlistScreen extends Component {
    constructor(props) {
        super(props);
        this.resortID = this.props.route.params.resortDetails._id;
        this.state = {
            RoomList: [],
            loader: true
        };
    }

    componentDidMount() {
        this.getRoomList()
    }

    getRoomList() {
        RoomListService(this.resortID).then(response => {
            this.setState({ RoomList: response, loader: false })
        })
    }

    renderRoomList = ({ item }) => (
        <Pressable style={{ justifyContent: 'center', alignItems: 'center', marginBottom: hp('3%') }} onPress={() => this.props.navigation.navigate('RoomDetailScreen', { item })}>
            <Image source={{ uri: item.gallery[0].attachment ? item.gallery[0].attachment : 'https://www.icon0.com/static2/preview2/stock-photo-photo-icon-illustration-design-70325.jpg' }}
                style={{ width: wp('92%'), height: hp('30%'), borderTopLeftRadius: hp('1%'), borderTopRightRadius: hp('1%') }} />
            <View style={styles.listview}>
                <Text style={{ fontSize: hp('2.5%'), flex: 0.7, marginLeft: hp('1%'), marginTop: hp('1%'), textTransform: 'capitalize' }}>{item.title}</Text>
                <View style={{ flexDirection: 'row', }}>
                    <Text style={{ fontSize: hp('2.5%'), flex: 1, marginLeft: hp('1%'), color: '#605C5C' }}>₹ {item.charges} / {item.bookingtype}</Text>
                    <TouchableOpacity style={{ marginRight: '5%', flexDirection: 'row' }} onPress={() => { this.props.navigation.navigate('RoomDetailScreen', { item }) }}>
                        <Text style={{ fontSize: hp('2.5%'), color: '#FD9B02' }}>View Details</Text>
                        <Ionicons name="md-arrow-forward" size={23} color="black" color="#FD9B02" />
                    </TouchableOpacity>
                </View>
            </View>
        </Pressable>
    )

    render() {
        const { RoomList, loader } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.inputview}></View>
                {(RoomList == null) || (RoomList && RoomList.length == 0)
                    ?
                    (loader == false ?
                        <Text style={{ textAlign: 'center', fontSize: hp('3%'), color: '#747474', marginTop: hp('5%') }}>Not Room Available</Text>
                        : <Loading />
                    )
                    :
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <FlatList
                            style={{ flexDirection: 'column' }}
                            data={RoomList}
                            renderItem={this.renderRoomList}
                            keyExtractor={item => `${item._id}`}
                        />
                    </ScrollView>
                }
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
        borderBottomLeftRadius: hp('1%'),
        borderBottomRightRadius: hp('1%'),
        flexDirection: 'column',
        backgroundColor: "#FFFFFF",
        width: wp('92%'),
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