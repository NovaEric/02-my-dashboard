'use client'

import { Provider } from 'react-redux';
import { store } from '.';
import { useEffect } from 'react';
import { setFavoritesPokemons } from './pokemon/pokemonSlice';

interface Props {
  children: React.ReactNode;
}

export const Providers = ({children}: Props) => {

  useEffect(() => {
      const fav = JSON.parse( localStorage.getItem('favorite-pokemons') ?? '{}');
      store.dispatch(setFavoritesPokemons(fav));
  }, [])
  
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}