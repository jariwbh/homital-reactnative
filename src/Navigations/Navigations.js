import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "../Screen/LoginScreen/LoginScreen";
import ForgotPassword from "../Screen/ForgotpassScreen/ForgotPassword";
import RegisterScreen from "../Screen/RegisterScreen/RegisterScreen";
import HomeScreen from "../Screen/HomeScreen/HomeScreen"
import RoomDetailScreen from "../Screen/RoomDetailScreen/RoomDetailScreen"
import { createDrawerNavigator } from '@react-navigation/drawer';
import MyProfileScreen from '../Screen/MyProfileScreen/MyProfileScreen'
import { View, TouchableOpacity, Image, Text } from 'react-native';
import RoomlistScreen from '../Screen/RoomlistScreen/RoomlistScreen'
import ThankYouScreen from '../Screen/ThankyouScreen/ThankYouScreen'
import SearchScreen from '../Screen/SearchScreen/SearchScreen'
import ResortDetailsScreen from "../Screen/ResortDetailsScreen/ResortDetailsScreen";
import Ionicons from 'react-native-vector-icons/Ionicons';
import DrawerContainer from '../Screen/DrawerContainer/DrawerContainer'
import { FontAwesome5, Foundation, AntDesign } from '@expo/vector-icons';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import BackButton from '../Components/BackButton/BackButton'
import BookScreen from '../Screen/BookScreen/BookScreen'
import ResortlistScreen from '../Screen/ResortlistScreen/ResortlistScreen'
import Feather from "react-native-vector-icons/Feather";
import BookHistory from "../Screen/BookHistory/BookHistory";

const NavigationDrawerStructure = (props) => {
    const toggleDrawer = () => {
        props.navigationProps.toggleDrawer();
    };
    return (
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => toggleDrawer()}>
                <Feather name="menu" size={35} color="#262626" style={{ marginLeft: hp('2%') }} />
            </TouchableOpacity>
        </View>
    );
}

const Drawer = createDrawerNavigator();
function NavigationsDrawer(props) {
    return (
        <Drawer.Navigator initialRouteName="HomeScreen" headerMode="screen"
            drawerContentOptions={{ activeTintColor: '#000000', itemStyle: { marginVertical: 5 } }}
            drawerContent={(props) => <DrawerContainer {...props} />}>

            <Drawer.Screen name="MainScreen" options={{
                drawerLabel: 'Home', drawerIcon: ({ focused, size }) => (
                    <Ionicons
                        name="md-home"
                        size={size}
                        color={focused ? '#F6C455' : '#ccc'}
                    />
                )
            }} component={homeScreenStack} />

            <Drawer.Screen name="BookHistory" options={{
                drawerLabel: 'Book History', drawerIcon: ({ focused, size }) => (
                    <AntDesign
                        name="profile"
                        size={size}
                        color={focused ? '#F6C455' : '#ccc'}
                    />
                )
            }} component={BookHistoryStack} />

            <Drawer.Screen name="MyProfileScreen" options={{
                drawerLabel: 'My Profile', drawerIcon: ({ focused, size }) => (
                    <FontAwesome5
                        name="user"
                        size={size}
                        color={focused ? '#F6C455' : '#ccc'}
                    />
                )
            }} component={MyProfileScreenStack} />
        </Drawer.Navigator>
    )
}

const Stack = createStackNavigator();
export default NavigationsApp = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode='none' initialRouteName="LoginScreen" >
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
                <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
                <Stack.Screen name="NavigationsDrawer" component={NavigationsDrawer} />
                <Stack.Screen name="MyProfileScreen" component={MyProfileScreenStack} />
                <Stack.Screen name="SearchScreen" component={SearchScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

function MyProfileScreenStack({ navigation }) {
    return (
        <Stack.Navigator initialRouteName="MyProfileScreen">
            <Stack.Screen
                name="MyProfileScreen"
                component={MyProfileScreen}
                options={{
                    title: 'Update Profile',
                    headerLeft: () =>
                        <NavigationDrawerStructure
                            navigationProps={navigation}
                        />,
                    headerStyle: {
                        backgroundColor: '#F6C455'
                    },
                    headerTintColor: '#000000',
                    headerTitleAlign: 'center',
                }}
            />
        </Stack.Navigator>
    )
}

function BookHistoryStack({ navigation }) {
    return (
        <Stack.Navigator initialRouteName="BookHistory">
            <Stack.Screen
                name="BookHistory"
                component={BookHistory}
                options={{
                    title: 'Book History',
                    headerLeft: () =>
                        <NavigationDrawerStructure
                            navigationProps={navigation}
                        />,
                    headerStyle: {
                        backgroundColor: '#F6C455'
                    },
                    headerTintColor: '#000000',
                    headerTitleAlign: 'center',
                }}
            />
        </Stack.Navigator>
    )
}

function homeScreenStack({ navigation }) {
    return (
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    title: '',
                    headerLeft: () =>
                        <NavigationDrawerStructure
                            navigationProps={navigation}
                        />,
                    headerRight: () =>
                        <FontAwesome5 name="search" size={24} color='#262626' style={{ marginRight: hp('2%') }} onPress={() => navigation.navigate("SearchScreen")} />,
                    headerStyle: {
                        backgroundColor: '#F6C455'
                    },
                    headerTintColor: '#000000',
                    headerTitleAlign: 'center',
                }}
            />

            <Stack.Screen
                name="RoomlistScreen"
                component={RoomlistScreen}
                options={{
                    title: '',
                    headerLeft: () =>
                        <NavigationDrawerStructure
                            navigationProps={navigation}
                        />,
                    headerStyle: {
                        backgroundColor: '#F6C455'
                    },
                    headerTintColor: '#000000',
                }}
            />

            <Stack.Screen
                name="RoomDetailScreen"
                component={RoomDetailScreen}
                options={{
                    title: 'Room Details', headerStyle: {
                        backgroundColor: '#FFFFFF',
                        elevation: 0,
                        shadowOpacity: 0,
                        borderBottomWidth: 0,
                    },
                    headerLeft: () =>
                        <BackButton
                            onPress={() => navigation.navigate("RoomlistScreen")}
                        />,
                    headerTintColor: '#000000',
                    headerTitleAlign: 'center'
                }}
            />
            <Stack.Screen
                name="BookScreen"
                component={BookScreen}
                options={{
                    title: 'Book', headerStyle: {
                        backgroundColor: '#FFFFFF',
                        elevation: 0,
                        shadowOpacity: 0,
                        borderBottomWidth: 0,
                    },
                    headerLeft: () =>
                        <BackButton
                            onPress={() => navigation.navigate("RoomDetailScreen")}
                        />,
                    headerTintColor: '#000000',
                    headerTitleAlign: 'center'
                }}
            />
            <Stack.Screen
                name="ResortlistScreen"
                component={ResortlistScreen}
                options={{
                    title: '',
                    headerLeft: () =>
                        <NavigationDrawerStructure
                            navigationProps={navigation}
                        />,
                    headerStyle: {
                        backgroundColor: '#F6C455'
                    },
                    headerTintColor: '#000000',
                }}
            />
            <Stack.Screen
                name="ResortDetailsScreen"
                component={ResortDetailsScreen}
                options={{
                    title: '',
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="ThankYouScreen"
                component={ThankYouScreen}
                options={{
                    title: '',
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
}