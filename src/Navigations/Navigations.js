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
import RoomlistScreen from '../Screen/RoomlistScreen/RoomlistScreen'
import BookService from '../Screen/BookService/BookService'
import ThankYouScreen from '../Screen/ThankyouScreen/ThankYouScreen'
import SearchScreen from '../Screen/SearchScreen/SearchScreen'
import ResortlistScreen from "../Screen/ResortlistScreen/ResortlistScreen";




const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default NavigationsApp = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode='none' >

                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
                <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
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

// const NavigationsDrawer = () => {
//     return (
//         <NavigationContainer>
//             <Drawer.Navigator
//                 drawerContentOptions={{
//                     activeTintColor: '#e91e63',
//                     itemStyle: { marginVertical: 5 },
//                 }}>
//                 <Drawer.Screen
//                     name="HomeScreen"
//                     options={{ drawerLabel: 'HomeScreen' }}
//                     component={HomeScreen} />
//                 <Drawer.Screen
//                     name="BookScreen"
//                     options={{ drawerLabel: 'BookScreen' }}
//                     component={BookScreen} />
//             </Drawer.Navigator>
//         </NavigationContainer>
//     )
// }



