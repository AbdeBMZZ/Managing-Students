import React from 'react'
import { Avatar, Button, Header, Tooltip } from 'react-native-elements';
import { StyleSheet, Text, View} from "react-native";

const Header_title = ({name}) => {
  return <Header
        style={styles.container}
        variant="primary"
        centerComponent={{ text: name, style: { color: '#fff', fontSize:20} }}
    //     rightComponent= {<Tooltip popover={<Text>Abdellah boumaiza</Text>}>
    //     <Text>Press me</Text>
    //   </Tooltip>
    //     }
      />

}

const styles = StyleSheet.create({
    container:{
        height:30
    },
    btn:{
        fontSize:20
    }

})

export default Header_title