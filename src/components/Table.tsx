import { useState } from 'react';
import useFetch from '../hooks/useFetch';
import { ResultsType } from '../types';

function Table() {
  const [filtro, setFiltro] = useState('');
  const { loading, dataValue } = useFetch('https://swapi.dev/api/planets');

  const [coluna, setColunaFilter] = useState('population');
  const [operador, setOperadorFilter] = useState('maior que');
  const [numero, setNumeroFilter] = useState('0');
  const [stateFilter, setStateFilter] = useState([{
    coluna: 'population',
    operador: 'maior que',
    numero: '0',
  }]);

  const [newData, setNewData] = useState([]);
  const [stateButton, setStateButton] = useState(false);
  const [increment, setIncrement] = useState(0);

  const handleClick = () => {
    if (increment >= 1) {
      if (operador === 'maior que') {
        const filtrado = newData
          .filter((objValue) => Number(objValue[`${coluna}`]) > Number(numero));
        setNewData(filtrado);
        setStateButton(true);
        setIncrement(increment + 1);
      } else if (operador === 'menor que') {
        const filtrado = newData
          .filter((objValue) => Number(objValue[`${coluna}`]) < Number(numero));
        setNewData(filtrado);
        setStateButton(true);
        setIncrement(increment + 1);
      } else if (operador === 'igual a') {
        const filtrado = newData
          .filter((objValue) => Number(objValue[`${coluna}`]) === Number(numero));
        setNewData(filtrado);
        setStateButton(true);
        setIncrement(increment + 1);
      }
    } else if (increment === 0) {
      if (operador === 'maior que') {
        const filtrado = dataValue
          .filter((objValue) => Number(objValue[`${coluna}`]) > Number(numero));
        setNewData(filtrado);
        setStateButton(true);
        setIncrement(increment + 1);
      } else if (operador === 'menor que') {
        const filtrado = dataValue
          .filter((objValue) => Number(objValue[`${coluna}`]) < Number(numero));
        setNewData(filtrado);
        setStateButton(true);
        setIncrement(increment + 1);
      } else if (operador === 'igual a') {
        const filtrado = dataValue
          .filter((objValue) => Number(objValue[`${coluna}`]) === Number(numero));
        setNewData(filtrado);
        setStateButton(true);
        setIncrement(increment + 1);
      }
    }

    setStateFilter([...stateFilter, { coluna, operador, numero }]);
    retiraFiltros(coluna);
  };

  const colunas = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const [colunasFiltro, setColunasFiltro] = useState(colunas);

  const retiraFiltros = (colunaParam: string) => {
    const colunasArray = colunas.filter((colunm) => colunm !== colunaParam);
    setColunasFiltro(colunasArray);
  };

  return (
    <div>
      { loading
        ? <h2>Carregando...</h2>
        : (
          <div>
            <input
              type="text"
              data-testid="name-filter"
              onChange={ (event) => setFiltro(event.target.value) }
            />
            <form>
              <select
                data-testid="column-filter"
                onChange={ (event) => setColunaFilter(event.target.value) }
              >
                { colunasFiltro.map((colunm, index) => (
                  <option key={ index }>{ colunm }</option>
                )) }
              </select>
              <select
                data-testid="comparison-filter"
                onChange={ (event) => setOperadorFilter(event.target.value) }
              >
                <option>maior que</option>
                <option>menor que</option>
                <option>igual a</option>
              </select>
              <input
                type="number"
                data-testid="value-filter"
                value={ numero }
                onChange={ (event) => setNumeroFilter(event.target.value) }
              />
              <button
                type="button"
                data-testid="button-filter"
                onClick={ handleClick }
              >
                Filtrar
              </button>
            </form>
            { stateFilter.length > 1
              && stateFilter.slice(1).map((filtros, index) => (
                <div key={ index }>
                  <p>{ `${filtros.coluna} ${filtros.operador} ${filtros.numero}` }</p>
                  <button>X</button>
                </div>
              )) }
            <table>
              <tr>
                { Object.keys(dataValue[0])
                  .filter((key) => key !== 'residents')
                  .map((keyTable, index) => <th key={ index }>{ keyTable }</th>) }
              </tr>
              { !stateButton ? dataValue
                .filter((obj: ResultsType) => obj.name.includes(filtro))
                .map((obj: ResultsType, index) => (
                  <tr key={ index }>
                    <td>{ obj.name }</td>
                    <td>{ obj.rotation_period }</td>
                    <td>{ obj.orbital_period }</td>
                    <td>{ obj.diameter }</td>
                    <td>{ obj.climate }</td>
                    <td>{ obj.gravity }</td>
                    <td>{ obj.terrain }</td>
                    <td>{ obj.surface_water }</td>
                    <td>{ obj.population }</td>
                    <td>{ obj.films }</td>
                    <td>{ obj.created }</td>
                    <td>{ obj.edited }</td>
                    <td>{ obj.url }</td>
                  </tr>
                ))
                : newData
                  .filter((obj: ResultsType) => obj.name.includes(filtro))
                  .map((obj: ResultsType, index: number) => (
                    <tr key={ index }>
                      <td>{ obj.name }</td>
                      <td>{ obj.rotation_period }</td>
                      <td>{ obj.orbital_period }</td>
                      <td>{ obj.diameter }</td>
                      <td>{ obj.climate }</td>
                      <td>{ obj.gravity }</td>
                      <td>{ obj.terrain }</td>
                      <td>{ obj.surface_water }</td>
                      <td>{ obj.population }</td>
                      <td>{ obj.films }</td>
                      <td>{ obj.created }</td>
                      <td>{ obj.edited }</td>
                      <td>{ obj.url }</td>
                    </tr>
                  )) }
            </table>
          </div>
        ) }
    </div>
  );
}

export default Table;
