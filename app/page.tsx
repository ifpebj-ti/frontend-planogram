'use client'; 
import React from 'react';
import Image from "next/image";
import Head from "next/head";
import SideNavBar from "./components/SideNavBar";
import Inicial from "./components/home";
import ShelfSelector from "./components/estante";

const shelfData = [
  {
    section: 1,
    items: [
      { id: 1, name: 'Prateleira 1' },
      { id: 2, name: 'Prateleira 2' },
      { id: 3, name: 'Prateleira 3' },
      { id: 4, name: 'Prateleira 4' },
    ],
  },
  {
    section: 2,
    items: [
      { id: 1, name: 'Prateleira 1' },
      { id: 2, name: 'Prateleira 2' },
    ],
  },
  {
    section: 3,
    items: [
      { id: 1, name: 'Prateleira 1' },
      { id: 2, name: 'Prateleira 2' },
    ],
  },
];

export default function Home() {
  
  return (
    <div >
      <Head>
        <title>HOME</title>
        <meta name="descição" content="Sistema planograma"/>
      </Head>
      <SideNavBar/>
      <ShelfSelector shelves={shelfData} />
    </div>
  );
}
