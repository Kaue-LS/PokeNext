import React from "react";
import Card from "@/components/Card";
import Layout from "@/components/Layout";
import Image from "next/image";
import classNames from "classnames";
import styles from "../styles/home.module.css";
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
        <section
          className={classNames(
            "py-10 px-5 sm:px-10 lg:px-20 text-center flex flex-col gap-y-4 justify-center "
          )}
        >
          <div className="relative">
            <Image
              className={classNames(
                styles.homeLogo,
                "m-auto object-cover w-full h-full max-w-xl"
              )}
              src={"/images/PokeNext.png"}
              alt="PokeNext"
              fill
              priority
            />
          </div>
          <p>
            A <b>PokeNext</b> se trata de um site feito em <b>Next.js</b> com o
            objetivo de treino, utilizando a Api pública de Pokemon. Com intuito
            de treinamento, aprendendo pontos importantes a respeito do
            Framework, e de como utiliza-los, além de tambem treinar a
            biblioteca de estilização, a <b>Tailwind CSS</b>. O projeto em si,
            como o objetivo era aprendizado, esta feito de uma forma basica para
            explicar e entender as principais ferramentas Next.js junto com o
            uso da API.
          </p>
        </section>
        <ul
          className={classNames(
            "grid sm:grid-cols-2 min-[280px]:grid-cols-1 lg:grid-cols-4 md:grid-cols-3  gap-10 justify-center items-center px-5"
          )}
        >
          {pokemons.map(({ id, name, url }) => (
            <Card key={id} id={id} name={name} url={url} />
          ))}
        </ul>
      </div>
    </Layout>
  );
}
