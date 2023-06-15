import { View } from "react-native";
import React, { useState } from "react";
import { Input, Icon, Button } from "@rneui/themed";
import { styles } from "../RegisterForm/RegisterForm.style";
import { useFormik } from "formik";
import { initialValues } from "./LoginFom.data";
import { validationSchema } from "./LoginFom.data";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Toast from "react-native-toast-message";
import { screen } from "../../../utils/screenName";
import { useNavigation } from "@react-navigation/native";

const LoginForm = () => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const auth = getAuth();
        await signInWithEmailAndPassword(
          auth,
          formValue.email,
          formValue.password
        );
        navigation.navigate(screen.accounts.accountss);
      } catch (error) {
        Toast.show({
          type: "error",
          position: "bottom",
          text1: "Usuario o contraseña incorrecta",
          text2: "Intentelo de nuevo",
        });
      }
    },
  });
  const showwwww = () => {
    setShowPassword(!showPassword);
  };
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
        containerStyle={styles.input}
        secureTextEntry={showPassword ? false : true}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-outline" : "eye-off-outline"}
            iconStyle={styles.icon}
            onPress={showwwww}
          />
        }
        onChangeText={(text) => formik.setFieldValue("password", text)}
        errorMessage={formik.errors.password}
      />
      <Button
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btnLogin}
        size="md"
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
        title="Iniciar sesión"
      />
    </View>
  );
};
export default LoginForm;
