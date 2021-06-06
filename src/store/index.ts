import { combineReducers } from 'redux';
import pokemons, { IPokemonsInitialState } from './pokemons';

export interface IInitialState {
  pokemons: IPokemonsInitialState;
}

const createRootReducer = () => {
  return combineReducers({
    pokemons,
  });
};

export default createRootReducer;
