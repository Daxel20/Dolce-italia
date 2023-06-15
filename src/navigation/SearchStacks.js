import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils/screenName";
import SearchScreens from "../screens/SearchScreens";

const Stack= createNativeStackNavigator();
const SearchStacks = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name={screen.search.search}
          component={SearchScreens}
          options={{ title: "Buscar" }}
        />
      </Stack.Navigator>
    );
  };
  
  export default SearchStacks;
  