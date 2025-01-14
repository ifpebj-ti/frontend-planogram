'use client'; 
import React from 'react';
import Head from "next/head";
import SideNavBar from "../components/SideNavBar";
import Prateleira from '../components/prateleira';
import './style.css'
import { FaRegCopyright } from 'react-icons/fa';



export default function Prateleira1(){
    return(
        <div className='total'>
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
                <FaRegCopyright />Todos os direitos reservados
            </footer>
        </div>
    )
}