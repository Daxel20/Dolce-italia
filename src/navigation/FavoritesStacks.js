import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils/screenName";
import FavoriteScreens from "../screens/FavoriteScreens";

const Stack = createNativeStackNavigator();

const FavoritesStacks = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.favorites.favorites}
        component={FavoriteScreens}
        options={{ title: "Favoritos" }}
      />
    </Stack.Navigator>
  );
};

export default FavoritesStacks;
