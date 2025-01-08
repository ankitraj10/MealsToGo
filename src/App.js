import React from 'react';
import { View, Text,SafeAreaView } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

const App = () => {
    return (
      <>
        <SafeAreaView style={{flex:1}} >
           <View style={{backgroundColor:"green",padding:15}}><Text>Search</Text></View>
           <View style={{backgroundColor:"blue",padding:15,flex:1}}><Text style={{color:"white"}}>list</Text></View>
        </SafeAreaView>
        <ExpoStatusBar style="auto"/>
      </>
    );
};

export default App; 
