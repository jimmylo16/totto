import { useGlobalState } from "@/hooks/useGlobalState";
import { Field, Form, Formik, FormikHelpers } from "formik";
import React from "react";
import { Button } from "../common/Button";
interface Values {
  email: string;
}

export const ValidateUser = () => {
  const { setShowError } = useGlobalState();

  const onSubmit = (
    values: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    setTimeout(() => {
      setShowError(true);
    }, 500);
  };

  return (
    <div className="overflow-auto">
      <section className="flex flex-col items-center justify-center ">
        <h1 className="text-center font-bold my-10">
          Ingresa tu correo para validarte en nuetra base de datos y continuar
          con el proceso.
        </h1>
        <Formik
          initialValues={{
            email: "",
          }}
          onSubmit={onSubmit}
        >
          <Form className="flex flex-col items-center justify-center w-3/4 mb-4">
            <Field
              id="email"
              name="email"
              placeholder="Email"
              type="email"
              className="border-2 border-gray-300  p-2 w-3/4 mb-5"
            />
            <Button>Enviar</Button>
          </Form>
        </Formik>
      </section>
    </div>
  );
};
