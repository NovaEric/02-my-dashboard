import React from 'react';
import { PokemonGrid } from '@/components';


export const metadata = {
    title: 'Favorites Pokemons List',
    description: 'This is the Favorites Pokemons List Page'
}


export default async function PokemonsPage() {

    return (
        <div className='flex flex-col p-2'>
            <div className='flex flex-row items-center justify-center'>
            <span className="text-5xl font-bold text-blue-600 underline my-10">Favorites Pokémons List</span>
            <strong className='bg-yellow-200 text-4xl no-underline ms-5'> Global State </strong>
            </div>
            
            <PokemonGrid pokemons={ [] } />
        </div>
    )
}
