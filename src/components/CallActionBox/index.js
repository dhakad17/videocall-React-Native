import React, { useState } from 'react'
import { View,StyleSheet, Pressable } from 'react-native'
import Iconions from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {Voximplant} from 'react-native-voximplant'

function CallActionBox({onHangupPress}) {

    const [isCameraOn,setIsCameraOn]=useState(true);
    const [isMicOn,setIsMicOn]=useState(true);




    const onReverseCamera=() => {
        console.warn('onReverseCamera');
    };
    const onToggleCamera= async() => {
       // console.warn('onToggleCamera');
       if (isCameraOn) {
         setIsCameraOn(false);
         await Voximplant.setLocalVideoEnabled(false);
       } else {
         setIsCameraOn(true);
         await Voximplant.setLocalVideoEnabled(true);
       }
        
    };
    const onToggleMicrophone= async() => {
       // console.warn('onToggleMicrophone');'
       if (isMicOn) {
         setIsMicOn(false);
         await Voximplant.setLocalAudioEnabled(false);
       } else {
         setIsMicOn(true);
         await Voximplant.setLocalAudioEnabled(true);
       }
       
    };
    

  return (
    <View style={styles.buttonsContainer}>
      <Pressable onPress={onReverseCamera} style={styles.iconButton}>
         <Iconions name="ios-camera-reverse" size={30} color={'white'}/>
      </Pressable>

      <Pressable onPress={onToggleCamera} style={styles.iconButton}>
         <MaterialIcons name={isCameraOn?"camera-off":"camera"} size={30} color={'white'}/>
      </Pressable>

      <Pressable onPress={onToggleMicrophone} style={styles.iconButton}>
         <MaterialIcons name={isMicOn?"microphone-off":"microphone"} size={30} color={'white'}/>
      </Pressable>

      <Pressable onPress={onHangupPress} style={[styles.iconButton,{backgroundColor:'red'}]}>
         <MaterialIcons name="phone-hangup" size={30} color={'white'}/>
      </Pressable>

    </View>
  )
}

const styles = StyleSheet.create({
    buttonsContainer:{
        backgroundColor:'#333333',
        padding:10,
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingBottom:40,
        marginTop:'auto',
        
      },
      iconButton:{
        backgroundColor:'#4a4a4a',
        padding:15,
        borderRadius:30,
      }
});

export default CallActionBox