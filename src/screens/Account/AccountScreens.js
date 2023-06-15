import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import UserGuestScreen from "./UserGuestScreen/UserGuestScreen";
import UserLoggedScreen from "./UserLoggedScreens/UserLoggedScreen";
import LoadingModal from "../../components/Shared/LoadingModal/LoadingModal";

const AcconuntScreen = () => {
  const [hasLogged, setHasLogged] = useState(null);

  //useEffect
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      //verificar si la sesion cambio
      //console.log(user);
      setHasLogged(user != null ? true : false);
    });
  }, []);
  if (hasLogged==null){
    return<LoadingModal show={true} text="Cargando"/>;
  }

  return hasLogged == true ? <UserLoggedScreen /> : <UserGuestScreen />;
};

export default AcconuntScreen;
