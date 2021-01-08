import React, { Component } from 'react'
import { Text, View, ScrollView, ImageBackground, StyleSheet, FlatList, ActivityIndicator, RefreshControl } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import moment from 'moment'
import { BookHistoryService } from '../../Services/BookHistoryService/BookHistoryService';

export class BookHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            BookHistoryService: [],
            refreshing: false,
            loader: true,
        }
    }

    BookHistoryService() {
        BookHistoryService().then(data => {
            this.setState({ BookHistoryService: data })
            this.wait(1000).then(() => this.setState({ loader: false }));
        })
    }

    wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    }

    onRefresh = () => {
        this.setState({ refreshing: true })
        this.BookHistoryService()
        this.wait(3000).then(() => this.setState({ refreshing: false }));
    }

    componentDidMount() { this.BookHistoryService() }

    renderBookService = ({ item }) => (
        <View style={styles.servicename}>
            <View style={{ flexDirection: 'column' }}>
                <Text style={styles.servicetext}>Hotel Name</Text>
                <Text style={styles.bookingtext}> Booking ID - {item.prefix + item.bookingnumber}</Text>
                <Text style={styles.bookingtext}> Booking Date - {moment(item.bookingdate).format('ll')}</Text>
                <Text style={styles.genreltext}>Room Name - {item.refid.title}</Text>
                <Text style={styles.genreltext}>Room charges - {item.refid.charges}</Text>
            </View>
        </View>
    );

    render() {
        const { BookHistoryService, refreshing, loader } = this.state;
        this.wait(3000).then(() => this.setState({ refreshing: false }));
        return (
            <View style={styles.container}>
                <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={this.onRefresh} />} showsVerticalScrollIndicator={false}>
                    {(BookHistoryService === null) || (BookHistoryService && BookHistoryService.length == 0)
                        ?
                        (loader == false ?
                            <View style={{ alignItems: "center", justifyContent: 'center' }}>
                                <View style={styles.servicename}>
                                    <View style={{ alignItems: "center", justifyContent: 'center' }}>
                                        <Text style={{ alignItems: "center", justifyContent: 'center', fontSize: hp('2%'), marginLeft: hp('15%'), color: '#595959' }}>Data Not Available</Text>
                                    </View>
                                </View>
                            </View>
                            : <ActivityIndicator size="large" color="#AAAAAA" />
                        )
                        :
                        <>
                            <View style={{ alignItems: 'center', justifyContent: 'space-between', flex: 1, marginTop: hp('3.5%'), }}>
                                <FlatList
                                    data={BookHistoryService}
                                    renderItem={this.renderBookService}
                                    keyExtractor={item => `${item._id}`}
                                />
                            </View>
                        </>}
                </ScrollView>
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
    bookingtext: {
        color: "#999999",
        paddingTop: hp('1%'),
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
})
