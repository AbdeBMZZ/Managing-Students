import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Alert, Text, View, TextInput, LayoutAnimation, SafeAreaView, TouchableOpacity, Image , ScrollView, Modal, Animated, Pressable, FlatList, TouchableHighlight } from "react-native";
import Header_title from './Header_title';
import { Avatar, Icon, ListItem, Tab, TabView } from 'react-native-elements';
import { Button } from 'react-native-elements';
import * as React from 'react';
import { SearchBar } from 'react-native-elements';
import axios from 'axios';
import authContext from "../context/authContext";
import AddStudent from './AddStudent';
import Swipeout from 'react-native-swipeout';

import {SwipeListView} from 'react-native-swipe-list-view'
import { SwipeToDelete } from './SwipeToDelete';
// import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';






export default function Dashboard({navigation}) {


  const [search_txt, setSearch_txt] = React.useState("");

  const {authenticated} = React.useContext(authContext) 

  const [is_admin, setIs_admin] = React.useState(true);
  const [search, setsearch] = React.useState("");
  const [searchTouched, setsearchTouched] = React.useState(false);
  const [index, setIndex] = React.useState(0);
  
 
  const [etudiantList, setEtudiantList] = React.useState([])
  const [etudiantList_search, setEtudiantList_search] = React.useState([])

  var setEtudiant_search;
  React.useEffect( ()=>{
      console.log(authenticated)

    setIs_admin(authenticated.isAdmin)

    setEtudiant_search = etudiantList
    setEtudiantList_search(etudiantList)
    },[])

  const updateSearch = (search:string) => {
    setsearch(search);
  };

  async function getEtudiants(){
    
    const data = await axios.get("https://iot-nodemcu-projects.000webhostapp.com/gestion_etudiants/selection.php").catch()
    setEtudiantList(data.data)
  }
  
  
  const [modalVisible, setModalVisible] = React.useState(false);
  const [addEtdVisible, setEtdVisible] = React.useState(false);

  const [etudiantToModify, setEtudiantToModify] = React.useState({})





  if (is_admin)
    return (
      <SafeAreaView style={{flex:1}}>
      <Header_title name = "admin" nom={authenticated.nom} prenom = {authenticated.prenom} navigation = {navigation}/>
      
      <View style={styles.admin_etd_add}>
        <Text style={{flex: 0.4, fontSize:20 }} >Etudiants</Text>
        <Icon
          size={40}
          color='#517fa5'
          onPress={() => setEtdVisible(true)}
          style={{fontSize:30}}
          name='add-circle' 
          />
      </View>
      <TextInput
            style={styles.input}
            onChangeText={async (txt)=>{ 
              setsearchTouched(true)
              setSearch_txt(txt)
              // await getEtudiants()
              if (txt.length > 0) {
                setEtudiantList(etudiantList.filter((etd) =>  (etd.cne.includes(txt) || etd.nom.includes(txt))))
              }
              
                // setSearch_txt(txt)
                // let etds = etudiantList.filter((etd:any)=> (
                //     etd.cne.includes(txt) || etd.nom.includes(txt)
                // ) )
                // setEtudiantList(etds)
            }}
            value={search_txt}
            placeholder="Find student by cne"
          />
            <StatusBar />
              <SwipeToDelete refreshEtds={getEtudiants} etds={etudiantList} navigation={navigation} ></SwipeToDelete>
              {addEtdVisible &&
              <AddStudent refreshEtds={getEtudiants} setVisible= {setEtdVisible} />
            }

      </SafeAreaView>
    )

  else
    return (
      <>

      <Header_title name = "home" nom={authenticated.nom} prenom = {authenticated.prenom} navigation={navigation}/>
      <SafeAreaView >

            <Text
              style={{fontSize:20, textAlign:'center', margin:20}}
            >Vos coordonnees</Text>

            <StatusBar />
            <View style={styles.inputContainer}>
              <Image style={styles.inputIcon} source={require('../assets/cne_white.png')}/>
              <TextInput underlineColorAndroid ='transparent' style={styles.inputText} value={authenticated.cne} editable={false} />
            </View>

            <View style={styles.inputContainer}>
              <Image style={styles.inputIcon} source={require('../assets/name_white.png')}/>
              <TextInput underlineColorAndroid ='transparent' style={styles.inputText} value={authenticated.nom} editable={false}/>
            </View>

            <View style={styles.inputContainer}>
              <Image style={styles.inputIcon} source={require('../assets/name_white.png')}/>
              <TextInput underlineColorAndroid ='transparent' style={styles.inputText} value={authenticated.prenom} editable={false}/>
            </View>

            <View style={styles.inputContainer}>
              <Image style={styles.inputIcon} source={require('../assets/phone_white.png')}/>
              <TextInput underlineColorAndroid ='transparent' style={styles.inputText} value={authenticated.phone} editable={false} />
            </View>

            <View style={styles.inputContainer}>
              <Image style={styles.inputIcon} source={require('../assets/phone_white.png')}/>
              <TextInput underlineColorAndroid ='transparent' style={styles.inputText} value={authenticated.email} editable={false} />
            </View>

      </SafeAreaView>
  
      </>
    );
  
}

const styles = StyleSheet.create({
   
  welcomeTxt:{
    fontSize: 18,
    alignItems:'center',
    textAlign:'center'
  },
  admin_etd_add:{

    marginTop:20,
    marginBottom:20,
    flexDirection:'row',
    justifyContent:'space-evenly',
    // textAlignVertical:'center',
    alignItems:'center'

  },
  admin_txt:{
    textAlignVertical:'center'
  },
  containerScroll: {
    flex: 1,
    
  },
  scrollView: {
    marginHorizontal: 20,
  },
  tabItem:{
    fontSize: 18,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 10,
  },
  nameTxt:{
    fontSize:20
  },
  container: {
    width: "100%",
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"white",
    borderRadius: 40,

  },
  header: {
    width: '100%',
    height: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor:"black"
  },
  viewContainer:{
    flex: 1,
    alignItems:"center",
    justifyContent:"center"
  },
  cantainer: {
    backgroundColor: '#521be3',
    height: '100%',
    fontFamily: 'Oswald_Bold'
  },
  subView: {
    position: 'absolute',
    backgroundColor: 'gray',
    
    width: '100%',
    bottom: 0,
    padding: 30,
    borderRadius:20,
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
