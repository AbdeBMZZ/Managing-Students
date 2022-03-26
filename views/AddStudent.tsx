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

function AddStudent(props:any) {

    const [cne, setCne] = React.useState('');
    const [name, setName] = React.useState('');
    const [prenom, setPrenom] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [password, setPass] = React.useState('');
  
    const addStudent = ()=>{
  
    }
  
    return (
      <View style={styles.cantainer}>
          <Image style={styles.background} source={require('../assets/backgound.jpg')} />
          <View style={styles.subView}>
            <Text style={styles.subTxt}>Ajouter un étudiant</Text>

            <View style={styles.inputContainer}>
              <Image style={styles.inputIcon} source={require('../assets/cne_white.png')}/>
              <TextInput underlineColorAndroid ='transparent' style={styles.inputText} placeholder="CNE" onChangeText={(cne) => { setCne(cne) }} />
            </View>

            <View style={styles.inputContainer}>
              <Image style={styles.inputIcon} source={require('../assets/name_white.png')}/>
              <TextInput underlineColorAndroid ='transparent' style={styles.inputText} placeholder="Nom" onChangeText={(nom) => { setName(nom)}} />
            </View>

            <View style={styles.inputContainer}>
              <Image style={styles.inputIcon} source={require('../assets/name_white.png')}/>
              <TextInput underlineColorAndroid ='transparent' style={styles.inputText} placeholder="Prenom" onChangeText={(prenom) => { setPrenom(prenom)}} />
            </View>

            <View style={styles.inputContainer}>
              <Image style={styles.inputIcon} source={require('../assets/phone_white.png')}/>
              <TextInput underlineColorAndroid ='transparent' style={styles.inputText} placeholder="Phone" onChangeText={(phone) => { setPhone(phone)}} />
            </View>

            <View style={styles.inputContainer}>
              <Image style={styles.inputIcon} source={require('../assets/pass_white.png')}/>
              <TextInput underlineColorAndroid ='transparent' style={styles.inputText} placeholder="Mot de passe" onChangeText={(pass) => { setPass(pass)}} />
            </View>

            <TouchableOpacity style={styles.btn} onPress={addStudent}>
              <Text style={styles.btnTxt}>Ajouter</Text>
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
      backgroundColor: 'hsla(198, 19%, 89%, 0.8)',
      width: '100%',
      bottom: 0,
      padding: 30,
      
      paddingBottom: 20,
      alignItems: 'center',
      borderTopRightRadius: 40,
      borderTopLeftRadius: 40,
    },
    
    subTxt: {
      color: 'black',
      marginTop: 15,
      fontSize: 30,
      
      marginBottom:20
    },
    inputText: {
      backgroundColor: 'white',
      borderRadius : 10,
      padding : 10,
      fontSize: 17,
      width: '100%',
    },
    btn: {
      height: 50,
      width: 200,
      backgroundColor: 'hsla(194, 100%, 0%, 0.61)',
      borderRadius: 80,
      borderWidth: 2,
    
      marginTop: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    btnTxt: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 15,
    },
    loginTxt: {
      fontSize: 15,
      fontWeight: 'bold',
    },
    inputContainer:{
      borderRadius: 10,
      margin:10,
      backgroundColor :'hsla(194, 100%, 0%, 0.61)',
      flexDirection : 'row',
      justifyContent: 'center'
    },
    inputIcon:{
      height:20,
      width:20,
      padding:5,
      marginLeft: 60,
      marginRight: 15,
      alignSelf:"center",
    },
    background:{
      width: '100%',
      height: '100%',
      aspectRatio: 1,
    }
  });
  
  export default AddStudent;