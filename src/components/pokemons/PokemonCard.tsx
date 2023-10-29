"use client";
import React from "react";
import Link from "next/link";
import { IPokemons } from "@/interfaces";
import Image from "next/image";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "@/store";
import { toggleFavorite } from "@/store/pokemon/pokemonSlice";

interface Props {
  pokemon: IPokemons;
}

export const PokemonCard = ({ pokemon }: Props) => {
  
  const { id, name } = pokemon;
  const isFavorite = useAppSelector((state) => !!state.pokemons[id]);
  const dispatch = useAppDispatch();

  const onToggle = () => {
    dispatch( toggleFavorite(pokemon) );
  }

  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="flex flex-col bg-white rounded overflow-hidden shadow-lg">
        <div className="flex flex-col justify-center items-center text-center p-6 bg-gray-800 border-b">
          <Image
            key={id}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            alt={name}
            width={100}
            height={100}
            priority={false}
          />
          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">
            {name}
          </p>
          <div className="mt-5">
            <Link
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
              href={`/dashboard/pokemons/${name}`}
            >
              Learn More...
            </Link>
          </div>
        </div>
        <div className="border-b">
          <div onClick={onToggle} className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer">
            <div className="text-red-600">
              {isFavorite ? <BsHeartFill /> : <BsHeart />}
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                {isFavorite ? "Favorite" : "No Favorite"}
              </p>
              <p className="text-xs text-gray-500">
                {isFavorite ? "Marked As Favorite" : "Mark As Favorite"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
