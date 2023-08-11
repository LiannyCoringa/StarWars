import { useState } from 'react';
import useFetch from './useFetch';
import { ColunaType } from '../types';

function useFilter(
  coluna: ColunaType | React.SetStateAction<string>,
  operador: string,
  numero: string,
) {
  const { loading, dataValue } = useFetch('https://swapi.dev/api/planets');

  const [newData, setNewData] = useState([]);
  if (operador === 'maior que') {
    const filtrado = dataValue
      .filter((objValue) => Number(objValue[`${coluna}`]) > Number(numero));
    setNewData(filtrado);
  } else if (operador === 'menor que') {
    const filtrado = dataValue
      .filter((objValue) => Number(objValue[`${coluna}`]) < Number(numero));
    setNewData(filtrado);
  } else if (operador === 'igual a') {
    const filtrado = dataValue
      .filter((objValue) => Number(objValue[`${coluna}`]) === Number(numero));
    setNewData(filtrado);
  } else if (numero === '') {
    setNewData(dataValue);
  }

  const filter = true;

  return { newData, filter };
}

export default useFilter;
