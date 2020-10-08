import { createStackNavigator } from 'react-navigation-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import { createAppContainer } from 'react-navigation';
import Colors from '../constants/Colors';

const MealsNavigator = createStackNavigator({
    Categories:{
        screen:CategoriesScreen,
        navigationOptions:{
            headerTitle:  'Meal Categories',
            headerStyle: {
                backgroundColor:Colors.headerColor,
        },
        headerTintColor:'white',
    },
    },
    CategoryMeals:{
        screen:CategoryMealsScreen,
        navigationOptions:{
            headerTitle:  'Category Meals',
            headerStyle: {
                backgroundColor:Colors.headerColor,
            },
            headerTintColor:'white', 
        },
    },
    MealDetail:{ 
        screen:MealDetailScreen,
        navigationOptions:{
            headerTitle:  'Meal Details',
            headerStyle: {
                backgroundColor:Colors.headerColor,
            },
            headerTintColor:'white', 
        },
    
    },

});


export default  createAppContainer(MealsNavigator);