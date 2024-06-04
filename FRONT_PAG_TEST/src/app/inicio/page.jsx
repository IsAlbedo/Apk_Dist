/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client"

import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "react";
import { RiMenu3Fill, RiUser3Line, RiAddLine, RiPieChartLine, RiCloseLine } from "react-icons/ri";
import { RiKnifeLine,RiGlobalLine,RiHeartLine,RiAwardLine,RiPaintBrushLine,RiTShirtLine,RiTeamLine} from "react-icons/ri";
import { GiPorcelainVase } from "react-icons/gi";



function Inicio() {
  
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  };

  
 
    return (
      <div className="bg-[#6a322389] w-full min-h-screen">
        <Sidebar showMenu={showMenu} />

        <nav className="bg-black lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-center rounded-tl-xl rounded-tr-xl">
        <button onClick={toggleMenu} className="text-white p-2">
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </nav> 
        


        <main className="lg:pl-32">
  <div className="md:p-8 p-4 w-full">
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 xl:gap-8">
        <div className="group relative flex h-64 items-center justify-center rounded-lg shadow-lg md:col-span-3 md:h-96">
          <img
            src="0.png"
            className="absolute inset-0 h-full w-full object-cover object-center rounded-2xl"
          />
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-900 to-transparent opacity-75 rounded-2xl"></div>
                  
          <div className="relative text-white text-center z-10 p-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Bienvenido a ArteSana</h1>
            <p className="text-xl md:text-2xl">Un Toque De Manos, Un Toque De Sanación</p>
            <img src="logo.png" className="w-24 md:w-32 lg:w-48 mx-auto"  />    
          </div>
        </div>

        <div className="group relative flex flex-col p-6 rounded-lg shadow-lg bg-white md:col-span-2">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Nuestra Historia</h2>
          <p className="text-gray-600 mb-4">ArteSana nació en 2024 con una idea sencilla: hacer que la artesanía no solo embellezca espacios, sino que también sane almas. Lo que comenzó como un pequeño sueño en un rincón de mi hogar ha florecido en una empresa que celebra la riqueza de nuestras tradiciones.</p>
          <p className="text-gray-600">Nuestro viaje ha sido uno de pasión, perseverancia y una búsqueda incesante de la belleza que sana. Cada pieza que creamos lleva consigo siglos de historia, técnicas transmitidas de generación en generación, y el poder de conectar con nuestras raíces.</p>
        </div>

        <div className="group relative flex flex-col p-6 rounded-lg shadow-lg bg-gray-100">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Datos Rápidos</h2>
          <ul className="space-y-3">
            <li className="flex items-center">
              <RiTeamLine className="text-2xl text-orange-500 mr-3" />
              <span>50+ Artesanos Talentosos</span>
            </li>
            <li className="flex items-center">
              <RiGlobalLine className="text-2xl text-orange-500 mr-3" />
              <span>Artesanías de 10 Regiones</span>
            </li>
            <li className="flex items-center">
              <RiAwardLine className="text-2xl text-orange-500 mr-3" />
              <span>5+ Premios de Artesanía</span>
            </li>
            <li className="flex items-center">
              <RiHeartLine className="text-2xl text-orange-500 mr-3" />
              <span>1000+ Vidas Impactadas</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Lo Que Ofrecemos</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="group flex flex-col items-center text-center p-6 rounded-lg shadow-lg bg-white transition-transform transform hover:scale-105">
            <GiPorcelainVase className="text-5xl text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Cerámica Ancestral</h3>
            <p className="text-gray-600">Vasijas que cuentan historias de generaciones.</p>
          </div>
          <div className="group flex flex-col items-center text-center p-6 rounded-lg shadow-lg bg-white transition-transform transform hover:scale-105">
            <RiTShirtLine className="text-5xl text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Textiles Mágicos</h3>
            <p className="text-gray-600">Tejidos que abrazan y reconfortan el alma.</p>
          </div>
          <div className="group flex flex-col items-center text-center p-6 rounded-lg shadow-lg bg-white transition-transform transform hover:scale-105">
            <RiKnifeLine className="text-5xl text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Talla en Madera</h3>
            <p className="text-gray-600">Esculturas que respiran vida en tu hogar.</p>
          </div>
          <div className="group flex flex-col items-center text-center p-6 rounded-lg shadow-lg bg-white transition-transform transform hover:scale-105">
            <RiPaintBrushLine className="text-5xl text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Arte en Óleos</h3>
            <p className="text-gray-600">Pinturas que transmiten paz y serenidad.</p>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Conoce a Nuestros Artesanos</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div className="flex flex-col items-center">
            <img src="1.png" alt="María Gutiérrez - Tejedora" className="w-32 h-32 rounded-full object-cover mb-4" />
            <h3 className="text-xl font-semibold">María Gutiérrez</h3>
            <p className="text-white">Maestra Tejedora, Oaxaca</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="3.png" alt="Juan Pérez - Ceramista" className="w-32 h-32 rounded-full object-cover mb-4" />
            <h3 className="text-xl font-semibold">Juan Pérez</h3>
            <p className="text-white">Ceramista, Puebla</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="2.png" alt="Rosa Martínez - Pintora" className="w-32 h-32 rounded-full object-cover mb-4" />
            <h3 className="text-xl font-semibold">Rosa Martínez</h3>
            <p className="text-white">Pintora, Guanajuato</p>
          </div>
        </div> 
      
      </div>
    </div>
  </div>
</main>

      </div>
    );
    }
    
export default Inicio;