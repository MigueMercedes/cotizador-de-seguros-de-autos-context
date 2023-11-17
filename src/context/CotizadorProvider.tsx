import { ReactNode, createContext, useEffect, useState } from 'react';

interface CotizadorContextType {
  datos: datos;
  handleChangeDatos: (
    e:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => void;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
}

interface datos {
  marca: string;
  year: string;
  plan: string;
}

const CotizadorContext = createContext({} as CotizadorContextType);

const CotizadorProvider = ({ children }: { children: ReactNode }) => {
  const [error, setError] = useState('');

  const [datos, setDatos] = useState({
    marca: '',
    year: '',
    plan: '',
  });

  const handleChangeDatos = (
    e:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    console.log(datos);
  }, [datos]);

  return (
    <CotizadorContext.Provider
      value={{
        datos,
        handleChangeDatos,
        error,
        setError,
      }}
    >
      {children}
    </CotizadorContext.Provider>
  );
};

export default CotizadorContext;

export { CotizadorProvider };
