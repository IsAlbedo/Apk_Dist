/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "react";
import {
  RiMenu3Fill,
  RiUser3Line,
  RiAddLine,
  RiPieChartLine,
  RiCloseLine,
  RiArrowDownSLine,
} from "react-icons/ri";
import { MdAddShoppingCart } from "react-icons/md";
import { RiTruckLine } from "react-icons/ri";
import { RiRefund2Line } from "react-icons/ri";
import { RiSecurePaymentLine } from "react-icons/ri";

function Inicio() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      setIsLoading(true);
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/producto/`);
      const tasks = await res.json();
      setTasks(tasks);
      setIsLoading(false);
    };

    fetchTasks();
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  };


  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader"></div>
  
        <style jsx>{`
          .loader {
            width: 120px;
            height: 20px;
            border-radius: 20px;
            background: repeating-linear-gradient(135deg, #f03355 0 10px, #ffa516 0 20px) 0/0% no-repeat,
              repeating-linear-gradient(135deg, #ddd 0 10px, #eee 0 20px) 0/100%;
            animation: l3 2s infinite;
          }
  
          @keyframes l3 {
            100% {
              background-size: 100%;
            }
          }
        `}</style>
      </div>
    );
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
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6 xl:gap-8">
              <div className="group relative flex h-80 items-end rounded-lg shadow-lg md:col-span-3 md:h-96">
                <img
                  src="5.png"
                  className="absolute inset-0 h-full w-full object-cover object-center rounded-2xl"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-60"></div>
                <div className="relative p-6 text-white">
                  <h2 className="text-4xl font-bold mb-2">Venta De Verano</h2>
                  <p className="text-2xl mb-4">
                    Hasta 70% De Descuento - ¡Por Tiempo Limitado!
                  </p>
                </div>
              </div>

              {tasks.map((task) => (
                <div
                  className="group relative flex h-80 items-end rounded-lg shadow-lg"
                  key={task.id}
                >
                  <img src={task.productoImage} className="absolute inset-0 h-full w-full object-contain object-fit"/>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-70"></div>
                  <div className="relative p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{task.productoName}</h3>
                    <p className="mb-1">{task.productoDescription}</p>
                    <p className="mb-4">${task.productoPrice}</p>
                  
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                ¿Por Qué Comprar Con Nosotros?
              </h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div className="flex flex-col items-center">
                  <RiTruckLine className="text-5xl text-white mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Envio Gratis</h3>
                  <p className="text-gray-600">En Pedidos Superiores a $100</p>
                </div>
                <div className="flex flex-col items-center">
                  <RiRefund2Line className="text-5xl text-white mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    Devoluciones Fáciles
                  </h3>
                  <p className="text-gray-600">
                    Política De Devolución De 30 Días
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <RiSecurePaymentLine className="text-5xl text-white mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Pago Seguro</h3>
                  <p className="text-gray-600">Cifrado SSL</p>
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