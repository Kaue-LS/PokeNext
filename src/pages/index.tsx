import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import classNames from "classnames";
// import styles from
import Card from "@/components/Card";

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
  return (
    <div className="h-full">
      <main>
        <h1>PokeNext</h1>
      </main>
      <ul className="grid grid-cols-4 gap-4 justify-center items-center">
        {pokemons.map(({ id, name, url }) => (
          <Card key={id} id={id} name={name} url={url} />
        ))}
      </ul>
    </div>
  );
}
