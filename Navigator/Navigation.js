import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../Screens/Login';
import SignUp from '../Screens/SignUp';
import SplashScreen from '../components/SplashScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return(
    <NavigationContainer >
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
    </NavigationContainer>
    )
}

export default Navigation