import { IPokemons } from '@/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PokemonState {
    [key: string]: IPokemons
}

const initialState: PokemonState = {
    '1': { id: '1', name: 'bulbasaur'}
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

    }
  }
});

export const { toggleFavorite } = pokemonSlice.actions

export default pokemonSlice.reducer