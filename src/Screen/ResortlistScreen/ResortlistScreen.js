import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, TextInput } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { ScrollView } from 'react-native-gesture-handler';
import { ResortListByLocationService } from '../../Services/ResortService/ResortService';
import { FontAwesome5, Foundation, AntDesign, Fontisto } from '@expo/vector-icons';
import Loading from '../../Components/Loader/Loading'

class ResortlistScreen extends Component {
    constructor(props) {
        super(props);
        this.searchInputRef = React.createRef()
        this.resortLocationID = this.props.route.params.item._id;
        this.searchproductList = [];
        this.state = {
            ResortList: [],
            loader: true
        };
    }

    getResortList() {
        let id = this.resortLocationID
        ResortListByLocationService(id).then(response => {
            this.setState({ ResortList: response })
            this.searchproductList = response;
            this.wait(1000).then(() => this.setState({ loader: false }));
        })
    }

    componentDidMount() {
        this.getResortList();
    }

    wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    }

    searchFilterFunction(text) {
        this.setState({ loader: true });
        const newData = this.searchproductList.filter(item => {
            const itemData = `${item.resortname.toUpperCase()}`
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        this.wait(1000).then(() => this.setState({ loader: false, ResortList: newData }));
    };

    renderResortList = ({ item }) => (
        <View style={{ alignItems: 'center', marginBottom: hp('3%'), flex: 1 }}>
            <TouchableOpacity style={styles.listview} onPress={() => this.props.navigation.navigate('ResortDetailsScreen', { item })}>
                <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%') }}>{item.resortname}</Text>
                <Text style={{ fontSize: hp('2%'), marginLeft: hp('2%'), color: '#605C5C' }}>{item.property.address.length < 40 ? `${item.property.address}` : `${item.property.address.substring(0, 40)}...`}</Text>
                <TouchableOpacity style={{ marginLeft: hp('2%') }} onPress={() => this.props.navigation.navigate('ResortDetailsScreen', { item })}>
                    <Image source={{ uri: (item.property.images[0] ? item.property.images[0].attachment : 'https://www.icon0.com/static2/preview2/stock-photo-photo-icon-illustration-design-70325.jpg') }}
                        style={{ alignItems: 'center', height: hp('30%'), width: wp('85%'), marginTop: hp('1%'), borderRadius: hp('2%') }} />
                </TouchableOpacity>
            </TouchableOpacity>
        </View>
    )

    render() {
        const { ResortList, loader } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.statusbar}>
                    <TextInput
                        style={styles.statInput}
                        placeholder="Type here to search resort & hotels"
                        type='clear'
                        placeholderTextColor="#737373"
                        returnKeyType="done"
                        autoCapitalize="none"
                        blurOnSubmit={false}
                        ref={this.searchInputRef}
                        autoCorrect={false}
                        onChangeText={(value) => this.searchFilterFunction(value)}
                    />
                    <TouchableOpacity onPress={() => this.searchInputRef.current.focus()}>
                        <FontAwesome5 name="search" size={24} color='#737373'
                            style={{ alignItems: "flex-end", justifyContent: 'flex-end', marginRight: hp('2%') }} />
                    </TouchableOpacity>
                </View>
                {(ResortList == null) || (ResortList && ResortList.length == 0) ?
                    (loader == false ?
                        <Text style={{ textAlign: 'center', fontSize: hp('2%'), color: '#747474', marginTop: hp('10%') }}>No Resort Available</Text>
                        : <Loading />
                    )
                    :
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{ marginTop: hp('1%') }}>
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

export default ResortlistScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
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
        marginTop: hp('2%'),
        width: wp('90%'),
        height: hp('6.5%'),
        marginLeft: hp('2.5%'),
        justifyContent: "flex-end",
        alignItems: "center",
        marginBottom: hp('2%')
    },
    statInput: {
        fontSize: hp('2.5%'),
        flex: 1,
        padding: hp('2%'),
        alignItems: "center",
    },
})