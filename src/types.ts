export type ResultsType = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  films: string[];
  created: string;
  edited: string;
  url: string;
};

export type ColunaType =
  'population'
  | 'orbital_period'
  | 'diameter'
  | 'rotation_period'
  | 'surface_water';

export type FilterType = {
  coluna: string,
  operador: string,
  numero: string,
};
