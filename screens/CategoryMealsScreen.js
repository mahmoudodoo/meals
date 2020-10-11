import React from 'react';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealScreen = props => {
  
  //  Fetch category id from CategoriesScreen
  const catId = props.navigation.getParam('categoryId');

  // Filter meals from MEALS List by category id, Find MEALS List in ../data/dummy-data.js
  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );


  // Display MealList component which is a FlatList, send a list of data to display them in a FlatList, Find MealList component in ../components/MealList.js
  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

// Change the Header Title
CategoryMealScreen.navigationOptions = navigationData => {
  // Fetch category id from CategoriesScreen
  const catId = navigationData.navigation.getParam('categoryId');

  // find selected category by category id
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  // Set the header title to selectedCategory.title
  return {
    headerTitle: selectedCategory.title
  };
};

export default CategoryMealScreen;