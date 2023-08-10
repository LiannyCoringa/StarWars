import useFetch from '../hooks/useFetch';
import { ResultsType } from '../types';

function Table() {
  const { loading, dataValue, reqFunction } = useFetch('https://swapi.dev/api/planets');

  return (
    <div>
      { loading
        ? <h2>Carregando...</h2>
        : (
          <table>
            <tr>
              { Object.keys(dataValue[0])
                .filter((key) => key !== 'residents')
                .map((keyTable, index) => <th key={ index }>{ keyTable }</th>) }
            </tr>
            { dataValue.map((obj: ResultsType, index) => (
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
        ) }
    </div>
  );
}

export default Table;
