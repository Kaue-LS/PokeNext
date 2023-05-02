import React from "react";
import Card from "@/components/Card";
import Layout from "@/components/Layout";
import Image from "next/image";

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
    <Layout home>
      <div className="h-full">
        <section>
          <Image
            src={"/images/PokeNext.png"}
            alt="PokeNext"
            width={400}
            height={400}
          />
        </section>
        <ul className="grid grid-cols-4 gap-4 justify-center items-center">
          {pokemons.map(({ id, name, url }) => (
            <Card key={id} id={id} name={name} url={url} />
          ))}
        </ul>
      </div>
    </Layout>
  );
}
