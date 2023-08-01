import Image from "next/image";
import React from "react";

export const Navbar = () => {
  return (
    <nav className="relative">
      <h1 className="absolute top-0 right-0 text-sm text-slate-500">
        Escríbenos por WhatsApp: 302 2200200 | Servicio al cliente
      </h1>
      <section className="flex justify-between mx-auto  flex-wrap flex-row px-5 items-center py-4">
        <Image
          src="https://tottoco.vteximg.com.br/arquivos/logo.svg?v=637722375744770000"
          width={190}
          height={64}
          alt="logoTotto"
          className="cursor-pointer"
        />

        <div className="flex items-center gap-8">
          <span className="flex items-center cursor-pointer">
            <span className="material-symbols-outlined ">article</span>
            Mis pedidos
          </span>
          <span className="cursor-pointer">
            <span className="material-symbols-outlined">your_trips</span>
          </span>
        </div>
      </section>
      <section className="text-white flex justify-center items-center bg-black">
        <span className="material-symbols-outlined mr-4">chevron_left</span>
        <span>
          <span className="text-yellow-400 ">NUEVA </span> COLECCION DISNEY PETS
        </span>
        <span className="material-symbols-outlined ml-4">chevron_right</span>
      </section>
    </nav>
  );
};
