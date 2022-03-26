import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, SafeAreaView , ScrollView } from "react-native";
import Header_title from './views/Header_title';
import { Avatar, ListItem, Tab, TabView } from 'react-native-elements';
import { Button } from 'react-native-elements';
import * as React from 'react';
import { SearchBar } from 'react-native-elements';
import Dashboard from './views/Dashboard';


export default function App() {
  return (
    <Dashboard />
  )
}

