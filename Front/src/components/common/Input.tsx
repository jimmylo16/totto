import { Field, FieldHookConfig, useField } from "formik";
import React from "react";

type InputProps = {
  label: string;
} & FieldHookConfig<string>;

export const Input = (inputProps: InputProps) => {
  const { label, ...props } = inputProps;
  const [field, meta] = useField(props);
  return (
    <div>
      <div className="relative w-full">
        <Field
          {...field}
          {...props}
          className="border-2 border-gray-300  p-2 w-full  block px-2.5 pb-2.5 pt-4 text-sm text-gray-900 bg-transparent border-1  appearance-none focus:outline-none focus:ring-0  peer"
          placeholder=""
        />
        <label
          htmlFor={props.id}
          className="absolute  text-gray-500 leading-4 text-lg bg-white duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-black peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
        >
          {label}
        </label>
      </div>
      {meta.error && meta.touched && (
        <div className="text-red-500">{meta.error}</div>
      )}
    </div>
  );
};
