"use client";
import { useAppSelector } from '@/store';
import { PokemonGrid } from "./PokemonGrid";
import { BsHeartbreak } from "react-icons/bs";


export const FavoritePokemons = () => {

    const favoritePokemons = useAppSelector( state => Object.values(state.pokemons.favorites));
    //const [pokemons, setPokemons] = useState(favoritePokemons);
    
  return (
    <>
      {
        favoritePokemons.length === 0
        ? (<NoFavoritePokemons />)
        : (<PokemonGrid pokemons={favoritePokemons} />)
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
