import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Auth from './views/Auth';

export default function App() {
  const [loaded] = useFonts({
    Oswald_Bold: require('./assets/fonts/Oswald-Bold.ttf'),
  });
  
  if (!loaded) {
    return null;
  }


  return (
    <Auth/>
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
