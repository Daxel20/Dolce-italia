import { View, ScrollView } from "react-native";
import React from "react";
import {Styles, style} from "./loginScreen.style";
import {Text, Image} from "@rneui/base"
import { styles } from "../UserGuestScreen/UserGuestScreen.styles";
import { Button } from "@rneui/base";
import { screen } from "../../../utils/screenName";
import LoginForm from "../../../components/Auth/LoginForm/LoginForm";

const LoginScreen=(props)=> {
  const { navigation}=props;
  const goToRegister = () => {
    navigation.navigate(screen.accounts.register);
  };
  return (
    <ScrollView>
      <Image
      source={require("../../../../assets/img/5-tenedores-letras-icono-logo.png")}
        style={styles.image}
        />
        <View style={styles.content}>
        <LoginForm/>
        <Text style={style.textRegister}>
          ¿Aún no tienes una cuenta?
          <Text style={style.btnRegister}
          onPress={goToRegister}>Registrate</Text>
          </Text>
        </View>
    </ScrollView>
  );
};
export default LoginScreen;