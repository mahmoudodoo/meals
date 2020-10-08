import React from 'react';
import {View, Text , StyleSheet,Button} from 'react-native';

import {CATEGORIES} from "../data/dummy-data";

const CategoryMealsScreen = props => {


    const catId = props.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id ===catId);

    return(<View style={styles.screen}>
        <Text>Category Meals Screen</Text>
        <Text>{selectedCategory.title}</Text>
        <Button title="Go to Meal Detail" onPress={() => {
                props.navigation.navigate({routeName :'MealDetail'});
            }}/>
    </View>);

};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center'
    },
});

export default CategoryMealsScreen;