import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import MealItem from '../components/MealItem';

import { CATEGORIES, MEALS } from "../data/dummy-data";


// Initialize CategoryMealsScreen 
const CategoryMealsScreen = props => {

    // Create renderMealItem function for Flatlist 
    const renderMealItem = itemData => {
        return (
            <MealItem 
            title={itemData.item.title} 
            duration = {itemData.item.duration} 
            complexity = {itemData.item.complexity}
            affordability = {itemData.item.affordability}
            image = {itemData.item.imageUrl}
            onSelectMeal={() => { 
                props.navigation.navigate({
                    routeName: 'MealDetail',
                    params:{
                        mealId:itemData.item.id,

                    }
                });
            }} 


            />
        );
    };

    // Get a parameter (categoryId) from the sender and assign it to variable
    const catId = props.navigation.getParam('categoryId');

    // Filter List of meals that have catId
    const displayedMeals = MEALS.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    );

    // Find the selected category from CATEGORIES (/data/dummy-data) whre catId equal category id and then assign it to selectedCategory variable
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return (
        // Display Data
        <View style={styles.screen}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}
                style={{width:'100%'}}
            />
        </View>

    );

};


CategoryMealsScreen.navigationOptions = (navigationData) => {
    const titleScreen = navigationData.navigation.getParam('titleScreen');

    return {
        headerTitle: titleScreen,
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default CategoryMealsScreen;