import * as Yup from "yup";

export interface RegisterValues {
  email: string;
  identification: string;
  nombre: string;
  apellido: string;
  numero: number;
  departamento: string;
  ciudad: string;
  fechaDeNacimiento: string;
  hijos: string;
  genero: string;
}
export const initialRegisterValues: RegisterValues = Object.freeze({
  email: "",
  identification: "",
  nombre: "",
  apellido: "",
  numero: 0,
  departamento: "",
  ciudad: "",
  fechaDeNacimiento: "",
  hijos: "",
  genero: "",
});

export const validationRegisterSchema = Yup.object({
  email: Yup.string()
    .email("Correo electrónico inválido")
    .required("El correo electrónico es obligatorio"),
  identification: Yup.string().required("El apellido es obligatorio"),
  nombre: Yup.string().required("El nombre es obligatorio"),
  apellido: Yup.string().required("El apellido es obligatorio"),
  numero: Yup.number().required("El numero es obligatorio"),
  departamento: Yup.string().required("El departamento es obligatorio"),
  ciudad: Yup.string().required("La ciudad es obligatoria"),
  fechaDeNacimiento: Yup.string().required(
    "La fecha de nacimiento es obligatoria"
  ),
  hijos: Yup.string(),
  genero: Yup.string(),
});
