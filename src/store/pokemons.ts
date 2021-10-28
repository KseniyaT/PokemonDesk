import { Dispatch } from 'react';
import req from '../utils/request';
import { IPokemons, ITypeRequest } from '../interface/pokemons';
import { configEndpoint } from '../config';
import { IQuery, IStateRequest } from '../interface';
import { IInitialState } from './index';

export enum PokemonsActionTypes {
  FETCH_TYPES = 'FETCH_TYPES',
  FETCH_TYPES_RESOLVE = 'FETCH_TYPES_RESOLVE',
  FETCH_TYPES_REJECT = 'FETCH_TYPES_REJECT',
  FETCH_POKEMONS = 'FETCH_POKEMONS',
  FETCH_POKEMONS_RESOLVE = 'FETCH_POKEMONS_RESOLVE',
  FETCH_POKEMONS_REJECT = 'FETCH_POKEMONS_REJECT',
}

interface TypesAction {
  type: PokemonsActionTypes;
  payload?: string[];
}

interface PokemonsAction {
  type: PokemonsActionTypes;
  payload?: IPokemons | null;
}

type ActionTypes = TypesAction | PokemonsAction;

export interface IPokemonsInitialState {
  types: IStateRequest<string>;
  pokemons: {
    data: IPokemons | null;
    isLoading: boolean;
    isError: boolean;
  };
}

const initialState: IPokemonsInitialState = {
  types: {
    isLoading: false,
    data: null,
    error: null,
  },
  pokemons: {
    isLoading: false,
    data: null,
    isError: false,
  },
};

const pokemons = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case PokemonsActionTypes.FETCH_TYPES:
      return {
        ...state,
        types: {
          isLoading: true,
          data: null,
          error: null,
        },
      };
    case PokemonsActionTypes.FETCH_TYPES_RESOLVE:
      return {
        ...state,
        types: {
          isLoading: false,
          data: action.payload,
          error: null,
        },
      };
    case PokemonsActionTypes.FETCH_TYPES_REJECT:
      return {
        ...state,
        types: {
          isLoading: false,
          data: null,
          error: action.payload,
        },
      };

    case PokemonsActionTypes.FETCH_POKEMONS:
      return {
        ...state,
        pokemons: {
          isLoading: false,
          data: null,
          isError: false,
        },
      };
    case PokemonsActionTypes.FETCH_POKEMONS_RESOLVE:
      return {
        ...state,
        pokemons: {
          isLoading: false,
          data: action.payload,
          isError: false,
        },
      };
    case PokemonsActionTypes.FETCH_POKEMONS_REJECT:
      return {
        ...state,
        pokemons: {
          isLoading: false,
          data: null,
          isError: true,
        },
      };
    default:
      return state;
  }
};

export const getTypesAction = () => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: PokemonsActionTypes.FETCH_TYPES });
    try {
      const response = await req<ITypeRequest>(configEndpoint.getPokemonTypes);
      dispatch({
        type: PokemonsActionTypes.FETCH_TYPES_RESOLVE,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: PokemonsActionTypes.FETCH_TYPES_REJECT,
        payload: error,
      });
    }
  };
};

export const getPokemonsAction = (query: IQuery) => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: PokemonsActionTypes.FETCH_POKEMONS });
    try {
      const response = await req<ITypeRequest>(configEndpoint.getPokemons, query);
      dispatch({
        type: PokemonsActionTypes.FETCH_POKEMONS_RESOLVE,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: PokemonsActionTypes.FETCH_POKEMONS_REJECT,
        payload: error,
      });
    }
  };
};

export const getPokemonTypes = (state: IInitialState) => state.pokemons.types.data;
export const getPokemonTypesLoading = (state: IInitialState) => state.pokemons.types.isLoading;

export const getPokemonsLoading = (state: IInitialState) => state.pokemons.pokemons.isLoading;
export const getPokemonsError = (state: IInitialState) => state.pokemons.pokemons.isError;
export const getPokemonsData = (state: IInitialState) => state.pokemons.pokemons.data;

export default pokemons;
