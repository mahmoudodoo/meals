import { createStackNavigator } from 'react-navigation-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import { createAppContainer } from 'react-navigation';
import Colors from '../constants/Colors';

// Create a new navigation screens using  (react-navigation-stack) library

const MealsNavigator = createStackNavigator({
    // First screen
    Categories: {
        screen: CategoriesScreen,
        navigationOptions: {
            headerTitle: 'Meal Categories',
            headerStyle: {
                backgroundColor: Colors.headerColor,
            },
            headerTintColor: 'white',
        },
    },

    // Second screen
    CategoryMeals: {
        screen: CategoryMealsScreen,
        navigationOptions: {
            headerTitle: 'Category Meals',
            headerStyle: {
                backgroundColor: Colors.headerColor,
            },
            headerTintColor: 'white',
        },
    },
    // Third screen 
    MealDetail: {
        screen: MealDetailScreen,
        navigationOptions: {
            headerTitle: 'Meal Details',
            headerStyle: {
                backgroundColor: Colors.headerColor,
            },
            headerTintColor: 'white',
        },

    },

});

// export all screens using createAppContainer(< Navigator >)
export default createAppContainer(MealsNavigator);