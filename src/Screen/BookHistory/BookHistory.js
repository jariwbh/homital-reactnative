import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity, StyleSheet, FlatList, RefreshControl, Image, Button } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import moment from 'moment'
import { BookHistoryService } from '../../Services/BookHistoryService/BookHistoryService';
import AsyncStorage from '@react-native-community/async-storage'
import Loading from '../../Components/Loader/Loading'

export class BookHistory extends Component {
    constructor(props) {
        super(props);
        this.userid = null;
        this.state = {
            _id: null,
            BookHistoryService: [],
            refreshing: false,
            loader: true,
        }
    }

    getdata = async () => {
        var getUser = await AsyncStorage.getItem('@authuser')
        if (getUser == null) {
            setTimeout(() => {
                this.props.navigation.replace('LoginScreen')
            }, 5000);
        } else {
            this.userid = JSON.parse(getUser)
            this.BookHistoryService(this.userid._id)
            this.setState({ _id: this.userid._id })
        }
    }

    wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    }

    onRefresh = () => {
        const { _id } = this.state;
        this.setState({ refreshing: true })
        this.BookHistoryService(_id)
        this.wait(3000).then(() => this.setState({ refreshing: false }));
    }

    componentDidMount() {
        this.getdata()
    }

    BookHistoryService(id) {
        BookHistoryService(id).then(data => {
            this.setState({ BookHistoryService: data })
            this.wait(1000).then(() => this.setState({ loader: false }));
        })
    }

    renderBookService = ({ item }) => (
        <View style={{ alignItems: 'center', marginBottom: hp('3%'), flex: 1 }}>
            <View style={styles.listview}>
                <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2.2%') }}>{item.refid.resortid.resortname}</Text>
                <Text style={{ fontSize: hp('2%'), marginLeft: hp('2.2%'), color: '#605C5C' }}>{item.refid.resortid.property.address.length < 40 ? `${item.refid.resortid.property.address}` : `${item.refid.resortid.property.address.substring(0, 40)}...`}</Text>
                <Text style={styles.bookingtext}> BOOKING ID #{item.prefix + item.bookingnumber + ' ' + '(' + item.refid.title + ')'} </Text>
                <View style={{ marginLeft: hp('2%') }}>
                    <Image source={{ uri: (item.refid.gallery[0].attachment ? item.refid.gallery[0].attachment : 'https://www.icon0.com/static2/preview2/stock-photo-photo-icon-illustration-design-70325.jpg') }}
                        style={{ alignItems: 'center', height: hp('30%'), width: wp('85%'), marginTop: hp('1%'), borderRadius: hp('2%') }} />
                </View>
                <View style={{ flexDirection: 'column' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: hp('2%'), color: "black", paddingTop: hp('1%'), marginLeft: hp('2%') }}> CHECKIN - {moment(item.checkin).format('ll')}</Text>
                        <Text style={{ marginTop: hp('1%'), marginRight: hp('5%'), fontSize: hp('3%') }}>₹ {item.refid.charges}</Text>
                    </View>
                    <TouchableOpacity style={styles.chargestext}>
                        <Text style={{ fontSize: hp('2%'), color: "black", marginLeft: hp('2%'), marginTop: hp('-0.5%'), }}> CHECKOUT - {moment(item.checkout).format('ll')}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

    render() {
        const { BookHistoryService, refreshing, loader } = this.state;
        this.wait(3000).then(() => this.setState({ refreshing: false }));
        return (
            <View style={styles.container}>
                {(BookHistoryService === null) || (BookHistoryService && BookHistoryService.length == 0)
                    ?
                    (loader == false ?
                        <View style={{ alignItems: "center", justifyContent: 'center' }}>
                            <View>
                                <View style={{ alignItems: "center", justifyContent: 'center' }}>
                                    <Text style={{ alignItems: "center", justifyContent: 'center', fontSize: hp('2%'), marginLeft: hp('15%'), color: '#595959' }}>Not Records Founds</Text>
                                </View>
                            </View>
                        </View>
                        : <Loading />
                    )
                    :
                    <>
                        <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={this.onRefresh} />} showsVerticalScrollIndicator={false}>
                            <View style={{ flex: 1, marginTop: hp('3.5%') }}>
                                <FlatList
                                    data={BookHistoryService}
                                    renderItem={this.renderBookService}
                                    keyExtractor={item => `${item._id}`}
                                />
                            </View>
                        </ScrollView>
                    </>}
            </View>
        )
    }
}

export default BookHistory

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover'
    },
    header: {
        alignItems: "center",
        marginTop: hp('3.5%'),
    },
    headertext: {
        fontSize: hp('3%'),
        margin: hp('1%')
    },
    onservice: {
        paddingHorizontal: hp('2%'),
        paddingBottom: hp('2%'),
        marginTop: hp('3%'),
    },
    onservicetext: {
        fontSize: hp('2.5%'),
    },
    servicename: {
        aspectRatio: 2.0,
        paddingHorizontal: hp('2%'),
        width: wp("90%"),
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: hp('2.5%'),
        borderRadius: wp('6%'),
        alignItems: "center",
        position: 'relative',
        backgroundColor: "#fff",
        borderColor: '#fff',
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
    },
    servicetext: {
        fontSize: hp('2.5%'),
    },
    chargestext: {
        color: "#999999",
    },
    bookingtext: {
        color: "#999999",
        paddingTop: hp('1%'),
        marginLeft: hp('2%'),
        color: "black",
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    genreltext: {
        paddingTop: hp('1%'),
        color: '#FFBA00',
        fontSize: hp('2.5%'),
        paddingBottom: hp('1%'),
    },
    lastservice: {
        paddingHorizontal: hp('3%'),
        paddingBottom: hp('1%'),
    },
    lastservicetext: {
        fontSize: hp('2.5%'),
    },
    listview: {
        flex: 1,
        flexDirection: 'column',
        borderRadius: hp('2%'),
        backgroundColor: "#FFFFFF",
        width: wp('93%'),
        height: hp('50%'),
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 5,
    },
})
