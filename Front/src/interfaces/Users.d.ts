import { RegisterValues } from "@/schema/RegisterSchema";

export interface UserResponse {
  data: any;
  error: boolean;
  message: string;
  statusCode: number;
}
export interface RegisterResponse {
  message: string;
  statusCode: number;
  error: boolean;
  data?: {
    email: string;
    identification: number;
    nombre: string;
    apellido: string;
    numero: number;
    departamento: string;
    ciudad: string;
    fechaDeNacimiento: string;
    hijos: string;
    genero: string;
    user_id: string;
  };
}
