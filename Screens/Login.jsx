import { StyleSheet, Text, View, Image, Dimensions, Button } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";

import CButton from '../components/CButton';
import colors from '../constant/colors';

import backGround from '../assets/backGround.jpg';
import { useSafeAreaInsets, SafeAreaProvider } from 'react-native-safe-area-context';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function Login({navigation}) {
    return (
        <SafeAreaProvider>
            <View>
                <View>
                    <Image source={backGround} style={styles.Image} />
                </View>

                <View style={{ height: height / 9 }} />

                <View style={styles.containerButton}>
                    <CButton title='Login' textColor='white' color={colors.secondry} borderColor={0} onPress={() => { 
                        navigation.navigate('SignUp')
                    }} />
                    <CButton title='SignUp' textColor='black' onPress={() => {
                        navigation.navigate('Signin')

                     }} />
                </View>

                <View style={styles.Footer}>
                    <Text style={styles.text}>-------- or sign up with --------</Text>
                    <View style={{ flexDirection: 'row', margin: 10 }}>
                        <Ionicons name="logo-facebook" size={25} color={'blue'} style={{ marginHorizontal: 10 }} />
                        <Ionicons name="logo-twitter" size={25} color={'sea'} style={{ marginHorizontal: 10 }} />
                        <Ionicons name="logo-google" size={25} color={'tomato'} style={{ marginHorizontal: 10 }} />
                    </View>
                </View>

            </View>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    Image: {
        width: width,
        height: height / 1.7,
        borderBottomLeftRadius: 150,
        borderBottomRightRadius: 150
    },
    containerButton: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: '600'
    },
    Footer: {
        // justifyContent:'center',
        alignItems: 'center',
        margin: 10
    }
})