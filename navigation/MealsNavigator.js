import React from 'react';
import { Platform, Text } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation-stack';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import FiltersScreen from '../screens/FiltersScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import Colors from '../constants/Colors';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';



// Set a default stack navigation options as an object
const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.headerColor : ''
  },
  headerTitleStyle:{
    fontFamily:'open-sans-bold'
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.headerColor,
  headerTitle: 'Categories'
};

// Create the first stack navigator MealsNavigator
const MealsNavigator = createStackNavigator(
  {
    // First screen Categories
    Categories: {
      screen: CategoriesScreen
    },
    // Second screen CategoryMeals
    CategoryMeals: {
      screen: CategoryMealsScreen
    },
    // Third Screen MealDetail
    MealDetail: MealDetailScreen
  },
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: defaultStackNavOptions
  }
);

// Create the second navigator FavNavigator which is includes Favorites screen and MealDetail screen
const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
  },
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: defaultStackNavOptions
  }
);

// Create tabScreen which is includes MealsNavigator,FavNavigator
const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.headerColor,
      tabBarLabel: <Text style={{color:'white',fontFamily:'open-sans-bold'}}>Meals</Text>,
    }
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accentColor,
      tabBarLabel: <Text style={{color:'white',fontFamily:'open-sans-bold'}}>Favorites</Text>,
    }
  }
};

// Set a different design for both Android and IOS Platforms 
const MealsFavTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
      activeTintColor: 'white',
      shifting: true,
      barStyle: {
        backgroundColor: Colors.accentColor
      }
    })
    : createBottomTabNavigator(tabScreenConfig, {
      tabBarOptions: {
        activeTintColor: Colors.accentColor
      }
    });


// create Filter Navigator which is include FilterScreen
const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen
  },
  {
    // navigationOptions: {
    //   drawerLabel: 'Filters!!!!'
    // },
    defaultNavigationOptions: defaultStackNavOptions
  }
);


// Create Drawer Navigator Which is includes MealsFavTabNavigator and FiltersNavigator
const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: {
      screen: MealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: 'Meals'
      }
    },
    Filters: FiltersNavigator
  },
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontFamily: 'open-sans-bold'
      }
    }
  },
  {contentOptions:{
    activeTintColor:Colors.accentColor,
    labelStyle:{
      fontFamily:'open-sans-bold'
    },
  }}
);


// Export the Tab which contains all screens that we need  
export default createAppContainer(MainNavigator);