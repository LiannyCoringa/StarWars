import { createContext } from 'react';
import { ColunaType, ResultsType } from '../types';

type FilterContextType = {
  data: ResultsType[];
  filterPlanets: (
    operadorFilter: string,
    colunaFilter: ColunaType | React.SetStateAction<string>,
    numeroFilter: string
  ) => void;
};

const FilterContext = createContext({} as FilterContextType);

export default FilterContext;
