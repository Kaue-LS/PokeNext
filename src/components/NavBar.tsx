import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import styles from "../styles/navBar.module.css";
export default function NavBar() {
  return (
    <header
      className={classNames(
        styles.headerMain,
        styles.vars,
        "px-5 py-5 pr-20 border-b-8 border-neutral-800 shadow-xl"
      )}
    >
      <nav className="flex justify-between">
        <div
          className={classNames(
            styles.logoContent,
            "inline-flex justify-center items-center",
            "gap-5"
          )}
        >
          <Image
            src={"/images/pokeball.png"}
            width={60}
            height={60}
            alt="Pokenext"
          />
          <h1
            className={classNames(
              styles.title,
              "tracking-wide text-5xl font-bold italic"
            )}
          >
            PokeNext
          </h1>
        </div>
        <div className={classNames(styles.menu, "my-auto")}>
          <ul className="inline-flex gap-10  m-auto">
            <li
              className={
                "font-bold border-2 flex items-center uppercase text-sm text-black-600 justify-center "
              }
            >
              <Link href={"/"}>Home</Link>
            </li>
            <li
              className={
                "font-bold border-2 flex items-center text-sm uppercase text-black-600 justify-center "
              }
            >
              <Link href={"/about"}>Sobre</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
