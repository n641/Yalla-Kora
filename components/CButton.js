import { StyleSheet, Text, View , Dimensions  , TouchableOpacity} from 'react-native'
import React from 'react'
import colors from '../constant/colors'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const CButton = (props) => {
  return (
    <TouchableOpacity
     style={{...styles.container, backgroundColor:props.color , borderColor:props.borderColor}}
     onPress={props.onPress}
     >
      <Text style={{...styles.text , color:props.textColor}}>{props.title}</Text>
    </TouchableOpacity>
  )
}

export default CButton

const styles = StyleSheet.create({
    container:{
        height:height/15,
        width:width/2 +50,
        margin:5,
        padding:10,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        
    },
    text:{
        fontSize:18,
        fontWeight:'600'
    }
})