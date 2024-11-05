import Image from "next/image";
import Head from "next/head";
import SideNavBar from "./components/SideNavBar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>HOME</title>
        <meta name="descição" content="Sistema planograma"/>
      </Head>
      <SideNavBar/>
    </div>
  );
}
