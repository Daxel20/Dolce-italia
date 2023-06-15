import React from "react";
import { View, Text } from "react-native";
import { Button } from "@rneui/base";
import { screen } from "../../utils/screenName";

const RestaurantsScreens = (props) => {
  const { navigation}=props;
  const goToAddRestaurents = () => {
    //console.log("Ir a creacion de restaurante");
    navigation.navigate(screen.restauran.addRestaurants);
    //navigation.navigate(screen.acoount.tab,{screen: screen.account.account});
  };


  return (
    <View>
      <Text>Estamos en la screen de Resturante</Text>
      <Button title="crer restaurantre" onPress={goToAddRestaurents} />
    </View>
  );
};
export default RestaurantsScreens;
