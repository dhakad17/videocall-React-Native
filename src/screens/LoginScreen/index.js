import { View, Text,TextInput,StyleSheet, Pressable,Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import {Voximplant} from 'react-native-voximplant';
import {APP_NAME,ACC_NAME} from '../../Constants'
import {useNavigation} from '@react-navigation/core'
const LoginScreen = () => {
   
    const [username,setUsername]=useState();
    const [password,setPassword]=useState();

    const voximplant=Voximplant.getInstance();
    const navigation=useNavigation();
    useEffect(()=>{
        const connect =async()=>{
            const status=await voximplant.getClientState();
            //console.log(status);
            if(status===Voximplant.ClientState.DISCONNECTED)
            {
                await voximplant.connect();
            }
            else if(status===Voximplant.ClientState.LOGGED_IN)
            {
                redirectHome();
            }
        };

        connect();
    },[]);

    const signIn=async()=>{
        //console.warn('LoginScreen');
        try{
            const fqUsername=`${username}@${APP_NAME}.${ACC_NAME}.voximplant.com`;
           await voximplant.login(fqUsername,password);
           
           redirectHome();
        }catch(e){
            Alert.alert(e.name,`Error Code: ${e.code}`);
        }
        
    };

    const redirectHome=()=>{
          navigation.reset({
            index:0,
            routes:[
                {
                    name:'Contacts',
                },
            ],
          });
    };
  return (
    <View style={styles.page}>
        <TextInput placeholder='username'
         placeholderTextColor="#dee2e6"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          autoCapitalize='none'/>
        <TextInput placeholder='password'
        placeholderTextColor="#dee2e6" 
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry/>

        <Pressable style={styles.button} onPress={signIn}>
           <Text >Sign in</Text> 
        </Pressable>
      
    </View>
  )
}
const styles = StyleSheet.create({
    page:{
        padding:10,
        alignItems:'stretch',
        flex:1,
        justifyContent: 'center',
        backgroundColor:"#c5f6fa"
    },
    input:{
         backgroundColor:'white',
         padding:10,
         marginVertical:10,
         borderRadius:5,
         color:'black'
        
    },
    button:{
        marginVertical:10,
        backgroundColor:'#15aabf',
        padding:10,
        marginVertical:10,
        borderRadius:5,
        alignItems:'center',
    }
});
export default LoginScreen