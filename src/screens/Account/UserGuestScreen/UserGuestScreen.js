import { view, ScrollView } from "react-native";
import React from "react";
import { styles } from "./UserGuestScreen.styles";
import { Text, Button, Image } from "@rneui/themed";
import { screen } from "../../../utils/screenName";
import { useNavigation } from "@react-navigation/native";

const UserGuestScreen = () => {
  
  const navigation=useNavigation();

  const gotoLogin = () => {
    navigation.navigate(screen.accounts.login);
  };
  return (
    <ScrollView contentContainerStyle={{ flex: 1, justifyContent: "center" }}>
      <Image
        source={require("../../../../assets/img/user-guest.png")}
        style={styles.image}
      />
      <Text style={styles.title}>Consultar tu perfil de dolce italia</Text>
      <Text style={styles.descripcion}>
        ¿Cómo describirias tu mejor restaurante? Busca y visualiza tu mejor
        restaurante de una forma sencilla, vota cualte ha gustado mas y comenta
        como ha sido tu experiencia
      </Text>
      <Button
        title="Ver tu perfil"
        onPress={gotoLogin}
        buttonStyle={styles.btnStyle}
      />
    </ScrollView>
  );
};
export default UserGuestScreen;
