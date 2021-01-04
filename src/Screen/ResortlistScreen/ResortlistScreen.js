import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { ScrollView } from 'react-native-gesture-handler';
import { ResortListByLocationService } from '../../Services/ResortService/ResortService';

class ResortlistScreen extends Component {
    constructor(props) {
        super(props);
        this.resortlist = this.props.route.params.item._id;
        this.state = {
            ResortList: []
        };
    }

    getResortList() {
        let id = this.resortlist
        ResortListByLocationService(id).then(response => {
            this.setState({ ResortList: response })
        })
    }

    componentDidMount() {
        this.getResortList();
    }

    renderResortList = ({ item }) => (
        <View style={{ alignItems: 'center', marginTop: hp('3%'), flex: 1 }}>
            <TouchableOpacity style={styles.listview} onPress={() => this.props.navigation.navigate('ResortDetailsScreen', { item })}>
                <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%') }}>{item.resortname}</Text>
                <Text style={{ fontSize: hp('2%'), marginLeft: hp('2%'), color: '#605C5C' }}>{item.property.address}</Text>
                <TouchableOpacity style={{ marginLeft: hp('2%') }} onPress={() => this.props.navigation.navigate('ResortDetailsScreen', { item })}>
                    <Image source={{ uri: (item.property.images[0] ? item.property.images[0].attachment : 'https://www.icon0.com/static2/preview2/stock-photo-photo-icon-illustration-design-70325.jpg') }}
                        style={{ alignItems: 'center', height: hp('25%'), width: wp('83%'), marginTop: hp('1%'), borderRadius: hp('2%') }} />
                </TouchableOpacity>
            </TouchableOpacity>
        </View>
    )

    render() {
        const { ResortList } = this.state;
        return (
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {ResortList.length == 0 ? <Text>No Resort Available</Text> :
                        <FlatList
                            data={ResortList}
                            renderItem={this.renderResortList}
                            keyExtractor={item => `${item._id}`}
                        />
                    }
                </ScrollView>
            </View>
        );
    }
}

export default ResortlistScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
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