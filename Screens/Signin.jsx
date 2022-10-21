import {
    StyleSheet, Text, View, ImageBackground, Platform
    , Dimensions, KeyboardAvoidingView, Image,
    ScrollView, TextInput, TouchableOpacity
  } from 'react-native'
  import React, { useState } from 'react'
  import { Ionicons } from "@expo/vector-icons";
  
  
  import Logo from '../assets/backGround.jpg';
  import colors from '../constant/colors';
  import CButton from '../components/CButton';
  
  
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const Signin = ({navigation}) => {
  
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('')
    const [pass, setpass] = useState(true);
  
  
    return (
      <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
  
        <ImageBackground source={Logo}
          style={{
            height: height / 1.8,
            resizeMode: 'stretch'
          }}>
          <View style={{ position: 'relative', top: height / 2, left: width / 2 - 20 }}>
            <View style={{ backgroundColor: 'wight', width: width, height: height }}>
            </View>
          </View>
        </ImageBackground>
  
  
        <View style={styles.bottomView}>
          <View style={{ padding: 40 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
              <Text style={styles.text}>Score </Text>
              <Text style={{ ...styles.text, fontSize: 30, color: colors.primary }}>Base</Text>
            </View>
  
  
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={styles.container}>
  
              <View>
                <TextInput
                  style={styles.input}
                  placeholder='Enter email'
                  keyboardType='email-address'
                  onChangeText={(text) => {
                    setemail(text)
                  }}
                  value={email}
                />
  
                <View style={{ flexDirection: 'row', ...styles.input, alignItems: 'center', justifyContent: 'space-between' }}>
                  <TextInput
                   onChangeText={(password)=>{
                    setpassword(password)
                  }}
                  value={password} 
                    secureTextEntry={pass}
                    placeholder="Ente password"
                    keyboardType="numeric" />
  
                  <TouchableOpacity onPress={() => {
                    setpass(!pass);
                  }}>
                    <Ionicons name={pass ? "eye-off-outline" : "eye"} size={20} color={'black'} style={{ marginHorizontal: 10 }} />
                  </TouchableOpacity>
  
                </View>
  
                <View>
                  <Text style={{ color: 'blue', textAlign: 'right', left: -10, fontSize: 13 }}>forget your password?</Text>
                </View>
  
              </View>
            </KeyboardAvoidingView>
  
          </View>
  
          <View style={{ width: width, alignItems: 'center', top: -20 }}>
            <CButton title='Sign In' color={'black'} textColor={'white'} onPress={() => { }} />
            <Text style={{ color: 'blue', textAlign: 'right', fontSize: 13, margin: 10 }}> create account?</Text>
            <Text style={{ fontSize: 20 }}>OR</Text>
            <View style={{ flexDirection: 'row', margin: 10 }}>
              <Ionicons name="logo-facebook" size={25} color={'blue'} style={{ marginHorizontal: 10 }} />
              <Ionicons name="logo-twitter" size={25} color={'sea'} style={{ marginHorizontal: 10 }} />
              <Ionicons name="logo-google" size={25} color={'tomato'} style={{ marginHorizontal: 10 }} />
            </View>
          </View>
  
        </View>
  
      </ScrollView>
    )
  }
  
  export default Signin
  
  const styles = StyleSheet.create({
    bottomView: {
      flex: 1.5,
      backgroundColor: 'white',
      bottom: 50,
      borderTopEndRadius: 60,
      borderTopStartRadius: 60
    },
    text: {
      fontSize: 30,
      fontWeight: 'bold',
      fontStyle: 'italic'
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 0.5,
      padding: 10,
    },
  })