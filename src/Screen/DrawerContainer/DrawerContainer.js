import React from 'react';
import { SafeAreaView, View, StyleSheet, Image, Avatar, Text, Linking } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { AntDesign } from 'react-native-vector-icons';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
const DrawerContainer = (props) => {
    const proileImage = '../../../assets/s1.png';
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Image style={styles.avatar} source={require('../../../assets/Images/userimage.jpg')} />
                <Text style={{ fontSize: hp('2%') }}>Welcome , Mahesh Patel</Text>
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
                    onPress={() => { props.navigation.navigate('LoginScreen') }} />
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