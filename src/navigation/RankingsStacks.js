import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils/screenName";
import RankingScreens from "../screens/RankingScreens";

const Stack = createNativeStackNavigator();

const RankingsStacks = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.rankings.ranking}
        component={RankingScreens}
        options={{ title: "Ranking" }}
      />
    </Stack.Navigator>
  );
};

export default RankingsStacks;
