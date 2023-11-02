import { IPokemons } from '@/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PokemonState {
    [key: string]: IPokemons
}

const getInitialState = (): PokemonState => {
  return JSON.parse( localStorage.getItem('favorite-pokemons') ?? '{}')
}

const initialState: PokemonState = {
    ...getInitialState()
    // '1': { id: '1', name: 'bulbasaur'},
    // '3': { id: '3', name: 'venusaur'},
    // '5': { id: '5', name: 'charmeleon'}
}

const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<IPokemons>){
      
      const {id} = action.payload;
      
      if (!!state[id]) {
        delete state[id];
        return;
      }

      state[id] = action.payload;

      //TODO: Not to do in Redux
      localStorage.setItem('favorite-pokemons', JSON.stringify(state));

    }
  }
});

export const { toggleFavorite } = pokemonSlice.actions

export default pokemonSlice.reducer