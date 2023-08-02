import { useGlobalState } from "@/hooks/useGlobalState";
import { Form, Formik } from "formik";
import React, { Dispatch, FC, SetStateAction, useState } from "react";
import { Button } from "../common/Button";
import { axiosCall } from "@/infraestructure/api/axios";
import { Input } from "../common/Input";
import {
  Values,
  validationFormInitialValues,
  validationFormSchema,
} from "@/schema/ValidationSchema";
import { UserResponse } from "@/interfaces/Users";
import { useRouter } from "next/router";

interface ValidateUserProps {
  setShowRegister: Dispatch<SetStateAction<boolean>>;
  setInitialEmail: Dispatch<SetStateAction<string>>;
}
export const ValidateUser: FC<ValidateUserProps> = ({
  setShowRegister,
  setInitialEmail,
}) => {
  const { setShowError, setErrorMsg } = useGlobalState();
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async (values: Values) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const axios = await axiosCall<UserResponse>({
      method: "post",
      endpoint: "/users/find-by-email",
      id: values.email,
    });
    setIsLoading(false);
    if (axios.error) {
      setInitialEmail(values.email);
      setShowRegister(true);
      setShowError(true);
      setErrorMsg({ message: axios.message, statusCode: axios.statusCode });
      return;
    }
    setErrorMsg({ message: axios.message, statusCode: axios.statusCode });
    setShowError(true);
  };

  return (
    <div className="overflow-auto">
      <section className="flex flex-col items-center justify-center ">
        <h1 className="text-center font-bold my-10">
          Ingresa tu correo para validarte en nuetra base de datos y continuar
          con el proceso.
        </h1>
        <Formik
          initialValues={validationFormInitialValues}
          validationSchema={validationFormSchema}
          onSubmit={onSubmit}
        >
          <Form className="flex flex-col w-3/4 mb-4 ">
            <Input
              id="email"
              name="email"
              placeholder="Email"
              type="email"
              label="Email"
              className="pb-6"
            />
            <div className="flex justify-center pt-6">
              <Button loading={isLoading}>Enviar</Button>
            </div>
          </Form>
        </Formik>
      </section>
    </div>
  );
};
