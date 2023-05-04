import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import styles from "../styles/navBar.module.css";
import { useState } from "react";
export default function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header
      className={classNames(
        styles.headerMain,
        styles.vars,
        "px-5 py-5 pr-[50px] sm:pr-20 border-b-8 border-neutral-800 shadow-xl"
      )}
    >
      <nav className="flex justify-between">
        <div
          className={classNames(
            styles.logoContent,
            "inline-flex justify-center items-center",
            "gap-5 "
          )}
        >
          <div className="relative hidden min-[468px]:block">
            <Image
              src={"/images/pokeball.png"}
              className=" min-[468px]:min-w-[40px] min-[468px]:min-h-[40px]  lg:min-w-[60px] lg:min-h-[60px]"
              fill
              alt="Pokenext"
            />
          </div>
          <h1
            className={classNames(
              styles.title,
              "tracking-wide text-4xl sm:text-5xl font-bold italic"
            )}
          >
            PokeNext
          </h1>
        </div>
        <div className={classNames(styles.menu, "my-auto relative")}>
          <ul className=" hidden lg:flex inline-flex gap-10  m-auto">
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
          <span
            className={classNames(
              styles.menuIcon,
              "lg:hidden block flex item-center  border-2 "
            )}
          >
            <Image
              className={styles.iconImage}
              src={"/menu.svg"}
              onClick={() => setOpenMenu(!openMenu)}
              alt=""
              width={60}
              height={60}
            />
          </span>
          {openMenu && (
            <ul className="w-full lg:hidden z-50 flex absolute flex-col lg:inline-flex m-auto left-[-35px] ">
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
          )}
        </div>
      </nav>
    </header>
  );
}
