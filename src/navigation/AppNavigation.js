import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/themed";
import { screen } from "../utils/screenName";
import RestaurantsStacks from "./RestaurantsStacks";
import favoritesStack from "./FavoritesStacks";
import RankingsStacks from "./RankingsStacks";
import SearchStacks from "./SearchStacks";
import AccountsStacks from "./AccountsStacks";


//Crear un instancia para la gestion del componete de la navegacion
const Tab = createBottomTabNavigator();

export const AppNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#28B463",
        tabBarInactiveTintColor: "#17202A",
        tabBarIcon: ({ color, size }) => screenOptions(route, color, size),
      })}
    >
      <Tab.Screen
        name={screen.accounts.tab}
        component={AccountsStacks}
        options={{ title: "Inicio de Sesión" }}
      />
      <Tab.Screen
        name={screen.favorites.tab}
        component={favoritesStack}
        options={{ title: "Favoritos" }}
      />
      <Tab.Screen
        name={screen.rankings.tab}
        component={RankingsStacks}
        options={{ title: "Ranking" }}
      />
      <Tab.Screen
        name={screen.restauran.tab}
        component={RestaurantsStacks}
        options={{ title: "Restaurantes"}}
      />

      <Tab.Screen
        name={screen.search.tab}
        component={SearchStacks}
        options={{ title: "Buscar" }}
      />
    </Tab.Navigator>
  );
};

const screenOptions = (route, color, size) => {
  let iconName;
  if (route.name == screen.accounts.tab) {
    iconName = "account-box-outline";
  }
  if (route.name == screen.favorites.tab) {
    iconName = "star-box-multiple";
  }
  if (route.name == screen.rankings.tab) {
    iconName = "transition-masked";
  }
  if (route.name == screen.restauran.tab) {
    iconName = "silverware";
  }
  if (route.name == screen.search.tab) {
    iconName = "book-search-outline";
  }
  return (
    <Icon type="material-community" name={iconName} color={color} size={size} />
  );
};
