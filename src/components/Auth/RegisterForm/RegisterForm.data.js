import * as Yup from "yup";

export const initialValues = () => {
  return {
    email: "",
    password: "",
    confirmPassword: "",
  };
};

export const validationSchema = () => {
  return Yup.object({
    email: Yup.string()
      .email("El email no es correcto")
      .required("El email es obligatoriooooooo"),
    password: Yup.string().required("La contraseña es obligatoria"),
    confirmPassword: Yup.string().required("La contraseña es obligatoria")
      .oneOf([Yup.ref("password")],"Las contraseñas no coinciden"),
  });
};
