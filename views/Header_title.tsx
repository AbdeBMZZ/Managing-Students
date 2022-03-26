import React from 'react'
import { Avatar, Button, Header, Tooltip } from 'react-native-elements';
import { StyleSheet, Text, View} from "react-native";

interface nameProps{
    name:string
}
const Header_title = (props:nameProps) => {
  return <Header
        style={styles.container}
        centerComponent={{ text: props.name, style: { color: '#fff', fontSize:20} }}
    //     rightComponent= {<Tooltip popover={<Text>Abdellah boumaiza</Text>}>
    //     <Text>Press me</Text>
    //   </Tooltip>
    //     }
      />

}

const styles = StyleSheet.create({
    container:{
        height:130
    }

})

export default Header_title