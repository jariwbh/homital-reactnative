import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, FlatList, BackHandler } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { ScrollView } from 'react-native-gesture-handler';
import { ResortLocationService, ResortListService } from '../../Services/ResortService/ResortService';
import Loading from '../../Components/Loader/Loading'

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ResortLocationList: [],
            ResortList: [],
        };

        this._unsubscribeSiFocus = this.props.navigation.addListener('focus', e => {
            BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
        });

        this._unsubscribeSiBlur = this.props.navigation.addListener('blur', e => {
            BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton,
            );
        });
    }

    getResortLocationList() {
        ResortLocationService().then(response => {
            this.setState({ ResortLocationList: response })
        })
    }

    getResortList() {
        ResortListService().then(response => {
            const slice = response.slice(0, 4)
            this.setState({ ResortList: slice })
        })
    }

    componentDidMount() {
        this.getResortLocationList();
        this.getResortList();
    }

    componentWillUnmount() {
        this._unsubscribeSiFocus();
        this._unsubscribeSiBlur();
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    handleBackButton = () => {
        BackHandler.exitApp()
        return true;
    }

    renderResortLocation = ({ item }) => (
        <View>
            <TouchableOpacity style={styles.slider} onPress={() => this.props.navigation.navigate('ResortlistScreen', { item })}>
                <Image source={{ uri: item.property.image_icon ? item.property.image_icon : 'https://www.icon0.com/static2/preview2/stock-photo-photo-icon-illustration-design-70325.jpg' }}
                    style={{ alignItems: 'center', height: hp('20%'), width: wp('50%'), marginTop: hp('1%'), borderRadius: hp('2%') }} />
            </TouchableOpacity>
            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: hp('2.5%'), color: '#43434C' }}>{item.property.locationname}</Text>
            </TouchableOpacity>
        </View>
    )

    renderResortList = ({ item }) => (
        <View style={{ alignItems: 'center', marginBottom: hp('3%'), flex: 1, }}>
            <TouchableOpacity style={styles.listview}>
                <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%') }}>{item.resortname}</Text>
                <Text style={{ fontSize: hp('2%'), marginLeft: hp('2%'), color: '#605C5C' }}>{item.property.address.length < 40 ? `${item.property.address}` : `${item.property.address.substring(0, 40)}...`}</Text>
                <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => this.props.navigation.navigate('ResortDetailsScreen', { item })}>
                    <Image source={{ uri: item.property.images[0] ? item.property.images[0].attachment : 'https://www.icon0.com/static2/preview2/stock-photo-photo-icon-illustration-design-70325.jpg' }}
                        style={{ alignItems: 'center', height: hp('30%'), width: wp('85%'), marginTop: hp('1%'), borderRadius: hp('2%') }} />
                </TouchableOpacity>
            </TouchableOpacity>
        </View>
    )

    render() {
        const { ResortLocationList, ResortList } = this.state;
        return (
            <View style={styles.container}>
                {(ResortLocationList == null) || (ResortLocationList && ResortLocationList.length == 0)
                    ? <Loading /> :
                    <ScrollView
                        showsVerticalScrollIndicator={false}>
                        <View style={styles.inputview}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            >
                                <FlatList
                                    style={{ flexDirection: 'column' }}
                                    numColumns={10000}
                                    data={ResortLocationList}
                                    renderItem={this.renderResortLocation}
                                    keyExtractor={item => `${item._id}`}
                                />
                            </ScrollView>
                        </View>
                        <View style={{ marginLeft: hp('3%'), marginTop: hp('2%') }}>
                            <Text style={{ fontSize: hp('3%') }}>Tops Resort</Text>
                        </View>
                        <View style={{ marginTop: hp('3%') }}>
                            <FlatList
                                data={ResortList}
                                renderItem={this.renderResortList}
                                keyExtractor={item => `${item._id}`}
                            />
                        </View>
                    </ScrollView>
                }
            </View>
        );
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',

    },
    inputview: {
        flexDirection: 'row',
        marginLeft: hp('1%'),
    },
    slider: {
        margin: hp('1%'),
    },
    listview: {
        flex: 1,
        flexDirection: 'column',
        borderRadius: hp('2%'),
        backgroundColor: "#FFFFFF",
        width: wp('93%'),
        height: hp('40%'),
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
    }
})