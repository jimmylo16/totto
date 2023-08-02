import React, { useState } from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  loading?: boolean;
}
export const Button = ({ children, loading, ...buttonProps }: ButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);

  if (loading !== undefined && loading !== isLoading) {
    setIsLoading(loading);
  }
  return (
    <button
      type="submit"
      className={`px-8 py-2 rounded-full bg-black text-white  capitalize ${buttonProps.className}`}
      {...buttonProps}
      disabled={isLoading}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
};
