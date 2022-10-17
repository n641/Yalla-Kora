import React, { useEffect, useRef } from 'react'
import { Animated, Dimensions, Image, Text, View  } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import colors from '../constant/colors';
import {Ionicons} from"@expo/vector-icons";


import Logo from '../assets/logo.jpg';
import Home from '../Screens/Login';

const BGColor = colors.primary

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function SplashScreen() {

    // SafeArea Value...
    const edges = useSafeAreaInsets();

    // Animation Values....
    const startAnimation = useRef(new Animated.Value(0)).current;

    // Scaling Down Both logo and Title...
    const scaleLogo = useRef(new Animated.Value(1)).current;
    const scaleTitle = useRef(new Animated.Value(1)).current;

    // Offset Animation....
    const moveLogo = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
    const moveTitle = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

    // Animating COntent...
    const contentTransition = useRef(new Animated.Value(Dimensions.get('window').height)).current;

    // Animation Done....
    useEffect(() => {

        // Starting Animation after 500ms....
        setTimeout(() => {

            // Parallel Animation...
            Animated.parallel([
                Animated.timing(
                    startAnimation,
                    {
                        // For same Height for non safe Area Devices...
                        toValue: -Dimensions.get('window').height + (edges.top),
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    scaleLogo,
                    {
                        // Scaling to 0.35
                        toValue: 0.3,
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    scaleTitle,
                    {
                        // Scaling to 0.8
                        toValue: 1.1,
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    moveLogo,
                    {
                        // Moving to Right Most...
                        toValue: {
                            x: (Dimensions.get("window").width / 5), // move logo right left
                            y: (Dimensions.get('window').height +width/2.50) // move logo top down
                        },
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    moveTitle,
                    {
                        // Moving to Right Most...
                        toValue: {
                            x:(Dimensions.get("window").width / 2)-250  ,
                            // Since image size is 100...
                            y: (Dimensions.get('window').height /1.23)  
                        },
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    contentTransition,
                    {
                        toValue: 0,
                        useNativeDriver: true
                    }
                )
            ])
                .start();

        }, 3000);

    }, [])


 return (

        <View style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        }}>
            <Animated.View style={{
                flex: 1,
                backgroundColor: BGColor,
                zIndex: 1,
                transform: [
                    { translateY: startAnimation }
                ]
            }}>

                <Animated.View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Animated.View  style={{
                        width: width,
                        height: height/1.6,
                        marginBottom: 20,
                        transform: [
                            { translateX: moveLogo.x },
                            { translateY: moveLogo.y },
                            { scale: scaleLogo },

                        ]
                    }}>
                        <Ionicons name="basketball-outline" color={colors.secondry} size={200} />
                    </Animated.View>

                    <Animated.Text style={{
                        fontSize: 25,
                        fontWeight: 'bold',
                        color: 'black',
                        fontStyle:'italic',
                        transform: [
                            { translateY: moveTitle.y },
                            { translateX: moveTitle.x },
                            { scale: scaleTitle }
                        ]
                    }}>Yalla Kora</Animated.Text>

                </Animated.View>

            </Animated.View>

            <Animated.View style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: 'rgba(0,0,0,0.04)',
                zIndex: 0,
                transform: [
                    { translateY: contentTransition }
                ]
            }}>

                <Home></Home>

            </Animated.View>

        </View>
    );
}
