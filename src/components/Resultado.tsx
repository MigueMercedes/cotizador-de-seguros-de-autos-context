/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo, useRef, useCallback } from 'react';
import { MARCAS, PLANES } from '../constants/index';
import useCotizador from '../hooks/useCotizador';

const Resultado = () => {
  const { resultado, datos } = useCotizador();
  const { marca, year, plan } = datos;
  const yearRef = useRef(year);

  const cachedMarca = useMemo(
    () => MARCAS.find(m => m.id === Number(marca)),
    [resultado]
  );

  const cachedPlan = useMemo(
    () => PLANES.find(p => p.id === Number(plan)),
    [resultado]
  );

  if (!resultado) return null;

  return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow">
      <h2 className="text-gray-600 font-black text-3xl">Resumen</h2>

      <p className="my-2">
        <span className="font-bold">Marca: </span>
        {cachedMarca?.nombre}
      </p>

      <p className="my-2">
        <span className="font-bold">Plan: </span>
        {cachedPlan?.nombre}
      </p>

      <p className="my-2">
        <span className="font-bold">Año: </span>
        {yearRef.current}
      </p>

      <p className="my-2 text-2xl">
        <span className="font-bold">Total Cotización: </span>{resultado}
      </p>
    </div>
  );
};

export default Resultado;
