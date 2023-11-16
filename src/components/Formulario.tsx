import { Fragment } from 'react'
import { MARCAS, PLANES, YEARS } from '../constants'

export const Formulario = () => {
  return (
    <>
      <form>
        <div className="my-5">
          <label
            htmlFor="marca"
            className="block mb-3 font-bold text-gray-400 uppercase"
          >
            Marca
          </label>
          <select
            name="marca"
            className="w-full p-3 bg-white border border-gray-200"
          >
            <option value="">-- Selecciona la Marca</option>
            {MARCAS.map((marca) => (
              <option key={marca.id} value={marca.id}>
                {marca.nombre}
              </option>
            ))}
          </select>
        </div>

        <div className="my-5">
          <label
            htmlFor="marca"
            className="block mb-3 font-bold text-gray-400 uppercase"
          >
            Año
          </label>
          <select
            name="year"
            className="w-full p-3 bg-white border border-gray-200"
          >
            <option value="">-- Selecciona la Año</option>
            {YEARS.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className="my-5">
          <label
            htmlFor="plan"
            className="block mb-3 font-bold text-gray-400 uppercase"
          >
            Plan
          </label>
          <div className="flex gap-3 items-center">
            {PLANES.map((plan) => (
              <Fragment key={plan.id}>
                <label htmlFor="plan">{plan.nombre}</label>
                <input type="radio" name="plan" value={plan.id} />
              </Fragment>
            ))}
          </div>
        </div>

        <input type="submit" value="Cotizar" className='w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold' />
      </form>
    </>
  )
}
