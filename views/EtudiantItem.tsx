import React from 'react'
import { TouchableHighlight, View } from 'react-native'
import { Text } from 'react-native-elements'
import { SwipeListView } from 'react-native-swipe-list-view'

function EtudiantItem({etudiants}) {
    const data = [1,2,2,4,4,5,6]
  return (
    <SwipeListView
            data={etudiants}
            renderItem={ (data, rowMap) => (
                <TouchableHighlight onPress={()=>{alert("swiped")}}>
                    <View>
                        <Text>I am {data.item} in a SwipeListView</Text>
                    </View>
                </TouchableHighlight>
            )}
            renderHiddenItem={ (data, rowMap) => (
                <View >
                    <Text>Left</Text>
                    <Text>Right</Text>
                </View>
            )}
            leftOpenValue={75}
            rightOpenValue={-75}
    />
  )
}

export default EtudiantItem