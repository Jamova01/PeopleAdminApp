import * as yup from "yup";

export const personFormSchema = yup.object().shape({
  first_name: yup.string().required("Primer nombre es obligatorio"),
  first_lastname: yup.string().required("Primer apellido es obligatorio"),
  birthday: yup.string().required("Fecha de nacimiento es obligatoria"),
  gender: yup.string().required("Género es obligatorio"),
  second_name: yup.string(),
  second_lastname: yup.string(),
  birth_country: yup.string().required("País de nacimiento es obligatorio"),
  marital_status: yup.string().required("Estado civil es obligatorio"),
});
