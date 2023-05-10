import Layout from "@/components/Layout";
import classNames from "classnames";
import { GetStaticPropsContext } from "next";
import Image from "next/image";
import styles from "../../styles/pokemon.module.css";
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
      <div className=" p-0 min-[368px]:p-10 lg:p-20">
        <div
          className={classNames(
            styles.container,
            "flex lg:flex-row flex-col min-[368px]:rounded-xl justify-between p-[10px]  min-[368px]:p-5 bg-sky-600 max-w-[368px] m-auto lg:max-w-[900px] "
          )}
        >
          <div
            className={classNames(
              styles.pokemonImage,
              "relative, bg-sky-300 p-5 rounded-xl"
            )}
          >
            <Image src={pokemon.url} fill priority alt={pokemon.name} />
          </div>
          <div className="flex-1 grid grid-rows-1  p-[10px]  min-[368px]:px-10">
            <div className="border-b-4 border-sky-200 px-3 py-1 rounded-xl text-center justify-center items-center flex flex-row gap-2 ">
              <h1 className={classNames(styles.label, "text-3xl font-bold ")}>
                {pokemon.name.charAt(0)?.toUpperCase() + pokemon.name?.slice(1)}
              </h1>
              <span className="text-2xl font-bold  ">#{pokemon.id}</span>
            </div>
            <div className="mt-3"></div>
            <div className="mt-3">
              <h3 className={classNames(styles.label, "text-2xl font-bold")}>
                Tipo:
              </h3>
              <div className="flex flex-row flex-wrap mt-2 gap-5">
                {pokemon.types.map((type, index) => (
                  <p
                    className="bg-sky-200 p-2 rounded-xl shadow-inner"
                    key={index + 1}
                  >
                    <span>{type.type.name}</span>
                  </p>
                ))}
              </div>
            </div>
            <div className="mt-3 flex flex-row flex-wrap justify-center gap-10">
              <div className="flex  flex-col w-full flex-1 item-center">
                <h3 className={classNames(styles.label, "text-2xl font-bold")}>
                  Altura:
                </h3>
                <span className="bg-sky-200 p-2 rounded-xl w-full">
                  {pokemon.height}
                </span>
              </div>
              <div className="flex flex-col w-full flex-1">
                <h3
                  className={classNames(
                    styles.label,
                    "text-2xl text-left font-bold"
                  )}
                >
                  Peso:
                </h3>
                <span className="bg-sky-200 p-2 rounded-xl w-full">
                  {pokemon.weight / 10} Kg
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
