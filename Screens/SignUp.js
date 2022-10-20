import { StyleSheet, Text, View, ImageBackground , Dimensions , Image} from 'react-native'
import React from 'react'

import Logo from '../assets/backGround.jpg';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const SignUp = () => {
  return (
    <View>
      <ImageBackground source={Logo}
        style={{
          width: width,
          height: height/1.5,
          resizeMode:'stretch'
        }}>
           <View style={{position:'relative', top:height/2 , left:width/2-20}}>
        <View style={{backgroundColor:'wight' , width:width , height:height}}>
        <Text style={{color:'red'}}>sdlkf;l</Text>
        </View>

      </View>
      </ImageBackground>
     
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({})