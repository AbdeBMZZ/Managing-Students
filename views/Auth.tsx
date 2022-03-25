import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Image
} from 'react-native';

function Auth(props:any) {

    const [userName, setUsername] = React.useState('');
    const [password, setPass] = React.useState('');
  
    const login = ()=>{
  
    }
  
    return (
      <View style={styles.cantainer}>
          <Image source={require('../assets/backgound.jpg')} />
          <View style={styles.subView}>
            <Text style={styles.subTxt}>Login</Text>
            <TextInput underlineColorAndroid ='transparent' style={styles.nameInput} placeholder="Email" onChangeText={(user) => { setUsername(user) }} />
            <TextInput underlineColorAndroid ='transparent' style={styles.nameInput} placeholder="Password" onChangeText={(pass) => { setPass( pass )}} />
            <TouchableOpacity style={styles.btn} onPress={login}>
              <Text style={styles.btnTxt}>Login</Text>
            </TouchableOpacity>
            
          </View>
        </View>
    );
  };
  
  const styles = StyleSheet.create({
    cantainer: {
      backgroundColor: '#521be3',
      height: '100%',
      fontFamily: 'Oswald_Bold'
    },
    subView: {
      position: 'absolute',
      backgroundColor: '#DFE6E9',
      width: '100%',
      bottom: 0,
      padding: 20,
      
      paddingBottom: 20,
      alignItems: 'center',
      borderTopRightRadius: 40,
      borderTopLeftRadius: 40,
    },
    headerTxt: {
      fontSize: 40,
      marginLeft: 40,
      fontWeight: 'bold',
      color: 'white',
      position: 'absolute',
      marginTop: 140,
    },
    subTxt: {
      color: 'black',
      marginTop: 20,
      fontSize: 30,
      fontWeight: 'bold',
    },
    nameInput: {
      backgroundColor: 'white',
      borderRadius : 10,
      padding : 10,
      fontSize: 20,
      width: '100%',
      marginTop: 30,
    },
    btn: {
      height: 50,
      width: 200,
      backgroundColor: 'blue',
      borderRadius: 80,
      borderWidth: 2,
    
      marginTop: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    btnTxt: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20,
    },
    loginTxt: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 24,
    },
  });
  
  export default Auth;