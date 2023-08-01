import React from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
export const Button = ({ children, ...buttonProps }: ButtonProps) => {
  return (
    <button
      type="submit"
      className={`px-8 py-2 rounded-full bg-black text-white  capitalize ${buttonProps.className}`}
      {...buttonProps}
    >
      {children}
    </button>
  );
};
