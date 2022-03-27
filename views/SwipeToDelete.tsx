import axios from 'axios';
import React from 'react';
import {Alert, Animated,Button, FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import {Swipeable, TouchableOpacity} from 'react-native-gesture-handler';
import ModifyModal from './modifyModal';
interface IRow {
  cne: string;
  nom: string;
  prenom: string;
  email: string;
}


var refreshEtds;

export const renderRightActions = (row:any) => {


  return (
      <SafeAreaView>

    <View style={styles.swipedRow}>
      <Animated.View style={[styles.deleteButton, {}]}>
        <TouchableOpacity>
            <View style={styles.btn_grp}>
                <View style={{marginRight:10}}>
                    <Button 
                        title="update"
                        onPress={(e)=>{
                          row.setmodal(!row.modal)
                          row.setRowEtudiant(row)
                        }}
                        />
                    
                </View>
                <View >
                    <Button 
                        title="delete"
                        color={"red"}
                        onPress={()=>{
                            row.showConfirmDialog(row)
                        }}
                        />
                </View>

            </View>
        </TouchableOpacity>
      </Animated.View>
    </View>
     </SafeAreaView>
  );
};

const Item = (row:any) => (
    
  <Swipeable renderRightActions={() => renderRightActions(row)}>
      <View style={styles.mainView}>
          
      <Avatar
        rounded
        size='medium'
        source={{
            uri:
              'https://w7.pngwing.com/pngs/671/944/png-transparent-student-cartoon-estudante-college-college-student-avatar-child-face-heroes.png',
          }}
        />

        <View style={styles.row}>
            <Text>{row.cne}</Text>
            <Text>{row.nom} {row.prenom}</Text>
            <Text>{row.email}</Text>
        </View>
    </View>
    <ModifyModal 
        key={row.cne}
        show={row.modal}
        etudiant={row.rowEtudiant}
        setetudiant={row.setRowEtudiant}
        title={"Modifier"}
        animationType={"slide"}
        closePopup={()=>{row.setmodal(false)}}
        haveOutsideTouch={true}
        />
  </Swipeable>
);

export const SwipeToDelete = (props:any) =>{

    const [showBox, setShowBox] = React.useState(true);
    const [modifyModal, setModifyModal] = React.useState(false);
    const [rowEtudiant, setRowEtudiant] = React.useState({});

    refreshEtds = props.refreshEtds()
    const showConfirmDialog = (row) => {
      return Alert.alert(
        "Attention",
        "Voulez-vous vraiment supprimer cet étudiant?",
        [
          {
            text: "Oui",
            onPress: () => {
              setShowBox(false);
              // alert(row.cne)
              axios.get(`https://iot-nodemcu-projects.000webhostapp.com/gestion_etudiants/suppression.php?cne=${row.cne}`)
                .then((data)=>{
                  console.log(data)
                  props.refreshEtds()
                })
                .catch((err)=>{alert(err)})

            },
          },
          {
            text: "Non",
          },
        ]
      );
    };
  const renderItem = (dataItem:any) => (
    <Item key={dataItem.cne} phone={dataItem.phone} password={dataItem.password} nom={dataItem.nom} prenom={dataItem.prenom} rowEtudiant={rowEtudiant} setRowEtudiant={setRowEtudiant} setmodal={setModifyModal} modal={modifyModal} showConfirmDialog={showConfirmDialog} email={dataItem.email} cne={dataItem.cne} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={props.etds}
        renderItem={i => renderItem(i.item)}
        keyExtractor={item => item.cne}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 300,
    backgroundColor:"white"
    
  },
  avatar:{

  },
  mainView:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:20,
    
  },
  row: {
    flexDirection: 'column',
    flex: 1,
    paddingLeft: 10,
    backgroundColor: 'white',
    margin: 19,
    minHeight: 50,
    borderRadius:15
  },
  swipedRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5,
    margin: 20,
    minHeight: 50,
    borderRadius:10

  },
  btn_grp:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    padding: 10,
    textAlign:'center'

},
  swipedConfirmationContainer: {
  },
  deleteConfirmationText: {
    color: '#fcfcfc',
  },
  deleteButton: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: '100%',
    borderTopRightRadius:10,
    borderBottomRightRadius:10

  },
  deleteButtonText: {
    color: 'black',
    textAlign:'center',
    width:100,
    padding: 3,
  },
  updateButtonText:{

  }
});