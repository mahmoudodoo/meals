import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from "expo";
import MealsNavigator from './navigation/MealsNavigator'


// fetching set of fonts from assets/fonts using Font.loadAsync
const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};


export default function App() {

  // Initialize fontLoad var with false value
  const [fontLoaded, SetFontLoaded] = useState(false);


  // check if the font has loaded
  if (!fontLoaded) {
    return <AppLoading
      startAsync={fetchFonts}
      onFinish={() => SetFontLoaded(true)}
    />;
  };


  return (

    // Adding Screens (Navigation)  
    <MealsNavigator />
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
