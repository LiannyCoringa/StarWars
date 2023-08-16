import { useContext, useEffect, useState } from 'react';
import { ResultsType } from '../types';
import PlanetsContext from '../context/PlanetsContext';
import { PlanetsFilterType } from '../context/PlanetsProvider';

type Order = 'population'
| 'orbital_period'
| 'diameter'
| 'rotation_period'
| 'surface_water';

function Table() {
  const [filtro, setFiltro] = useState('');
  const { newData, planetsFilter } = useContext(PlanetsContext);
  const [planets, setPlanets] = useState<ResultsType[] | any[]>([]);
  const [coluna, setColunaFilter] = useState('population');
  const [operador, setOperadorFilter] = useState('maior que');
  const [numero, setNumeroFilter] = useState('0');
  const [loading, setLoading] = useState(true);
  const [stateFilterArray, setStateFilterArray] = useState<PlanetsFilterType>([]);
  const [orderSelect, setOrderSelect] = useState<Order | any>('');
  const [inputOrder, setInputOrder] = useState('');

  useEffect(() => {
    const reqFunction = async () => {
      const response = await fetch('https://swapi.dev/api/planets');
      const data = await response.json();
      setPlanets(data.results);
      console.log(planets);
      setLoading(false);
    };
    reqFunction();
  }, []);

  useEffect(() => {
    if (stateFilterArray.length > 0) {
      const newDataPlanets = planetsFilter(stateFilterArray, newData);
      setPlanets(newDataPlanets);
    } else {
      setPlanets(newData);
    }
  }, [stateFilterArray]);

  const handleClick = () => {
    setStateFilterArray([...stateFilterArray, { coluna, operador, numero }]);
    setColunasState([...colunasState, coluna]);
    retiraFiltros(coluna);
    setColunaFilter('population');
    setOperadorFilter('maior que');
    setNumeroFilter('0');
  };

  const colunas = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const [colunasState, setColunasState] = useState(['']);
  const [colunasFiltro, setColunasFiltro] = useState(colunas);

  const retiraFiltros = (colunaParam: string) => {
    setColunasFiltro(colunasFiltro.filter((string) => string !== colunaParam));
  };

  const handleClickFilter = (colunasFilterParam: string) => {
    setColunasFiltro([...colunasFiltro, colunasFilterParam]);
    const newFilter = stateFilterArray
      .filter((obj) => obj.coluna !== colunasFilterParam);
    setStateFilterArray(newFilter);
  };

  const handleClickDel = () => {
    setStateFilterArray([]);
    setColunasFiltro(colunas);
  };

  const handleClickOrder = (orderSelect: string, inputOrder: string) => {
    let orderArray: any[] = planets;
    orderArray = planets.sort((a, b) => {
      if (inputOrder === 'ASC') {
        return Number(a[orderSelect]) - Number(b[orderSelect]);
      }
      return Number(b[orderSelect]) - Number(a[orderSelect]);
    });
    setPlanets(orderArray);
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
                id="coluna"
                value={ coluna }
                onChange={ (event) => setColunaFilter(event.target.value) }
              >
                { colunasFiltro.map((colunm, index) => (
                  <option key={ index }>{ colunm }</option>
                )) }
              </select>
              <select
                data-testid="comparison-filter"
                id="operador"
                value={ operador }
                onChange={ (event) => setOperadorFilter(event.target.value) }
              >
                <option>maior que</option>
                <option>menor que</option>
                <option>igual a</option>
              </select>
              <input
                type="number"
                data-testid="value-filter"
                id="numero"
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
              <select
                data-testid="column-sort"
                onChange={ (event) => setOrderSelect(event.target.value) }
              >
                <option>Selecione</option>
                { colunas.map((column, index) => (
                  <option key={ index }>{ column }</option>
                )) }
              </select>
              <input
                type="radio"
                data-testid="column-sort-input-asc"
                value="ASC"
                name="order"
                id="ASC"
                onChange={ (event) => setInputOrder(event.target.value) }
              />
              <label htmlFor="ASC">Ascendente</label>
              <input
                type="radio"
                data-testid="column-sort-input-desc"
                value="DESC"
                name="order"
                id="DESC"
                onChange={ (event) => setInputOrder(event.target.value) }
              />
              <label htmlFor="DESC">Descendente</label>
              <button
                type="button"
                data-testid="column-sort-button"
                onClick={ () => handleClickOrder(orderSelect, inputOrder) }
              >
                Ordenar
              </button>
            </form>
            { stateFilterArray.length > 0
              && stateFilterArray.map((filtros, index) => (
                <div key={ index }>
                  <p
                    data-testid="filter"
                  >
                    { `${filtros.coluna} ${filtros.operador} ${filtros.numero}` }
                    <button
                      onClick={ () => handleClickFilter(filtros.coluna) }
                    >
                      X
                    </button>
                  </p>
                </div>
              )) }
            <button
              data-testid="button-remove-filters"
              onClick={ handleClickDel }
            >
              Remover todos os filtros
            </button>
            <table>
              <tr>
                { Object.keys(planets[0])
                  .filter((key) => key !== 'residents')
                  .map((keyTable, index) => <th key={ index }>{ keyTable }</th>) }
              </tr>
              { planets
                .filter((obj: ResultsType) => obj.name.includes(filtro))
                .map((obj: ResultsType, index) => (
                  <tr key={ index }>
                    <td data-testid="planet-name">{ obj.name }</td>
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
