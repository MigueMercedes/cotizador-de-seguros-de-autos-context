import { ReactNode, createContext, useState } from 'react';
import {
  calcularMarca,
  calcularPlan,
  formatearDinero,
  obtenerDiferenciaYear,
} from '../helpers/index.helpers';

interface CotizadorContextType {
  datos: datos;
  handleChangeDatos: (
    e:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => void;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
  cotizarSeguro: () => void;
  resultado: string;
  isLoading: boolean;
}

interface datos {
  marca: string;
  year: string;
  plan: string;
}

const CotizadorContext = createContext({} as CotizadorContextType);

const CotizadorProvider = ({ children }: { children: ReactNode }) => {
  const [error, setError] = useState('');
  const [resultado, SetResultado] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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

  const cotizarSeguro = () => {
    let resultado: number | string = 2000;

    const diferencia = obtenerDiferenciaYear(Number(datos.year));

    resultado -= (diferencia * 3 * resultado) / 100;

    resultado *= calcularMarca(Number(datos.marca));

    resultado *= calcularPlan(Number(datos.plan));

    setIsLoading(true);
    setTimeout(() => {
      SetResultado(formatearDinero(resultado));
      setIsLoading(false);
    }, 2000);
  };

  return (
    <CotizadorContext.Provider
      value={{
        datos,
        handleChangeDatos,
        error,
        setError,
        cotizarSeguro,
        resultado,
        isLoading,
      }}
    >
      {children}
    </CotizadorContext.Provider>
  );
};

export default CotizadorContext;

export { CotizadorProvider };
