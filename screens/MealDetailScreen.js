import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { HeaderButtons,Item} from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButton'

const MealDetailScreen = props => {
    // Get Meal id from MealsCategories screen
    const mealId = props.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);


    return (
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
        </View>
    );

};

MealDetailScreen.navigationOptions = (navigationData) => {
    const mealId = navigationData.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return {
    headerTitle:() => <Text style={{color:'white',textAlign:'center'}}>{selectedMeal.title}</Text>,
    headerRight:() => <HeaderButtons HeaderButtonComponent ={CustomHeaderButton} >
        <Item 
            title= "Favorite"
            iconName = "ios-star"
            onPress = {() => {
                console.log("mark as a favorite!")
            }}
        />

        

    </HeaderButtons>
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default MealDetailScreen;