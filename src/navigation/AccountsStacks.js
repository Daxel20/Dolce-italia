import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils/screenName";
import AcconuntScreens from "../screens/Account/AccountScreens";
import UserGuestScreen from "../screens/Account/UserGuestScreen/UserGuestScreen";
import LoginScreen from "../screens/Account/LoginScreen/LoginScreen";
import RegisterScreen from "../screens/Account/RegisterScreen/RegisterScreen";

const Stack = createNativeStackNavigator();

const AccountsStacks = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.accounts.accountss}
        component={AcconuntScreens}
        options={{ title: "Cuenta" }}
      />
      <Stack.Screen
      name={screen.accounts.login}
      component={LoginScreen}
      options={{title:"Iniciar Sesion"}}
      />
      <Stack.Screen
      name={screen.accounts.register}
      component={RegisterScreen}
      options={{title:"Regitrarse"}}
      />
      
    </Stack.Navigator>
    
  );
};

export default AccountsStacks;
