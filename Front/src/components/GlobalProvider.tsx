import { createContext, ReactNode, useState } from "react";
import { Modal } from "./common/Modal";
import { Button } from "./common/Button";

type errorMsg = {
  message: string;
  statusCode: number;
};
export const GlobalContext = createContext({
  showError: false,
  setShowError: (show: boolean) => {},
  setErrorMsg: (error: errorMsg) => {},
});

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [showError, setShowError] = useState(false);
  const [errorMsg, setErrorMsg] = useState({ message: "", statusCode: 200 });

  return (
    <GlobalContext.Provider value={{ showError, setShowError, setErrorMsg }}>
      <Modal showModal={showError} setShowModal={setShowError}>
        <section className="bg-white py-4 px-10 flex flex-col justify-center items-center">
          {errorMsg.statusCode === 201 ? (
            <>
              <div className="rounded-full border-green-300  border-2 w-14 h-14 flex justify-center items-center">
                <span className=" material-symbols-outlined  text-green-300 text-4xl">
                  done
                </span>
              </div>
              <span className="text-xl font-bold text-center text-black my-4">
                !Has actualizado tus datos!
              </span>
              <span className="font-bold">
                Muchas gracias por tu actualización
              </span>
            </>
          ) : (
            <>
              {errorMsg.statusCode === 404 ? (
                <>
                  <div className="rounded-full border-red-300  border-2 w-14 h-14 flex justify-center items-center">
                    <span className="material-symbols-outlined text-red-300  text-4xl">
                      close
                    </span>
                  </div>
                  <p className="text-xl font-bold text-center text-black my-4">
                    {errorMsg.message}
                  </p>
                </>
              ) : (
                <p className="text-red-500 text-sm">{errorMsg.message}</p>
              )}
            </>
          )}
          <div className="mt-4">
            <Button onClick={() => setShowError(false)}>Entendido</Button>
          </div>
        </section>
      </Modal>
      {children}
    </GlobalContext.Provider>
  );
};
