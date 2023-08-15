import { createContext } from 'react';
import { FilterType, ResultsType } from '../types';

type PlanetsContextType = {
  planets: ResultsType[];
  newData: ResultsType[];
  loading: boolean;
  planetsFilter: (
    filters: FilterType[],
    planetData: ResultsType[]
  ) => ResultsType[] | any[];
};

const PlanetsContext = createContext({} as PlanetsContextType);

export default PlanetsContext;
