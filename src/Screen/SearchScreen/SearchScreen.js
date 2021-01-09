import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, TextInput, } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import { FontAwesome5 } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { ResortLocationService } from '../../Services/ResortService/ResortService';
import Loading from '../../Components/Loader/Loading'

class SearchScreen extends Component {
    constructor(props) {
        super(props);
        this.searchproductList = [];
        this.state = {
            ResortLocationList: [],
            loader: true,
        };
    }

    getResortLocationList() {
        ResortLocationService().then(response => {
            this.setState({ ResortLocationList: response, loader: false })
            this.searchproductList = response;
        })
    }

    componentDidMount() {
        this.getResortLocationList();
    }

    wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    }

    async searchFilterFunction(text) {
        this.setState({ loader: true });
        const newData = this.searchproductList.filter(item => {
            const itemData = `${item.locationname.toUpperCase()}`
            const textData = text.toUpperCase();
            console.log('itemData', itemData)
            return itemData.indexOf(textData) > -1;
        });
        this.wait(1000).then(() => this.setState({ ResortLocationList: newData, loader: false, }));
    };

    renderResortLocationList = ({ item }) => (
        <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: hp('2%') }}>
            <TouchableOpacity style={styles.slider} onPress={() => this.props.navigation.navigate('ResortlistScreen', { item })}>
                <Image source={{ uri: item.property.image_icon ? item.property.image_icon : 'https://www.icon0.com/static2/preview2/stock-photo-photo-icon-illustration-design-70325.jpg' }}
                    style={{ alignItems: 'center', height: hp('25%'), width: wp('80%'), marginTop: hp('1%'), borderRadius: hp('2%') }} />
            </TouchableOpacity>
            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{ fontSize: hp('2.5%'), color: '#43434C' }}>{item.property.locationname}</Text>
            </TouchableOpacity>
        </View>
    )

    render() {
        const { ResortLocationList, loader } = this.state
        return (
            <View style={styles.container}>
                <View style={styles.statusbar}>
                    <TextInput
                        style={styles.statInput}
                        placeholder="Search Resort Location.."
                        type='clear'
                        placeholderTextColor="#737373"
                        returnKeyType="next"
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={(value) => this.searchFilterFunction(value)}
                    />
                    <FontAwesome5 name="search" size={24} color='#737373' style={{ alignItems: "flex-end", justifyContent: 'flex-end', marginRight: hp('2%') }} />
                </View>
                {(ResortLocationList == null) || (ResortLocationList && ResortLocationList.length == 0) ?
                    (loader == false ?
                        <Text style={{ textAlign: 'center', fontSize: hp('2%'), color: '#747474', marginTop: hp('10%') }}>No ResortLocation Available</Text>
                        : <Loading />
                    )
                    :
                    <>
                        <ScrollView
                            showsVerticalScrollIndicator={false}>
                            {ResortLocationList.length == 0 ?
                                <Text style={{ fontSize: hp('3%'), textAlign: 'center', marginTop: hp('30%'), color: '#747474' }}>No Resort Available</Text> :
                                <View style={{ marginTop: hp('1%') }}>
                                    <FlatList
                                        data={ResortLocationList}
                                        renderItem={this.renderResortLocationList}
                                        keyExtractor={item => `${item._id}`}
                                    />
                                </View>
                            }
                        </ScrollView>
                    </>
                }

            </View>
        );
    }
}

export default SearchScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    statusbar: {
        flexDirection: 'row',
        borderRadius: hp('1%'),
        backgroundColor: "#fff",
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
        marginTop: hp('5%'),
        width: wp('90%'),
        height: hp('6.5%'),
        marginLeft: hp('2.5%'),
        justifyContent: "flex-end",
        alignItems: "center"
    },
    statInput: {
        fontSize: hp('2.5%'),
        flex: 1,
        padding: hp('2%'),
        alignItems: "center",
    },
})