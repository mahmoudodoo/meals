import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import CategoryMealsScreen from './CategoryMealsScreen';
import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CategoryGridTile from '../components/CategoryGridTile';


const CategoriesScreen = props => {



    const renderGridItem = (itemData) => {
        return (
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onSelect={() => {
                    props.navigation.navigate({
                        routeName: 'CategoryMeals',
                        params: {
                            categoryId: itemData.item.id,
                            titleScreen: itemData.item.title,
                        },

                    })
                }}

            />
        );
    };


    return (
        // Create a new flatList 
        <FlatList
            // Adding key for each item in the flatlist from CATEGORIES list
            keyExtractor={(item, index) => item.id}
            // Adding data to our FlatList from /data/dummy-data.js
            data={CATEGORIES}
            // render items using renderGridItem function above 
            renderItem={renderGridItem}
            // Number of columns in the FlatList
            numColumns={2} />

    );

};


// CategoriesScreen.navigationOptions = {
//     headerTitle:  'Meal Categories',
//     headerStyle: {
//         backgroundColor:Colors.headerColor,
//     },
//     headerTintColor:'white',
// };



// styles
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

});

export default CategoriesScreen;