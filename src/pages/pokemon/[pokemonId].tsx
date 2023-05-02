import Layout from "@/components/Layout";
import { GetStaticPropsContext } from "next";
import Image from "next/image";

interface pokemonDataProps {
  id: number;
  name: string;
  url: string;
  index: number;
}

interface PokemonProps {
  pokemon: {
    id: number;
    name: string;
    height: number;
    weight: number;
    abilities: {
      ability: {
        name: string;
      };
    }[];
    sprites: {
      front_default: string;
    };
    types: [
      {
        slot: number;
        type: {
          name: string;
          url: string;
        };
      }
    ];
    url: string;
  };
}
// Ele vai mapear e vai retornar os params
// vai gerar paginas estaticas
export const getStaticPaths = async () => {
  const maxPokemons = 251;
  const api = "https://pokeapi.co/api/v2/pokemon";
  const res = await fetch(`${api}/?limit=${maxPokemons}`);

  const data = await res.json();

  // params
  const paths = data.results.map((pokemon: pokemonDataProps, index: number) => {
    return {
      params: { pokemonId: (index + 1).toString() },
    };
  });
  // path vai conter os params com os ids de cada pokemon
  //   console.log("paths", paths);
  return {
    paths,
    fallback: false,
  };
};

// com base do Paths ele pega o id espefico de acordo com a url
export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context?.params?.pokemonId as string;
  //   console.log("context", context);
  //   console.log("id", id);
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  const data = await res.json();

  const pokemon = {
    ...data,
    url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`,
  };
  return {
    props: { pokemon: pokemon },
  };
};

export default function Pokemon({ pokemon }: PokemonProps) {
  return (
    <Layout pageName={pokemon.name}>
      <h1>{pokemon.name}</h1>
      <Image src={pokemon.url} width={200} height={200} alt={pokemon.name} />
      <div>
        <h3>Número:</h3>
        <p>{pokemon.id}</p>
      </div>
      <div>
        <h3>Tipo:</h3>
        {pokemon.types.map((type, index) => (
          <p key={index + 1}>{type.type.name}</p>
        ))}
      </div>
      <div>
        <h3>Altura:</h3>
        <p>{pokemon.height}</p>
        <h3>Peso</h3>
        <p>{pokemon.weight / 10} Kg</p>
      </div>
    </Layout>
  );
}
