import Image from "next/image";
import Head from "next/head";
import SideNavBar from "./components/SideNavBar";
import Inicial from "./components/home";

export default function Home() {
  return (
    <div>
      <Head>
        <title>HOME</title>
        <meta name="descição" content="Sistema planograma"/>
      </Head>
      <SideNavBar/>
      <Inicial/>
    </div>
  );
}
