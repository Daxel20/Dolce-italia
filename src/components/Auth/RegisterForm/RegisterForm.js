import { View } from "react-native";
import React, { useState } from "react";
import { Input, Icon, Button } from "@rneui/themed";
import { styles } from "./RegisterForm.style";
import { useFormik } from "formik";
import { initialValues } from "./RegisterForm.data";
import { validationSchema } from "./RegisterForm.data";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import {screen} from "../../../utils/screenName" ;
import  Toast  from "react-native-toast-message";

const RegisterForm = () => {
  const navigation=useNavigation();
  //hook usestate
  const [ showPassword, setShowpassword ] = useState(false);
  //hook
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      // console.log("Formulario");
      // console.group(formValue);
      try{
        const auth =getAuth();
        await createUserWithEmailAndPassword(
          auth,
          formValue.email,
          formValue.password
        );
        navigation.navigate(screen.accounts.accountss);
      }catch(error){
        // console.log(error);
        Toast.show({
          type: "error",
          position: "bottom",
          text1: "Error al Registrarse",
          text2: "Inténtalo de nuevo"
        })
      }
    },
  });

 const showwwww=()=>{
    setShowpassword(!showPassword)
 }

  return (
    <View style={styles.content}>
      <Input
        placeholder="Correo Electronico"
        containerStyle={styles.input}
        rightIcon={
          <Icon type="material-community" name="at" iconStyle={styles.icon} />
        }
        onChangeText={(text) => formik.setFieldValue("email", text)}
        errorMessage={formik.errors.email}
      />
      <Input
        placeholder="Contraseña"
        containerStyle={styles.contra}
        secureTextEntry={showPassword ? false : true}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.icon}
            onPress={showwwww}
          />
        }
        onChangeText={(text) => formik.setFieldValue("password", text)}
        errorMessage={formik.errors.password}
      />
      <Input
        placeholder="Confirmar Contraseña"
        containerStyle={styles.contra}
        secureTextEntry={showPassword ? false : true}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.icon}
            onPress={showwwww}
          />
        }
        onChangeText={(text) => formik.setFieldValue("confirmPassword", text)}
        errorMessage={formik.errors.confirmPassword}
      />
      <Button
        title="Unirse"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btnRegister}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  );
};

export default RegisterForm;
