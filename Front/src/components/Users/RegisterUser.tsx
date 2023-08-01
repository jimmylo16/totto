import { useGlobalState } from "@/hooks/useGlobalState";
import { Field, Form, Formik, FormikHelpers } from "formik";
import React from "react";
import { Button } from "../common/Button";
import { Input } from "../common/Input";
import {
  RegisterValues,
  initialRegisterValues,
  validationRegisterSchema,
} from "@/schema/RegisterSchema";
import { ciudadOptions, departamentoOptions } from "./OptionsHelper";

export const RegisterUser = () => {
  const { setShowError } = useGlobalState();
  return (
    <div className="overflow-auto">
      <section className="flex flex-col items-center justify-center  mt-10">
        <Formik
          initialValues={initialRegisterValues}
          validationSchema={validationRegisterSchema}
          onSubmit={(
            values: RegisterValues,
            { setSubmitting }: FormikHelpers<RegisterValues>
          ) => {
            console.log({ values });
            setTimeout(() => {
              setShowError(true);
              setSubmitting(false);
            }, 500);
          }}
        >
          {({ values, setFieldValue }) => (
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
          )}
        </Formik>
      </section>
    </div>
  );
};
