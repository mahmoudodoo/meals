import React from 'react';
import {TouchableOpacity, View,Text,StyleSheet, Platform } from 'react-native';


// Create Category Grid Tile component 
const CategoryGridTile = props => {
    return(
              // Navigate to another screen using navigation.navigate and pass some parameters to the next screen through props.onSelect function 
              <TouchableOpacity 
              style = {styles.gridItem}

              // Once the button is clicked, onSelect Function which is in CategoriesScreen will be running and pass the data to next screen
              onPress = {props.onSelect}

              >
              
              <View style={{...styles.container,...{backgroundColor:props.color}}}>
              {/* Display title for each item inside Text View */}
              <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
              </View>
              </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    gridItem: {
        flex:1,
        margin: 5,
        height:150,
        elevation:5,
        overflow: Platform.OS === 'android' && Platform.Version >= 21?  'hidden' : 'visible'

    },
    container:{
        flex:1,
        borderRadius:9,
        shadowColor:'black',
        shadowOpacity: 0.26,
        shadowOffset: {width : 0 , height: 2},
        shadowRadius: 9 ,
       
    },
    title:{
        fontFamily:'open-sans-bold',
        fontSize:22,
        textAlign:'center'
    },

});

export default CategoryGridTile;