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
        "flex flex-col  items-center rounded-lg mx-auto ",
        "z-10 relative  bg-red-600"
      )}
    >
      <div className=" flex flex-col w-full bg-blue-600  p-2 shadow-2xl">
        <label
          className={classNames(
            styles.name,
            "tracking-wide text-lg font-bold "
          )}
        >
          <span>{name}</span>
        </label>
        <label className={styles.id}>
          <span>#{id}</span>
        </label>
      </div>
      <div>
        <Image src={url} width={200} height={200} alt={name} />
      </div>
      <div
        className={classNames(
          styles.button,
          "flex bg-blue-600 flex-col w-full p-2 relative z-0"
        )}
      >
        <Link
          className={classNames(
            styles.details,
            "text-lg font-bold",
            " border-orange-400  text-center",
            "rounded-xl bg-slate-100",
            "text-black",
            "border-4 relative"
          )}
          href={`pokemon/${id}`}
        >
          <Image
            className={classNames(styles.icon, "absolute")}
            src={"/images/pokeball.png"}
            alt=""
            width={20}
            height={20}
          />
          Detalhes
        </Link>
      </div>
    </li>
  );
}
