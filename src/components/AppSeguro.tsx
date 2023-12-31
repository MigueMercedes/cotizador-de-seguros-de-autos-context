import useCotizador from '../hooks/useCotizador';
import { Formulario } from './Formulario';
import Resultado from './Resultado';
import Spinner from './Spinner';

export const AppSeguro = () => {

  const { isLoading } = useCotizador();

  return (
    <>
      <header className="my-10">
        <h1 className="text-white text-center text-3xl sm:text-4xl font-black">
          Cotizador de Seguros de Autos
        </h1>
      </header>

      <main className="bg-white w-11/12 md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10">
        <Formulario />
        {isLoading ? <Spinner /> : <Resultado />}
      </main>
    </>
  );
};
