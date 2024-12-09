'use client'; 
import React from 'react';
import Head from "next/head";
import SideNavBar from "../components/SideNavBar";
import Prateleira from '../components/prateleira';
import './style.css'



export default function Prateleira1(){
    return(
        <div>
            <Head>
            <title>Prateleira 1</title>
            <meta name="descição" content="Sistema planograma"/>
            </Head>
            <SideNavBar/>
            <div className='Prin'>
                <h1>Visão Geral: Prateleira 01</h1>
                <div className='centro'>
                    <Prateleira/>
                </div>
            </div>
            <footer className="footer">
                <p>Todos os direitos reservados</p>
            </footer>
        </div>
    )
}