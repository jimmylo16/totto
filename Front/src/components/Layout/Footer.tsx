import React from "react";

export const Footer = () => {
  return (
    <footer className="relative bottom-0 bg-black text-white w-full py-10">
      <div className="w-3/4 mx-auto flex flex-row">
        <div className="w-1/2 text-sm">
          <ul className="inline-block">
            <li>
              <a href="/compania/historia" className="underscore-slide">
                Quiénes somos
              </a>
            </li>
            <li>
              <a href="/legales/linea-etica" className="underscore-slide">
                Línea Ética
              </a>
            </li>
            <li>
              <a href="/legales/politica-y-aviso-de-privacidad">
                Aviso de privacidad
              </a>
            </li>
            <li>
              <a
                href="/talento-totto/colaboradores"
                className="underscore-slide"
              >
                Talento Totto
              </a>
            </li>
            <li>
              <a href="/sostenibilidad">Sostenibilidad</a>
            </li>
            <li>
              <a href="/prensa" target="_blank" className="underscore-slide">
                Prensa
              </a>
            </li>
            <li>
              <a
                href="https://ventascorporativas.totto.com/"
                className="__faq underscore-slide"
              >
                Negocios empresariales
              </a>
            </li>
            <li>
              <a
                href="https://tottoco.vteximg.com.br/arquivos/proteccion_de_datos_dp_gr_jr.pdf?v=637816648622470000"
                className="underscore-slide"
              >
                Política de Tratamiento de Datos
              </a>
            </li>
          </ul>
          <ul className="inline-block">
            <li>
              <a href="/FAQ" className="underscore-slide">
                Servicio al cliente
              </a>
            </li>
            <li>
              <a href="/store-locator" className="underscore-slide">
                Encuentra tu tienda
              </a>
            </li>
            <li>
              <a href="/mascotas/tiendas" className="underscore-slide">
                Tiendas Totto Pets
              </a>
            </li>
            <li>
              <a
                href="/legales/promociones-vigentes/2023"
                className="underscore-slide"
              >
                Promociones vigentes
              </a>
            </li>
            <li>
              <a href="/legales/envios-y-entregas" className="underscore-slide">
                Envíos y Entregas
              </a>
            </li>
            <li>
              <a
                href="/legales/cambios-y-devoluciones"
                className="underscore-slide"
              >
                Cambios y Devoluciones
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/573022200200?text=Hola, gracias por contactarnos. Cuéntanos ¿Cuál es tu solicitud?"
                className="__faq underscore-slide"
              >
                Escríbenos por WhatsApp
              </a>
            </li>
            <li>
              <a href="http://www.keypago.com/" target="_blank">
                Keypago, paga fácil
              </a>
            </li>
          </ul>
        </div>
        <div className="w-1/2">
          <h5 className="text-xl font-medium">
            ¡Regístrate o actualiza tus datos!
          </h5>
          <br />
          <div className="text-xs">
            <div>
              Te damos la bienvenida registrando y/o actualizando tus datos,
              recibe <strong>10% de descuento en tu próxima compra</strong>
              redímelo únicamente en nuestra tienda online.
              <br />
              <br /> Y además disfruta{" "}
              <strong>
                25% de descuento en tu compra en el mes de cumpleaños.
              </strong>
              <br />
              <br />
              <br />
            </div>
            <div>
              <strong>
                *Los descuentos de registro/actualización y cumpleaños no son
                acumulables.
                <span>*Aplican términos y condiciones. </span>
              </strong>
            </div>
            <br />
            <br />
            <br />
            <div>*Aplica para productos sin descuento o full Price.</div>
            <span>Suscríbete</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
