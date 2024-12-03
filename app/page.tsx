'use client'; 
import React from 'react';
import Image from "next/image";
import Head from "next/head";
import SideNavBar from "./components/SideNavBar";
import Inicial from "./components/home";
import ShelfSelector from "./components/estante";

const shelvesData = [
  { id: 1, link: '/prateleira1', name: 'Prateleira 1' },
  { id: 2, link: '/prateleira/2', name: 'Prateleira 2' },
  { id: 3, link: '/prateleira/3', name: 'Prateleira 3' },
  { id: 4, link: '/prateleira/4', name: 'Prateleira 4' },
];

export default function Home() {
  
  return (
    <div >
      <Head>
        <title>HOME</title>
        <meta name="descição" content="Sistema planograma"/>
      </Head>
      <SideNavBar/>
      <ShelfSelector shelves={shelvesData} />
    </div>
  );
}
