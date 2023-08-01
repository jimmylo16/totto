import React from "react";

export const NeedHelp = () => {
  return (
    <div className="flex flex-col justify-center items-center font-bold  ">
      <section className="w-3/4  flex flex-col py-12 justify-center items-center border-t-2 border-slate-500">
        <span>¿Necesitas ayuda?</span>
        <section className="flex flex-col items-center">
          <span>Linea nacional: 01 8000 510203 - Bogotá 390 73 93</span>
          <span>Email: servicioalcliente@totto.com</span>
          <span>o escribenos a la linea de Whatsapp: 3022200200</span>
        </section>
      </section>
    </div>
  );
};
