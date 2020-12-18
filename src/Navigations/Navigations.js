import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SliderScreen from '../Screen/SliderScreen/SliderScreen';
import LoginScreen from "../Screen/LoginScreen/LoginScreen";
import ForgotPassword from "../Screen/ForgotpassScreen/ForgotPassword";
import RegisterScreen from "../Screen/RegisterScreen/RegisterScreen";
import HomeScreen from "../Screen/HomeScreen/HomeScreen"
import RoomDetailScreen from "../Screen/RoomDetailScreen/RoomDetailScreen"
import BookScreen from '../Screen/BookScreen/BookScreen'

const Stack = createStackNavigator();




export default NavigationsApp = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode='none' >
                {/* <Stack.Screen name="SliderScreen" component={SliderScreen} /> */}
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
                <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="RoomDetailScreen" component={RoomDetailScreen} />
                <Stack.Screen name="BookScreen" component={BookScreen} />
            </Stack.Navigator>

        </NavigationContainer>
    );
};