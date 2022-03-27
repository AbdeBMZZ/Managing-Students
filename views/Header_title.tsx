import React, { useContext } from 'react'
import { Avatar, Button, Header, Tooltip } from 'react-native-elements';
import { StyleSheet, Text, View} from "react-native";
import authContext from "../context/authContext";

interface nameProps{
    name:string,
    nom: string,
    prenom: string,
    navigation:any
}
const Header_title = (props:nameProps) => {
    const {setAuthenticated} = useContext(authContext)

  return <Header
        style={styles.container}
        rightComponent={
            <Button 
            title="Logout"
            onPress={()=>{
                // setAuthenticated(null)
                props.navigation.navigate("Auth")
            }}
            />


            
        }
        centerComponent={{ text: props.name, style: { color: '#fff', fontSize:20} }}
        leftComponent= {
            <View style={styles.avatarStyle}>
                <Avatar
            size="small"
            rounded
            titleStyle={{color:'black'}}

            title={props.nom[0].toUpperCase() + props.prenom[0].toUpperCase()}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}

          />
            </View>
        
        }
    //     rightComponent= {<Tooltip popover={<Text>Abdellah boumaiza</Text>}>
    //     <Text>Press me</Text>
    //   </Tooltip>
    //     }
      />

}

const styles = StyleSheet.create({
    container:{
        height:200,
        flexDirection:'row',
        justifyContent:'space-evenly',
        // textAlignVertical:'center',
        alignItems:'center'
    },
    avatarStyle:{
        backgroundColor:"white",
        borderRadius: 20
        }
})

export default Header_title