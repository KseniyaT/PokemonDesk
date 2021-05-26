interface IStats {
  hp: number;
  attack: number;
  defense: number;
  'special-attack': number;
  'special-defense': number;
  speed: number;
}

interface IPokemon {
  name_clean: string; // eslint-disable-line camelcase
  abilities?: string[];
  stats: IStats;
  types: [];
  img: string;
  name: string;
  base_experience?: number; // eslint-disable-line camelcase
  height?: number;
  id: number;
  is_default?: boolean; // eslint-disable-line camelcase
  order?: number;
  weight?: number;
}

interface IPokemons {
  count: number;
  limit: number;
  offset: number;
  pokemons: IPokemon[];
  total: number;
}

export { IPokemons, IPokemon };
