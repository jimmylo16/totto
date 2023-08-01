import { useGlobalState } from "@/hooks/useGlobalState";
import { Field, Form, Formik, FormikHelpers, FieldProps } from "formik";
import React from "react";
import { Button } from "../common/Button";
import { Input } from "../common/Input";
interface Values {
  email: string;
  identification: string;
  nombre: string;
  apellido: string;
  numero: number;
  departamento: string;
  fechaDeNacimiento: string;
  hijos: string;
  genero: string;
}

export const RegisterUser = () => {
  const { setShowError } = useGlobalState();
  const initialValues: Values = Object.freeze({
    email: "",
    identification: "",
    nombre: "",
    apellido: "",
    numero: 0,
    departamento: "",
    fechaDeNacimiento: "",
    hijos: "",
    genero: "",
  });
  return (
    <div className="overflow-auto">
      <section className="flex flex-col items-center justify-center  mt-10">
        <Formik
          initialValues={initialValues}
          onSubmit={(
            values: Values,
            { setSubmitting }: FormikHelpers<Values>
          ) => {
            console.log({ values });
            setTimeout(() => {
              setShowError(true);
              setSubmitting(false);
            }, 500);
          }}
        >
          <Form className="flex flex-col  justify-center w-3/4 mb-4  gap-6">
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
              type="text"
              label="Departamento*"
            />
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
                  <Field type="radio" name="hijos" value="One" />
                  Si
                </label>
                <label>
                  <Field type="radio" name="hijos" value="Two" />
                  No
                </label>
              </div>
            </div>
            <div role="group" aria-labelledby="my-radio-group" className="">
              <span>Género</span>
              <div className="flex gap-4">
                <label>
                  <Field type="radio" name="genero" value="Masculino" />
                  Masculino
                </label>
                <label>
                  <Field type="radio" name="genero" value="Femenino" />
                  Femenino
                </label>
              </div>
            </div>
            <div className="flex justify-center">
              <Button>Enviar</Button>
            </div>
          </Form>
        </Formik>
      </section>
    </div>
  );
};
