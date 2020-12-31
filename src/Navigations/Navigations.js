import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "../Screen/LoginScreen/LoginScreen";
import ForgotPassword from "../Screen/ForgotpassScreen/ForgotPassword";
import RegisterScreen from "../Screen/RegisterScreen/RegisterScreen";
import HomeScreen from "../Screen/HomeScreen/HomeScreen"
import RoomDetailScreen from "../Screen/RoomDetailScreen/RoomDetailScreen"
import BookScreen from '../Screen/BookScreen/BookScreen'
import { createDrawerNavigator } from '@react-navigation/drawer';
import MyProfileScreen from '../Screen/MyProfileScreen/MyProfileScreen'
import { View, TouchableOpacity, Image } from 'react-native';
import RoomlistScreen from '../Screen/RoomlistScreen/RoomlistScreen'
import BookService from '../Screen/BookService/BookService'
import ThankYouScreen from '../Screen/ThankyouScreen/ThankYouScreen'
import SearchScreen from '../Screen/SearchScreen/SearchScreen'
import ResortlistScreen from "../Screen/ResortlistScreen/ResortlistScreen";

const NavigationDrawerStructure = (props) => {
    const toggleDrawer = () => {
        props.navigationProps.toggleDrawer();
    };
    return (
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => toggleDrawer()}>
                <Image
                    source={{ uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png' }}
                    style={{ width: 25, height: 25, marginLeft: 5 }}
                />
            </TouchableOpacity>
        </View>
    );
}

const Drawer = createDrawerNavigator();
function NavigationsDrawer() {
    return (
        <Drawer.Navigator initialRouteName="HomeScreen" headerMode="screen"
            drawerContentOptions={{ activeTintColor: '#e91e63', itemStyle: { marginVertical: 5 } }}>
            <Drawer.Screen name="HomeScreen" options={{ drawerLabel: 'Home' }} component={homeScreenStack} />
            <Drawer.Screen name="ResortlistScreen" options={{ drawerLabel: 'Book Room' }} component={resortScreenStack} />
            <Drawer.Screen name="MyProfileScreen" options={{ drawerLabel: 'MyProfile' }} component={MyProfileScreen} />
            <Drawer.Screen name="LoginScreen" options={{ drawerLabel: 'MyProfile' }} component={LoginScreen} />
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
                <Stack.Screen name="RoomDetailScreen" component={RoomDetailScreen} />
                <Stack.Screen name="BookScreen" component={BookScreen} />
                <Stack.Screen name="MyProfileScreen" component={MyProfileScreen} />
                <Stack.Screen name="RoomlistScreen" component={RoomlistScreen} />
                <Stack.Screen name="BookService" component={BookService} />
                <Stack.Screen name="ThankYouScreen" component={ThankYouScreen} />
                <Stack.Screen name="SearchScreen" component={SearchScreen} />
                <Stack.Screen name="ResortlistScreen" component={ResortlistScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

function homeScreenStack({ navigation }) {
    return (
        <Stack.Navigator initialRouteName="ResortlistScreen">
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
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />
        </Stack.Navigator>
    );
}

function resortScreenStack({ navigation }) {
    return (
        <Stack.Navigator initialRouteName="RoomlistScreen">
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
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />
        </Stack.Navigator>
    );
}


