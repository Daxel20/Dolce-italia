import { View, Text, Image } from "react-native";
import React from "react";
import { style } from "./User.style";

const UserLoggedScreen = () => {
  return (
    <View>
      <Image 
      source={require("../../../../assets/img/galaxia.png")}
      style={style.image}
        />
    </View>
  );
};

export default UserLoggedScreen;
