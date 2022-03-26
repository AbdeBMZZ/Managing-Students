import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, SafeAreaView , ScrollView } from "react-native";
import Header_title from './Header_title';
import { Avatar, ListItem, Tab, TabView } from 'react-native-elements';
import { Button } from 'react-native-elements';
import * as React from 'react';
import { SearchBar } from 'react-native-elements';


export default function Dashboard() {
  const [is_admin, setIs_admin] = React.useState(true);
  const [search, setsearch] = React.useState("");
  const [index, setIndex] = React.useState(1);
 
  const etudiants_data = [
    {
      name: 'Abdellah boumaiza',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Etudiant LP-SIGL'
    },
    {
      name: 'Rachid Abbad',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Etudiant LP-SIGL'
    },{
      name: 'Rachid Abbad',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Etudiant LP-SIGL'
    },{
      name: 'Rachid Abbad',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Etudiant LP-SIGL'
    },{
      name: 'Rachid Abbad',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Etudiant LP-SIGL'
    },{
      name: 'Rachid Abbad',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Etudiant LP-SIGL'
    },{
      name: 'Rachid Abbad',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Etudiant LP-SIGL'
    },{
      name: 'Rachid Abbad',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Etudiant LP-SIGL'
    },{
      name: 'Rachid Abbad',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Etudiant LP-SIGL'
    },{
      name: 'Rachid Abbad',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Etudiant LP-SIGL'
    },{
      name: 'Rachid Abbad',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Etudiant LP-SIGL'
    },{
      name: 'Rachid Abbad',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Etudiant LP-SIGL'
    },{
      name: 'Rachid Abbad',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Etudiant LP-SIGL'
    },
  ]

  const updateSearch = (search:string) => {
    setsearch(search);
  };

  if (is_admin)
    return (
      <>
      <Header_title name = "admin"/>
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
            onChangeText={setsearch}
            value={search}
            placeholder="Find student by cne"
          />
            <ScrollView style={styles.scrollView}>
              {
              etudiants_data.map((etudiant, i) => (
                <ListItem key={i} bottomDivider>
                  <Avatar rounded source={{uri: etudiant.avatar_url}} />
                  <ListItem.Content>
                    <ListItem.Title>{etudiant.name}</ListItem.Title>
                    <ListItem.Subtitle>{etudiant.subtitle}</ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>
              ))
            }
            </ScrollView>
          </SafeAreaView>
  
      
      </TabView.Item>
      <TabView.Item style={{ width: '100%' }}>
        <Text>Ajouter</Text>
      </TabView.Item>
      
    </TabView>
      {/* <Tab value={index} onChange={setIndex} indicatorStyle ={{
        backgroundColor: 'white', 
      }}
      variant="primary"
      >
        <Tab.Item title="Etudiants" style={styles.tabItem}/>
        <Tab.Item title="Ajouter" icon />
      </Tab>

      <TabView value={index} onChange={setIndex} >
        <TabView.Item style={{ width: '100%' }}>
        <View>
          <TextInput
            style={styles.input}
            onChangeText={setsearch}
            value={search}
            placeholder="Find student by cne"
          />
          {
            etudiants_data.map((l, i) => (
              <ListItem key={i} bottomDivider>
                <Avatar rounded source={{uri: l.avatar_url}} />
                <ListItem.Content>
                  <ListItem.Title>{l.name}</ListItem.Title>
                  <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            ))
          }
        </View>
        </TabView.Item>
        <TabView.Item style={{ width: '100%' }}>
          <Text h1>Ajouter un Etudiant</Text>
        </TabView.Item>
      </TabView> */}
      
      </>
    )

  else
    return (
      <>
      <Header_title name = "home"/>
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
  viewContainer:{
    flex: 1,
    alignItems:"center",
    justifyContent:"center"
  }
});
