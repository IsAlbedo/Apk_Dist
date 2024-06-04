/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client"

import Sidebar from "../components/Sidebar";
import React, { useState, useRef, useEffect } from 'react';
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";

function Inicio() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [foto, setFoto] = useState(null);
  const [email, setEmail] = useState('');
  const [nuevoCliente, setNuevoCliente] = useState(null);
  const nombreRef = useRef(null);
  const apellidoRef = useRef(null);
  const fotoRef = useRef(null);
  const emailRef = useRef(null);

  useEffect(() => {
    if (nuevoCliente) {
      const timer = setTimeout(() => {
        setNuevoCliente(null);
      }, 15000);
      return () => clearTimeout(timer);
    }
  }, [nuevoCliente]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nombre.trim() || !apellido.trim() || !foto || !email.trim()) {
      alert('Por favor, complete todos los campos');
      return;
    }

    const formData = new FormData();
    formData.append('nombre', nombre);
    formData.append('apellido', apellido);
    formData.append('email', email);
    formData.append('foto', foto);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/cliente/`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        setNuevoCliente(data);
        setNombre('');
        setApellido('');
        setFoto(null);
        setEmail('');
        nombreRef.current.value = ''; 
        apellidoRef.current.value = ''; 
        fotoRef.current.value = ''; 
        emailRef.current.value = ''; 
      } else {
        alert('Error al guardar los datos: ' + (data.error || 'Error desconocido'));
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error de red. Por favor, intente de nuevo.');
    }
  };

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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <h1 className="text-3xl font-bold mb-6 text-gray-800">Te Intereso Algo Registrate:</h1>
                
                <div className="bg-[#ffffff3c] p-6 rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold mb-4">Datos del Cliente</h2>

                  <form className="space-y-4" onSubmit={handleSubmit} encType="multipart/form-data">
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre:</label>
                      <input 
                        type="text" 
                        id="nombre" 
                        name="nombre" 
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" 
                        required 
                        onChange={e => setNombre(e.target.value)} 
                        ref={nombreRef}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="apellido" className="block text-sm font-medium text-gray-700">Apellido:</label>
                      <input 
                        type="text" 
                        id="apellido" 
                        name="apellido" 
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" 
                        required 
                        onChange={e => setApellido(e.target.value)} 
                        ref={apellidoRef} 
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                      <input 
                        type="email"   
                        id="email" 
                        name="email" 
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" 
                        required 
                        onChange={e => setEmail(e.target.value)} 
                        ref={emailRef} 
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="foto" className="block text-sm font-medium text-gray-700">Foto:</label>
                      <input 
                        type="file" 
                        id="foto" 
                        name="foto" 
                        className="mt-1 block w-full" 
                        required 
                        onChange={e => setFoto(e.target.files[0])} 
                        ref={fotoRef}
                      />
                    </div>
                    
                    <button type="submit" className="bg-green-500 text-white w-full py-2 rounded-lg font-semibold hover:bg-green-600">
                      Guardar Datos
                    </button>
                  </form>

                  {nuevoCliente && (
                    <div className="mt-6 p-4 bg-green-100 rounded">
                      <h3 className="text-xl font-bold mb-3">Cliente Agregado Correctamente:</h3>
                      <p><strong>Nombre:</strong> {nuevoCliente.nombre} {nuevoCliente.apellido}</p>
                      <p><strong>Email:</strong> {nuevoCliente.email}</p>

                      <h2 className="mt-6 p-4 bg-yellow-300 rounded">Favor De Dictar Los Datos Que Se Mostraron Previamente En Local</h2>
                    </div>
                  )}
                </div>

              </div>
              <div class="lg:col-span-2">
  <h1 class="text-3xl font-bold mb-6 text-gray-800">Time Lapse:</h1>

  <div class="bg-[#ffffff3c] p-6 rounded-lg shadow-md">
    <iframe width="100%" height="349" src="https://www.youtube.com/embed/gAzaeA-ifNE?si=xeb2eeLrFn1c-MYD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
