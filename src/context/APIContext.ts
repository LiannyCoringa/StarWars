import { createContext } from 'react';
import { ResultsType } from '../types';

const APIContext = createContext({} as ResultsType[]);

export default APIContext;
