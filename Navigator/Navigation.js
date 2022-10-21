import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../Screens/Login';
import SignUp from '../Screens/SignUp';
import Signin from '../Screens/Signin';
import SplashScreen from '../components/SplashScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return(
    <NavigationContainer >
        <Stack.Navigator screenOptions={{headerShown:false , animation:'slide_from_bottom'}}  >
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Signin" component={Signin} />
        </Stack.Navigator>
    </NavigationContainer>
    )
}

export default Navigation