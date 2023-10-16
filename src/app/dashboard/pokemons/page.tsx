import React from 'react';
import { IPokemons, IPokemonPagination } from '@/interfaces';
import { PokemonGrid } from '@/components';


export const metadata = {
    title: 'Pokemon List',
    description: 'This is the Pokemons List Page'
}

const getPokemons = async (limit = 20, offset = 0): Promise<IPokemons[]> => {

    const data: IPokemonPagination = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`).then(res => res.json());

    const pokemons = data.results.map(pokemon => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name
    }))

    return pokemons;

}


export default async function PokemonsPage() {

    const pokemons = await getPokemons(350);
    return (
        <div className='flex flex-col p-2'>
            <div className='flex flex-row items-center justify-center'>
            <span className="text-5xl font-bold text-blue-600 underline my-10">Pokémons List</span>
            <strong className='bg-yellow-200 text-4xl no-underline ms-5'> Static </strong>
            </div>
            
            <PokemonGrid pokemons={ pokemons } />
        </div>
    )
}
