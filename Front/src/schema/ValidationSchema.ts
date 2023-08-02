import * as Yup from "yup";

export interface Values {
  email: string;
}

export const validationFormInitialValues: Values = {
  email: "",
};
export const validationFormSchema = Yup.object({
  email: Yup.string()
    .email("Correo electrónico inválido")
    .required("El correo electrónico es obligatorio"),
});
