import { Field, Form, Formik, FormikHelpers } from "formik";
import React from "react";
interface Values {
  email: string;
}

export const ValidateUser = () => {
  const onSubmit = (
    values: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 500);
  };

  return (
    <div className="overflow-auto">
      <div>
        <h1>Signup</h1>
        <Formik
          initialValues={{
            email: "",
          }}
          onSubmit={onSubmit}
        >
          <Form>
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="john@acme.com"
              type="email"
            />

            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
