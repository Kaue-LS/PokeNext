import classNames from "classnames";
import Image from "next/image";
import styles from "../styles/card.module.css";
import Link from "next/link";
interface pokemonDataProps {
  id: number;
  name: string;
  url: string;
}

export default function Card({ name, url, id }: pokemonDataProps) {
  return (
    <li
      className={classNames(
        styles.card,
        "flex flex-col  items-center rounded-xl mx-auto "
      )}
    >
      <div className=" flex flex-col w-full bg-[#4e4e4e] p-2 shadow-2xl">
        <label
          className={classNames(
            styles.name,
            "tracking-wide text-lg font-bold italic"
          )}
        >
          <span>{name}</span>
        </label>
        <label className={styles.id}>
          <span>{id}</span>
        </label>
      </div>
      <Image src={url} width={200} height={200} alt={name} />
      <div className=" flex flex-col w-full bg-[#4e4e4e] p-2 shadow-2xl">
        <Link href={`pokemon/${id}`}>Detalhes</Link>
      </div>
    </li>
  );
}
