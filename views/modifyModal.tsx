import React, { Component, useEffect } from 'react';
import { View, Text, Modal, Dimensions, Pressable, FlatList, TouchableOpacity, Alert, TextInput, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

export default function ModifyModal(props){

  const [tittle, setTitle] = React.useState('')
  // const [animationType, setanimationType] = React.useState('slide')
  // const [haveOutsideTouch, sethaveOutsideTouch] = React.useState(false)
  const [data, setData] = React.useState([])
  const [cne, setCne] = React.useState('');
  const [nom, setName] = React.useState('');
  const [prenom, setPrenom] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPass] = React.useState('');

  const { show, title, etudiant, setetudiant,animationType, closePopup, haveOutsideTouch } = props;


    return (
      <Modal
        animationType={animationType}
        transparent={true}
        visible={show}
        onRequestClose={() => { }}
      >
        <View style={{ flex: 1 }}>
          <Pressable
            onPress={() => {
              if (!haveOutsideTouch) return;
              closePopup()
            }}
            style={{ flex: 1 }}>

          </Pressable>

          <View style={{
            bottom: 0,
            position: 'absolute',
            width: '100%',
            height:'100%',
            backgroundColor: 'lightgray',
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            // height: Dimensions.get('window').height * 0.4,
            maxHeight: Dimensions.get('window').height * 0.7
          }}>
            <Text style={{
              alignSelf: 'center',
              color: '#182E44',
              fontSize: 20,
              fontWeight: '500',
              margin: 15
            }}>{title}</Text>
          <View style={styles.subView}>

          <View style={styles.inputContainer}>
            <Text style={styles.inptTxt} >cne</Text>
              {/* <Image style={styles.inputIcon} source={require('../assets/cne_white.png')}/> */}
              <TextInput underlineColorAndroid ='transparent' style={styles.inputText} value={etudiant.cne} placeholder="CNE" onChangeText={(cne) => { setetudiant({cne:cne, nom:etudiant.nom,
              prenom:etudiant.prenom, phone:etudiant.phone, email:etudiant.email, password:etudiant.password}) }} />
            </View>

            <View style={styles.inputContainer}>
            <Text style={styles.inptTxt} >nom</Text>
              {/* <Image style={styles.inputIcon} source={require('../assets/name_white.png')}/> */}
              <TextInput underlineColorAndroid ='transparent' style={styles.inputText} value={etudiant.nom} placeholder="Nom" onChangeText={(nom) => { setetudiant({cne:etudiant.cne, nom:nom,
              prenom:etudiant.prenom, phone:etudiant.phone, email:etudiant.email, password:etudiant.password})}} />
            </View>

            <View style={styles.inputContainer}>
            <Text style={styles.inptTxt} >prenom</Text>
              {/* <Image style={styles.inputIcon} source={require('../assets/name_white.png')}/> */}
              <TextInput underlineColorAndroid ='transparent' style={styles.inputText} value={etudiant.prenom} placeholder="Prenom" onChangeText={(prenom) => { setetudiant({cne:etudiant.cne, nom:etudiant.nom,
              prenom:prenom, phone:etudiant.phone, email:etudiant.email, password:etudiant.password})}} />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inptTxt} >phone</Text>
              {/* <Image style={styles.inputIcon} source={require('../assets/phone_white.png')}/> */}
              <TextInput underlineColorAndroid ='transparent' style={styles.inputText} value={etudiant.phone} placeholder="Phone" onChangeText={(phone) => { setetudiant({cne:etudiant.cne, nom:etudiant.nom,
              prenom:etudiant.prenom, phone:phone, email:etudiant.email, password:etudiant.password})}} />
            </View>

            <View style={styles.inputContainer}>
            <Text style={styles.inptTxt} >email</Text>
              {/* <Image style={styles.inputIcon} source={require('../assets/phone_white.png')}/> */}
              <TextInput underlineColorAndroid ='transparent' style={styles.inputText} value={etudiant.email} placeholder="Email" onChangeText={(email) => { setetudiant({cne:etudiant.cne, nom:etudiant.nom,
              prenom:etudiant.prenom, phone:etudiant.phone, email:email, password:etudiant.password})}} />
            </View>

            <View style={styles.inputContainer}>
            <Text style={styles.inptTxt} >password</Text>
              {/* <Image style={styles.inputIcon} source={require('../assets/pass_white.png')}/> */}
              <TextInput underlineColorAndroid ='transparent' style={styles.inputText} value={etudiant.password} placeholder="Mot de passe" onChangeText={(pass) => { setetudiant({cne:etudiant.cne, nom:etudiant.nom,
              prenom:etudiant.prenom, phone:etudiant.phone, email:etudiant.email, password:pass})}} />
            </View>

            <TouchableOpacity style={{flexDirection:'row',marginTop:30, justifyContent:'space-evenly', width:"100%"}} onPress={()=>{}}>
            <Button
                title='Modifier'
                onPress={()=>{alert("modifier")}}
                // style={{marginBottom:30}}
            />

            <Button 
                title='Anuuler'
                type="outline"
                onPress={()=>{closePopup()}}
            />
            </TouchableOpacity>
            </View>

          </View>
        </View>
        
          
        
      </Modal>
    );
  }

const styles = StyleSheet.create({
  
  subView: {
    position: 'absolute',
    // backgroundColor: 'hsla(198, 19%, 89%, 0.8)',
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
    fontSize: 15,
    width: '80%',
  },
  btn: {
    height: 40,
    width: 150,
    backgroundColor: 'hsla(194, 100%, 0%, 0.61)',
    borderRadius: 80,
    borderWidth: 2,
    margin:"auto",
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
    margin:8,
    // backgroundColor :'hsla(194, 100%, 0%, 0.61)',
    flexDirection : 'row',
    // justifyContent: 'center',
    justifyContent:'flex-start',
    width:"100%",
    alignItems:'center'
  },
  inptTxt:{
    width:"20%",
    fontSize:13
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