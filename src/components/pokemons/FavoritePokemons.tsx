"use client";
import React, { useState } from "react";
import { useAppSelector } from '@/store';
import { PokemonGrid } from "./PokemonGrid";
import { BsHeartbreak } from "react-icons/bs";


export const FavoritePokemons = () => {

    const favoritePokemons = useAppSelector( state => Object.values(state.pokemons));
    const [pokemons, setPokemons] = useState(favoritePokemons);
    
  return (
    <>
      {
        pokemons.length === 0
        ? (<NoFavoritePokemons />)
        : (<PokemonGrid pokemons={pokemons} />)
      }
    </>
  )
}

export const NoFavoritePokemons = () => {
  return (
    <div className='flex flex-col h-[50vh] items-center justify-center'>
      <BsHeartbreak size={100} className='text-red-500'/>
      <span>No Favorites Pokemon</span>
    </div>
  )
}
