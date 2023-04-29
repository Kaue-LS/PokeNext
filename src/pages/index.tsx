import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface pokemonDataProps {
  id: number;
  name: string;
  url: string;
  index: number;
}

interface pokemonProps {
  pokemons: pokemonDataProps[];
}

export async function getStaticProps() {
  const maxPokemons = 251;
  const api = "https://pokeapi.co/api/v2/pokemon";
  const res = await fetch(`${api}/?limit=${maxPokemons}`);

  const data = await res.json();

  // add pokemon index
  const pokemons = await data.results.map(
    ({ name }: pokemonDataProps, index: number) => {
      return {
        name,
        url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          index + 1
        }.png`,
        id: index + 1,
      };
    }
  );

  return {
    props: {
      pokemons: pokemons,
    },
  };
}

export default function Home({ pokemons }: pokemonProps) {
  console.log("teste", pokemons);
  return (
    <div className="h-full">
      <h1>PokeNext</h1>
      <ul>
        {pokemons.map(({ id, name, url }) => {
          return (
            <li key={id}>
              <Image src={url} width={300} height={300} alt={name} />
              <div>
                <label>
                  Nome do Pokemon: <span>{name}</span>
                </label>
                <label>
                  Id: <span>{id}</span>
                </label>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
