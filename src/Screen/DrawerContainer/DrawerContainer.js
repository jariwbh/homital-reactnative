import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './styles';
import { DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

export default class DrawerContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.content}>
                <View style={{ flex: 1 }}>
                    <View style={styles.drawerContainer}>
                        <View style={styles.userInfoSection}>
                            <View style={{ flexDirection: 'row', marginTop: 15 }}>
                                <Avatar.Image
                                    source={{
                                        uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                                    }}
                                    size={50}
                                />
                                <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                    <Title style={styles.title}>John Doe</Title>
                                    <Caption style={styles.caption}>@j_doe</Caption>
                                </View>
                            </View>
                        </View>
                        <Drawer.Section style={styles.drawerSection}>
                            <DrawerItem
                                icon={({ color, size }) => (
                                    <Icon
                                        name="home-outline"
                                        color={color}
                                        size={size}
                                    />
                                )}
                                label="Home"
                                onPress={() => { navigation.navigate('HomeScreen') }}
                            />
                            <DrawerItem
                                icon={({ color, size }) => (
                                    <Icon
                                        name="account-outline"
                                        color={color}
                                        size={size}
                                    />
                                )}
                                label="Profile"
                                onPress={() => { navigation.navigate('MyProfile') }}
                            />
                            <DrawerItem
                                icon={({ color, size }) => (
                                    <FontAwesome
                                        name="th-list"
                                        color={color}
                                        size={size}
                                    />
                                )}
                                label="Categories"
                                onPress={() => { navigation.navigate('Categories') }}
                            />
                            <DrawerItem
                                icon={({ color, size }) => (
                                    <Icon
                                        name="settings-outline"
                                        color={color}
                                        size={size}
                                    />
                                )}
                                label="Settings"
                                onPress={() => { navigation.navigate('SettingScreen') }}
                            />
                            <DrawerItem
                                icon={({ color, size }) => (
                                    <Icon
                                        name="account-check-outline"
                                        color={color}
                                        size={size}
                                    />
                                )}
                                label="Support"
                                onPress={() => { navigation.navigate('SupportScreen') }}
                            />
                        </Drawer.Section>
                    </View>
                    <Drawer.Section style={styles.bottomDrawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="exit-to-app"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Sign Out"
                            onPress={() => { signOut() }}
                        />
                    </Drawer.Section>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    content: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 40
    },
    container: {
        flex: 1,
        alignItems: 'flex-start',
        paddingHorizontal: 20
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});
