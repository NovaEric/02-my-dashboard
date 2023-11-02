import { IPokemons } from '@/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PokemonState {
    favorites: {[key: string]: IPokemons}
}

// const getInitialState = (): PokemonState => {
//   return JSON.parse( localStorage.getItem('favorite-pokemons') ?? '{}')
// }

const initialState: PokemonState = {
  favorites: {}
    //...getInitialState()
    // '1': { id: '1', name: 'bulbasaur'},
    // '3': { id: '3', name: 'venusaur'},
    // '5': { id: '5', name: 'charmeleon'}
}

const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setFavoritesPokemons(state, action: PayloadAction<{[key: string]: IPokemons}>){
      state.favorites = action.payload;
    },
    toggleFavorite(state, action: PayloadAction<IPokemons>){
      
      const pokemon = action.payload;
      const { id } = pokemon;

      if ( !!state.favorites[id] ) {
        delete state.favorites[id];
        //return;
      } else {
        state.favorites[id] = pokemon;
      }

      //state.favorites[id] = action.payload;

      //TODO: Not to do in Redux
      localStorage.setItem('favorite-pokemons', JSON.stringify(state.favorites));

    }
  }
});

export const { toggleFavorite, setFavoritesPokemons } = pokemonSlice.actions

export default pokemonSlice.reducer