import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils/screenName";
import RestaurantsScreens from "../screens/Restaurants/RestaurantsScreens";
import AddRestaurantsScreen from "../screens/Restaurants/AddRestaurantsScreen";
//Instancia del componente
const Stack = createNativeStackNavigator();

const RestaurantsStacks = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.restauran.tab}
        component={RestaurantsScreens}
        options={{ title: "Restaurantes" }}
      />
      <Stack.Screen
      name={screen.restauran.addRestaurants}
      component={AddRestaurantsScreen}
      options={{title: "Nuevo Restaurante"}}
      />
    </Stack.Navigator>
  );
};
export default RestaurantsStacks;
