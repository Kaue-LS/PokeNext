import Head from "next/head";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { ReactNode } from "react";

interface Layout {
  children: ReactNode;
}

export default function Layout({ children }: Layout) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.icon"></link>
        <title>PokeNext</title>
      </Head>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
