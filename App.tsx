import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import React, { createContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Auth from './views/Auth';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddStudent from './views/AddStudent';
import Dashboard from './views/Dashboard';
import authContext from "./context/authContext";


const Stack = createStackNavigator();

interface TaskInterface {
  title: string;
  index: number;
}

export default function App() {

  
  const [authenticated, setAuthenticated] = React.useState({});


  return (
    <authContext.Provider value = {{authenticated, setAuthenticated}}>

      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
          gestureEnabled:false,
          headerShown: false,
          headerMode:'float'
        }}>
          <Stack.Screen
            name="Auth"
            component={Auth}
            options={{ title: 'Welcome'}}
            />
          <Stack.Screen name="Dashboard" component={Dashboard} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </authContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
