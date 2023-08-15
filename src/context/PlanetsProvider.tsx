import { useEffect, useState } from 'react';
import PlanetsContext from './PlanetsContext';
import { FilterType, ResultsType } from '../types';

type PlanetsProviderProps = {
  children: React.ReactNode;
};

export type PlanetsFilterType = FilterType[];

function PlanetsProvider({ children }: PlanetsProviderProps) {
  const [planets, setPlanets] = useState<ResultsType[] | any[]>([]);
  const [loading, setLoading] = useState(true);
  const [newData, setNewData] = useState<ResultsType[]>([]);

  const reqFunction = async () => {
    const response = await fetch('https://swapi.dev/api/planets');
    const data = await response.json();
    setPlanets(data.results);
    setNewData(data.results);
    setLoading(false);
  };

  useEffect(() => {
    reqFunction();
  }, []);

  function planetsFilter(
    filter: FilterType[],
    planetData: ResultsType[] | any[],
  ) {
    filter.forEach((filt) => {
      planetData = planetData.filter((planet) => {
        switch (filt.operador) {
          case 'maior que':
            return Number(planet[`${filt.coluna}`]) > Number(filt.numero);
          case 'menor que':
            return Number(planet[`${filt.coluna}`]) < Number(filt.numero);
          case 'igual a':
            return Number(planet[`${filt.coluna}`]) === Number(filt.numero);
          default:
            return planet;
        }
      });
      setPlanets(planetData);
    });
    return planetData;
  }

  const context = {
    planets,
    newData,
    loading,
    planetsFilter,
  };

  return (
    <PlanetsContext.Provider value={ context }>
      { children }
    </PlanetsContext.Provider>
  );
}

export default PlanetsProvider;
