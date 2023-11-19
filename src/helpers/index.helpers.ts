export const obtenerDiferenciaYear = (year: number) => {
  return new Date().getFullYear() - year;
};

export const calcularMarca = (marca: number) => {
  let incremento: number;

  switch (marca) {
    case 1:
      incremento = 1.18;
      break;

    case 2:
      incremento = 1.15;
      break;

    case 3:
      incremento = 1.1;
      break;

    default:
      incremento = 1;
      break;
  }
  return incremento;
};

export const calcularPlan = (plan: number) => {
  return plan === 1 ? 1.2 : 1.5;
}

export const formatearDinero = (cantidad: number | string) => {
  return cantidad.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  })
}