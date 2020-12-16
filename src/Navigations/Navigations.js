import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SliderScreen from '../Screen/SliderScreen/SliderScreen';


const Stack = createStackNavigator();




export default NavigationsApp = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode='none'>
                <Stack.Screen name=" SliderScreen" component={SliderScreen} />
            </Stack.Navigator>

        </NavigationContainer>
    );
};