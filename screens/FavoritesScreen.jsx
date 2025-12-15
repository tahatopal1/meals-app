import { useContext } from "react";
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";
import { Text, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

export default function FavoritesScreen() {
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id),
  );

  if (favoriteMealIds.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You hae no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
