import { useGlobalState } from "@/hooks/useGlobalState";
import { Field, Form, Formik, FormikHelpers } from "formik";
import React, { Dispatch, FC, SetStateAction, useState } from "react";
import { Button } from "../common/Button";
import { Input } from "../common/Input";
import {
  RegisterValues,
  initialRegisterValues,
  validationRegisterSchema,
} from "@/schema/RegisterSchema";
import { ciudadOptions, departamentoOptions } from "./OptionsHelper";
import { axiosCall } from "@/infraestructure/api/axios";
import { RegisterResponse } from "@/interfaces/Users";

interface RegisterUserProps {
  setShowRegister: Dispatch<SetStateAction<boolean>>;
  initialEmail: string;
}
export const RegisterUser: FC<RegisterUserProps> = ({
  setShowRegister,
  initialEmail,
}) => {
  const { setShowError, setErrorMsg } = useGlobalState();
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async (
    values: RegisterValues,
    formikHelpers: FormikHelpers<RegisterValues>
  ) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const axios = await axiosCall<RegisterResponse>({
      method: "post",
      endpoint: "/users",
      body: values,
    });
    setIsLoading(false);
    setErrorMsg({ message: axios.message, statusCode: axios.statusCode });
    setShowError(true);
  };
  return (
    <div className="overflow-auto">
      <section className="flex flex-col items-center justify-center  mt-10">
        <Formik
          initialValues={{ ...initialRegisterValues, email: initialEmail }}
          validationSchema={validationRegisterSchema}
          onSubmit={onSubmit}
        >
          {({ values, setFieldValue }) => (
            <Form className="flex flex-col  justify-center w-3/4 mb-4  gap-6">
              <span
                className="flex  items-center cursor-pointer"
                onClick={() => setShowRegister(false)}
              >
                <span className="material-symbols-outlined mr-4">
                  chevron_left
                </span>
                volver
              </span>
              <Input
                id="email"
                name="email"
                placeholder="Email"
                type="email"
                label="Email"
              />
              <Input
                id="identification"
                name="identification"
                placeholder="Cedula/Identificacion*"
                type="number"
                label="Cedula/Identificacion*"
              />
              <Input
                id="Nombre"
                name="nombre"
                placeholder="Nombre*"
                type="text"
                label="Nombre*"
              />
              <Input
                id="Apellido"
                name="apellido"
                placeholder="Apellido*"
                type="text"
                label="Apellido*"
              />
              <Input
                id="Numero"
                name="numero"
                placeholder="Numero*"
                type="number"
                label="Numero*"
              />
              <Input
                id="Departamento"
                name="departamento"
                placeholder="Departamento*"
                type="select"
                label="Departamento*"
                as="select"
              >
                <option value="">Seleccione un departamento</option>
                {departamentoOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Input>

              {values.departamento && values.departamento !== "" && (
                <div>
                  <Input
                    id="ciudad"
                    name="ciudad"
                    placeholder="Ciudad*"
                    type="select"
                    label="Ciudad*"
                    as="select"
                  >
                    <option value="">Seleccione un departamento</option>
                    {ciudadOptions[values.departamento].map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Input>
                </div>
              )}

              <Input
                id="FechaDeNacimiento"
                name="fechaDeNacimiento"
                placeholder="FechaDeNacimiento (año/mm/dd)"
                type="date"
                label="FechaDeNacimiento*"
              />

              <div role="group" aria-labelledby="my-radio-group" className="">
                <span>¿ Tienes Hijos ?</span>
                <div className="flex gap-4">
                  <label>
                    <Field type="radio" name="hijos" value="YES" />
                    Si
                  </label>
                  <label>
                    <Field type="radio" name="hijos" value="NO" />
                    No
                  </label>
                </div>
              </div>
              <div role="group" aria-labelledby="my-radio-group" className="">
                <span>Género</span>
                <div className="flex gap-4">
                  <label>
                    <Field type="radio" name="genero" value="masculino" />
                    Masculino
                  </label>
                  <label>
                    <Field type="radio" name="genero" value="femenino" />
                    Femenino
                  </label>
                </div>
              </div>
              <div className="flex justify-center">
                <Button loading={isLoading}>Enviar</Button>
              </div>
            </Form>
          )}
        </Formik>
      </section>
    </div>
  );
};
