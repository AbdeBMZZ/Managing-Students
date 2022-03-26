import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Alert, Text, View, TextInput, SafeAreaView, TouchableOpacity, Image , ScrollView, Modal, Animated, Pressable } from "react-native";
import Header_title from './Header_title';
import { Avatar, ListItem, Tab, TabView } from 'react-native-elements';
import { Button } from 'react-native-elements';
import * as React from 'react';
import { SearchBar } from 'react-native-elements';
import axios from 'axios';
import authContext from "../context/authContext";
import AddStudent from './AddStudent';

  





export default function Dashboard({navigation}) {


  const [visible, setVisible] = React.useState(false);
  const [search_txt, setSearch_txt] = React.useState("");

  const {authenticated} = React.useContext(authContext) 

  const [is_admin, setIs_admin] = React.useState(true);
  const [search, setsearch] = React.useState("");
  const [index, setIndex] = React.useState(0);
  
 
  const [etudiantList, setEtudiantList] = React.useState([])
  const [etudiantList_search, setEtudiantList_search] = React.useState([])

  React.useEffect( ()=>{

    getEtudiants()
    console.log(authenticated)

    setIs_admin(authenticated.isAdmin)

    },[])

  const updateSearch = (search:string) => {
    setsearch(search);
  };

  async function getEtudiants(){
    const data = await axios.get("https://iot-nodemcu-projects.000webhostapp.com/gestion_etudiants/selection.php").catch()
    await setEtudiantList(data.data)
    await setEtudiantList_search(data.data)
  }

  const [modalVisible, setModalVisible] = React.useState(false);

  const [etudiantToModify, setEtudiantToModify] = React.useState({})

  if (is_admin)
    return (
      <>
      
         

      <Header_title name = "admin" nom={authenticated.nom} prenom = {authenticated.prenom} navigation = {navigation}/>
      
      <Tab
      value={index}
      onChange={(e) => setIndex(e)}
      indicatorStyle={{
        backgroundColor: 'white',
        height: 3,
      }}
      variant="primary"
    >
      <Tab.Item
        title="etudiants"
        titleStyle={{ fontSize: 12 }}
        icon={{ name: 'people-outline', type: 'ionicon', color: 'white' }}
      />
      <Tab.Item
        title="Add"
        titleStyle={{ fontSize: 12 }}
        icon={{ name: 'add-circle-outline', type: 'ionicon', color: 'white' }}
      />
    </Tab>

    <TabView value={index} onChange={setIndex} animationType="spring">
      <TabView.Item style={{ width: '100%' }}>
      
        

          <SafeAreaView style={styles.containerScroll}>
          <TextInput
            style={styles.input}
            onChangeText={(txt)=>{

                setSearch_txt(txt)
                if(txt.length == 0)
                    getEtudiants()
                else{
                    console.log(txt)
                    let etds = etudiantList.filter((etd)=> (
                        etd.cne.includes(txt) || etd.nom.includes(txt)
                    ) )
                    setEtudiantList(etds)
                }
            }}
            value={search_txt}
            placeholder="Find student by cne"
          />
          
            <ScrollView style={styles.scrollView}>
              {
                  etudiantList && 
                  etudiantList.map((etudiant:any, i) => (
                <ListItem key={i} bottomDivider
                onPress={()=>{
                    setEtudiantToModify(etudiant)
                    setModalVisible(true)}
                }
                >
                {/* <Avatar
                    size="xlarge"
                    rounded
                    title="CR"
                    onPress={() => console.log("Works!")}
                    activeOpacity={1}
                    /> */}

                  <Avatar rounded source={{uri: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'}} />
                  <ListItem.Content>
                    <ListItem.Title>{etudiant.nom}</ListItem.Title>
                    <ListItem.Subtitle>{etudiant.email}</ListItem.Subtitle>
                  </ListItem.Content>
                  
                </ListItem>
              ))
            }
            </ScrollView>
          
          </SafeAreaView>
      
      </TabView.Item>
      <TabView.Item style={{ width: '100%' }}>
        <AddStudent changeIndex ={setIndex} refreshEtds={getEtudiants} />
      </TabView.Item>
      
    </TabView>
      
      
      </>
    )

  else
    return (
      <>
      <Header_title name = "home" nom={authenticated.nom} prenom = {authenticated.prenom} navigation={navigation}/>
      <View style={styles.viewContainer}>
        <View style={styles.container}>
          <Text style={styles.welcomeTxt}>Bonjour</Text>
          <Text style={styles.nameTxt}>abdellah boumaiza</Text>
          
        </View>
      </View>
  
      </>
    );
  
}

const styles = StyleSheet.create({
   
  welcomeTxt:{
    fontSize: 18,
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
  nameTxt:{
    fontSize:20
  },
  container: {
    width: "100%",
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"whitesmoke",
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
