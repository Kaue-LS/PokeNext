import Head from "next/head";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { ReactNode } from "react";

interface Layout {
  children: ReactNode;
  home?: boolean;
  pageName?: string;
}

export default function Layout({ pageName, home, children }: Layout) {
  return (
    <>
      <Head>
        <meta />
        <meta charSet="UTF-8" name="description" content="PokeNext" />
        <link rel="shortcut icon" href="/images/favicon.ico"></link>
        {home ? (
          <title>PokeNext</title>
        ) : (
          <title>
            PokeNext-
            {pageName
              ? pageName?.charAt(0)?.toUpperCase() + pageName?.slice(1)
              : ""}
          </title>
        )}
      </Head>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
