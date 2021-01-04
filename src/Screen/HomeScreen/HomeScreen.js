import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, FlatList, BackHandler } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { ScrollView } from 'react-native-gesture-handler';
import { ResortLocationService, ResortListService } from '../../Services/ResortService/ResortService';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ResortLocationList: [],
            ResortList: []
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
            this.setState({ ResortList: response })
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
            <TouchableOpacity style={styles.slider} onPress={() => this.props.navigation.navigate('Resort')}>
                <Image source={{ uri: item.property.image_icon ? item.property.image_icon : 'https://www.icon0.com/static2/preview2/stock-photo-photo-icon-illustration-design-70325.jpg' }}
                    style={{ alignItems: 'center', height: hp('20%'), width: wp('50%'), marginTop: hp('1%'), borderRadius: hp('2%') }} />
            </TouchableOpacity>
            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: hp('2.5%'), color: '#43434C' }}>{item.property.locationname}</Text>
            </TouchableOpacity>
        </View>
    )

    render() {
        const { ResortLocationList } = this.state;
        return (
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
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
        backgroundColor: "#FFFFFF",
        width: wp('90%'),
        height: hp('35%'),
    }
})