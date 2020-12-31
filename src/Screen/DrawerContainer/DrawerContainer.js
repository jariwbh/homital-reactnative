import React from 'react';
import { SafeAreaView, View, StyleSheet, Image, Text, Linking } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DrawerContainer = (props) => {
    const proileImage = '../../../assets/s1.png';
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Image
                source={require(proileImage)}
                style={styles.sideMenuProfileIcon}
            />
            <View style={{ flexDirection: 'row' }}>
                <Text>Welcome , Mahesh Patel</Text>
                <Icon name="home" color="orange" size={25} />
            </View>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
                <DrawerItem icon={({ color, size }) => (
                    <Icon
                        name="home"
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
    iconStyle: {
        width: 15,
        height: 15,
        marginHorizontal: 5,
    },
    customItem: {
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default DrawerContainer;