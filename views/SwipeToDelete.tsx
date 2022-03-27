import axios from 'axios';
import React from 'react';
import {Alert, Animated,Button, FlatList, StyleSheet, Text, View} from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import {Swipeable, TouchableOpacity} from 'react-native-gesture-handler';
interface IRow {
  cne: string;
  nom: string;
  prenom: string;
  email: string;
}


const renderRightActions = (row:any,) => {
    
  return (
    <View style={styles.swipedRow}
    >
      <Animated.View style={[styles.deleteButton, {}]}>
        <TouchableOpacity>
            <View style={styles.btn_grp}>
    
                <View style={{marginRight:10}}>
                    <Button 
                        title="update"
                        onPress={(e)=>{alert("CNE:" + row.email)}}
                    />
                </View>
                <View >
                    <Button 
                        title="delete"
                        color={"red"}
                        onPress={async ()=>{
                            row.showConfirmDialog()
                        }}
                        />
                </View>
            </View>
        </TouchableOpacity>
      </Animated.View>
    </View>
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

        {/* <Avatar
            rounded
            size="medium"
            title={row.nom[0].toUpperCase() + row.prenom[0].toUpperCase()}
            source={{
                uri:
                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            }}
            /> */}
        <View style={styles.row}>
            <Text>{row.cne}</Text>
            <Text>{row.nom} {row.prenom}</Text>
            <Text>{row.email}</Text>
        </View>
    </View>
  </Swipeable>
);

export const SwipeToDelete = (props:any) =>{

    const [showBox, setShowBox] = React.useState(true);

    const showConfirmDialog = () => {
      return Alert.alert(
        "Are your sure?",
        "Are you sure you want to remove this student?",
        [
          // The "Yes" button
          {
            text: "Oui",
            onPress: () => {
              setShowBox(false);
            },
          },
          // The "No" button
          // Does nothing but dismiss the dialog when tapped
          {
            text: "Non",
          },
        ]
      );
    };
  const renderItem = (dataItem:any) => (
    <Item nom={dataItem.nom} prenom={dataItem.prenom} showConfirmDialog={showConfirmDialog} email={dataItem.email} cne={dataItem.cne} />
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