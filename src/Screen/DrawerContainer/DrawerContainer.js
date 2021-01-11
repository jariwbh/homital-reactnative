import React, { useState } from 'react'
import { SafeAreaView, View, StyleSheet, Image, Text, ToastAndroid } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { AntDesign } from 'react-native-vector-icons';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import AsyncStorage from '@react-native-community/async-storage';

const DrawerContainer = (props) => {
    const [userData, setuser] = useState(null);
    async function getUserDetails() {
        var getUser = await AsyncStorage.getItem('@authuser')
        if (getUser == null) {
            setTimeout(() => {
                this.props.navigation.replace('LoginScreen')
            }, 5000);
        } else {
            setuser(JSON.parse(getUser));
        }
    };

    if (userData == null) {
        getUserDetails()
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Image style={styles.avatar} source={{ uri: userData && userData !== null ? userData.profilepic : '../../../assets/Images/userimage.jpg' }} />
                <Text style={{ fontSize: hp('2%') }}>Welcome , {userData && userData.property.fullname}</Text>
            </View>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
                <DrawerItem icon={({ color, size }) => (
                    <AntDesign
                        name="logout"
                        color={color}
                        size={size}
                    />
                )}
                    label="Log Out"
                    onPress={() => {
                        AsyncStorage.removeItem('@authuser');
                        ToastAndroid.show("Log Out Success!", ToastAndroid.SHORT);
                        props.navigation.navigate('LoginScreen');
                    }} />
            </DrawerContentScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    sideMenuProfileIcon: {
        marginTop: 25,
        resizeMode: 'center',
        width: 150,
        height: 50,
        alignSelf: 'center',
    },
    customItem: {
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: hp('10%'),
        height: hp('10%'),
        borderRadius: wp('20%'),
        alignSelf: 'center',
        marginTop: wp('10%'),
        marginBottom: hp('2%')
    },
});

export default DrawerContainer;